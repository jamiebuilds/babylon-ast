// @flow
import {arrayOf, nodeOf} from "../_define";

export const UnionTypeAnnotation = {
  type: "UnionTypeAnnotation",
  extends: ["TypeAnnotation"],
  fields: {
    types: arrayOf(nodeOf("TypeAnnotation")),
  },
  builder: [],
  visitor: [],
};
