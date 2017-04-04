// @flow
import {oneOf, nodeOf} from "../_validators";

export const UnaryTypeAnnotation = {
  extends: ["TypeAnnotation"],
};

export const NullableTypeAnnotation = {
  type: "NullableTypeAnnotation",
  extends: ["UnaryTypeAnnotation"],
  fields: {
    argument: nodeOf("TypeAnnotation"),
  },
  builder: [],
  visitor: [],
};

export const ArrayTypeAnnotation = {
  type: "ArrayTypeAnnotation",
  extends: ["UnaryTypeAnnotation"],
  fields: {
    argument: nodeOf("TypeAnnotation"),
  },
  builder: [],
  visitor: [],
};

export const TypeofTypeAnnotation = {
  type: "TypeofTypeAnnotation",
  extends: ["UnaryTypeAnnotation"],
  fields: {
    argument: oneOf(nodeOf("Identifier"), nodeOf("QualifiedTypeIdentifier"), nodeOf("TypeAnnotation")),
  },
  builder: [],
  visitor: [],
};
