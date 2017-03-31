// @flow
import type {Expression, Statement} from "./base";

/**
 *
 */
export interface WithStatement extends Statement {
  type: "WithStatement";
  object: Expression;
  body: Statement;
}
