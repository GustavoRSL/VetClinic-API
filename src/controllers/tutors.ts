import { Request, Response } from "express";
import Data from "../tutors.json";

const getAllTutors = async (req: Request, res: Response) => {
  try {
    const data = Data;
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ msg: "Error!" });
  }
};

export { getAllTutors };
