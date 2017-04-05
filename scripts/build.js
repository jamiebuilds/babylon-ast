// @flow
import * as exported from "../src";
import fs from "fs";
import path from "path";

const definitions = {};
const builders = {};
const visitors = {};

Object.keys(exported).forEach(key => {
  let definition = exported[key];

  if (definition.validator) {
    definitions[key] = {
      key,
      validator: definition,
      isAbstract: true,
      isValidator: true
    };
  } else {
    let isAbstract = definition.type ? false : true;

    if (definition.type && definition.type !== key) {
      throw new Error(`${definition.type} must be equal ${key}`);
    }

    if (!isAbstract) {
      if (!definition.builder) throw new Error(`${key} must have a "builder" field`);
      if (!definition.visitor) throw new Error(`${key} must have a "visitor" field`);
    }

    definitions[key] = {
      key,
      _extends: definition.extends || [],
      _fields: definition.fields || {},
      defaults: definition.defaults || {},
      builder: definition.builder || [],
      visitor: definition.visitor || [],
      isAbstract,
      isValidator: false
    };
  }
});

const DEFINITION_KEYS = Object.keys(definitions);
const TYPE_DEFINITION_KEYS = DEFINITION_KEYS.filter(t => !definitions[t].isValidator);

TYPE_DEFINITION_KEYS.forEach(key => {
  let definition = definitions[key];
  let mergedExtends = [key];
  let mergedFields = {};
  let validatorFields = {};
  let fieldSources = {};

  let walk = t => {
    t._extends.forEach(key => {
      walk(definitions[key]);
      if (!mergedExtends.includes(key)) {
        mergedExtends.push(key);
      }
    });
  };

  walk(definition);

  mergedExtends.forEach(extendKey => {
    let extendDefinition = definitions[extendKey];
    Object.keys(extendDefinition._fields).map(field => {
      if (mergedFields[field]) {
        throw new Error(`Found duplicate field "${field}" in "${extendDefinition.key}" as "${fieldSources[field]}" while merging "${key}"`)
      }
      fieldSources[field] = extendKey;
      mergedFields[field] = extendDefinition._fields[field];
      if (field !== "extra") {
        validatorFields[field] = mergedFields[field];
      }
    });
  });

  definition.mergedExtends = mergedExtends;
  definition.fieldSources = fieldSources;
  definition.mergedFields = mergedFields;
  definition.validatorFields = validatorFields;

  if (definition.builder) {
    definition.builder.forEach(field => {
      if (!definition.mergedFields[field]) throw new Error(`Missing field "${field}" that exists in builder for ${definition.key}.`);
    });
  }

  if (definition.visitor) {
    definition.visitor.forEach(field => {
      if (!definition.mergedFields[field]) throw new Error(`Missing field "${field}" that exists in visitor for ${definition.key}.`);
    });
  }

});

DEFINITION_KEYS.forEach(key => {
  let definition = definitions[key];
  definition.checkName = `is${definition.key}`;
  definition.assertName = `assert${definition.key}`;
  definition.validatorName = `validate${definition.key}`;
  definition.builderName = definition.key[0].toLowerCase() + definition.key.slice(1);
});


TYPE_DEFINITION_KEYS.forEach(key => {
  let validTypes = [];

  TYPE_DEFINITION_KEYS.forEach(childKey => {
    let mergedExtends = definitions[childKey].mergedExtends;

    if (mergedExtends.includes(key)) {
      validTypes.push(childKey);
    }
  });

  definitions[key].validTypes = validTypes;
});

let printInterfacePropType = (fieldValidator) => {
  let print = validator => {
    let type = typeof validator;
    let kind = validator.validator;

    if (type === "string") {
      return `"${validator}"`;
    } else if (kind === "nodeOf") {
      return validator.nodeOf;
    } else if (kind === "aliasOf") {
      return validator.aliasOf;
    } else if (kind === "typeOf") {
      return validator.typeOf;
    } else if (kind === "oneOf") {
      return `${validator.oneOf.map(print).join(" | ")}`;
    } else if (kind === "arrayOf") {
      return `Array<${print(validator.arrayOf)}>`;
    } else if (kind === "objectOf") {
      let obj = validator.objectOf;
      return (
        "{" +
        Object.keys(obj).map(key => {
          return `${key}: ` + printInterfacePropType(obj[key]);
        }).join(", ") +
        "}"
      );
    } else {
      console.log(validator);
      throw new Error("Unknown validator: " + kind);
    }
  };

  return print(fieldValidator);
};

