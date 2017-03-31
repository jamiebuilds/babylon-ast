// @flow
import type {Node} from "../base";
import type {TypeDeclaration} from "./base";

/**
 *
 */
export interface InterfaceDeclaration extends TypeDeclaration {
  type: "InterfaceDeclaration";
}

/**
 *
 */
export interface InterfaceExtends extends Node {
  type: "InterfaceExtends";
}
