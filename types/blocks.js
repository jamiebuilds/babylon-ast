// @flow
import type {Statement} from "./base";
import type {Directive} from "./directives";

/**
 *
 */
export interface BlockStatement {
  type: "BlockStatement";
  body: Array<Statement>;
  directives: Array<Directive>;
}
