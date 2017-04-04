// @flow
import {nodeOf} from "./_validators";

export const Decorator = {
  type: "Decorator",
  extends: ["Node"],
  fields: {
    expression: nodeOf("Expression"),
  },
  builder: [],
  visitor: [],
};
