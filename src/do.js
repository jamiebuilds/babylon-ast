// @flow
import {nodeOf} from "./_validators";

export const DoExpression = {
  type: "DoExpression",
  extends: ["Expression"],
  fields: {
    body: nodeOf("BlockStatement"),
  },
  builder: [],
  visitor: [],
};
