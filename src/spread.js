// @flow
import {nodeOf} from "./_define";

export const SpreadElement = {
  type: "SpreadElement",
  extends: ["Node"],
  fields: {
    argument: nodeOf("Expression"),
  },
  builder: ["argument"],
  visitor: ["argument"],
};
