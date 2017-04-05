// @flow
import {nodeOf} from "./_define";

export const MetaProperty = {
  type: "MetaProperty",
  extends: ["Expression"],
  fields: {
    meta: nodeOf("Identifier"),
    property: nodeOf("Identifier"),
  },
  builder: ["meta", "property"],
  visitor: ["meta", "property"],
};
