import { Request, Response } from "express";
import { ITutor, TutorModel } from "../model/Tutor";

const getAllTutors = async (req: Request, res: Response): Promise<Response> => {
  try {
    const tutors: ITutor[] = await TutorModel.find();
    return res.status(200).json(tutors);
  } catch (error) {
    return res.status(500).json({ error: "Error when searching for tutors" });
  }
};

// Rever está opção, para ordenar as propriedades.
const createTutor = async (req: Request, res: Response): Promise<Response> => {
  try {
    const tutor = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      date_of_birth: req.body.date_of_birth,
      zip_code: req.body.zip_code,
    };
    const newTutor = new TutorModel(tutor);
    const createdTutor: ITutor = await newTutor.save();

    const orderedObject = {
      _id: createdTutor._id,
      name: newTutor.name,
      phone: newTutor.phone,
      email: newTutor.email,
      date_of_birth: newTutor.date_of_birth,
      zip_code: newTutor.zip_code,
      pets: newTutor.pets,
      __v: newTutor.__v,
    };

    return res.status(201).json(orderedObject);
  } catch (error) {
    res.status(500).json({ error: "Error creating Tutor" });
  }
};

const updateTutor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedTutor = await TutorModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updateTutor)
      return res.status(404).json({ error: "Tutor not found!" });

    return res.status(200).json(updatedTutor);
  } catch (error) {
    res.status(500).json({ error: "Error updating Tutor" });
  }
};

// const deleteTutor = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     if (!id) return res.status(500).json({ msg: "Informe um ID!" });
//     const data = Data;
//     let deleteTutor: number = data.findIndex((el: Tutor) => el.id === +id);

//     if (deleteTutor === -1)
//       return res.status(404).json({ msg: "Tutor not found!" });

//     data.splice(deleteTutor, 1);
//     return res.sendStatus(200);
//   } catch (error) {
//     return res.status(500).json({ msg: "Error!" });
//   }
// };

export { getAllTutors, createTutor, updateTutor };
