// @flow
import {oneOf, objectOf, arrayOf, nodeOf, typeOf} from "./_define";

export const TaggedTemplateExpression = {
  type: "TaggedTemplateExpression",
  extends: ["Expression"],
  fields: {
    tag: nodeOf("Expression"),
    quasi: nodeOf("TemplateLiteral"),
  },
  builder: ["tag", "quasi"],
  visitor: ["tag", "quasi"],
};

export const TemplateLiteral = {
  type: "TemplateLiteral",
  extends: ["Expression"],
  fields: {
    quasis: arrayOf(nodeOf("TemplateElement")),
    expressions: arrayOf(nodeOf("Expression")),
  },
  builder: ["quasis", "expressions"],
  visitor: ["quasis", "expressions"],
};

export const TemplateElement = {
  type: "TemplateElement",
  extends: ["Node"],
  fields: {
    tail: typeOf("boolean"),
    value: objectOf({
      cooked: oneOf(typeOf("string"), typeOf("null")),
      raw: typeOf("string"),
    }),
  },
  builder: ["value", "tail"],
  visitor: [],
};
