// @flow
import type {Node, Statement} from "./base";
import type {Directive} from "./directives";
import type {ModuleDeclaration} from "./modules";

/**
 *
 */
export interface Program extends Node {
  type: "Program";
  sourceType: "script" | "module";
  body: Array<Statement | ModuleDeclaration>;
  directives: Array<Directive>;
}
