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

// const createTutor = async (req: Request, res: Response) => {
//   try {
//     const newTutor: Tutor = req.body;
//     const data = Data;
//     data.push(newTutor);
//     return res.status(201).json(newTutor);
//   } catch (error) {
//     return res.status(500).json({ msg: "Error!" });
//   }
// };

// const updateTutor = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const { idRemove, ...Tutor } = req.body;
//     if (!id) return res.status(500).json({ msg: "Informe um ID!" });

//     const data = Data;
//     let newTutor: Tutor = data.find((tutor: Tutor) => tutor.id === +id);
//     newTutor = { id, ...Tutor };

//     if (!newTutor) return res.status(404).json({ msg: "Tutor not found!" });

//     data.splice(+id - 1, 1, newTutor);
//     return res.status(200).json(newTutor);
//   } catch (error) {
//     return res.status(500).json({ msg: "Error!" });
//   }
// };

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

export { getAllTutors };
