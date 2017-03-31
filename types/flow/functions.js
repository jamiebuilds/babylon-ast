// @flow
import type {Node} from "../base";
import type {TypeAnnotation} from "./base";

/**
 *
 */
export interface FunctionTypeAnnotation extends TypeAnnotation {
  type: "FunctionTypeAnnotation";
}

export interface FunctionTypeParam extends Node {
  type: "FunctionTypeParam";
}
