// @flow
import {arrayOf, nodeOf} from "./_validators";

export const ExpressionStatement = {
  type: "ExpressionStatement",
  extends: ["Statement"],
  fields: {
    expression: nodeOf("Expression"),
  },
  builder: [],
  visitor: [],
};

export const SequenceExpression = {
  type: "SequenceExpression",
  extends: ["Expression"],
  fields: {
    expressions: arrayOf(nodeOf("Expression")),
  },
  builder: [],
  visitor: [],
};

export const EmptyStatement = {
  type: "EmptyStatement",
  extends: ["Statement"],
  builder: [],
  visitor: [],
};
