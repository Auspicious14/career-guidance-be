import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from "../controllers/category";
import { authMiddleware } from "../middlewares/auth";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the category
 *         name:
 *           type: string
 *           description: The name of the category
 *         description:
 *           type: string
 *           description: The description of the category
 *       example:
 *         id: d5fE_asz
 *         name: Medical
 *         description: Medical career guidance
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     createCategory:
 *       type: object
 *       required:
 *         - name
 *         - description
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the category
 *         description:
 *           type: string
 *           description: The description of the category
 *       example:
 *         name: Medical
 *         description: Medical career guidance
 */

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: The categories managing API
 */

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createCategory'
 *     responses:
 *       201:
 *         description: The category was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       500:
 *         description: Some server error
 */
router.post("/create/category", authMiddleware, createCategory);

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Returns the list of all the categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: The list of the categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */
router.get("/categories", getCategories);

/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Get the category by id
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category id
 *     responses:
 *       200:
 *         description: The category description by id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: The category was not found
 */
router.get("/category/:id", getCategoryById);

/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     summary: Update the category by the id
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: The category was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: The category was not found
 *       500:
 *         description: Some error happened
 */
router.put("/category/:id", authMiddleware, updateCategory);

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Remove the category by id
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category id
 *     responses:
 *       200:
 *         description: The category was deleted
 *       404:
 *         description: The category was not found
 */
router.delete("/category/:id", authMiddleware, deleteCategory);

export default router;
