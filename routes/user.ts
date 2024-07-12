import express from "express";
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/user";
import { authMiddleware } from "../middlewares/auth";

const router = express.Router();

router.get("/users", authMiddleware, getAllUsers);
router.get("/user/:id", authMiddleware, getUserById);
router.put("/user/:id", authMiddleware, updateUser);
router.delete("/user/:id", authMiddleware, deleteUser);

export default router;
