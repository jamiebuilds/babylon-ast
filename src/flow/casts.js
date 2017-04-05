// @flow
import {objectOf, nodeOf, typeOf} from "../_define";

export const TypeCastExpression = {
  type: "TypeCastExpression",
  extends: ["TypeExpression"],
  fields: {
    expression: nodeOf("Expression"),
    typeAnnotation: nodeOf("TypeAnnotation"),
    extra: objectOf({
      parenthesized: typeOf("boolean"),
      parenStart: typeOf("number"),
    }),
  },
  builder: ["expression", "typeAnnotation"],
  visitor: ["expression", "typeAnnotation"],
};
