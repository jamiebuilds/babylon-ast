// @flow
import {arrayOf, oneOf, nodeOf, typeOf} from "./_validators";

export const ReturnStatement = {
  type: "ReturnStatement",
  extends: ["Statement"],
  fields: {
    argument: oneOf(nodeOf("Expression"), typeOf("null")),
  },
  builder: [],
  visitor: [],
};

export const LabeledStatement = {
  type: "LabeledStatement",
  extends: ["Statement"],
  fields: {
    label: nodeOf("Identifier"),
    body: nodeOf("Statement"),
  },
  builder: [],
  visitor: [],
};

export const BreakStatement = {
  type: "BreakStatement",
  extends: ["Statement"],
  fields: {
    label: oneOf(nodeOf("Identifier"), typeOf("null")),
  },
  builder: [],
  visitor: [],
};

export const ContinueStatement = {
  type: "ContinueStatement",
  extends: ["Statement"],
  fields: {
    label: oneOf(nodeOf("Identifier"), typeOf("null")),
  },
  builder: [],
  visitor: [],
};

export const IfStatement = {
  type: "IfStatement",
  extends: ["Statement"],
  fields: {
    test: nodeOf("Expression"),
    consequent: nodeOf("Statement"),
    alternate: oneOf(nodeOf("Statement"), typeOf("null")),
  },
  builder: [],
  visitor: [],
};

export const SwitchCase = {
  type: "SwitchCase",
  extends: ["Node"],
  fields: {
    test: oneOf(nodeOf("Expression"), typeOf("null")),
    consequent: arrayOf(nodeOf("Statement")),
  },
  builder: [],
  visitor: [],
};

export const SwitchStatement = {
  type: "SwitchStatement",
  extends: ["Statement"],
  fields: {
    discriminant: nodeOf("Expression"),
    cases: arrayOf(nodeOf("SwitchCase")),
  },
  builder: [],
  visitor: [],
};
