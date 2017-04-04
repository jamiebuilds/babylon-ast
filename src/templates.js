// @flow
import {oneOf, objectOf, arrayOf, nodeOf, typeOf} from "./_validators";

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
  builder: [],
  visitor: [],
};

export const TemplateLiteral = {
  type: "TemplateLiteral",
  extends: ["Expression"],
  fields: {
    quasis: arrayOf(nodeOf("TemplateElement")),
    expressions: arrayOf(nodeOf("Expression")),
  },
  builder: [],
  visitor: [],
};

export const TaggedTemplateExpression = {
  type: "TaggedTemplateExpression",
  extends: ["Expression"],
  fields: {
    tag: nodeOf("Expression"),
    quasi: nodeOf("TemplateLiteral"),
  },
  builder: [],
  visitor: [],
};
