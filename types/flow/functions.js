// @flow
import type {Node} from "../base";
import type {Identifier} from "../identifiers";
import type {TypeAnnotation} from "./base";
import type {TypeParameterDeclaration} from "./generics";

/**
 *
 */
export interface FunctionTypeAnnotation extends TypeAnnotation {
  type: "FunctionTypeAnnotation";
  typeParameters: TypeParameterDeclaration;
  params: Array<FunctionTypeParam>;
  rest: FunctionTypeParam | null;
  returnType: TypeAnnotation;
}

/**
 *
 */
export interface FunctionTypeParam extends Node {
  type: "FunctionTypeParam";
  id: Identifier;
  typeAnnotation: TypeAnnotation;
  optional: boolean;
}
