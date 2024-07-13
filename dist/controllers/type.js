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
exports.deleteType = exports.updateType = exports.getTypeById = exports.getTypes = exports.createType = void 0;
const type_1 = __importDefault(require("../models/type"));
const createType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, profession, steps } = req.body;
    try {
        const type = new type_1.default({ name, profession, steps });
        yield type.save();
        res.status(201).json({ data: type });
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});
exports.createType = createType;
const getTypes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const types = yield type_1.default.find().populate("profession");
        res.json(types);
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});
exports.getTypes = getTypes;
const getTypeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const type = yield type_1.default.findById(req.params.id);
    if (type) {
        res.json(type);
    }
    else {
        res.status(404).json({ message: "Type not found" });
    }
});
exports.getTypeById = getTypeById;
const updateType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const type = yield type_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (type) {
        res.json(type);
    }
    else {
        res.status(404).json({ message: "Type not found" });
    }
});
exports.updateType = updateType;
const deleteType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const type = yield type_1.default.findByIdAndDelete(req.params.id);
    if (type) {
        res.json({ message: "Type deleted" });
    }
    else {
        res.status(404).json({ message: "Type not found" });
    }
});
exports.deleteType = deleteType;
