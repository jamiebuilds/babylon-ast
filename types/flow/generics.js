// @flow
import type {TypeAnnotation} from "./base";

/**
 *
 */
export interface GenericTypeAnnotation extends TypeAnnotation {
  type: "GenericTypeAnnotation";
}

/**
 *
 */
export interface TypeParameter extends Node {
  type: "TypeParameter";
}

/**
 *
 */
export interface TypeParameterDeclaration extends Node {
  type: "TypeParameterDeclaration";
}

/**
 *
 */
export interface TypeParameterInstantiation extends Node {
  type: "TypeParameterInstantiation";
}
