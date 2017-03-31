// @flow

/**
 *
 */
export interface Node {
  +type: string;
  loc: SourceLocation | null;
  start: number;
  end: number;
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
