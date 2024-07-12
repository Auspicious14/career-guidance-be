import express from "express";
import {
  createType,
  deleteType,
  getTypeById,
  getTypes,
  updateType,
} from "../controllers/type";
import { authMiddleware } from "../middlewares/auth";

const router = express.Router();

router.post("/create/type", authMiddleware, createType);
router.put("/update/type", authMiddleware, updateType);
router.get("/category/types", getTypes);
router.get("/category/:id", getTypeById);
router.delete("/category/:id", authMiddleware, deleteType);

export default router;
