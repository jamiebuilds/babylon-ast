// @flow
import type {Expression, Pattern} from "./base";
import type {CallExpression, NewExpression} from "./calls";

/**
 *
 */
export interface ThisExpression extends Expression {
  type: "ThisExpression";
}

/**
 *
 */
export interface UnaryExpression extends Expression {
  type: "UnaryExpression";
  operator: UnaryOperator;
  argument: Expression;
  prefix: boolean;
}

/**
 *
 */
export type UnaryOperator =
  | "-"
  | "+"
  | "!"
  | "~"
  | "typeof"
  | "void"
  | "delete";

/**
 *
 */
export interface UpdateExpression extends Expression {
  type: "UpdateExpression";
  operator: UpdateOperator;
  argument: Pattern | CallExpression | NewExpression;
  prefix: boolean;
}

/**
 *
 */
export type UpdateOperator =
  | "++"
  | "--";
