import { Router } from "express";
import { getAllTutors, createTutor } from "../controllers/tutors";

const router = Router();

router.get("/tutors", getAllTutors);
router.post("/tutor", createTutor);

export { router };
