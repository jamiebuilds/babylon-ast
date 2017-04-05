// @flow
import {nodeOf} from "./_define";

export const WithStatement = {
  type: "WithStatement",
  extends: ["Statement"],
  fields: {
    object: nodeOf("Expression"),
    body: nodeOf("Statement"),
  },
  builder: ["object", "body"],
  visitor: ["object", "body"],
};
