// @flow
import {oneOf, nodeOf, typeOf} from "./_validators";

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
    operator: UnaryOperator,
    argument: nodeOf("Expression"),
    prefix: typeOf("boolean"),
  },
  builder: [],
  visitor: [],
};

export const UpdateOperator = oneOf(
  "++",
  "--",
);

export const UpdateExpression = {
  type: "UpdateExpression",
  extends: ["Expression"],
  fields: {
    operator: UpdateOperator,
    argument: oneOf(nodeOf("Pattern"), nodeOf("CallExpression"), nodeOf("NewExpression")),
    prefix: typeOf("boolean"),
  },
  builder: [],
  visitor: [],
};
