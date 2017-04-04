// @flow
import {nodeOf} from "./_validators";

export const MetaProperty = {
  type: "MetaProperty",
  extends: ["Expression"],
  fields: {
    meta: nodeOf("Identifier"),
    property: nodeOf("Identifier"),
  },
  builder: [],
  visitor: [],
};
