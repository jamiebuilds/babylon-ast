// @flow
import {oneOf, nodeOf, typeOf} from "./_validators";

export const ThrowStatement = {
  type: "ThrowStatement",
  extends: ["Statement"],
  fields: {
    argument: nodeOf("Expression"),
  },
  builder: [],
  visitor: [],
};

export const CatchClause = {
  type: "CatchClause",
  extends: ["Node"],
  fields: {
    param: nodeOf("Pattern"),
    body: nodeOf("BlockStatement"),
  },
  builder: [],
  visitor: [],
};

export const TryStatement = {
  type: "TryStatement",
  extends: ["Statement"],
  fields: {
    block: nodeOf("BlockStatement"),
    handler: oneOf(nodeOf("CatchClause"), typeOf("null")),
    finalizer: oneOf(nodeOf("BlockStatement"), typeOf("null")),
  },
  builder: [],
  visitor: [],
};
