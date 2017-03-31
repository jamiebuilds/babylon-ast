// @flow
import type {Expression} from "./base";
import type {SpreadElement} from "./spread";

/**
 *
 */
export type Arguments = Array<Expression | SpreadElement>;

/**
 *
 */
export interface CallExpression extends Expression {
  type: "CallExpression";
  callee: Expression;
  arguments: Arguments;
}

/**
 *
 */
export interface NewExpression extends Expression {
  type: "NewExpression";
  callee: Expression;
  arguments: Arguments;
}
