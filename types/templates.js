// @flow
import type {Node, Expression} from "./base";

/**
 *
 */
export interface TemplateLiteral extends Expression {
  type: "TemplateLiteral";
  quasis: Array<TemplateElement>;
  expressions: Array<Expression>;
}

/**
 *
 */
export interface TaggedTemplateExpression extends Expression {
  type: "TaggedTemplateExpression";
  tag: Expression;
  quasi: TemplateLiteral;
}

/**
 *
 */
export interface TemplateElement extends Node {
  type: "TemplateElement";
  tail: boolean;
  value: {
    cooked: string | null;
    raw: string;
  };
}
