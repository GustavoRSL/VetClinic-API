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

export { getAllTutors, createTutor };
