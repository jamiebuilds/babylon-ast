// @flow
import {oneOf, nodeOf, typeOf} from "../_define";

export const ClassImplements = {
  type: "ClassImplements",
  extends: ["TypeAnnotation"],
  fields: {
    id: nodeOf("Identifier"),
    typeParameters: oneOf(nodeOf("TypeParameterInstantiation"), typeOf("null")),
  },
  builder: ["id", "typeParameters"],
  visitor: ["id", "typeParameters"],
};
