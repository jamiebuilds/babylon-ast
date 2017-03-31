// @flow
import type {Node} from "../base";
import type {Identifier} from "../identifiers";

/**
 *
 */
export interface QualifiedTypeIdentifier extends Node {
  type: "QualifiedTypeIdentifier";
  qualification: Identifier;
  id: Identifier;
}
