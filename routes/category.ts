import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from "../controllers/category";
import { authMiddleware } from "../middlewares/auth";

const router = express.Router();

router.post("/create/category", authMiddleware, createCategory);
router.get("/categories", getCategories);
router.get("/category/:id", getCategoryById);
router.put("/category/:id", authMiddleware, updateCategory);
router.delete("/category/:id", authMiddleware, deleteCategory);

export default router;
