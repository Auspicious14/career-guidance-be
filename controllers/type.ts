import { Request, Response } from "express";
import Type from "../models/type";

export const createType = async (req: Request, res: Response) => {
  const { name, profession, steps } = req.body;

  try {
    const type = new Type({ name, profession, steps });
    await type.save();

    res.status(201).json(type);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getTypes = async (req: Request, res: Response) => {
  try {
    const types = await Type.find().populate("profession");
    res.json(types);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
