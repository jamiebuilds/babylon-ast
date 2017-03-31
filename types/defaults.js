// @flow
import type {Expression, Pattern} from "./base";

/**
 *
 */
export interface AssignmentPattern extends Pattern {
  type: "AssignmentPattern";
  left: Pattern;
  right: Expression;
}
