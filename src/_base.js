// @flow

import {oneOf, arrayOf, typeOf, objectOf, aliasOf} from "./_define";

export const SourcePosition = objectOf({
  line: typeOf("number"),
  column: typeOf("number"),
});

export const SourceLocation = objectOf({
  source: oneOf(typeOf("string"), typeOf("null")),
  start: aliasOf("SourcePosition"),
  end: aliasOf("SourcePosition"),
});

export const Comment = objectOf({
  type: oneOf("CommentBlock", "CommentLine"),
  value: typeOf("string"),
  start: typeOf("number"),
  end: typeOf("number"),
  loc: aliasOf("SourceLocation"),
});

export const Node = {
  fields: {
    loc: oneOf(aliasOf("SourceLocation"), typeOf("null")),
    start: oneOf(typeOf("number"), typeOf("null")),
    end: oneOf(typeOf("number"), typeOf("null")),

    leadingComments: oneOf(arrayOf(aliasOf("Comment")), typeOf("null")),
    trailingComments: oneOf(arrayOf(aliasOf("Comment")), typeOf("null")),
    innerComments: oneOf(arrayOf(aliasOf("Comment")), typeOf("null")),
  },
  defaults: {
    loc: null,
    start: null,
    end: null,
    leadingComments: null,
    trailingComments: null,
    innerComments: null,
  }
};

export const Expression = {
  extends: ["Node"],
};

export const Pattern = {
  extends: ["Node"],
};

export const Statement = {
  extends: ["Node"],
};

export const Declaration = {
  extends: ["Statement"],
};
