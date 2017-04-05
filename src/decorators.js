// @flow
import {nodeOf} from "./_define";

export const Decorator = {
  type: "Decorator",
  extends: ["Node"],
  fields: {
    expression: nodeOf("Expression"),
  },
  builder: ["expression"],
  visitor: ["expression"],
};
