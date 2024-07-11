"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const type_1 = require("../controllers/type");
const auth_1 = require("../middlewares/auth");
const router = express_1.default.Router();
router.post("/create/type", auth_1.authMiddleware, type_1.createType);
router.get("/category/types", type_1.getTypes);
exports.default = router;
