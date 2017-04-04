// @flow
import {nodeOf} from "./_validators";

export const RestElement = {
  type: "RestElement",
  extends: ["Pattern"],
  fields: {
    argument: nodeOf("Pattern"),
  },
  builder: [],
  visitor: [],
};
