// @flow
import type {Expression} from "./base";

/**
 *
 */
export interface ConditionalExpression extends Expression {
  type: "ConditionalExpression";
  test: Expression;
  alternate: Expression;
  consequent: Expression;
}
