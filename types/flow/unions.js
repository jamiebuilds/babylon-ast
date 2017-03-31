// @flow
import type {TypeAnnotation} from "./base";

/**
 *
 */
export interface UnionTypeAnnotation extends TypeAnnotation {
  type: "UnionTypeAnnotation";
  types: Array<TypeAnnotation>;
}
