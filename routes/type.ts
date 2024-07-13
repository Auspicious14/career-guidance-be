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
router.post("/create/type", authMiddleware, createType);

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
router.get("/category/types", getTypes);

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
router.get("/category/:id", getTypeById);

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
router.put("/update/type", authMiddleware, updateType);

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
router.delete("/category/:id", authMiddleware, deleteType);

export default router;
