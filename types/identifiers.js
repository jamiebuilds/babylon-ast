// @flow
import type {Expression, Pattern} from "./base";

/**
 *
 */
export interface Identifier extends Expression, Pattern {
  type: "Identifier";
  name: string;
}
