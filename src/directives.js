// @flow
import {nodeOf, typeOf} from "./_validators";

export const Directive = {
  type: "Directive",
  extends: ["Node"],
  fields: {
    value: nodeOf("DirectiveLiteral"),
  },
  builder: [],
  visitor: [],
};

export const DirectiveLiteral = {
  type: "DirectiveLiteral",
  extends: ["Node"],
  fields: {
    value: typeOf("string"),
  },
  builder: [],
  visitor: [],
};
