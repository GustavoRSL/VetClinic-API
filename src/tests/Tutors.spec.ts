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

const baseURL: string = "/api/v1"
// Variável para salvar ID do teste de criação para ser deletado depois.
let id: string

// Route Tutors - GET
describe("GET /tutors", () => {
  it("Deve retornar status 200 e um JSON com os Tutors", async () => {
    const response = await request(app).get(`${baseURL}/tutors`)

    expect(response.status).toEqual(200)
    expect(Array.isArray(response.body)).toBe(true)
  })
})

// Route Tutors - POST
describe("POST /tutor", () => {
  it("Deve retornar status 201 e verificar se propriedade _id foi criada.", async () => {
    const tutorData = {
      name: "Jonas",
      phone: "85989323895",
      email: "jonas@paidepet.com",
      date_of_birth: new Date("1993-12-12 10:10"),
      zip_code: "61760000",
    }
    const response = await request(app).post(`${baseURL}/tutor`).send(tutorData)

    id = response.body._id
    expect(response.status).toEqual(201)
    expect(response.body._id).toBeDefined()
  })
})

describe("POST /tutor", () => {
  it("Deve retornar status 500, não foi criado documento!", async () => {
    const tutorData = {
      name: "Jonas",
      phone: "85989323895",
      date_of_birth: new Date("1993-12-12 10:10"),
      zip_code: "61760000",
    }

    const response = await request(app).post(`${baseURL}/tutor`).send(tutorData)
    expect(response.status).toEqual(500)
    expect(response.body.message).toEqual("Internal Server Error")
  })
})

// Route Tutors - PUT
describe("POST /tutor/:id", () => {
  it("Deve retornar status 200, objeto que foi atualizado", async () => {
    const tutorData = {
      name: "Gustavo",
    }

    const response = await request(app)
      .put(`${baseURL}/tutor/${id}`)
      .send(tutorData)
    expect(response.status).toEqual(200)
    expect(response.body.name).toEqual(tutorData.name)
  })
})

// Route Tutors - Delete
describe("Delete /tutor/:id", () => {
  it("Deve retornar status 200 ao deletar documento", async () => {
    const response = await request(app).delete(`${baseURL}/tutor/${id}`)

    expect(response.status).toEqual(200)
    expect(response.body).toEqual({})
  })
})
