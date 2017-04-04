// @flow
import {typeOf, objectOf} from "./_validators";

export const Literal = {
  extends: ["Expression"]
};

export const RegExpLiteral = {
  type: "RegExpLiteral",
  extends: ["Literal"],
  fields: {
    pattern: typeOf("string"),
    flags: typeOf("string"),
  },
  builder: [],
  visitor: [],
};

export const NullLiteral = {
  type: "NullLiteral",
  extends: ["Literal"],
  builder: [],
  visitor: [],
};

export const StringLiteral = {
  type: "StringLiteral",
  extends: ["Literal"],
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

export const BooleanLiteral = {
  type: "BooleanLiteral",
  extends: ["Literal"],
  fields: {
    value: typeOf("boolean"),
  },
  builder: [],
  visitor: [],
};

export const NumericLiteral = {
  type: "NumericLiteral",
  extends: ["Literal"],
  fields: {
    value: typeOf("number"),
    extra: objectOf({
      rawValue: typeOf("number"),
      raw: typeOf("string"),
    }),
  },
  builder: [],
  visitor: [],
};
