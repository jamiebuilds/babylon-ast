// @flow
import type {Node} from "../base";
import type {Identifier} from "../identifiers";
import type {TypeDeclaration} from "./base";
import type {ObjectTypeAnnotation} from "./objects";
import type {TypeParameterDeclaration, TypeParameterInstantiation} from "./generics";

/**
 *
 */
export interface InterfaceDeclaration extends TypeDeclaration {
  type: "InterfaceDeclaration";
  id: Identifier;
  typeParameters: TypeParameterDeclaration | null;
  extends: Array<InterfaceExtends>;
  mixins: Array<InterfaceExtends>;
  body: ObjectTypeAnnotation;
}

/**
 *
 */
export interface InterfaceExtends extends Node {
  type: "InterfaceExtends";
  id: Identifier;
  typeParameters: TypeParameterInstantiation | null;
}
