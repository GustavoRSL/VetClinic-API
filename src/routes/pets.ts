import { createPet } from "../controllers/pets";
import { Router } from "express";

const router = Router();

router.post("/pet/:idTutor", createPet);

export { router };
