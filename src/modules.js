// @flow
import {oneOf, arrayOf, nodeOf, typeOf} from "./_validators";

export const Import = {
  type: "Import",
  extends: ["Expression"],
  builder: [],
  visitor: [],
};

export const ModuleDeclaration = {
  extends: ["Node"],
};

export const ModuleSpecifier = {
  extends: ["Node"],
};

export const ImportSpecifier = {
  type: "ImportSpecifier",
  extends: ["ModuleSpecifier"],
  fields: {
    local: nodeOf("Identifier"),
    imported: nodeOf("Identifier"),
  },
  builder: [],
  visitor: [],
};

export const ImportDefaultSpecifier = {
  type: "ImportDefaultSpecifier",
  extends: ["ModuleSpecifier"],
  fields: {
    local: nodeOf("Identifier"),
  },
  builder: [],
  visitor: [],
};

export const ImportNamespaceSpecifier = {
  type: "ImportNamespaceSpecifier",
  extends: ["ModuleSpecifier"],
  fields: {
    local: nodeOf("Identifier"),
  },
  builder: [],
  visitor: [],
};

export const ImportDeclaration = {
  type: "ImportDeclaration",
  extends: ["ModuleDeclaration"],
  fields: {
    specifiers: arrayOf(oneOf(nodeOf("ImportSpecifier"), nodeOf("ImportDefaultSpecifier"), nodeOf("ImportNamespaceSpecifier"))),
    source: nodeOf("Literal"),
  },
  builder: [],
  visitor: [],
};

export const ExportSpecifier = {
  type: "ExportSpecifier",
  extends: ["ModuleSpecifier"],
  fields: {
    local: nodeOf("Identifier"),
    exported: nodeOf("Identifier"),
  },
  builder: [],
  visitor: [],
};

export const ExportDefaultSpecifier = {
  type: "ExportDefaultSpecifier",
  extends: ["ModuleSpecifier"],
  fields: {
    exported: nodeOf("Identifier"),
  },
  builder: [],
  visitor: [],
};

export const ExportNamespaceSpecifier = {
  type: "ExportNamespaceSpecifier",
  extends: ["ModuleSpecifier"],
  fields: {
    exported: nodeOf("Identifier"),
  },
  builder: [],
  visitor: [],
};

export const ExportNamedDeclaration = {
  type: "ExportNamedDeclaration",
  extends: ["ModuleDeclaration"],
  fields: {
    declaration: oneOf(nodeOf("Declaration"), typeOf("null")),
    specifiers: arrayOf(oneOf(nodeOf("ExportSpecifier"), nodeOf("ExportDefaultSpecifier"), nodeOf("ExportNamespaceSpecifier"))),
    source: oneOf(nodeOf("Literal"), typeOf("null")),
  },
  builder: [],
  visitor: [],
};

export const ExportDefaultDeclaration = {
  type: "ExportDefaultDeclaration",
  extends: ["ModuleDeclaration"],
  fields: {
    declaration: oneOf(nodeOf("Declaration"), nodeOf("Expression")),
  },
  builder: [],
  visitor: [],
};

export const ExportAllDeclaration = {
  type: "ExportAllDeclaration",
  extends: ["ModuleDeclaration"],
  fields: {
    source: nodeOf("Literal"),
  },
  builder: [],
  visitor: [],
};
