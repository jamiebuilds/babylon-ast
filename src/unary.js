// @flow
import {aliasOf, oneOf, nodeOf, typeOf} from "./_define";

export const UnaryOperator = oneOf(
  "-",
  "+",
  "!",
  "~",
  "typeof",
  "void",
  "delete",
);

export const UnaryExpression = {
  type: "UnaryExpression",
  extends: ["Expression"],
  fields: {
    operator: aliasOf("UnaryOperator"),
    argument: nodeOf("Expression"),
    prefix: typeOf("boolean"),
  },
  builder: ["operator", "argument", "prefix"],
  visitor: ["argument"],
};

export const UpdateOperator = oneOf(
  "++",
  "--",
);

export const UpdateExpression = {
  type: "UpdateExpression",
  extends: ["Expression"],
  fields: {
    operator: aliasOf("UpdateOperator"),
    argument: oneOf(nodeOf("Pattern"), nodeOf("CallExpression"), nodeOf("NewExpression")),
    prefix: typeOf("boolean"),
  },
  builder: ["operator", "argument", "prefix"],
  visitor: ["argument"],
};
