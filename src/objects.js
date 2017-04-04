// @flow
import {oneOf, arrayOf, nodeOf, typeOf} from "./_validators";

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
  builder: [],
  visitor: [],
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
    kind: ObjectMethodKind,
  },
  builder: [],
  visitor: [],
};

export const ObjectExpression = {
  type: "ObjectExpression",
  extends: ["Expression"],
  fields: {
    properties: arrayOf(oneOf(nodeOf("ObjectMember"), nodeOf("SpreadElement"))),
  },
  builder: [],
  visitor: [],
};
