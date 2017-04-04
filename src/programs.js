// @flow
import {oneOf, arrayOf, nodeOf} from "./_validators";

export const Program = {
  type: "Program",
  extends: ["Node"],
  fields: {
    sourceType: oneOf("script", "module"),
    body: arrayOf(oneOf(nodeOf("Statement"), nodeOf("ModuleDeclaration"))),
    directives: arrayOf(nodeOf("Directive")),
  },
  builder: [],
  visitor: [],
};
