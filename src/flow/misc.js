// @flow
import {nodeOf} from "../_validators";

export const QualifiedTypeIdentifier = {
  type: "QualifiedTypeIdentifier",
  extends: ["Node"],
  fields: {
    qualification: nodeOf("Identifier"),
    id: nodeOf("Identifier"),
  },
  builder: [],
  visitor: [],
};
