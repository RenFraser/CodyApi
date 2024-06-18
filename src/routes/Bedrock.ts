import express, { Request, Response } from "express";
import { getSendMessageHandler } from "@renfraser/cody-server";
import { SendMessageOperation } from "../operations/SendMessage";
import { convertRequest } from "@aws-smithy/server-node";
import { ResponseAdapter } from "../ResponseAdaptor";

const router = express.Router();

router.post("/message", async (req: Request, res: Response) => {
  req.url = req.originalUrl;

  const request = convertRequest(req);
  const handler = getSendMessageHandler(SendMessageOperation);
  const response = await handler.handle(request, { user: undefined });

  const mutator = new ResponseAdapter(res);
  mutator.adapt(response);

  res.send(response.body);
});

export default router;
