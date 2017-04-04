// @flow
import * as _types from "../src";
import fs from "fs";
import path from "path";

const types = {};
const builders = {};
const visitors = {};

Object.keys(_types).filter(key => {
  if (_types[key].validator) {
    return false;
  } else {
    return true;
  }
}).forEach(key => {
  let type = _types[key];

  if (type.type && type.type !== key) {
    throw new Error(`${type.type} must be equal ${key}`);
  }

  let isAbstract = !type.type;

  if (!isAbstract) {
    if (!type.builder) throw new Error(`${key} must have a "builder" field`);
    if (!type.visitor) throw new Error(`${key} must have a "visitor" field`);
  }

  types[key] = {
    key,
    _extends: type.extends || [],
    _fields: type.fields || {},
    builder: type.builder || [],
    visitor: type.visitor || [],
    isAbstract,
  };
});

Object.keys(types).forEach(key => {
  let type = types[key];
  let mergedExtends = [key];
  let mergedFields = {};
  let validatorFields = {};
  let fieldSources = {};

  let walk = t => {
    t._extends.forEach(key => {
      walk(types[key]);
      if (!mergedExtends.includes(key)) {
        mergedExtends.push(key);
      }
    });
  };

  walk(type);

  mergedExtends.forEach(extendKey => {
    let extendType = types[extendKey];
    Object.keys(extendType._fields).map(field => {
      if (mergedFields[field]) {
        throw new Error(`Found duplicate field "${field}" in "${extendType.key}" as "${fieldSources[field]}" while merging "${key}"`)
      }
      fieldSources[field] = extendKey;
      mergedFields[field] = extendType._fields[field];
      if (extendKey !== "Node" && field !== "extra") {
        validatorFields[field] = mergedFields[field];
      }
    });
  });

  type.mergedExtends = mergedExtends;
  type.fieldSources = fieldSources;
  type.mergedFields = mergedFields;
  type.validatorFields = validatorFields;

  type.checkName = `is${type.key}`;
  type.assertName = `assert${type.key}`;
  type.validatorName = `validate${type.key}`;
  type.builderName = type.key[0].toLowerCase() + type.key.slice(1);
});

let printInterfacePropType = (fieldValidator) => {
  let print = validator => {
    let type = typeof validator;
    let kind = validator.validator;

    if (type === "string") {
      return `"${validator}"`;
    } else if (kind === "nodeOf") {
      return validator.nodeOf;
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
    } else if (kind === "nodeOf") {
      let checkName = types[validator.nodeOf].checkName;
      return `${checkName}(${value})`;
    } else if (kind === "typeOf") {
      return `typeof ${value} === "${validator.typeOf}"`;
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

  return `node.${fieldKey} && ${print(fieldValidator)}`;
};

let program = `// @flow

function assert(bool, message) {
  if (!bool) throw new Error(message);
};
`;

Object.keys(types).forEach(typeKey => {
  let type = types[typeKey];

  program += "\n";

  let nodeInterface = "";
  nodeInterface += `export interface ${type.key}`;
  if (type._extends.length) {
    nodeInterface += " extends ";
    nodeInterface += type._extends.join(", ");
  }
  nodeInterface += ` {`;
  let fields = Object.keys(type._fields);
  if (fields.length) {
    nodeInterface += Object.keys(type._fields).map(fieldKey => {
      return `\n  ${fieldKey}: ` + printInterfacePropType(type._fields[fieldKey]);
    }).join(',');
    nodeInterface += "\n";
  }
  nodeInterface += `}`;

  program += `${nodeInterface}\n\n`;

  let validator = "";
  validator += `export function ${type.validatorName}(node) {`;
  validator += `\n  assert(node.type === "${type.key}", "\\"" + node.type + "\\" is not a \\"${type.key}\\" node");`;

  Object.keys(type.validatorFields).forEach(fieldKey => {
    validator += `\n  assert(`;
    validator += printValidatorCheck(type.validatorFields[fieldKey], fieldKey);
    validator += `, "${type.key} node field \\"${fieldKey}\\" is invalid");`
  });

  validator += `\n}`;

  program += `${validator}\n`;

  if (!type.isAbstract) {
    program += "\n";
    let builder = "";
    let builderParams = type.builder.join(", ");
    builder += `export function ${type.builderName}(${builderParams}) {`;
    builder += `\n  let node = {`
    builder += `\n    type: "${type.key}"`;
    if (type.builder.length) {
      builder += ",\n    ";
      builder += type.builder.map(field => `${field}: ${field}`).join(',\n    ');
    }
    builder += `\n  };`;
    builder += `\n  ${type.validatorName}(node);`
    builder += `\n  return node;`
    builder += `\n}`;

    program += `${builder}\n`;
  }
});

let libDir = path.join(__dirname, "..", "lib");
try { fs.mkdirSync(libDir); } catch (e) {}
fs.writeFileSync(path.join(libDir, "index.js"), program);
