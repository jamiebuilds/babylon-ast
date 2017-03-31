// @flow
import type {Node} from "../base";
import type {TypeAnnotation} from "./base";

/**
 *
 */
export interface ObjectTypeAnnotation extends TypeAnnotation {
  type: "ObjectTypeAnnotation";
}

/**
 *
 */
export interface ObjectTypeMember extends Node {}

/**
 *
 */
export interface ObjectTypeProperty extends ObjectTypeMember {
  type: "ObjectTypeProperty";
}

/**
 *
 */
export interface ObjectTypeMethod extends ObjectTypeMember {
  type: "ObjectTypeMethod";
}

/**
 *
 */
export interface ObjectTypeIndexer extends ObjectTypeMember {
  type: "ObjectTypeIndexer";
}
