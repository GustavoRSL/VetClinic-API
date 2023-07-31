import express from "express"

import { router as routeTutor } from "@/routes/tutors"
import { router as routePet } from "@/routes/pets"
import { errorMiddleware } from "@/middlewares/error"
import "express-async-errors"

import swaggerUi from "swagger-ui-express"
import swaggerDocument from "./swagger.json"

const app = express()

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// JSON
app.use(express.json())

// Routes
app.use("/api/v1", routeTutor)
app.use("/api/v1", routePet)

// Middlewares customs
app.use(errorMiddleware)

export default app
