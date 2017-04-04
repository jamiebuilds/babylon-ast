// @flow
import {objectOf, nodeOf, typeOf} from "../_validators";

export const TypeCastExpression = {
  type: "TypeCastExpression",
  extends: ["TypeExpression"],
  fields: {
    expression: nodeOf("Expression"),
    typeAnnotation: nodeOf("TypeAnnotation"),
    extra: objectOf({
      parenthesized: typeOf("true"),
      parenStart: typeOf("number"),
    }),
  },
  builder: [],
  visitor: [],
};