let printValidatorCheck = (fieldValidator, fieldKey) => {
  let value = `node.${fieldKey}`;

  let print = validator => {
    let type = typeof validator;
    let kind = validator.validator;

    if (type === "string") {
      return `${value} === "${validator}"`;
    } else if (kind === "nodeOf" || kind === "aliasOf") {
      let checkName = definitions[validator.nodeOf || validator.aliasOf].checkName;
      return `t.${checkName}(${value})`;
    } else if (kind === "typeOf") {
      if (validator.typeOf === "null") {
        return `${value} === null`;
      } else {
        return `typeof ${value} === "${validator.typeOf}"`;
      }
    } else if (kind === "oneOf") {
      return `(${validator.oneOf.map(print).join(" || ")})`;
    } else if (kind === "arrayOf") {
      return `(Array.isArray(${value}) && ${print(validator.arrayOf)})`;
    } else if (kind === "objectOf") {
      let obj = validator.objectOf;
      return (
        "(" +
        Object.keys(obj).map(key => {
          return "(" + printValidatorCheck(obj[key], `${fieldKey}.${key}`) + ")";
        }).join(" && ") +
        ")"
      );
    } else {
      console.log(validator);
      throw new Error("Unknown validator: " + kind);
    }
  };

  return `node.${fieldKey} !== undefined && ${print(fieldValidator)}`;
};

let program = `/**
 * Auto-generated script in babylon-types, do not modify manually.
 * @flow
 */

const t = {};

function assert(bool, message) {
  if (!bool) throw new Error(message);
};

type NodeLike = {
  type: string,
  [field: string]: any
};
`;

DEFINITION_KEYS.forEach(key => {
  let definition = definitions[key];

  program += "\n";

  let typeDefinition = "";
  if (!definition.isValidator) {
    typeDefinition += `export interface ${definition.key}`;
    if (definition._extends.length) {
      typeDefinition += " extends ";
      typeDefinition += definition._extends.join(", ");
    }
    typeDefinition += ` {`;
    let fields = Object.keys(definition._fields);
    if (fields.length) {
      typeDefinition += Object.keys(definition._fields).map(fieldKey => {
        let res = `\n  ${fieldKey}`
        if (definition.key === 'Node' || fieldKey === 'extra') res += '?';
        res += ': ' + printInterfacePropType(definition._fields[fieldKey]);
        return res;
      }).join(',');
      typeDefinition += "\n";
    }
    typeDefinition += `}`;
  } else {
    typeDefinition += `export type ${definition.key} = `;
    typeDefinition += printInterfacePropType(definition.validator);
    typeDefinition += ";";
  }

  program += `${typeDefinition}\n`;

  if (!definition.isValidator) {
    let check = "";
    let checkConstant = `Valid${definition.key}NodeTypes`;

    check += `\nconst ${checkConstant} = [`
    check += definition.validTypes.map(t => `"${t}"`).join(', ');
    check += '];';
    check += `\n`;
    check += `\nt.${definition.checkName} = (node: NodeLike): boolean => {`;
    check += `\n  return ${checkConstant}.includes(node.type);`;
    check += '\n};';

    program += `${check}\n`;
  }

  if (!definition.isValidator) {
    let validator = "";
    validator += `\nt.${definition.validatorName} = (node: NodeLike) => {`;
    validator += `\n  assert(node.type === "${definition.key}", "\\"" + node.type + "\\" is not a \\"${definition.key}\\" node");`;

    Object.keys(definition.validatorFields).forEach(fieldKey => {
      if (definition.fieldSources[fieldKey] === "Node") return;
      validator += `\n  assert(`;
      validator += printValidatorCheck(definition.validatorFields[fieldKey], fieldKey);
      validator += `, "${definition.key} node field \\"${fieldKey}\\" is invalid");`
    });

    validator += `\n};`;

    program += `${validator}\n`;
  }

  if (!definition.isValidator && !definition.isAbstract) {
    let builder = "";
    let builderParams = definition.builder.map(field => {
      let res = `_${field}: ${printInterfacePropType(definition.mergedFields[field])}`;
      if (definition.defaults[field] !== undefined) {
        res += ' = ';
        res += JSON.stringify(definition.defaults[field]);
      }
      return res;
    }).join(', ');
    builder += `\nt.${definition.builderName} = t.${definition.key} = (${builderParams}) => {`;
    builder += `\n  let node = {`
    builder += `\n    type: "${definition.key}"`;

    let fields = Object.keys(definition.mergedFields);

    if (fields.length) {
      fields.forEach((fieldKey, index) => {
        if (definition.fieldSources[fieldKey] === "Node") return;
        let hasDefault = definition.defaults[fieldKey] !== undefined;
        let inBuilder = definition.builder.includes(fieldKey);
        if (!hasDefault && !inBuilder) return;
        builder += ",\n    ";
        builder += `${fieldKey}: `;
        if (inBuilder) builder += `_${fieldKey}`;
        if (!inBuilder && hasDefault) builder += JSON.stringify(definition.defaults[fieldKey]);
      });
    }
    builder += `\n  };`;
    builder += `\n  t.${definition.validatorName}(node);`
    builder += `\n  return node;`
    builder += `\n};`;

    program += `${builder}\n`;
  }
});

program += '\nexport default t;\n';

let libDir = path.join(__dirname, "..", "lib");
try { fs.mkdirSync(libDir); } catch (e) {}
fs.writeFileSync(path.join(libDir, "index.js"), program);
