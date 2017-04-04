// @flow
import {arrayOf, nodeOf} from "../_validators";

export const TupleTypeAnnotation = {
  type: "TupleTypeAnnotation",
  extends: ["TypeAnnotation"],
  fields: {
    types: arrayOf(nodeOf("TypeAnnotation")),
  },
  builder: [],
  visitor: [],
};
