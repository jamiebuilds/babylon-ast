// @flow
import type {Node, Expression, Pattern} from "./base";
import type {Identifier} from "./identifiers";
import type {BlockStatement} from "./blocks";

/**
 *
 */
export interface Method extends Node {
  id: Identifier | null;
  params: Array<Pattern>;
  body: BlockStatement | Expression;
  generator: boolean;
  async: boolean;
}
