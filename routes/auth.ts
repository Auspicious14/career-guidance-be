import express from "express";
import { register, login } from "../controllers/auth";

const router = express.Router();

router.post("/signin", register);
router.post("/login", login);

export default router;
