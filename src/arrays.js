// @flow
import {arrayOf, oneOf, nodeOf, typeOf} from "./_define";

export const ArrayExpression = {
  type: "ArrayExpression",
  extends: ["Expression"],
  fields: {
    elements: arrayOf(oneOf(nodeOf("Expression"), nodeOf("SpreadElement"), typeOf("null"))),
  },
  builder: ["elements"],
  visitor: ["elements"],
};
