import { Document, InferSchemaType, Schema, model } from "mongoose"
import { IPet, petSchema } from "./pet"

interface ITutor extends Document {
  name: string
  phone: string
  email: string
  date_of_birth: Date
  zip_code: string
  pets: IPet[]
}

const tutorSchema = new Schema<ITutor>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    date_of_birth: { type: Date, required: true },
    zip_code: { type: String, required: true },
    pets: { type: [petSchema], default: [] },
  },
  { versionKey: false },
)

type Tutor = InferSchemaType<typeof tutorSchema>

const TutorModel = model<Tutor>("Tutor", tutorSchema)

export { ITutor, TutorModel }
