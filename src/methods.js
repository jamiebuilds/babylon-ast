// @flow
import {oneOf, arrayOf, nodeOf, typeOf} from "./_define";

export const Method = {
  extends: ["Node"],
  fields: {
    id: oneOf(nodeOf("Identifier"), typeOf("null")),
    params: arrayOf(nodeOf("Pattern")),
    body: oneOf(nodeOf("BlockStatement"), nodeOf("Expression")),
    generator: typeOf("boolean"),
    async: typeOf("boolean"),
    returnType: oneOf(nodeOf("TypeAnnotation"), typeOf('null')),
    typeParameters: oneOf(nodeOf("TypeParameterDeclaration"), typeOf("null")),
  },
};
