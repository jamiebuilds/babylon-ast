// @flow
import {oneOf, arrayOf, nodeOf} from "./_validators";

export const Arguments = arrayOf(oneOf(nodeOf("Expression"), nodeOf("SpreadElement")));

export const CallExpression = {
  type: "CallExpression",
  extends: ["Expression"],
  fields: {
    callee: nodeOf("Expression"),
    arguments: Arguments,
  },
  builder: [],
  visitor: [],
};

export const NewExpression = {
  type: "NewExpression",
  extends: ["Expression"],
  fields: {
    callee: nodeOf("Expression"),
    arguments: Arguments,
  },
  builder: [],
  visitor: [],
};
