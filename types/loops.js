// @flow
import type {Expression, Statement} from "./base";
import type {VariableDeclaration} from "./variables";

/**
 *
 */
export interface WhileStatement extends Statement {
  type: "WhileStatement";
  test: Expression;
  body: Statement;
}

/**
 *
 */
export interface DoWhileStatement extends Statement {
  type: "DoWhileStatement";
  body: Statement;
  test: Expression;
}

/**
 *
 */
export interface ForStatement extends Statement {
  type: "ForStatement";
  init: VariableDeclaration | Expression | null;
  test: Expression | null;
  update: Expression | null;
  body: Statement;
}

/**
 *
 */
export interface ForInStatement extends Statement {
  type: "ForInStatement";
  left: VariableDeclaration |  Expression;
  right: Expression;
  body: Statement;
}

/**
 *
 */
export interface ForOfStatement extends Statement {
  type: "ForOfStatement";
  left: VariableDeclaration |  Expression;
  right: Expression;
  body: Statement;
  await: boolean;
}
