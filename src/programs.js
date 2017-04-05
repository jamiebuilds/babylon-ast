// @flow
import {oneOf, arrayOf, nodeOf} from "./_define";

export const Program = {
  type: "Program",
  extends: ["Node"],
  fields: {
    sourceType: oneOf("script", "module"),
    body: arrayOf(oneOf(nodeOf("Statement"), nodeOf("ModuleDeclaration"))),
    directives: arrayOf(nodeOf("Directive")),
  },
  builder: ["body", "directives"],
  visitor: ["directives", "body"],
};
