// @flow
import {arrayOf, nodeOf} from "../_define";

export const IntersectionTypeAnnotation = {
  type: "IntersectionTypeAnnotation",
  extends: ["TypeAnnotation"],
  fields: {
    types: arrayOf(nodeOf("TypeAnnotation")),
  },
  builder: [],
  visitor: [],
};
