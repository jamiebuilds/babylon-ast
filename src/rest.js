// @flow
import {nodeOf, oneOf, typeOf} from "./_define";

export const RestElement = {
  type: "RestElement",
  extends: ["Pattern"],
  fields: {
    argument: nodeOf("Pattern"),
    typeAnnotation: oneOf(nodeOf("TypeAnnotation"), typeOf('null')),
  },
  builder: ["argument", "typeAnnotation"],
  visitor: ["argument", "typeAnnotation"],
};
