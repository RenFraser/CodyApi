import express, { Express } from "express";
import bedrock from "./routes/Bedrock";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env["PORT"] || 3000;

app.use((req, _, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use(
  cors({
    origin: "http://localhost:8080",
  }),
);

app.use("/api/bedrock", bedrock);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
