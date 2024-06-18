import { Operation } from "@aws-smithy/server-common";
import { SendMessageInput, SendMessageOutput } from "@renfraser/cody-server";
import { HandlerContext } from "../context/HandlerContext";

export const SendMessageOperation: Operation<
  SendMessageInput,
  SendMessageOutput,
  HandlerContext
> = async (
  _input: SendMessageInput,
  _context: HandlerContext,
): Promise<SendMessageOutput> => {
  return {
    messages: [
      { text: "Hi!" },
      {
        text: "Test",
      },
    ],
  };
};
