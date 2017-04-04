// @flow
import {nodeOf} from "./_validators";

export const ConditionalExpression = {
  type: "ConditionalExpression",
  extends: ["Expression"],
  fields: {
    test: nodeOf("Expression"),
    alternate: nodeOf("Expression"),
    consequent: nodeOf("Expression"),
  },
  builder: [],
  visitor: [],
};
