// @flow
import {oneOf, arrayOf, nodeOf, typeOf} from "./_validators";

export const Method = {
  extends: ["Node"],
  fields: {
    id: oneOf(nodeOf("Identifier"), typeOf("null")),
    params: arrayOf(nodeOf("Pattern")),
    body: oneOf(nodeOf("BlockStatement"), nodeOf("Expression")),
    generator: typeOf("boolean"),
    async: typeOf("boolean"),
  },
  builder: [],
  visitor: [],
};
