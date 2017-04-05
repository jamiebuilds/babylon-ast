// @flow
import {oneOf, nodeOf, typeOf} from "./_define";

export const ThrowStatement = {
  type: "ThrowStatement",
  extends: ["Statement"],
  fields: {
    argument: nodeOf("Expression"),
  },
  builder: ["argument"],
  visitor: ["argument"],
};

export const TryStatement = {
  type: "TryStatement",
  extends: ["Statement"],
  fields: {
    block: nodeOf("BlockStatement"),
    handler: oneOf(nodeOf("CatchClause"), typeOf("null")),
    finalizer: oneOf(nodeOf("BlockStatement"), typeOf("null")),
  },
  builder: ["block", "handler", "finalizer"],
  visitor: ["block", "handler", "finalizer"],
};

export const CatchClause = {
  type: "CatchClause",
  extends: ["Node"],
  fields: {
    param: nodeOf("Pattern"),
    body: nodeOf("BlockStatement"),
  },
  builder: ["param", "body"],
  visitor: ["param", "body"],
};
