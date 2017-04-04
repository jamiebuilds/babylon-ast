// @flow
import {arrayOf, oneOf, nodeOf, typeOf} from "./_validators";

export const ArrayExpression = {
  type: "ArrayExpression",
  extends: ["Expression"],
  fields: {
    elements: arrayOf(oneOf(nodeOf("Expression"), nodeOf("SpreadElement"), typeOf("null"))),
  },
  builder: ["elements"],
  visitor: [],
};
