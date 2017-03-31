// @flow
import type {Pattern} from "./base";
import type {ObjectProperty} from "./objects";
import type {RestElement} from "./rest";

/**
 *
 */
export interface ArrayPattern extends Pattern {
  type: "ArrayPattern";
  elements: Array<Pattern | null>;
}

/**
 *
 */
export interface AssignmentProperty extends ObjectProperty {
  value: Pattern;
}

/**
 *
 */
export interface ObjectPattern extends Pattern {
  type: "ObjectPattern";
  properties: Array<AssignmentProperty | RestElement>;
}
