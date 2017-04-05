// @flow
import {oneOf, arrayOf, nodeOf, typeOf} from "./_define";

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
  builder: ["local", "imported"],
  visitor: ["local", "imported"],
};

export const ImportDefaultSpecifier = {
  type: "ImportDefaultSpecifier",
  extends: ["ModuleSpecifier"],
  fields: {
    local: nodeOf("Identifier"),
  },
  builder: ["local"],
  visitor: ["local"],
};

export const ImportNamespaceSpecifier = {
  type: "ImportNamespaceSpecifier",
  extends: ["ModuleSpecifier"],
  fields: {
    local: nodeOf("Identifier"),
  },
  builder: ["local"],
  visitor: ["local"],
};

export const ImportDeclaration = {
  type: "ImportDeclaration",
  extends: ["ModuleDeclaration"],
  fields: {
    specifiers: arrayOf(oneOf(nodeOf("ImportSpecifier"), nodeOf("ImportDefaultSpecifier"), nodeOf("ImportNamespaceSpecifier"))),
    source: nodeOf("Literal"),
  },
  builder: ["specifiers", "source"],
  visitor: ["specifiers", "source"],
};

export const ExportSpecifier = {
  type: "ExportSpecifier",
  extends: ["ModuleSpecifier"],
  fields: {
    local: nodeOf("Identifier"),
    exported: nodeOf("Identifier"),
  },
  builder: ["local", "exported"],
  visitor: ["local", "exported"],
};

export const ExportDefaultSpecifier = {
  type: "ExportDefaultSpecifier",
  extends: ["ModuleSpecifier"],
  fields: {
    exported: nodeOf("Identifier"),
  },
  builder: ["exported"],
  visitor: ["exported"],
};

export const ExportNamespaceSpecifier = {
  type: "ExportNamespaceSpecifier",
  extends: ["ModuleSpecifier"],
  fields: {
    exported: nodeOf("Identifier"),
  },
  builder: ["exported"],
  visitor: ["exported"],
};

export const ExportNamedDeclaration = {
  type: "ExportNamedDeclaration",
  extends: ["ModuleDeclaration"],
  fields: {
    declaration: oneOf(nodeOf("Declaration"), typeOf("null")),
    specifiers: arrayOf(oneOf(nodeOf("ExportSpecifier"), nodeOf("ExportDefaultSpecifier"), nodeOf("ExportNamespaceSpecifier"))),
    source: oneOf(nodeOf("Literal"), typeOf("null")),
  },
  builder: ["declaration", "specifiers", "source"],
  visitor: ["declaration", "specifiers", "source"],
};

export const ExportDefaultDeclaration = {
  type: "ExportDefaultDeclaration",
  extends: ["ModuleDeclaration"],
  fields: {
    declaration: oneOf(nodeOf("Declaration"), nodeOf("Expression")),
  },
  builder: ["declaration"],
  visitor: ["declaration"],
};

export const ExportAllDeclaration = {
  type: "ExportAllDeclaration",
  extends: ["ModuleDeclaration"],
  fields: {
    source: nodeOf("Literal"),
  },
  builder: ["source"],
  visitor: ["source"],
};
