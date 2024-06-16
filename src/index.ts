import express, { Express } from "express";
import bedrock from "./routes/Bedrock";

const app: Express = express();
const port = process.env["PORT"] || 3000;

app.use((req, _, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use("/api/bedrock", bedrock);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
