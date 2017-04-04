// @flow
import {arrayOf, oneOf, nodeOf, typeOf} from "../_validators";

export const DeclareVariable = {
  type: "DeclareVariable",
  extends: ["TypeDeclaration"],
  fields: {
    id: nodeOf("Identifier"),
    typeAnnotation: nodeOf("TypeAnnotation"),
  },
  builder: [],
  visitor: [],
};

export const DeclareFunction = {
  type: "DeclareFunction",
  extends: ["TypeDeclaration"],
  fields: {
    id: nodeOf("Identifier"),
    typeParameters: oneOf(nodeOf("TypeParameterDeclaration"), typeOf("null")),
    params: arrayOf(nodeOf("FunctionTypeParam")),
    rest: oneOf(nodeOf("FunctionTypeParam"), typeOf("null")),
    returnType: nodeOf("TypeAnnotation"),
  },
  builder: [],
  visitor: [],
};

export const DeclareClass = {
  type: "DeclareClass",
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

export const DeclareInterface = {
  type: "DeclareInterface",
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

export const DeclareTypeAlias = {
  type: "DeclareTypeAlias",
  extends: ["TypeDeclaration"],
  fields: {
    id: nodeOf("Identifier"),
    typeParameters: oneOf(nodeOf("TypeParameterDeclaration"), typeOf("null")),
    right: nodeOf("TypeAnnotation"),
  },
  builder: [],
  visitor: [],
};

export const DeclareModule = {
  type: "DeclareModule",
  extends: ["TypeDeclaration"],
  fields: {
    name: oneOf(nodeOf("StringLiteral"), nodeOf("Identifier")),
    body: nodeOf("BlockStatement"),
  },
  builder: [],
  visitor: [],
};

export const DeclareExportValue = oneOf(
  nodeOf("DeclareVariable"),
  nodeOf("DeclareFunction"),
  nodeOf("DeclareClass"),
  nodeOf("DeclareInterface"),
  nodeOf("DeclareTypeAlias"),
  nodeOf("TypeAnnotation"),
);

export const DeclareExport = {
  type: "DeclareExport",
  extends: ["TypeDeclaration"],
  fields: {
    declaration: DeclareExportValue,
    default: typeOf("boolean"),
    specifiers: arrayOf(nodeOf("ExportSpecifier")),
    source: oneOf(nodeOf("StringLiteral"), typeOf("null")),
  },
  builder: [],
  visitor: [],
};

export const DeclareModuleExports = {
  type: "DeclareModuleExports",
  extends: ["TypeDeclaration"],
  fields: {
    typeAnnotation: nodeOf("TypeAnnotation"),
  },
  builder: [],
  visitor: [],
};
