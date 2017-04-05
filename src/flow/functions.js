// @flow
import {arrayOf, oneOf, nodeOf, typeOf} from "../_define";

export const FunctionTypeAnnotation = {
  type: "FunctionTypeAnnotation",
  extends: ["TypeAnnotation"],
  fields: {
    typeParameters: nodeOf("TypeParameterDeclaration"),
    params: arrayOf(nodeOf("FunctionTypeParam")),
    rest: oneOf(nodeOf("FunctionTypeParam"), typeOf("null")),
    returnType: nodeOf("TypeAnnotation"),
  },
  builder: [],
  visitor: [],
};

export const FunctionTypeParam = {
  type: "FunctionTypeParam",
  extends: ["Node"],
  fields: {
    id: nodeOf("Identifier"),
    typeAnnotation: nodeOf("TypeAnnotation"),
    optional: typeOf("boolean"),
  },
  builder: [],
  visitor: [],
};
