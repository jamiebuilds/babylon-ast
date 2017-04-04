// @flow
import {arrayOf, nodeOf} from "../_validators";

export const IntersectionTypeAnnotation = {
  type: "IntersectionTypeAnnotation",
  extends: ["TypeAnnotation"],
  fields: {
    types: arrayOf(nodeOf("TypeAnnotation")),
  },
  builder: [],
  visitor: [],
};
