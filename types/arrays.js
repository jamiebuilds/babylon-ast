// @flow
import type {Expression} from "./base";
import type {SpreadElement} from "./spread";

/**
 *
 */
export interface ArrayExpression extends Expression {
  type: "ArrayExpression";
  elements: Array<Expression | SpreadElement | null>;
}

