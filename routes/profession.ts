import express from "express";
import {
  createProfession,
  getProfessionById,
  getProfessions,
} from "../controllers/profession";
import { authMiddleware } from "../middlewares/auth";

const router = express.Router();

router.post("/create/profession", authMiddleware, createProfession);
router.get("/professions", getProfessions);
router.get("/profession/:id", getProfessionById);

export default router;
