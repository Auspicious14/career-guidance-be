import express from "express";
import { getInfoByName } from "../controllers/info";

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
 * /info/{name}:
 *   get:
 *     summary: Get the category by id
 *     tags: [Info]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The category name to fetch info detail
 *     responses:
 *       200:
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Info'
 *       404:
 *         description: The info was not found
 */
router.get("/info/:name", getInfoByName);

export default router;
