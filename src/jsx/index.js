// @flow
import {oneOf, arrayOf, nodeOf, typeOf} from "../_validators";

export const JsxIdentifier = {
  type: "JsxIdentifier",
  extends: ["Expression"],
  fields: {
    name: typeOf("string"),
  },
  builder: [],
  visitor: [],
};

export const JsxNamespacedName = {
  type: "JsxNamespacedName",
  extends: ["Node"],
  fields: {
    namespace: nodeOf("JsxIdentifier"),
    name: nodeOf("JsxIdentifier"),
  },
  builder: [],
  visitor: [],
};

export const JsxAttribute = {
  type: "JsxAttribute",
  extends: ["Node"],
  fields: {
    name: oneOf(nodeOf("JsxIdentifier"), nodeOf("JsxNamespacedName")),
    value: oneOf(nodeOf("JsxElement"), nodeOf("StringLiteral"), nodeOf("JsxExpressionContainer"), typeOf("null")),
  },
  builder: [],
  visitor: [],
};

export const JsxClosingElement = {
  type: "JsxClosingElement",
  extends: ["Node"],
  fields: {
    name: oneOf(nodeOf("JsxIdentifier"), nodeOf("JsxMemberExpression")),
  },
  builder: [],
  visitor: [],
};

export const JsxOpeningElement = {
  type: "JsxOpeningElement",
  extends: ["Node"],
  fields: {
    name: oneOf(nodeOf("JsxIdentifier"), nodeOf("JsxMemberExpression")),
    selfClosing: typeOf("boolean"),
    attributes: arrayOf(oneOf(nodeOf("JsxAttribute"), nodeOf("JsxSpreadAttribute"))),
  },
  builder: [],
  visitor: [],
};

export const JsxElement = {
  type: "JsxElement",
  extends: ["Expression"],
  fields: {
    openingElement: nodeOf("JsxOpeningElement"),
    closingElement: oneOf(nodeOf("JsxClosingElement"), typeOf("null")),
    children: arrayOf(oneOf(nodeOf("JsxText"), nodeOf("JsxExpressionContainer"), nodeOf("JsxSpreadChild"), nodeOf("JsxElement"))),
  },
  builder: [],
  visitor: [],
};

export const JsxEmptyExpression = {
  type: "JsxEmptyExpression",
  extends: ["Expression"],
  builder: [],
  visitor: [],
};

export const JsxExpressionContainer = {
  type: "JsxExpressionContainer",
  extends: ["Node"],
  fields: {
    expression: nodeOf("Expression"),
  },
  builder: [],
  visitor: [],
};

export const JsxSpreadChild = {
  type: "JsxSpreadChild",
  extends: ["Node"],
  fields: {
    expression: nodeOf("Expression"),
  },
  builder: [],
  visitor: [],
};

export const JsxMemberExpression = {
  type: "JsxMemberExpression",
  extends: ["Expression"],
  fields: {
    object: oneOf(nodeOf("JsxMemberExpression"), nodeOf("JsxIdentifier")),
    property: nodeOf("JsxIdentifier"),
  },
  builder: [],
  visitor: [],
};

export const JsxSpreadAttribute = {
  type: "JsxSpreadAttribute",
  extends: ["Node"],
  fields: {
    argument: nodeOf("Expression"),
  },
  builder: [],
  visitor: [],
};

export const JsxText = {
  type: "JsxText",
  extends: ["Node"],
  fields: {
    value: typeOf("string"),
  },
  builder: [],
  visitor: [],
};
