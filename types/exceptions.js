// @flow
import type {Expression, Pattern, Statement} from "./base";
import type {BlockStatement} from "./blocks";

/**
 *
 */
export interface ThrowStatement extends Statement {
  type: "ThrowStatement";
  argument: Expression;
}

/**
 *
 */
export interface TryStatement extends Statement {
  type: "TryStatement";
  block: BlockStatement;
  handler: CatchClause | null;
  finalizer: BlockStatement | null;
}

/**
 *
 */
export interface CatchClause extends Node {
  type: "CatchClause";
  param: Pattern;
  body: BlockStatement;
}
