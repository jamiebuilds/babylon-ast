// @flow
import {oneOf, arrayOf, nodeOf, typeOf} from "../_define";

export const JSXIdentifier = {
  type: "JSXIdentifier",
  extends: ["Expression"],
  fields: {
    name: typeOf("string"),
  },
  builder: [],
  visitor: [],
};

export const JSXNamespacedName = {
  type: "JSXNamespacedName",
  extends: ["Node"],
  fields: {
    namespace: nodeOf("JSXIdentifier"),
    name: nodeOf("JSXIdentifier"),
  },
  builder: [],
  visitor: [],
};

export const JSXAttribute = {
  type: "JSXAttribute",
  extends: ["Node"],
  fields: {
    name: oneOf(nodeOf("JSXIdentifier"), nodeOf("JSXNamespacedName")),
    value: oneOf(nodeOf("JSXElement"), nodeOf("StringLiteral"), nodeOf("JSXExpressionContainer"), typeOf("null")),
  },
  builder: [],
  visitor: [],
};

export const JSXClosingElement = {
  type: "JSXClosingElement",
  extends: ["Node"],
  fields: {
    name: oneOf(nodeOf("JSXIdentifier"), nodeOf("JSXMemberExpression")),
  },
  builder: [],
  visitor: [],
};

export const JSXOpeningElement = {
  type: "JSXOpeningElement",
  extends: ["Node"],
  fields: {
    name: oneOf(nodeOf("JSXIdentifier"), nodeOf("JSXMemberExpression")),
    selfClosing: typeOf("boolean"),
    attributes: arrayOf(oneOf(nodeOf("JSXAttribute"), nodeOf("JSXSpreadAttribute"))),
  },
  builder: [],
  visitor: [],
};

export const JSXElement = {
  type: "JSXElement",
  extends: ["Expression"],
  fields: {
    openingElement: nodeOf("JSXOpeningElement"),
    closingElement: oneOf(nodeOf("JSXClosingElement"), typeOf("null")),
    children: arrayOf(oneOf(nodeOf("JSXText"), nodeOf("JSXExpressionContainer"), nodeOf("JSXSpreadChild"), nodeOf("JSXElement"))),
  },
  builder: [],
  visitor: [],
};

export const JSXEmptyExpression = {
  type: "JSXEmptyExpression",
  extends: ["Expression"],
  builder: [],
  visitor: [],
};

export const JSXExpressionContainer = {
  type: "JSXExpressionContainer",
  extends: ["Node"],
  fields: {
    expression: nodeOf("Expression"),
  },
  builder: [],
  visitor: [],
};

export const JSXSpreadChild = {
  type: "JSXSpreadChild",
  extends: ["Node"],
  fields: {
    expression: nodeOf("Expression"),
  },
  builder: [],
  visitor: [],
};

export const JSXMemberExpression = {
  type: "JSXMemberExpression",
  extends: ["Expression"],
  fields: {
    object: oneOf(nodeOf("JSXMemberExpression"), nodeOf("JSXIdentifier")),
    property: nodeOf("JSXIdentifier"),
  },
  builder: [],
  visitor: [],
};

export const JSXSpreadAttribute = {
  type: "JSXSpreadAttribute",
  extends: ["Node"],
  fields: {
    argument: nodeOf("Expression"),
  },
  builder: [],
  visitor: [],
};

export const JSXText = {
  type: "JSXText",
  extends: ["Node"],
  fields: {
    value: typeOf("string"),
  },
  builder: [],
  visitor: [],
};
