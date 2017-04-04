// @flow
export const PrimitiveTypeAnnotation = {
  extends: ["TypeAnnotation"]
};

export const AnyTypeAnnotation = {
  type: "AnyTypeAnnotation",
  extends: ["PrimitiveTypeAnnotation"],
  builder: [],
  visitor: [],
};

export const MixedTypeAnnotation = {
  type: "MixedTypeAnnotation",
  extends: ["PrimitiveTypeAnnotation"],
  builder: [],
  visitor: [],
};

export const EmptyTypeAnnotation = {
  type: "EmptyTypeAnnotation",
  extends: ["PrimitiveTypeAnnotation"],
  builder: [],
  visitor: [],
};

export const BooleanTypeAnnotation = {
  type: "BooleanTypeAnnotation",
  extends: ["PrimitiveTypeAnnotation"],
  builder: [],
  visitor: [],
};

export const StringTypeAnnotation = {
  type: "StringTypeAnnotation",
  extends: ["PrimitiveTypeAnnotation"],
  builder: [],
  visitor: [],
};

export const NumberTypeAnnotation = {
  type: "NumberTypeAnnotation",
  extends: ["PrimitiveTypeAnnotation"],
  builder: [],
  visitor: [],
};
