// @flow
import type {Identifier} from "../identifiers";
import type {TypeAnnotation} from "./base";
import type {QualifiedTypeIdentifier} from "./misc";

export interface UnaryTypeAnnotation extends TypeAnnotation {}

/**
 *
 */
export interface NullableTypeAnnotation extends UnaryTypeAnnotation {
  type: "NullableTypeAnnotation";
  argument: TypeAnnotation;
}

/**
 *
 */
export interface ArrayTypeAnnotation extends UnaryTypeAnnotation {
  type: "ArrayTypeAnnotation";
  argument: TypeAnnotation;
}

/**
 *
 */
export interface TypeofTypeAnnotation extends UnaryTypeAnnotation {
  type: "TypeofTypeAnnotation";
  argument: Identifier | QualifiedTypeIdentifier | TypeAnnotation;
}
