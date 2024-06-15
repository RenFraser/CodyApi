import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { GetFileInput } from "@renfraser/cody-server";

dotenv.config();

const app: Express = express();
const port = process.env["PORT"] || 3000;

app.get("/", (_: Request, res: Response) => {
  const test: GetFileInput = { path: "" };
  console.log(test);
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
