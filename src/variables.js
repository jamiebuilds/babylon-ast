// @flow
import {oneOf, arrayOf, nodeOf, typeOf} from "./_define";

export const VariableDeclaration = {
  type: "VariableDeclaration",
  extends: ["Declaration"],
  fields: {
    declarations: arrayOf(nodeOf("VariableDeclarator")),
    kind: oneOf("var", "let", "const"),
  },
  builder: ["kind", "declarations"],
  visitor: ["declarations"],
};

export const VariableDeclarator = {
  type: "VariableDeclarator",
  extends: ["Node"],
  fields: {
    id: nodeOf("Pattern"),
    init: oneOf(nodeOf("Expression"), typeOf("null")),
  },
  builder: ["id", "init"],
  visitor: ["id", "init"],
};
