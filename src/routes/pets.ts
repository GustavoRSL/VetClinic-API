import { Router } from "express";
import { createPet, updatePet } from "../controllers/pets";

const router = Router();

router.post("/pet/:tutorId", createPet);
router.put("/pet/:petId/tutor/:tutorId", updatePet);
// router.delete("/pet/:petId/tutor/:tutorId", deletePet);

export { router };
