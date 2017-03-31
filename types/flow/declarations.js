// @flow
import type {TypeAnnotation, TypeDeclaration} from "./base";
import type {Identifier} from "../identifiers";
import type {StringLiteral} from "../literals";
import type {BlockStatement} from "../blocks";
import type {ExportSpecifier} from "../modules";
import type {ObjectTypeAnnotation} from "./objects";
import type {InterfaceExtends} from "./interfaces";
import type {TypeParameterDeclaration} from "./generics";
import type {FunctionTypeParam} from "./functions";

/**
 *
 */
export interface DeclareVariable extends TypeDeclaration {
  type: "DeclareVariable";
  id: Identifier;
  typeAnnotation: TypeAnnotation;
}

/**
 *
 */
export interface DeclareFunction extends TypeDeclaration {
  type: "DeclareFunction";
  id: Identifier;
  typeParameters: TypeParameterDeclaration | null;
  params: Array<FunctionTypeParam>;
  rest: FunctionTypeParam | null;
  returnType: TypeAnnotation;
}

/**
 *
 */
export interface DeclareClass extends TypeDeclaration {
  type: "DeclareClass";
  id: Identifier;
  typeParameters: TypeParameterDeclaration | null;
  extends: Array<InterfaceExtends>;
  mixins: Array<InterfaceExtends>;
  body: ObjectTypeAnnotation;
}

/**
 *
 */
export interface DeclareInterface extends TypeDeclaration {
  type: "DeclareInterface";
  id: Identifier;
  typeParameters: TypeParameterDeclaration | null;
  extends: Array<InterfaceExtends>;
  mixins: Array<InterfaceExtends>;
  body: ObjectTypeAnnotation;
}

/**
 *
 */
export interface DeclareTypeAlias extends TypeDeclaration {
  type: "DeclareTypeAlias";
  id: Identifier;
  typeParameters: TypeParameterDeclaration | null;
  right: TypeAnnotation;
}

/**
 *
 */
export interface DeclareModule extends TypeDeclaration {
  type: "DeclareModule";
  name: StringLiteral | Identifier;
  body: BlockStatement;
}

/**
 *
 */
export type DeclareExportValue =
  | DeclareVariable
  | DeclareFunction
  | DeclareClass
  | DeclareInterface
  | DeclareTypeAlias
  | TypeAnnotation;

/**
 *
 */
export interface DeclareExport extends TypeDeclaration {
  type: "DeclareExport";
  declaration: DeclareExportValue;
  default: boolean;
  specifiers: Array<ExportSpecifier>;
  source: StringLiteral | null;
}

/**
 *
 */
export interface DeclareModuleExports extends TypeDeclaration {
  type: "DeclareModuleExports";
  typeAnnotation: TypeAnnotation;
}
