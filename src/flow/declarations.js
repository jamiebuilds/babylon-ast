// @flow
import {aliasOf, arrayOf, oneOf, nodeOf, typeOf} from "../_define";

export const DeclareVariable = {
  type: "DeclareVariable",
  extends: ["TypeDeclaration"],
  fields: {
    id: nodeOf("Identifier"),
    typeAnnotation: nodeOf("TypeAnnotation"),
  },
  builder: ["id", "typeAnnotation"],
  visitor: ["id", "typeAnnotation"],
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
  builder: ["id", "typeParameters", "params", "rest", "returnType"],
  visitor: ["id", "typeParameters", "params", "rest", "returnType"],
};

export const DeclareClass = {
  type: "DeclareClass",
  extends: ["TypeDeclaration"],
  fields: {
    id: nodeOf("Identifier"),
    typeParameters: oneOf(nodeOf("TypeParameterDeclaration"), typeOf("null")),
    extends: arrayOf(nodeOf("InterfaceExtends")),
    // mixins: arrayOf(nodeOf("InterfaceExtends")),
    body: nodeOf("ObjectTypeAnnotation"),
  },
  builder: ["id", "typeParameters", "extends", "body"],
  visitor: ["id", "typeParameters", "extends", "body"],
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
  builder: ["id", "typeParameters", "extends", "body"],
  visitor: ["id", "typeParameters", "extends", "body"],
};

export const DeclareTypeAlias = {
  type: "DeclareTypeAlias",
  extends: ["TypeDeclaration"],
  fields: {
    id: nodeOf("Identifier"),
    typeParameters: oneOf(nodeOf("TypeParameterDeclaration"), typeOf("null")),
    right: nodeOf("TypeAnnotation"),
  },
  builder: ["id", "typeParameters", "right"],
  visitor: ["id", "typeParameters", "right"],
};

export const DeclareModule = {
  type: "DeclareModule",
  extends: ["TypeDeclaration"],
  fields: {
    id: oneOf(nodeOf("StringLiteral"), nodeOf("Identifier")),
    body: nodeOf("BlockStatement"),
  },
  builder: ["id", "body"],
  visitor: ["id", "body"],
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
    declaration: aliasOf("DeclareExportValue"),
    default: typeOf("boolean"),
    specifiers: arrayOf(nodeOf("ExportSpecifier")),
    source: oneOf(nodeOf("StringLiteral"), typeOf("null")),
  },
  builder: ["declaration", "specifiers", "source", "default"],
  visitor: [],
};

export const DeclareModuleExports = {
  type: "DeclareModuleExports",
  extends: ["TypeDeclaration"],
  fields: {
    typeAnnotation: nodeOf("TypeAnnotation"),
  },
  builder: ["typeAnnotation"],
  visitor: ["typeAnnotation"],
};
