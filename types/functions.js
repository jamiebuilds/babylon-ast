// @flow
import type {Expression, Declaration} from "./base";
import type {Identifier} from "./identifiers";
import type {Method} from "./methods";
import type {BlockStatement} from "./blocks";

/**
 *
 */
export interface FunctionDeclaration extends Method, Declaration {
  type: "FunctionDeclaration";
}

/**
 *
 */
export interface FunctionExpression extends Method, Expression {
  type: "FunctionExpression";
}

/**
 *
 */
export interface ArrowFunctionExpression extends Method, Expression {
  type: "ArrowFunctionExpression";
  body: BlockStatement | Expression;
  expression: boolean;
}

/**
 *
 */
export interface YieldExpression extends Expression {
  type: "YieldExpression";
  argument: Expression | null;
  delegate: boolean;
}

/**
 *
 */
export interface AwaitExpression extends Expression {
  type: "AwaitExpression";
  argument: Expression | null;
}
