// @flow
import {nodeOf, typeOf} from "./_define";

export const Directive = {
  type: "Directive",
  extends: ["Node"],
  fields: {
    value: nodeOf("DirectiveLiteral"),
  },
  builder: ["value"],
  visitor: ["value"],
};

export const DirectiveLiteral = {
  type: "DirectiveLiteral",
  extends: ["Node"],
  fields: {
    value: typeOf("string"),
  },
  builder: ["value"],
  visitor: ["value"],
};
