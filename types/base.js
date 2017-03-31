// @flow

/**
 *
 */
export interface Node {
  +type: string;
  loc: SourceLocation | null;
  start: number;
  end: number;

  leadingComments?: Array<Comment> | null;
  trailingComments?: Array<Comment> | null;
  innerComments?: Array<Comment> | null;

  extra: {
    [key: string]: any,
  };
}

/**
 *
 */
export interface SourceLocation {
  source?: string | null;
  start: SourcePosition;
  end: SourcePosition;
}

/**
 *
 */
export interface SourcePosition {
  line: number;
  column: number;
}

/**
 *
 */
export interface Comment {
  type: "CommentBlock" | "CommentLine";
  value: string;
  start: number;
  end: number;
  loc: SourceLocation;
}

/**
 *
 */
export interface Expression extends Node {}

/**
 *
 */
export interface Pattern extends Node {}

/**
 *
 */
export interface Statement extends Node {}

/**
 *
 */
export interface Declaration extends Statement {}
