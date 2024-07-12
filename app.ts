import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
import categoryRoutes from "./routes/category";
import professionRoutes from "./routes/profession";
import typeRoutes from "./routes/type";
import userRoutes from "./routes/user";

dotenv.config();

const app = express();

app.use(express.json());

app.use(authRoutes);
app.use(categoryRoutes);
app.use(professionRoutes);
app.use(typeRoutes);
app.use(userRoutes);

export default app;
