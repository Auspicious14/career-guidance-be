import express from "express";
import { register, login } from "../controllers/auth";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     SignUp:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - role
 *         - password
 *       properties:
 *         firstName:
 *           type: string
 *           description: The user's first name
 *         lastName:
 *           type: string
 *           description: The user's last name
 *         email:
 *           type: string
 *           description: The user's email
 *         role:
 *           type: string
 *           description: The user's role
 *         password:
 *           type: string
 *           description: The user's password
 *       example:
 *         firstName: john
 *         lastName: doe
 *         email: johndoe@gmail.com
 *         role: admin
 *         password: password123
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The user's username
 *         password:
 *           type: string
 *           description: The user's password
 *       example:
 *         email: johndoe@gmail.com
 *         password: password123
 */

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: The authentication managing API
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SignUp'
 *     responses:
 *       201:
 *         description: The user was successfully registered
 *       500:
 *         description: Some server error
 */
router.post("/signin", register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: The user was successfully logged in
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Some server error
 */
router.post("/login", login);
export default router;
