// @flow
import type {Node, Expression} from "../base";
import type {StringLiteral} from "../literals";

/**
 *
 */
export interface JSXAttribute extends Node {
  name: JSXIdentifier | JSXNamespacedName;
  value: JSXElement | StringLiteral | JSXExpressionContainer | null;
}

/**
 *
 */
export interface JSXClosingElement extends Node {
  name: JSXIdentifier | JSXMemberExpression;
}

/**
 *
 */
export interface JSXElement extends Expression {
  openingElement: JSXOpeningElement;
  closingElement: JSXClosingElement | null;
  children: Array<JSXText | JSXExpressionContainer | JSXSpreadChild | JSXElement>;
}

/**
 *
 */
export interface JSXEmptyExpression extends Expression {}

/**
 *
 */
export interface JSXExpressionContainer extends Node {
  expression: Expression;
}

/**
 *
 */
export interface JSXSpreadChild extends Node {
  expression: Expression;
}

/**
 *
 */
export interface JSXIdentifier extends Expression {
  type: "JSXIdentifier";
  name: string;
}

/**
 *
 */
export interface JSXMemberExpression extends Expression {
  object: JSXMemberExpression | JSXIdentifier;
  property: JSXIdentifier;
}

/**
 *
 */
export interface JSXNamespacedName extends Node {
  namespace: JSXIdentifier;
  name: JSXIdentifier;
}

/**
 *
 */
export interface JSXOpeningElement extends Node {
  type: "JSXSpreadAttribute";
  name: JSXIdentifier | JSXMemberExpression;
  selfClosing: boolean;
  attributes: Array<JSXAttribute | JSXSpreadAttribute>;
}

/**
 *
 */
export interface JSXSpreadAttribute extends Node {
  type: "JSXSpreadAttribute";
  argument: Expression;
}

/**
 *
 */
export interface JSXText extends Node {
  type: "JSXText";
  value: string;
}
