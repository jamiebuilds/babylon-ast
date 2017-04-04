// @flow
import {nodeOf} from "./_validators";

export const AssignmentPattern = {
  type: "AssignmentPattern",
  extends: ["Pattern"],
  fields: {
    left: nodeOf("Pattern"),
    right: nodeOf("Expression"),
  },
  builder: [],
  visitor: [],
};
