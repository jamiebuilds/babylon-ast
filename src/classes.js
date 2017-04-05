// @flow
import {aliasOf, oneOf, arrayOf, nodeOf, typeOf} from "./_define";

export const Class = {
  extends: ["Node"],
  fields: {
    id: oneOf(nodeOf("Identifier"), typeOf("null")),
    superClass: oneOf(nodeOf("Expression"), typeOf("null")),
    body: nodeOf("ClassBody"),
    decorators: arrayOf(nodeOf("Decorator")),
    typeParameters: oneOf(nodeOf("TypeParameterDeclaration"), typeOf("null")),
    superTypeParameters: oneOf(nodeOf("TypeParameterDeclaration"), typeOf("null")),
    implements: oneOf(arrayOf(nodeOf("TypeParameterDeclaration")), typeOf("null")),
    // mixins: oneOf(arrayOf(nodeOf("Unknown")), typeof("null")),
  }
};

export const ClassDeclaration = {
  type: "ClassDeclaration",
  extends: ["Class", "Declaration"],
  builder: ["id", "superClass", "body", "decorators"],
  visitor: ["id", "body", "superClass", /* "mixins", */ "typeParameters", "superTypeParameters", "implements", "decorators"],
};

export const ClassExpression = {
  type: "ClassExpression",
  extends: ["Class", "Expression"],
  builder: ["id", "superClass", "body", "decorators"],
  visitor: ["id", "body", "superClass", /* "mixins", */ "typeParameters", "superTypeParameters", "implements", "decorators"],
};

export const ClassBody = {
  type: "ClassBody",
  extends: ["Node"],
  fields: {
    body: arrayOf(oneOf(nodeOf("ClassMethod"), nodeOf("ClassProperty"))),
  },
  builder: ["body"],
  visitor: ["body"],
};

export const ClassMethodKind = oneOf(
  "constructor",
  "method",
  "get",
  "set",
);

export const ClassMethod = {
  type: "ClassMethod",
  extends: ["Method"],
  fields: {
    key: nodeOf("Expression"),
    kind: aliasOf("ClassMethodKind"),
    computed: typeOf("boolean"),
    isStatic: typeOf("boolean"),
    decorators: arrayOf(nodeOf("Decorator")),
  },
  builder: ["kind", "key", "params", "body", "computed", "isStatic"],
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
};

export const ClassProperty = {
  type: "ClassProperty",
  extends: ["Node"],
  fields: {
    key: nodeOf("Identifier"),
    value: nodeOf("Expression"),
    computed: typeOf("boolean"),
    decorators: arrayOf(nodeOf("Decorator")),
    typeAnnotation: oneOf(nodeOf("TypeAnnotation"), typeOf('null')),
  },
  builder: ["key", "value", "typeAnnotation", "decorators", "computed"], // <<<< weird ordering
  visitor: ["key", "value", "typeAnnotation", "decorators"], // <<<< weird ordering
};

export const Super = {
  type: "Super",
  extends: ["Expression"],
  builder: [],
  visitor: [],
};
