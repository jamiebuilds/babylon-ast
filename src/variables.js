// @flow
import {oneOf, arrayOf, nodeOf, typeOf} from "./_validators";

export const VariableDeclarator = {
  type: "VariableDeclarator",
  extends: ["Node"],
  fields: {
    id: nodeOf("Pattern"),
    init: oneOf(nodeOf("Expression"), typeOf("null")),
  },
  builder: [],
  visitor: [],
};

export const VariableDeclaration = {
  type: "VariableDeclaration",
  extends: ["Declaration"],
  fields: {
    declarations: arrayOf(nodeOf("VariableDeclarator")),
    kind: oneOf("var", "let", "const"),
  },
  builder: [],
  visitor: [],
};
