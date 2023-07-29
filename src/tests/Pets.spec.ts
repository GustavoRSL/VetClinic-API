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
let tutorId: string
let petId: string

const baseURL: string = "/api/v1"

// Route Pet - Post
describe("POST /pet/:tutorId", () => {
  it("Deve retornar status 201 e um JSON com Pet criado", async () => {
    // Criar um Tutor para que seja possível adicionar um Pet
    const tutorData = {
      name: "Jonas",
      phone: "85989323895",
      email: "jonas@paidepet.com",
      date_of_birth: new Date("1993-12-12 10:10"),
      zip_code: "61760000",
    }
    const auxReponse = await request(app)
      .post(`${baseURL}/tutor`)
      .send(tutorData)
    tutorId = auxReponse.body._id

    const petData = {
      name: "Gato",
      carry: "g",
      species: "cat",
      weight: 10,
      date_of_birth: new Date("1993-12-12 10:10"),
    }

    const response = await request(app)
      .post(`/api/v1/pet/${tutorId}`)
      .send(petData)

    petId = response.body._id

    expect(response.status).toEqual(201)
    expect(response.body._id).toBeDefined()
  })
})

// Route Pet - POST
describe("PUT /pet/:petId/tutor/:tutorId", () => {
  it("Deve retornar status 200 e verificar se propriedade _id foi criada.", async () => {
    const petDataUpdated = {
      name: "Alterado",
      carry: "g",
      species: "cat",
      weight: 10,
      date_of_birth: new Date("1993-12-12 10:10"),
    }

    const response = await request(app)
      .put(`${baseURL}/pet/${petId}/tutor/${tutorId}`)
      .send(petDataUpdated)

    expect(response.status).toEqual(200)
    expect(response.body.name).toEqual(petDataUpdated.name)
  })
})

// Route Pet - DELETE

describe("Delete /pet/:petId/tutor/:tutorId", () => {
  it("Deve retornar status 200 ao deletar documento", async () => {
    const response = await request(app).delete(
      `${baseURL}/pet/${petId}/tutor/${tutorId}`,
    )

    expect(response.status).toEqual(200)
    expect(response.body).toEqual({})
  })
})
