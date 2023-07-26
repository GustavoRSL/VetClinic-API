import { Request, Response } from "express";
import { Tutor } from "src/model/tutor";
import Data from "../tutors.json";

const getAllTutors = async (req: Request, res: Response) => {
  try {
    const data = Data;
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ msg: "Error!" });
  }
};

const createTutor = async (req: Request, res: Response) => {
  try {
    const newTutor: Tutor = req.body;
    const data = Data;
    data.push(newTutor);
    res.status(201).json(newTutor);
  } catch (error) {
    res.status(500).json({ msg: "Error!" });
  }
};

const updateTutor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { idRemove, ...Tutor } = req.body;
    if (!id) res.status(500).json({ msg: "Informe um ID!" });

    const data = Data;
    let newTutor: Tutor = data.find((tutor: Tutor) => tutor.id === +id);
    newTutor = { id, ...Tutor };

    data.splice(+id - 1, 1, newTutor);
    res.status(200).json(newTutor);
  } catch (error) {
    res.status(500).json({ msg: "Error!" });
  }
};

export { getAllTutors, createTutor, updateTutor };
