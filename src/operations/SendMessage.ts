import { Operation } from "@aws-smithy/server-common";
import {
  Message,
  Participant,
  SendMessageInput,
  SendMessageOutput,
} from "@renfraser/cody-server";
import { HandlerContext } from "../context/HandlerContext";

export const SendMessageOperation: Operation<
  SendMessageInput,
  SendMessageOutput,
  HandlerContext
> = async (
  input: SendMessageInput,
  _context: HandlerContext,
): Promise<SendMessageOutput> => {
  const history: Message[] = input.messages || [];
  const newMsg: Message = {
    participant: Participant.ASSISTANT,
    text: "Test",
  };
  return {
    messages: [...history, newMsg],
  };
};
