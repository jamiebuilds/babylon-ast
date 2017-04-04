// @flow
import {arrayOf, nodeOf, typeOf} from "../_validators";

export const GenericTypeAnnotation = {
  type: "GenericTypeAnnotation",
  extends: ["TypeAnnotation"],
  fields: {
    id: nodeOf("Identifier"),
    typeParameters: nodeOf("TypeParameterInstantiation"),
  },
  builder: [],
  visitor: [],
};

export const TypeParameterInstantiation = {
  type: "TypeParameterInstantiation",
  extends: ["Node"],
  fields: {
    params: arrayOf(nodeOf("TypeAnnotation")),
  },
  builder: [],
  visitor: [],
};

export const TypeParameterDeclaration = {
  type: "TypeParameterDeclaration",
  extends: ["Node"],
  fields: {
    params: arrayOf(nodeOf("TypeParameter")),
  },
  builder: [],
  visitor: [],
};

export const TypeParameter = {
  type: "TypeParameter",
  extends: ["Node"],
  fields: {
    name: typeOf("string"),
    bound: nodeOf("TypeAnnotation"),
    variance: nodeOf("Variance"),
    default: nodeOf("TypeAnnotation"),
  },
  builder: [],
  visitor: [],
};
