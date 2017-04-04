// @flow
import {nodeOf} from "./_validators";

export const SpreadElement = {
  type: "SpreadElement",
  extends: ["Node"],
  fields: {
    argument: nodeOf("Expression"),
  },
  builder: [],
  visitor: [],
};
