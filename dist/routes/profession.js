"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profession_1 = require("../controllers/profession");
const auth_1 = require("../middlewares/auth");
const router = express_1.default.Router();
router.post("/create/profession", auth_1.authMiddleware, profession_1.createProfession);
router.get("/professions", profession_1.getProfessions);
router.get("/profession/:id", profession_1.getProfessionById);
/**
 * @swagger
 * components:
 *   schemas:
 *     Profession:
 *       type: object
 *       required:
 *         - name
 *         - category
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the profession
 *         name:
 *           type: string
 *           description: The name of the profession
 *         category:
 *           type: string
 *           description: The category of the profession
 *       example:
 *         id: d5fE_asz
 *         name: Doctor of Optometry
 *         category: Medical
 */
/**
 * @swagger
 * tags:
 *   name: Professions
 *   description: The professions managing API
 */
/**
 * @swagger
 * /professions:
 *   post:
 *     summary: Create a new profession
 *     tags: [Professions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Profession'
 *     responses:
 *       201:
 *         description: The profession was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profession'
 *       500:
 *         description: Some server error
 */
router.post("/create/profession", auth_1.authMiddleware, profession_1.createProfession);
/**
 * @swagger
 * /professions:
 *   get:
 *     summary: Returns the list of all the professions
 *     tags: [Professions]
 *     responses:
 *       200:
 *         description: The list of the professions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Profession'
 */
router.get("/professions", profession_1.getProfessions);
/**
 * @swagger
 * /professions/{id}:
 *   get:
 *     summary: Get the profession by id
 *     tags: [Professions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The profession id
 *     responses:
 *       200:
 *         description: The profession description by id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profession'
 *       404:
 *         description: The profession was not found
 */
router.get("/profession/:id", profession_1.getProfessionById);
/**
 * @swagger
 * /professions/{id}:
 *   put:
 *     summary: Update the profession by the id
 *     tags: [Professions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The profession id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Profession'
 *     responses:
 *       200:
 *         description: The profession was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profession'
 *       404:
 *         description: The profession was not found
 *       500:
 *         description: Some error happened
 */
router.put("/profession/:id", auth_1.authMiddleware, profession_1.updateProfession);
/**
 * @swagger
 * /professions/{id}:
 *   delete:
 *     summary: Remove the profession by id
 *     tags: [Professions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The profession id
 *     responses:
 *       200:
 *         description: The profession was deleted
 *       404:
 *         description: The profession was not found
 */
router.delete("/:id", auth_1.authMiddleware, profession_1.deleteProfession);
exports.default = router;
