// @flow
import type {Expression, Declaration} from "./base";
import type {Identifier} from "./identifiers";
import type {Literal} from "./literals";

/**
 *
 */
export interface Import extends Expression {
  type: "Import";
}

/**
 *
 */
export interface ModuleDeclaration extends Node {}

/**
 *
 */
export interface ModuleSpecifier extends Node {
  local: Identifier;
}

/**
 *
 */
export interface ImportDeclaration extends ModuleDeclaration {
  type: "ImportDeclaration";
  specifiers: Array<ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier>;
  source: Literal;
}

/**
 *
 */
export interface ImportSpecifier extends ModuleSpecifier {
  type: "ImportSpecifier";
  imported: Identifier;
}

/**
 *
 */
export interface ImportDefaultSpecifier extends ModuleSpecifier {
  type: "ImportDefaultSpecifier";
}

/**
 *
 */
export interface ImportNamespaceSpecifier extends ModuleSpecifier {
  type: "ImportNamespaceSpecifier";
}

/**
 *
 */
export interface ExportNamedDeclaration extends ModuleDeclaration {
  type: "ExportNamedDeclaration";
  declaration: Declaration | null;
  specifiers: Array<ExportSpecifier>;
  source: Literal | null;
}

/**
 *
 */
export interface ExportSpecifier extends ModuleSpecifier {
  type: "ExportSpecifier";
  exported: Identifier;
}

/**
 *
 */
export interface ExportDefaultDeclaration extends ModuleDeclaration {
  type: "ExportDefaultDeclaration";
  declaration: Declaration | Expression;
}

/**
 *
 */
export interface ExportAllDeclaration extends ModuleDeclaration {
  type: "ExportAllDeclaration";
  source: Literal;
}
