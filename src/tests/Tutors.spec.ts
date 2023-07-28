import app from "@/app"
import request from "supertest"
import mongoose from "mongoose"
import { config } from "@/config/config"

beforeAll(async () => {
  mongoose.connect(config.mongo.url, { retryWrites: true, w: "majority" })
})

afterAll(async () => {
  await mongoose.connection.close()
})

// Variável para salvar ID do teste de criação para ser deletado depois.
let auxID: string

// Route Tutors - GET
describe("GET /api/v1/tutors", () => {
  it("Deve retornar status 200 e um JSON com os Tutors", async () => {
    const response = await request(app).get("/api/v1/tutors")

    expect(response.status).toEqual(200)
    expect(Array.isArray(response.body)).toBe(true)
  })
})

// Route Tutors - POST
describe("POST /api/v1/tutorr", () => {
  it("Deve retornar status 201 e verificar se propriedade _id foi criada.", async () => {
    const tutorData = {
      name: "Jonas",
      phone: "85989323895",
      email: "jonas@paidepet.com",
      date_of_birth: new Date("1993-12-12 10:10"),
      zip_code: "61760000",
    }
    const response = await request(app).post("/api/v1/tutor").send(tutorData)

    auxID = response.body._id
    expect(response.status).toEqual(201)
    expect(response.body._id).toBeDefined()
  })
})

describe("POST /api/v1/tutor", () => {
  it("Deve retornar status 500, não foi criado documento!", async () => {
    const tutorData = {
      name: "Jonas",
      phone: "85989323895",
      date_of_birth: new Date("1993-12-12 10:10"),
      zip_code: "61760000",
    }

    const response = await request(app).post("/api/v1/tutor").send(tutorData)
    expect(response.status).toEqual(500)
    expect(response.body.message).toEqual("Internal Server Error")
  })
})

// Route Tutors - PUT
describe("POST /api/v1/tutor/:id", () => {
  it("Deve retornar status 200, objeto que foi atualizado", async () => {
    const tutorData = {
      name: "Gustavo",
    }

    const response = await request(app)
      .put("/api/v1/tutor/64c3f5e1e56dee3845151064")
      .send(tutorData)
    expect(response.status).toEqual(200)
    expect(response.body.name).toEqual(tutorData.name)
  })
})

// Route Tutors - Delete
describe("Delete /api/v1/tutor/:id", () => {
  it("Deve retornar status 201 ao deletar documento", async () => {
    const response = await request(app).delete(`/api/v1/tutor/${auxID}`)

    expect(response.status).toEqual(200)
    expect(response.body).toEqual({})
  })
})
