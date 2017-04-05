// @flow
import {arrayOf, nodeOf} from "../_define";

export const TupleTypeAnnotation = {
  type: "TupleTypeAnnotation",
  extends: ["TypeAnnotation"],
  fields: {
    types: arrayOf(nodeOf("TypeAnnotation")),
  },
  builder: [],
  visitor: [],
};
