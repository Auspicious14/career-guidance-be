import express from "express";
import { createType, getTypes } from "../controllers/type";
import { authMiddleware } from "../middlewares/auth";

const router = express.Router();

router.post("/create/type", authMiddleware, createType);
router.get("/category/types", getTypes);

export default router;
