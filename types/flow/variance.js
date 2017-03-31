// @flow
import type {Node} from "../base";

/**
 *
 */
export interface Variance extends Node {
  type: "Variance";
  kind: VarianceKind;
}

/**
 *
 */
export type VarianceKind =
  | "plus"
  | "minus";
