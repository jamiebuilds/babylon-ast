// @flow
import type {Pattern} from "./base";

/**
 *
 */
export interface RestElement extends Pattern {
  type: "RestElement";
  argument: Pattern;
}
