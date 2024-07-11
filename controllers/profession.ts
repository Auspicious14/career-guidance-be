import { Request, Response } from "express";
import Profession from "../models/profession";

export const createProfession = async (req: Request, res: Response) => {
  const { name, category } = req.body;

  try {
    const profession = new Profession({ name, category });
    await profession.save();

    res.status(201).json(profession);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getProfessions = async (req: Request, res: Response) => {
  try {
    const professions = await Profession.find().populate("category");
    res.json(professions);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
