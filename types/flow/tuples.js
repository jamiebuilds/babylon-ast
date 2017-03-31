// @flow
import type {TypeAnnotation} from "./base";

/**
 *
 */
export interface TupleTypeAnnotation extends TypeAnnotation {
  type: "TupleTypeAnnotation";
  types: Array<TypeAnnotation>;
}
