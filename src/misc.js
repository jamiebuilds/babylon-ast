// @flow
import {arrayOf, nodeOf} from "./_define";

export const ExpressionStatement = {
  type: "ExpressionStatement",
  extends: ["Statement"],
  fields: {
    expression: nodeOf("Expression"),
  },
  builder: ["expression"],
  visitor: ["expression"],
};

export const SequenceExpression = {
  type: "SequenceExpression",
  extends: ["Expression"],
  fields: {
    expressions: arrayOf(nodeOf("Expression")),
  },
  builder: ["expressions"],
  visitor: ["expressions"],
};

export const EmptyStatement = {
  type: "EmptyStatement",
  extends: ["Statement"],
  builder: [],
  visitor: [],
};
