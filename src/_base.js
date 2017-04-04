// @flow

import {oneOf, arrayOf, typeOf, objectOf} from "./_validators";

export const SourcePosition = objectOf({
  line: typeOf("number"),
  column: typeOf("number"),
});

export const SourceLocation = objectOf({
  source: oneOf(typeOf("string"), typeOf("null")),
  start: SourcePosition,
  end: SourcePosition,
});

export const Comment = objectOf({
  type: oneOf("CommentBlock", "CommentLine"),
  value: typeOf("string"),
  start: typeOf("number"),
  end: typeOf("number"),
  loc: SourceLocation,
});

export const Node = {
  fields: {
    loc: oneOf(SourceLocation, typeOf("null")),
    start: typeOf("number"),
    end: typeOf("number"),

    leadingComments: oneOf(arrayOf(Comment), typeOf("null")),
    trailingComments: oneOf(arrayOf(Comment), typeOf("null")),
    innerComments: oneOf(arrayOf(Comment), typeOf("null")),
  },
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
