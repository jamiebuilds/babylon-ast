// @flow
import {aliasOf, oneOf} from "../_define";

export const VarianceKind = oneOf(
  "plus",
  "minus",
);

export const Variance = {
  type: "Variance",
  extends: ["Node"],
  fields: {
    kind: aliasOf("VarianceKind"),
  },
  builder: [],
  visitor: [],
};
