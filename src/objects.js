// @flow
import {aliasOf, oneOf, arrayOf, nodeOf, typeOf} from "./_define";

export const ObjectExpression = {
  type: "ObjectExpression",
  extends: ["Expression"],
  fields: {
    properties: arrayOf(oneOf(nodeOf("ObjectMember"), nodeOf("SpreadElement"))),
  },
  builder: ["properties"],
  visitor: ["properties"],
};

export const ObjectMember = {
  extends: ["Node"],
  fields: {
    key: nodeOf("Expression"),
    computed: typeOf("boolean"),
    decorators: arrayOf(nodeOf("Decorator")),
  },
};

export const ObjectProperty = {
  type: "ObjectProperty",
  extends: ["ObjectMember"],
  fields: {
    shorthand: typeOf("boolean"),
    value: nodeOf("Expression"),
  },
  builder: ["key", "value", "computed", "shorthand", "decorators"],
  visitor: ["key", "value", "decorators"],
};

export const ObjectMethodKind = oneOf(
  "get",
  "set",
  "method",
);

export const ObjectMethod = {
  type: "ObjectMethod",
  extends: ["ObjectMember", "Method"],
  fields: {
    kind: aliasOf("ObjectMethodKind"),
  },
  builder: ["kind", "key", "params", "body", "computed"],
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
};
