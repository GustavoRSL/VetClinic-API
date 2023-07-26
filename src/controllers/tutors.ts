import { Request, Response } from "express";
import { Tutor } from "src/model/tutor";
import Data from "../tutors.json";

const getAllTutors = async (req: Request, res: Response) => {
  try {
    const data = Data;
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).json({ msg: "Error!" });
  }
};

const createTutor = async (req: Request, res: Response) => {
  try {
    const newTutor: Tutor = req.body;
    const data = Data;
    data.push(newTutor);
    return res.status(201).json(newTutor);
  } catch (error) {
    return res.status(500).json({ msg: "Error!" });
  }
};

const updateTutor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { idRemove, ...Tutor } = req.body;
    if (!id) return res.status(500).json({ msg: "Informe um ID!" });

    const data = Data;
    let newTutor: Tutor = data.find((tutor: Tutor) => tutor.id === +id);
    newTutor = { id, ...Tutor };

    if (!newTutor) return res.send(404).json({ msg: "Tutor not found!" });

    data.splice(+id - 1, 1, newTutor);
    return res.status(200).send(newTutor);
  } catch (error) {
    return res.status(500).json({ msg: "Error!" });
  }
};

const deleteTutor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(500).json({ msg: "Informe um ID!" });
    const data = Data;
    let deleteTutor: Tutor = data.find((tutor: Tutor) => tutor.id === +id);

    if (!deleteTutor) return res.send(404).json({ msg: "Tutor not found!" });

    data.splice(+id - 1, 1);
    return res.status(200).send();
  } catch (error) {
    return res.status(500).json({ msg: "Error!" });
  }
};

export { getAllTutors, createTutor, updateTutor, deleteTutor };
