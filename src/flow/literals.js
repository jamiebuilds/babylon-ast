// @flow
import {objectOf, arrayOf, oneOf, nodeOf, typeOf} from "../_validators";

export const LiteralTypeAnnotation = {
  extends: ["TypeAnnotation"],
};

export const NullLiteralTypeAnnotation = {
  type: "NullLiteralTypeAnnotation",
  extends: ["LiteralTypeAnnotation"],
  builder: [],
  visitor: [],
};

export const VoidLiteralTypeAnnotation = {
  type: "VoidLiteralTypeAnnotation",
  extends: ["LiteralTypeAnnotation"],
  builder: [],
  visitor: [],
};

export const BooleanLiteralTypeAnnotation = {
  type: "BooleanLiteralTypeAnnotation",
  extends: ["LiteralTypeAnnotation"],
  fields: {
    value: typeOf("boolean"),
  },
  builder: [],
  visitor: [],
};

export const StringLiteralTypeAnnotation = {
  type: "StringLiteralTypeAnnotation",
  extends: ["LiteralTypeAnnotation"],
  fields: {
    value: typeOf("string"),
    extra: objectOf({
      rawValue: typeOf("string"),
      raw: typeOf("string"),
    }),
  },
  builder: [],
  visitor: [],
};

export const NumericLiteralTypeAnnotation = {
  type: "NumericLiteralTypeAnnotation",
  extends: ["LiteralTypeAnnotation"],
  fields: {
    value: typeOf("string"),
    extra: objectOf({
      rawValue: typeOf("number"),
      raw: typeOf("string"),
    }),
  },
  builder: [],
  visitor: [],
};
