// @flow
import {arrayOf, oneOf, nodeOf, typeOf} from "../_validators";
import {ObjectMethodKind} from "../objects";

export const ObjectTypeAnnotation = {
  type: "ObjectTypeAnnotation",
  extends: ["TypeAnnotation"],
  fields: {
    properties: arrayOf(nodeOf("ObjectTypeMember")),
    indexers: arrayOf(nodeOf("ObjectTypeIndexer")),
    exact: typeOf("boolean"),
  },
  builder: [],
  visitor: [],
};

export const ObjectTypeMember = {
  extends: ["Node"],
  fields: {
    key: nodeOf("Identifier"),
  },
  builder: [],
  visitor: [],
};

export const ObjectTypeProperty = {
  type: "ObjectTypeProperty",
  extends: ["ObjectTypeMember"],
  fields: {
    value: nodeOf("TypeAnnotation"),
    isStatic: typeOf("boolean"),
    optional: typeOf("boolean"),
    variance: oneOf(nodeOf("Variance"), typeOf("null")),
  },
  builder: [],
  visitor: [],
};

export const ObjectTypeMethod = {
  type: "ObjectTypeMethod",
  extends: ["ObjectTypeMember"],
  fields: {
    kind: ObjectMethodKind,
    params: arrayOf(nodeOf("FunctionTypeParam")),
    rest: oneOf(nodeOf("FunctionTypeParam"), typeOf("null")),
    returnType: nodeOf("TypeAnnotation"),
  },
  builder: [],
  visitor: [],
};

export const ObjectTypeIndexer = {
  type: "ObjectTypeIndexer",
  extends: ["Node"],
  fields: {
    id: oneOf(nodeOf("Identifier"), typeOf("null")),
    key: nodeOf("TypeAnnotation"),
    value: nodeOf("TypeAnnotation"),
    variance: oneOf(nodeOf("Variance"), typeOf("null")),
  },
  builder: [],
  visitor: [],
};
