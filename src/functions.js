// @flow
import {oneOf, nodeOf, typeOf} from "./_define";

export const FunctionDeclaration = {
  type: "FunctionDeclaration",
  extends: ["Method", "Declaration"],
  builder: ["id", "params", "body", "generator", "async"],
  visitor: ["id", "params", "body", "returnType", "typeParameters"],
};

export const FunctionExpression = {
  type: "FunctionExpression",
  extends: ["Method", "Expression"],
  builder: ["id", "params", "body", "generator", "async"],
  visitor: ["id", "params", "body", "returnType", "typeParameters"],
};

export const ArrowFunctionExpression = {
  type: "ArrowFunctionExpression",
  extends: ["Method", "Expression"],
  fields: {
    expression: typeOf("boolean"),
  },
  builder: ["params", "body", "async"],
  visitor: ["params", "body", "returnType", "typeParameters"],
};

export const YieldExpression = {
  type: "YieldExpression",
  extends: ["Expression"],
  fields: {
    argument: oneOf(nodeOf("Expression"), typeOf("null")),
    delegate: typeOf("boolean"),
  },
  builder: ["argument", "delegate"],
  visitor: ["argument"],
};

export const AwaitExpression = {
  type: "AwaitExpression",
  extends: ["Expression"],
  fields: {
    argument: oneOf(nodeOf("Expression"), typeOf("null")),
  },
  builder: ["argument"],
  visitor: ["argument"],
};
