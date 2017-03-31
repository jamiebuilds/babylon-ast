// @flow
import type {TypeAnnotation} from "./base";

/**
 *
 */
export interface PrimitiveTypeAnnotation extends TypeAnnotation {}

/**
 *
 */
export interface AnyTypeAnnotation extends PrimitiveTypeAnnotation {
  type: "AnyTypeAnnotation";
}

/**
 *
 */
export interface MixedTypeAnnotation extends PrimitiveTypeAnnotation {
  type: "MixedTypeAnnotation";
}

/**
 *
 */
export interface EmptyTypeAnnotation extends PrimitiveTypeAnnotation {
  type: "EmptyTypeAnnotation";
}

/**
 *
 */
export interface BooleanTypeAnnotation extends PrimitiveTypeAnnotation {
  type: "BooleanTypeAnnotation";
}

/**
 *
 */
export interface StringTypeAnnotation extends PrimitiveTypeAnnotation {
  type: "StringTypeAnnotation";
}

/**
 *
 */
export interface NumberTypeAnnotation extends PrimitiveTypeAnnotation {
  type: "NumberTypeAnnotation";
}
