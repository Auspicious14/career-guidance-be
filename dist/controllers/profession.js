"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProfession = exports.updateProfession = exports.getProfessionById = exports.getProfessions = exports.createProfession = void 0;
const profession_1 = __importDefault(require("../models/profession"));
const createProfession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, category } = req.body;
    try {
        const profession = new profession_1.default({ name, category });
        yield profession.save();
        res.status(201).json(profession);
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});
exports.createProfession = createProfession;
const getProfessions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const professions = yield profession_1.default.find().populate("category");
        res.json(professions);
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});
exports.getProfessions = getProfessions;
const getProfessionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const profession = yield profession_1.default.findById(req.params.id);
    if (profession) {
        res.json(profession);
    }
    else {
        res.status(404).json({ message: "Profession not found" });
    }
});
exports.getProfessionById = getProfessionById;
const updateProfession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const profession = yield profession_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (profession) {
        res.json(profession);
    }
    else {
        res.status(404).json({ message: "Profession not found" });
    }
});
exports.updateProfession = updateProfession;
const deleteProfession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const profession = yield profession_1.default.findByIdAndDelete(req.params.id);
    if (profession) {
        res.json({ message: "Profession deleted" });
    }
    else {
        res.status(404).json({ message: "Profession not found" });
    }
});
exports.deleteProfession = deleteProfession;
