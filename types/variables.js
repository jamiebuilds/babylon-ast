// @flow
import type {Declaration, Expression, Pattern} from "./base";

/**
 *
 */
export interface VariableDeclaration extends Declaration {
  type: "VariableDeclaration";
  declarations: Array<VariableDeclarator>;
  kind: "var" | "let" | "const";
}

/**
 *
 */
export interface VariableDeclarator extends Node {
  type: "VariableDeclarator";
  id: Pattern;
  init: Expression | null;
}
