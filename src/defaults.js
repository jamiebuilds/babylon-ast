// @flow
import {nodeOf} from "./_define";

export const AssignmentPattern = {
  type: "AssignmentPattern",
  extends: ["Pattern"],
  fields: {
    left: nodeOf("Pattern"),
    right: nodeOf("Expression"),
  },
  builder: ["left", "right"],
  visitor: ["left", "right"],
};
