// @flow
import {oneOf, arrayOf, nodeOf, typeOf} from "./_validators";

export const Super = {
  type: "Super",
  extends: ["Expression"],
  builder: [],
  visitor: [],
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
    kind: ClassMethodKind,
    computed: typeOf("boolean"),
    isStatic: typeOf("boolean"),
    decorators: arrayOf(nodeOf("Decorator")),
  },
  builder: [],
  visitor: [],
};

export const ClassProperty = {
  type: "ClassProperty",
  extends: ["Node"],
  fields: {
    key: nodeOf("Identifier"),
    value: nodeOf("Expression"),
    computed: typeOf("boolean"),
  },
  builder: [],
  visitor: [],
};

export const ClassBody = {
  type: "ClassBody",
  extends: ["Node"],
  fields: {
    body: arrayOf(oneOf(nodeOf("ClassMethod"), nodeOf("ClassProperty"))),
  },
  builder: [],
  visitor: [],
};

export const Class = {
  extends: ["Node"],
  fields: {
    id: oneOf(nodeOf("Identifier"), typeOf("null")),
    superClass: oneOf(nodeOf("Expression"), typeOf("null")),
    body: nodeOf("ClassBody"),
    decorators: arrayOf(nodeOf("Decorator")),
  },
  builder: [],
  visitor: [],
};

export const ClassDeclaration = {
  type: "ClassDeclaration",
  extends: ["Class", "Declaration"],
  builder: [],
  visitor: [],
};

export const ClassExpression = {
  type: "ClassExpression",
  extends: ["Class", "Expression"],
  builder: [],
  visitor: [],
};
