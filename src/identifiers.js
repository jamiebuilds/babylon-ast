// @flow
import {typeOf, oneOf, nodeOf} from "./_define";

export const Identifier = {
  type: "Identifier",
  extends: ["Expression", "Pattern"],
  fields: {
    name: typeOf("string"),
    typeAnnotation: oneOf(nodeOf("TypeAnnotation"), typeOf('null')),
  },
  defaults: {
    typeAnnotation: null,
  },
  builder: ["name", "typeAnnotation"],
  visitor: ["typeAnnotation"],
};
