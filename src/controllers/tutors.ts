import { Request, Response } from "express"
import { ITutor, TutorModel } from "@/model/tutor"
import "express-async-errors"
import { NotFoundError } from "@/helpers/api-erros"

const getAllTutors = async (req: Request, res: Response) => {
  const tutors: ITutor[] = await TutorModel.find()
  return res.status(200).json(tutors)
}

// Rever está opção, para ordenar as propriedades.
const createTutor = async (req: Request, res: Response) => {
  const createdTutor: ITutor = await TutorModel.create(req.body)
  return res.status(201).json(createdTutor)
}

const updateTutor = async (req: Request, res: Response) => {
  const { id } = req.params
  const updateData = req.body

  const updatedTutor: ITutor | null = await TutorModel.findByIdAndUpdate(
    id,
    updateData,
    {
      new: true,
    },
  )
  if (!updatedTutor) throw new NotFoundError("tutorID not found!")

  return res.status(200).json(updatedTutor)
}

const deleteTutor = async (req: Request, res: Response) => {
  const { id } = req.params
  const deletedTutor: ITutor | null = await TutorModel.findByIdAndRemove(id)

  if (!deletedTutor) throw new NotFoundError("Tutor not found!")

  return res.sendStatus(200)
}

export { getAllTutors, createTutor, updateTutor, deleteTutor }
