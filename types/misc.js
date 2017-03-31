// @flow
import type {Expression, Statement} from "./base";

/**
 *
 */
export interface ExpressionStatement extends Statement {
  type: "ExpressionStatement";
  expression: Expression;
}

/**
 *
 */
export interface SequenceExpression extends Expression {
  type: "SequenceExpression";
  expressions: Array<Expression>;
}

/**
 *
 */
export interface EmptyStatement extends Statement {
  type: "EmptyStatement";
}
