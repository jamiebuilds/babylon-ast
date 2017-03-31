// @flow
import type {TypeAnnotation, TypeDeclaration} from "./base";
import type {Identifier} from "../identifiers";
import type {TypeParameterDeclaration} from "./generics";

/**
 *
 */
export interface TypeAliasDeclaration extends TypeDeclaration {
  type: "TypeAliasDeclaration";
  id: Identifier;
  typeParameters: TypeParameterDeclaration | null;
  right: TypeAnnotation;
}

