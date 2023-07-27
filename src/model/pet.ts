import { Document, InferSchemaType, Schema, model } from "mongoose"

interface IPet extends Document {
  name: string
  species: string
  carry: string
  weight: number
  date_of_birth: Date
}

const petSchema = new Schema<IPet>({
  name: { type: String, required: true },
  species: { type: String, required: true },
  carry: { type: String, required: true },
  weight: { type: Number, required: true },
  date_of_birth: { type: Date, required: true },
})

type Pet = InferSchemaType<typeof petSchema>

const PetModel = model<Pet>("Pet", petSchema)

export { IPet, PetModel, petSchema }
