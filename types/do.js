// @flow
import type {Expression} from "./base";
import type {BlockStatement} from "./blocks";

/**
 *
 */
export interface DoExpression extends Expression {
  type: "DoExpression";
  body: BlockStatement;
}
