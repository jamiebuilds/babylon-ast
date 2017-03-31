// @flow
import type {Node, Expression} from "./base";

/**
 *
 */
export interface SpreadElement extends Node {
  type: "SpreadElement";
  argument: Expression;
}
