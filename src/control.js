// @flow
import {arrayOf, oneOf, nodeOf, typeOf} from "./_define";

export const ReturnStatement = {
  type: "ReturnStatement",
  extends: ["Statement"],
  fields: {
    argument: oneOf(nodeOf("Expression"), typeOf("null")),
  },
  builder: ["argument"],
  visitor: ["argument"],
};

export const LabeledStatement = {
  type: "LabeledStatement",
  extends: ["Statement"],
  fields: {
    label: nodeOf("Identifier"),
    body: nodeOf("Statement"),
  },
  builder: ["label", "body"],
  visitor: ["label", "body"],
};

export const BreakStatement = {
  type: "BreakStatement",
  extends: ["Statement"],
  fields: {
    label: oneOf(nodeOf("Identifier"), typeOf("null")),
  },
  builder: ["label"],
  visitor: ["label"],
};

export const ContinueStatement = {
  type: "ContinueStatement",
  extends: ["Statement"],
  fields: {
    label: oneOf(nodeOf("Identifier"), typeOf("null")),
  },
  builder: ["label"],
  visitor: ["label"],
};

export const IfStatement = {
  type: "IfStatement",
  extends: ["Statement"],
  fields: {
    test: nodeOf("Expression"),
    consequent: nodeOf("Statement"),
    alternate: oneOf(nodeOf("Statement"), typeOf("null")),
  },
  builder: ["test", "consequent", "alternate"],
  visitor: ["test", "consequent", "alternate"],
};

export const SwitchStatement = {
  type: "SwitchStatement",
  extends: ["Statement"],
  fields: {
    discriminant: nodeOf("Expression"),
    cases: arrayOf(nodeOf("SwitchCase")),
  },
  builder: ["discriminant", "cases"],
  visitor: ["discriminant", "cases"],
};

export const SwitchCase = {
  type: "SwitchCase",
  extends: ["Node"],
  fields: {
    test: oneOf(nodeOf("Expression"), typeOf("null")),
    consequent: arrayOf(nodeOf("Statement")),
  },
  builder: ["test", "consequent"],
  visitor: ["test", "consequent"],
};
