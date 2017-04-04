// @flow
import {oneOf, nodeOf, typeOf} from "./_validators";

export const WhileStatement = {
  type: "WhileStatement",
  extends: ["Statement"],
  fields: {
    test: nodeOf("Expression"),
    body: nodeOf("Statement"),
  },
  builder: [],
  visitor: [],
};

export const DoWhileStatement = {
  type: "DoWhileStatement",
  extends: ["Statement"],
  fields: {
    body: nodeOf("Statement"),
    test: nodeOf("Expression"),
  },
  builder: [],
  visitor: [],
};

export const ForStatement = {
  type: "ForStatement",
  extends: ["Statement"],
  fields: {
    init: oneOf(nodeOf("VariableDeclaration"), nodeOf("Expression"), typeOf("null")),
    test: oneOf(nodeOf("Expression"), typeOf("null")),
    update: oneOf(nodeOf("Expression"), typeOf("null")),
    body: nodeOf("Statement"),
  },
  builder: [],
  visitor: [],
};

export const ForInStatement = {
  type: "ForInStatement",
  extends: ["Statement"],
  fields: {
    left: oneOf(nodeOf("VariableDeclaration"), nodeOf("Expression")),
    right: nodeOf("Expression"),
    body: nodeOf("Statement"),
  },
  builder: [],
  visitor: [],
};

export const ForOfStatement = {
  type: "ForOfStatement",
  extends: ["Statement"],
  fields: {
    left: oneOf(nodeOf("VariableDeclaration"), nodeOf("Expression")),
    right: nodeOf("Expression"),
    body: nodeOf("Statement"),
    await: typeOf("boolean"),
  },
  builder: [],
  visitor: [],
};
