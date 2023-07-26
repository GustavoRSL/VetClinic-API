import { Response, Request } from "express";
import { Pet } from "src/model/pet";
import { Tutor } from "src/model/tutor";
import Data from "../tutors.json";

const createPet = async (req: Request, res: Response) => {
  try {
    const { idTutor } = req.params;
    const pet = req.body;
    const newPet: Pet = pet;

    const data = Data;
    const tutor: Tutor = data.find((tutor) => tutor.id === +idTutor);

    tutor.pets.push(newPet);

    return res.status(200).json(tutor.pets);
  } catch (error) {
    return res.status(500).json({ msg: "Error!" });
  }
};

export { createPet };
