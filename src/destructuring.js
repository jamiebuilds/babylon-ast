// @flow
import {oneOf, arrayOf, nodeOf, typeOf} from "./_validators";

export const ArrayPattern = {
  type: "ArrayPattern",
  extends: ["Pattern"],
  fields: {
    elements: arrayOf(oneOf(nodeOf("Pattern"), typeOf("null"))),
  },
  builder: [],
  visitor: [],
};

export const AssignmentProperty = {
  type: "AssignmentProperty",
  extends: ["ObjectProperty"],
  fields: {
    // value: nodeOf("Pattern"), <<<<<<<<<<<<<< wat
  },
  builder: [],
  visitor: [],
};

export const ObjectPattern = {
  type: "ObjectPattern",
  extends: ["Pattern"],
  fields: {
    properties: arrayOf(oneOf(nodeOf("AssignmentProperty"), nodeOf("RestElement"))),
  },
  builder: [],
  visitor: [],
};
