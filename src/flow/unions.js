// @flow
import {arrayOf, nodeOf} from "../_validators";

export const UnionTypeAnnotation = {
  type: "UnionTypeAnnotation",
  extends: ["TypeAnnotation"],
  fields: {
    types: arrayOf(nodeOf("TypeAnnotation")),
  },
  builder: [],
  visitor: [],
};
