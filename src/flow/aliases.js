// @flow
import {oneOf, nodeOf, typeOf} from "../_validators";

export const TypeAliasDeclaration = {
  type: "TypeAliasDeclaration",
  extends: ["TypeDeclaration"],
  fields: {
    id: nodeOf("Identifier"),
    typeParameters: oneOf(nodeOf("TypeParameterDeclaration"), typeOf("null")),
    right: nodeOf("TypeAnnotation"),
  },
  builder: [],
  visitor: [],
};

