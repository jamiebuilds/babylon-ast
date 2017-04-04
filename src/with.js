// @flow
import {nodeOf} from "./_validators";

export const WithStatement = {
  type: "WithStatement",
  extends: ["Statement"],
  fields: {
    object: nodeOf("Expression"),
    body: nodeOf("Statement"),
  },
  builder: [],
  visitor: [],
};
