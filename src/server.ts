import express, { Request, Response } from "express";
import { Router } from "express";
import dotenv from "dotenv";

dotenv.config();

import { router as tutors } from "./routes/tutors";

const app = express();
const port = process.env.PORT || 3000;
const router = Router();
app.use(express.json());

app.use("/api/v1", tutors);

app.listen(port, () => {
  console.log(`👂 Server is listening on http://localhost:${port} `);
});
