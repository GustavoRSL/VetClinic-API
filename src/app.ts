import express from "express"

import { router as tutors } from "@/routes/tutors"
import { router as pets } from "@/routes/pets"
import { errorMiddleware } from "@/middlewares/error"
import "express-async-errors"

const app = express()

app.use(express.json())

// Routes
app.use("/api/v1", tutors)
app.use("/api/v1", pets)

// Middlewares
app.use(errorMiddleware)

export default app
