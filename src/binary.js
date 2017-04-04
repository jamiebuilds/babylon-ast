// @flow
import {oneOf, arrayOf, nodeOf, typeOf} from "./_validators";

export const MemberExpression = {
  type: "MemberExpression",
  extends: ["Expression"],
  fields: {
    object: nodeOf("Expression"),
    property: nodeOf("Expression"),
    computed: typeOf("boolean"),
  },
  builder: ["object", "property", "computed"],
  visitor: [],
};

export const BindExpression = {
  type: "BindExpression",
  extends: ["Expression"],
  fields: {
    object: arrayOf(oneOf(nodeOf("Expression"), typeOf("null"))),
    callee: arrayOf(nodeOf("Expression")),
  },
  builder: ["object", "callee"],
  visitor: [],
};

export const BinaryOperator = oneOf(
  "==",
  "!=",
  "===",
  "!==",
  "<",
  "<=",
  ">",
  ">=",
  "<<",
  ">>",
  ">>>",
  "+",
  "-",
  "*",
  "/",
  "%",
  "|",
  "^",
  "&",
  "in",
  "nodeOf"
);

export const BinaryExpression = {
  type: "BinaryExpression",
  extends: ["Expression"],
  fields: {
    operator: BinaryOperator,
    left: nodeOf("Expression"),
    right: nodeOf("Expression"),
  },
  builder: ["operator", "left", "right"],
  visitor: [],
};

export const AssignmentOperator = oneOf(
  "=",
  "+=",
  "-=",
  "*=",
  "/=",
  "%=",
  "<<=",
  ">>=",
  ">>>=",
  "|=",
  "^=",
  "&="
);

export const AssignmentExpression = {
  type: "AssignmentExpression",
  extends: ["Expression"],
  fields: {
    operator: AssignmentOperator,
    left: oneOf(nodeOf("Pattern"), nodeOf("MemberExpression"), nodeOf("CallExpression"), nodeOf("NewExpression")),
    right: nodeOf("Expression"),
  },
  builder: ["operator", "left", "right"],
  visitor: [],
};

export const LogicalOperator = oneOf(
  "||",
  "&&"
);

export const LogicalExpression = {
  type: "LogicalExpression",
  extends: ["Expression"],
  fields: {
    operator: LogicalOperator,
    left: nodeOf("Expression"),
    right: nodeOf("Expression"),
  },
  builder: ["operator", "left", "right"],
  visitor: [],
};
