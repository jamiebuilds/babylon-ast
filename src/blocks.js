// @flow
import {arrayOf, nodeOf} from "./_validators";

export const BlockStatement = {
  type: "BlockStatement",
  extends: ["Statement"],
  fields: {
    body: arrayOf(nodeOf("Statement")),
    directives: arrayOf(nodeOf("Directive")),
  },
  builder: [],
  visitor: [],
};
