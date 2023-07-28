import { Response, Request } from "express"
import { IPet, PetModel } from "@/model/pet"
import { ITutor, TutorModel } from "@/model/tutor"
import { NotFoundError } from "@/helpers/api-erros"
import "express-async-errors"

const createPet = async (req: Request, res: Response) => {
  const { tutorId } = req.params

  const newPet: IPet = await PetModel.create(req.body)

  const updateTutor: ITutor | null = await TutorModel.findByIdAndUpdate(
    tutorId,
    {
      $push: { pets: newPet },
    },
    { new: true },
  )

  if (!updateTutor) throw new NotFoundError("Tutor not found!")

  return res.status(201).json(newPet)
}

const updatePet = async (req: Request, res: Response) => {
  const { petId, tutorId } = req.params

  const updatePet: IPet | null = await PetModel.findByIdAndUpdate(
    petId,
    req.body,
    {
      new: true,
    },
  )

  if (!updatePet) throw new NotFoundError("Pet not Found!")

  const updateTutor: ITutor | null = await TutorModel.findByIdAndUpdate(
    tutorId,
    { $set: { "pets.$[pet]": updatePet } },
    { new: true, arrayFilters: [{ "pet._id": petId }] },
  )

  if (!updateTutor) throw new NotFoundError("Tutor not Found!")

  return res.status(200).json(updatePet)
}

const deletePet = async (req: Request, res: Response) => {
  const { petId, tutorId } = req.params

  const deletePet: IPet | null = await PetModel.findByIdAndDelete(petId)

  if (!deletePet) throw new NotFoundError("Pet not Found!")

  const updateTutor = await TutorModel.findByIdAndUpdate(
    tutorId,
    { $pull: { pets: { _id: petId } } },
    { new: true },
  )

  if (!updateTutor) throw new NotFoundError("Tutor not Found!")

  return res.sendStatus(200)
}

export { createPet, updatePet, deletePet }
