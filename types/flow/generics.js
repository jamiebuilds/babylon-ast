// @flow
import type {Identifier} from "../identifiers";
import type {TypeAnnotation} from "./base";
import type {Variance} from "./variance";

/**
 *
 */
export interface GenericTypeAnnotation extends TypeAnnotation {
  type: "GenericTypeAnnotation";
  id: Identifier;
  typeParameters: TypeParameterInstantiation;
}

/**
 *
 */
export interface TypeParameterInstantiation extends Node {
  type: "TypeParameterInstantiation";
  params: Array<TypeAnnotation>;
}

/**
 *
 */
export interface TypeParameterDeclaration extends Node {
  type: "TypeParameterDeclaration";
  params: Array<TypeParameter>;
}

/**
 *
 */
export interface TypeParameter extends Node {
  type: "TypeParameter";
  name: string;
  bound: TypeAnnotation;
  variance: Variance;
  default: TypeAnnotation;
}
