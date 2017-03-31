// @flow
import type {Node} from "../base";
import type {Identifier} from "../identifiers";
import type {ObjectMethodKind} from "../objects";
import type {TypeAnnotation} from "./base";
import type {Variance} from "./variance";
import type {FunctionTypeParam} from "./functions";

/**
 *
 */
export interface ObjectTypeAnnotation extends TypeAnnotation {
  type: "ObjectTypeAnnotation";
  properties: Array<ObjectTypeMember>;
  indexers: Array<ObjectTypeIndexer>;
  exact: boolean;
}

/**
 *
 */
export interface ObjectTypeMember extends Node {
  key: Identifier;
}

/**
 *
 */
export interface ObjectTypeProperty extends ObjectTypeMember {
  type: "ObjectTypeProperty";
  value: TypeAnnotation;
  isStatic: boolean;
  optional: boolean;
  variance: Variance | null;
}

/**
 *
 */
export interface ObjectTypeMethod extends ObjectTypeMember {
  type: "ObjectTypeMethod";
  kind: ObjectMethodKind;
  params: Array<FunctionTypeParam>;
  rest: FunctionTypeParam | null;
  returnType: TypeAnnotation;
}

/**
 *
 */
export interface ObjectTypeIndexer extends Node {
  type: "ObjectTypeIndexer";
  id: Identifier | null;
  key: TypeAnnotation;
  value: TypeAnnotation;
  variance: Variance | null;
}
