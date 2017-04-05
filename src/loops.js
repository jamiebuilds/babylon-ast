// @flow
import {oneOf, nodeOf, typeOf} from "./_define";

export const WhileStatement = {
  type: "WhileStatement",
  extends: ["Statement"],
  fields: {
    test: nodeOf("Expression"),
    body: nodeOf("Statement"),
  },
  builder: ["test", "body"],
  visitor: ["test", "body"],
};

export const DoWhileStatement = {
  type: "DoWhileStatement",
  extends: ["Statement"],
  fields: {
    test: nodeOf("Expression"),
    body: nodeOf("Statement"),
  },
  builder: ["test", "body"],
  visitor: ["test", "body"],
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
  builder: ["init", "test", "update", "body"],
  visitor: ["init", "test", "update", "body"],
};

export const ForInStatement = {
  type: "ForInStatement",
  extends: ["Statement"],
  fields: {
    left: oneOf(nodeOf("VariableDeclaration"), nodeOf("Expression")),
    right: nodeOf("Expression"),
    body: nodeOf("Statement"),
  },
  builder: ["left", "right", "body"],
  visitor: ["left", "right", "body"],
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
  builder: ["left", "right", "body"],
  visitor: ["left", "right", "body"],
};
