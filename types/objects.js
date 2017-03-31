// @flow
import type {Node, Expression} from "./base";
import type {Method} from "./methods";
import type {SpreadElement} from "./spread";
import type {Decorator} from "./decorators";

/**
 *
 */
export interface ObjectExpression extends Expression {
  type: "ObjectExpression";
  properties: Array<ObjectMember | SpreadElement>;
}

/**
 *
 */
export interface ObjectMember extends Node {
  key: Expression;
  computed: boolean;
  decorators: Array<Decorator>;
}

/**
 *
 */
export interface ObjectProperty extends ObjectMember {
  type: "ObjectProperty";
  shorthand: boolean;
  value: Expression;
}

/**
 *
 */
export interface ObjectMethod extends ObjectMember, Method {
  type: "ObjectMethod";
  kind: ObjectMethodKind;
}

/**
 *
 */
export type ObjectMethodKind =
  | "get"
  | "set"
  | "method";
