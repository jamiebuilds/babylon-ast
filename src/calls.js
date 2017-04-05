// @flow
import {aliasOf, oneOf, arrayOf, nodeOf} from "./_define";

export const Arguments = arrayOf(oneOf(nodeOf("Expression"), nodeOf("SpreadElement")));

export const CallExpression = {
  type: "CallExpression",
  extends: ["Expression"],
  fields: {
    callee: nodeOf("Expression"),
    arguments: aliasOf("Arguments"),
  },
  builder: ["callee", "arguments"],
  visitor: ["callee", "arguments"],
};

export const NewExpression = {
  type: "NewExpression",
  extends: ["Expression"],
  fields: {
    callee: nodeOf("Expression"),
    arguments: aliasOf("Arguments"),
  },
  builder: ["callee", "arguments"],
  visitor: ["callee", "arguments"],
};
