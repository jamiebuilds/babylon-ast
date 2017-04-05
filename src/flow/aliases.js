// @flow
import {oneOf, nodeOf, typeOf} from "../_define";

export const TypeAliasDeclaration = {
  type: "TypeAliasDeclaration",
  extends: ["TypeDeclaration"],
  fields: {
    id: nodeOf("Identifier"),
    typeParameters: oneOf(nodeOf("TypeParameterDeclaration"), typeOf("null")),
    right: nodeOf("TypeAnnotation"),
  },
  builder: ["id", "typeParameters", "right"],
  visitor: ["id", "typeParameters", "right"],
};

