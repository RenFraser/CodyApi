import { Operation } from "@aws-smithy/server-common";
import { SendTextInput, SendTextOutput } from "@renfraser/cody-server";
import { HandlerContext } from "../context/HandlerContext";

export const SendTextOperation: Operation<
  SendTextInput,
  SendTextOutput,
  HandlerContext
> = async (_input, _context) => {
  return {
    message: "test",
  };
};
