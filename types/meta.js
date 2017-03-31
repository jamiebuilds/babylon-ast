// @flow
import type {Expression} from "./base";
import type {Identifier} from "./identifiers";

/**
 *
 */
export interface MetaProperty extends Expression {
  type: "MetaProperty";
  meta: Identifier;
  property: Identifier;
}
