// @flow
import {typeOf} from "./_validators";

export const Identifier = {
  type: "Identifier",
  extends: ["Expression", "Pattern"],
  fields: {
    name: typeOf("string"),
  },
  builder: [],
  visitor: [],
};
