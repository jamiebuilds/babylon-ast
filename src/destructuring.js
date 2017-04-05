// @flow
import {oneOf, arrayOf, nodeOf, typeOf} from "./_define";

export const ArrayPattern = {
  type: "ArrayPattern",
  extends: ["Pattern"],
  fields: {
    elements: arrayOf(oneOf(nodeOf("Pattern"), typeOf("null"))),
    typeAnnotation: oneOf(nodeOf("TypeAnnotation"), typeOf('null')),
  },
  builder: ["elements", "typeAnnotation"],
  visitor: ["elements", "typeAnnotation"],
};

export const AssignmentProperty = {
  type: "AssignmentProperty",
  extends: ["ObjectProperty"],
  fields: {
    // value: nodeOf("Pattern"), <<<<<<<<<<<<<< wat
  },
  builder: [], // <<<<<<<<
  visitor: [], // <<<<<<<<
};

export const ObjectPattern = {
  type: "ObjectPattern",
  extends: ["Pattern"],
  fields: {
    properties: arrayOf(oneOf(nodeOf("AssignmentProperty"), nodeOf("RestElement"))),
    typeAnnotation: oneOf(nodeOf("TypeAnnotation"), typeOf('null')),
  },
  builder: ["properties", "typeAnnotation"],
  visitor: ["properties", "typeAnnotation"],
};
