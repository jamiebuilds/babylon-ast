// @flow
import type {Node} from "./base";

/**
 *
 */
export interface Directive extends Node {
  type: "Directive";
  value: DirectiveLiteral;
}

/**
 *
 */
export interface DirectiveLiteral extends Node {
  type: "DirectiveLiteral";
  value: string;
}
