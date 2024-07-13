"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const type_1 = require("../controllers/type");
const auth_1 = require("../middlewares/auth");
const router = express_1.default.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Type:
 *       type: object
 *       required:
 *         - name
 *         - profession
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the type
 *         name:
 *           type: string
 *           description: The name of the type
 *         profession:
 *           type: string
 *           description: The profession of the type
 *       example:
 *         id: d5fE_asz
 *         name: Career Counseling
 *         profession: Doctor of Optometry
 */
/**
 * @swagger
 * tags:
 *   name: Types
 *   description: The types managing API
 */
/**
 * @swagger
 * /types:
 *   post:
 *     summary: Create a new type
 *     tags: [Types]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Type'
 *     responses:
 *       201:
 *         description: The type was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Type'
 *       500:
 *         description: Some server error
 */
router.post("/create/type", auth_1.authMiddleware, type_1.createType);
/**
 * @swagger
 * /types:
 *   get:
 *     summary: Returns the list of all the types
 *     tags: [Types]
 *     responses:
 *       200:
 *         description: The list of the types
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Type'
 */
router.get("/category/types", type_1.getTypes);
/**
 * @swagger
 * /types/{id}:
 *   get:
 *     summary: Get the type by id
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The type id
 *     responses:
 *       200:
 *         description: The type description by id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Type'
 *       404:
 *         description: The type was not found
 */
router.get("/category/:id", type_1.getTypeById);
/**
 * @swagger
 * /types/{id}:
 *   put:
 *     summary: Update the type by the id
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The type id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Type'
 *     responses:
 *       200:
 *         description: The type was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Type'
 *       404:
 *         description: The type was not found
 *       500:
 *         description: Some error happened
 */
router.put("/update/type", auth_1.authMiddleware, type_1.updateType);
/**
 * @swagger
 * /types/{id}:
 *   delete:
 *     summary: Remove the type by id
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The type id
 *     responses:
 *       200:
 *         description: The type was deleted
 *       404:
 *         description: The type was not found
 */
router.delete("/category/:id", auth_1.authMiddleware, type_1.deleteType);
exports.default = router;
