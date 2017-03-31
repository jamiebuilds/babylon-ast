// @flow
import type {TypeDeclaration} from "./base";

/**
 *
 */
export interface DeclareClass extends TypeDeclaration {
  type: "DeclareClass";
}

/**
 *
 */
export interface DeclareFunction extends TypeDeclaration {
  type: "DeclareFunction";
}

/**
 *
 */
export interface DeclareInterface extends TypeDeclaration {
  type: "DeclareInterface";
}

/**
 *
 */
export interface DeclareExportDeclaration extends TypeDeclaration {
  type: "DeclareExportDeclaration";
}

/**
 *
 */
export interface DeclareModule extends TypeDeclaration {
  type: "DeclareModule";
}

/**
 *
 */
export interface DeclareModuleExports extends TypeDeclaration {
  type: "DeclareModuleExports";
}

/**
 *
 */
export interface DeclareTypeAlias extends TypeDeclaration {
  type: "DeclareTypeAlias";
}

/**
 *
 */
export interface DeclareVariable extends TypeDeclaration {
  type: "DeclareVariable";
}
