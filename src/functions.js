// @flow
import {oneOf, nodeOf, typeOf} from "./_validators";

export const FunctionDeclaration = {
  type: "FunctionDeclaration",
  extends: ["Method", "Declaration"],
  builder: [],
  visitor: [],
};

export const FunctionExpression = {
  type: "FunctionExpression",
  extends: ["Method", "Expression"],
  builder: [],
  visitor: [],
};

export const ArrowFunctionExpression = {
  type: "ArrowFunctionExpression",
  extends: ["Method", "Expression"],
  fields: {
    expression: typeOf("boolean"),
  },
  builder: [],
  visitor: [],
};

export const YieldExpression = {
  type: "YieldExpression",
  extends: ["Expression"],
  fields: {
    argument: oneOf(nodeOf("Expression"), typeOf("null")),
    delegate: typeOf("boolean"),
  },
  builder: [],
  visitor: [],
};

export const AwaitExpression = {
  type: "AwaitExpression",
  extends: ["Expression"],
  fields: {
    argument: oneOf(nodeOf("Expression"), typeOf("null")),
  },
  builder: [],
  visitor: [],
};
