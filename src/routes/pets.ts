import { createPet, updatePet } from "../controllers/pets";
import { Router } from "express";

const router = Router();

router.post("/pet/:tutorId", createPet);
router.put("/pet/:petId/tutor/:tutorId", updatePet);

export { router };
