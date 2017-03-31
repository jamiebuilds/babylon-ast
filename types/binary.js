// @flow
import type {Node, Expression, Pattern} from "./base";
import type {CallExpression, NewExpression} from "./calls";

/**
 *
 */
export interface BinaryExpression extends Expression {
  type: "BinaryExpression";
  operator: BinaryOperator;
  left: Expression;
  right: Expression;
}

/**
 *
 */
export type BinaryOperator =
  | "=="
  | "!="
  | "==="
  | "!=="
  | "<"
  | "<="
  | ">"
  | ">="
  | "<<"
  | ">>"
  | ">>>"
  | "+"
  | "-"
  | "*"
  | "/"
  | "%"
  | "|"
  | "^"
  | "&"
  | "in"
  | "instanceof";

/**
 *
 */
export interface AssignmentExpression extends Expression {
  type: "AssignmentExpression";
  operator: AssignmentOperator;
  left: Pattern | MemberExpression | CallExpression | NewExpression;
  right: Expression;
}

/**
 *
 */
export type AssignmentOperator =
  | "="
  | "+="
  | "-="
  | "*="
  | "/="
  | "%="
  | "<<="
  | ">>="
  | ">>>="
  | "|="
  | "^="
  | "&=";

/**
 *
 */
export interface LogicalExpression extends Expression {
  type: "LogicalExpression";
  operator: LogicalOperator;
  left: Expression;
  right: Expression;
}

/**
 *
 */
export type LogicalOperator =
  | "||"
  | "&&";

/**
 *
 */
export interface MemberExpression extends Expression {
  type: "MemberExpression";
  object: Expression;
  property: Expression;
  computed: boolean;
}

/**
 *
 */
export interface BindExpression extends Expression {
  type: "BindExpression";
  object: Array<Expression | null>;
  callee: Array<Expression>;
}
