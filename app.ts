import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth";
import categoryRoutes from "./routes/category";
import professionRoutes from "./routes/profession";
import typeRoutes from "./routes/type";
import userRoutes from "./routes/user";
import infoRoutes from "./routes/info";
import { setupSwagger } from "./swagger";

const app = express();
dotenv.config();
const corsOptions = {
  origin: "*",
  credentials: false,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow_Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/auth", authRoutes);
app.use(categoryRoutes);
app.use(professionRoutes);
app.use(typeRoutes);
app.use(userRoutes);
app.use(userRoutes);
app.use(infoRoutes);
setupSwagger(app);

export default app;
