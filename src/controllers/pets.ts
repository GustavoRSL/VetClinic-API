import { Response, Request } from "express";
import { IPet, PetModel } from "../model/Pet";
import { ITutor, TutorModel } from "../model/Tutor";

const createPet = async (req: Request, res: Response) => {
  try {
    const { tutorId } = req.params;
    const newPet: IPet = await PetModel.create(req.body);

    const updateTutor: ITutor = await TutorModel.findByIdAndUpdate(
      tutorId,
      {
        $push: { pets: newPet },
      },
      { new: true }
    );

    if (!updateTutor)
      return res.status(404).json({ error: "Tutor not found!" });

    return res.status(201).json(newPet);
  } catch (error) {
    res.status(500).json({ error: "Error creating Pet!" });
  }
};

const updatePet = async (req: Request, res: Response) => {
  try {
    const { petId, tutorId } = req.params;
    const updatePet: IPet = await PetModel.findByIdAndUpdate(petId, req.body, {
      new: true,
    });

    if (!updatePet) return res.status(404).json({ error: "Pet not Found!" });

    const updateTutor: ITutor = await TutorModel.findByIdAndUpdate(
      tutorId,
      { $set: { "pets.$[pet]": updatePet } },
      { new: true, arrayFilters: [{ "pet._id": petId }] }
    );

    return res.status(200).json(updatePet);
  } catch (error) {
    res.status(500).json({ error: "Error updating Pet!" });
  }
};

// const deletePet = async (req: Request, res: Response) => {
//   try {
//     const { petId, tutorId } = req.params;
//     const data = Data;

//     const tutor: Tutor = data.find((tutor) => tutor.id === +tutorId);
//     if (!tutor) return res.status(500).json({ msg: "Tutor not found!" });

//     let petIndex = tutor.pets.findIndex((pet: Pet) => pet.id === +petId);
//     if (petIndex === -1) return res.status(500).json({ msg: "Pet not found!" });

//     tutor.pets.splice(petIndex, 1);

//     return res.sendStatus(200);
//   } catch (error) {}
// };

export { createPet, updatePet };
