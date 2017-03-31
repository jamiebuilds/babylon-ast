// @flow
import type {TypeAnnotation} from "./base";

export interface UnaryTypeAnnotation extends TypeAnnotation {}

/**
 *
 */
export interface NullableTypeAnnotation extends UnaryTypeAnnotation {
  type: "NullableTypeAnnotation";
}

/**
 *
 */
export interface ArrayTypeAnnotation extends UnaryTypeAnnotation {
  type: "ArrayTypeAnnotation";
}

/**
 *
 */
export interface TypeofTypeAnnotation extends UnaryTypeAnnotation {
  type: "TypeofTypeAnnotation";
}
