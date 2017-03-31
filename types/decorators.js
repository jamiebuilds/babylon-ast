// @flow
import type {Node, Expression} from "./base";

/**
 *
 */
export interface Decorator extends Node {
  type: "Decorator";
  expression: Expression;
}
