// @flow
import type {TypeAnnotation} from "./base";

/**
 *
 */
export interface IntersectionTypeAnnotation extends TypeAnnotation {
  type: "IntersectionTypeAnnotation";
  types: Array<TypeAnnotation>;
}
