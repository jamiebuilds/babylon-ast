// @flow
import type {TypeAnnotation} from "./base";

/**
 *
 */
export interface LiteralTypeAnnotation extends TypeAnnotation {}

/**
 *
 */
export interface NullLiteralTypeAnnotation extends LiteralTypeAnnotation {
  type: "NullLiteralTypeAnnotation";
}

/**
 *
 */
export interface VoidLiteralTypeAnnotation extends LiteralTypeAnnotation {
  type: "VoidLiteralTypeAnnotation";
}

/**
 *
 */
export interface BooleanLiteralTypeAnnotation extends LiteralTypeAnnotation {
  type: "BooleanLiteralTypeAnnotation";
  value: boolean;
}

/**
 *
 */
export interface StringLiteralTypeAnnotation extends LiteralTypeAnnotation {
  type: "StringLiteralTypeAnnotation";
  value: string;
  extra: {
    rawValue: string;
    raw: string;
  };
}

/**
 *
 */
export interface NumericLiteralTypeAnnotation extends LiteralTypeAnnotation {
  type: "NumericLiteralTypeAnnotation";
  value: string;
  extra: {
    rawValue: number;
    raw: string;
  };
}
