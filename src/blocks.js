// @flow
import {arrayOf, nodeOf} from "./_define";

export const BlockStatement = {
  type: "BlockStatement",
  extends: ["Statement"],
  fields: {
    body: arrayOf(nodeOf("Statement")),
    directives: arrayOf(nodeOf("Directive")),
  },
  builder: ["body", "directives"],
  visitor: ["directives", "body"],
};
