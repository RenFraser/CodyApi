import express, { Request, Response } from "express";
import { getSendTextHandler } from "@renfraser/cody-server";
import { SendTextOperation } from "../operations/SendText";
import { convertRequest } from "@aws-smithy/server-node";

const router = express.Router();

router.post("/text", async (req: Request, res: Response) => {
  req.url = req.originalUrl;

  const request = convertRequest(req);
  const handler = getSendTextHandler(SendTextOperation);
  const response = await handler.handle(request, { user: undefined });


  res.status(response.statusCode)
  Object.entries(response.headers).forEach(([key, value]) => res.setHeader(key, value));
  res.send(response.body);
});

export default router;
