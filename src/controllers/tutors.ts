import { Request, Response } from "express"
import { ITutor, TutorModel } from "../model/tutor"

const getAllTutors = async (req: Request, res: Response): Promise<Response> => {
  try {
    const tutors: ITutor[] = await TutorModel.find()
    return res.status(200).json(tutors)
  } catch (error) {
    return res.status(500).json({ error: "Error when searching for tutors" })
  }
}

// Rever está opção, para ordenar as propriedades.
const createTutor = async (req: Request, res: Response) => {
  try {
    const createdTutor: ITutor = await TutorModel.create(req.body)

    // Gambiarra?
    const orderedObject = {
      _id: createdTutor._id,
      name: createdTutor.name,
      phone: createdTutor.phone,
      email: createdTutor.email,
      date_of_birth: createdTutor.date_of_birth,
      zip_code: createdTutor.zip_code,
      pets: createdTutor.pets,
      __v: createdTutor.__v,
    }

    return res.status(201).json(orderedObject)
  } catch (error) {
    res.status(500).json({ error: "Error creating Tutor" })
  }
}

const updateTutor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const updateData = req.body

    const updatedTutor = await TutorModel.findByIdAndUpdate(id, updateData, {
      new: true,
    })
    if (!updateTutor) return res.status(404).json({ error: "Tutor not found!" })

    return res.status(200).json(updatedTutor)
  } catch (error) {
    res.status(500).json({ error: "Error updating Tutor" })
  }
}

const deleteTutor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const deletedTutor = await TutorModel.findByIdAndRemove(id)

    if (deletedTutor === null)
      return res.status(404).json({ error: "Tutor not found!" })

    return res.sendStatus(200)
  } catch (error) {
    res.status(500).json({ error: "Error deleting Tutor" })
  }
}

export { getAllTutors, createTutor, updateTutor, deleteTutor }
