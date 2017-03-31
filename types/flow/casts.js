// @flow
import type {Expression} from "../base";
import type {TypeAnnotation, TypeExpression} from "./base";

/**
 *
 */
export interface TypeCastExpression extends TypeExpression {
  type: "TypeCastExpression";
  expression: Expression;
  typeAnnotation: TypeAnnotation;
  extra: {
    parenthesized: true,
    parenStart: number,
    [key: string]: any,
  };
}
