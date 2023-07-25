import { Router } from "express";
import { getAllTutors } from "../controllers/tutors";

const router = Router();

router.get("/tutors", getAllTutors);

export { router };
