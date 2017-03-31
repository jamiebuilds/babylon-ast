// @flow
import type {Expression, Declaration} from "./base";
import type {Identifier} from "./identifiers";
import type {Method} from "./methods";
import type {Decorator} from "./decorators";

/**
 *
 */
export interface Super extends Expression {
  type: "Super";
}

/**
 *
 */
export interface Class extends Node {
  id: Identifier | null;
  superClass: Expression | null;
  body: ClassBody;
  decorators: Array<Decorator>;
}

/**
 *
 */
export interface ClassBody extends Node {
  type: "ClassBody";
  body: Array<ClassMethod | ClassProperty>;
}

/**
 *
 */
export interface ClassMethod extends Method {
  type: "ClassMethod";
  key: Expression;
  kind: "constructor" | "method" | "get" | "set";
  computed: boolean;
  isStatic: boolean;
  decorators: Array<Decorator>;
}

/**
 *
 */
export interface ClassProperty extends Node {
  type: "ClassProperty";
  key: Identifier;
  value: Expression;
  computed: boolean;
}

/**
 *
 */
export interface ClassDeclaration extends Class, Declaration {
  type: "ClassDeclaration";
}

/**
 *
 */
export interface ClassExpression extends Class, Expression {
  type: "ClassExpression";
}
