// @flow
import {oneOf} from "../_validators";

export const VarianceKind = oneOf(
  "plus",
  "minus",
);

export const Variance = {
  type: "Variance",
  extends: ["Node"],
  fields: {
    kind: VarianceKind,
  },
  builder: [],
  visitor: [],
};
