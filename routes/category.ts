import express from "express";
import { createCategory, getCategories } from "../controllers/category";
import { authMiddleware } from "../middlewares/auth";

const router = express.Router();

router.post("/create/category", authMiddleware, createCategory);
router.get("/categories", getCategories);

export default router;
