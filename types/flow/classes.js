// @flow
import type {TypeAnnotation} from "./base";
import type {Identifier} from "../identifiers";
import type {TypeParameterInstantiation} from "./generics";

/**
 *
 */
export interface ClassImplements extends TypeAnnotation {
  type: "ClassImplements";
  id: Identifier;
  typeParameters: TypeParameterInstantiation | null;
}
