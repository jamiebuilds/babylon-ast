// @flow
import type {Expression} from "./base";

/**
 *
 */
export interface Literal extends Expression {}

/**
 *
 */
export interface RegExpLiteral extends Literal {
  type: "RegExpLiteral";
  pattern: string;
  flags: string;
}

/**
 *
 */
export interface NullLiteral extends Literal {
  type: "NullLiteral";
}

/**
 *
 */
export interface StringLiteral extends Literal {
  type: "StringLiteral";
  value: string;
  extra: {
    rawValue: string,
    raw: string,
    [key: string]: any,
  };
}

/**
 *
 */
export interface BooleanLiteral extends Literal {
  type: "BooleanLiteral";
  value: boolean;
}

/**
 *
 */
export interface NumericLiteral extends Literal {
  type: "NumericLiteral";
  value: number;
  extra: {
    rawValue: number,
    raw: string,
    [key: string]: any,
  };
}
