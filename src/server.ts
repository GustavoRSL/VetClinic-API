import express from "express";
import { Router, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const router = Router();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!!!");
});

app.listen(port, () => {
  console.log(`👂 Server is listening on http://localhost:${port}`);
});
