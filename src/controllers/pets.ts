// import { Response, Request } from "express";
// import { Pet } from "src/model/pet";
// import { Tutor } from "src/model/tutor";
// import Data from "../tutors.json";

// const createPet = async (req: Request, res: Response) => {
//   try {
//     const { tutorId } = req.params;
//     const pet = req.body;
//     const newPet: Pet = pet;

//     const data = Data;
//     const tutor: Tutor = data.find((tutor) => tutor.id === +tutorId);

//     tutor.pets.push(newPet);

//     return res.status(200).json(tutor.pets);
//   } catch (error) {
//     return res.status(500).json({ msg: "Error!" });
//   }
// };

// // Lógica para não altear ID.
// const updatePet = async (req: Request, res: Response) => {
//   try {
//     const { petId, tutorId } = req.params;
//     const pet = req.body;
//     if (!pet) return res.status(500).json({ msg: "Error!" });

//     const data = Data;
//     const tutor: Tutor = data.find((tutor) => tutor.id === +tutorId);

//     if (!tutor) return res.status(500).json({ msg: "Tutor not found!" });

//     let petIndex = tutor.pets.findIndex((pet: Pet) => pet.id === +petId);

//     if (petIndex === -1) return res.status(500).json({ msg: "Pet not found!" });

//     tutor.pets.splice(petIndex, 1, pet);

//     return res.status(200).json(pet);
//   } catch (error) {
//     return res.status(500).json({ msg: "Error!" });
//   }
// };

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

// export { createPet, updatePet, deletePet };
