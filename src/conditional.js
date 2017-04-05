// @flow
import {nodeOf} from "./_define";

export const ConditionalExpression = {
  type: "ConditionalExpression",
  extends: ["Expression"],
  fields: {
    test: nodeOf("Expression"),
    alternate: nodeOf("Expression"),
    consequent: nodeOf("Expression"),
  },
  builder: ["test", "consequent", "alternate"],
  visitor: ["test", "consequent", "alternate"],
};
