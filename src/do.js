// @flow
import {nodeOf} from "./_define";

export const DoExpression = {
  type: "DoExpression",
  extends: ["Expression"],
  fields: {
    body: nodeOf("BlockStatement"),
  },
  builder: ["body"],
  visitor: ["body"],
};
