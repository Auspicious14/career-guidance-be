"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_1 = require("../controllers/category");
const auth_1 = require("../middlewares/auth");
const router = express_1.default.Router();
router.post("/create/category", auth_1.authMiddleware, category_1.createCategory);
router.get("/categories", category_1.getCategories);
exports.default = router;
