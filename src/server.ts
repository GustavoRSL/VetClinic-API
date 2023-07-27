import express from "express"
import mongoose from "mongoose"

import { router as tutors } from "@/routes/tutors"
import { router as pets } from "@/routes/pets"
import { config } from "@/config/config"

// Connect To MongoDB
mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    console.log("🎲 Connected to MongoDB Sucessfull!")
    StartServer()
  })
  .catch((error) => {
    console.log(error)
  })

const StartServer = () => {
  try {
    const app = express()
    const port = config.server.port || 3000

    app.use(express.json())
    app.use("/api/v1", tutors)
    app.use("/api/v1", pets)

    app.listen(port, () => {
      console.log(`👂 Server is listening on http://localhost:${port} `)
    })
  } catch (error) {
    console.log(error)
  }
}
