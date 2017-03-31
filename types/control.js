// @flow
import type {Expression, Statement} from "./base";
import type {Identifier} from "./identifiers";

/**
 *
 */
export interface ReturnStatement extends Statement {
  type: "ReturnStatement";
  argument: Expression | null;
}

/**
 *
 */
export interface LabeledStatement extends Statement {
  type: "LabeledStatement";
  label: Identifier;
  body: Statement;
}

/**
 *
 */
export interface BreakStatement extends Statement {
  type: "BreakStatement";
  label: Identifier | null;
}

/**
 *
 */
export interface ContinueStatement extends Statement {
  type: "ContinueStatement";
  label: Identifier | null;
}

/**
 *
 */
export interface IfStatement extends Statement {
  type: "IfStatement";
  test: Expression;
  consequent: Statement;
  alternate: Statement | null;
}

/**
 *
 */
export interface SwitchStatement extends Statement {
  type: "SwitchStatement";
  discriminant: Expression;
  cases: Array<SwitchCase>;
}

/**
 *
 */
export interface SwitchCase extends Node {
  type: "SwitchCase";
  test: Expression | null;
  consequent: Array<Statement>;
}
