// @flow
import {arrayOf, oneOf, nodeOf, typeOf} from "../_validators";

export const InterfaceDeclaration = {
  type: "InterfaceDeclaration",
  extends: ["TypeDeclaration"],
  fields: {
    id: nodeOf("Identifier"),
    typeParameters: oneOf(nodeOf("TypeParameterDeclaration"), typeOf("null")),
    extends: arrayOf(nodeOf("InterfaceExtends")),
    mixins: arrayOf(nodeOf("InterfaceExtends")),
    body: nodeOf("ObjectTypeAnnotation"),
  },
  builder: [],
  visitor: [],
};

export const InterfaceExtends = {
  type: "InterfaceExtends",
  extends: ["Node"],
  fields: {
    id: nodeOf("Identifier"),
    typeParameters: oneOf(nodeOf("TypeParameterInstantiation"), typeOf("null")),
  },
  builder: [],
  visitor: [],
};
