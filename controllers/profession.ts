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

export const getProfessionById = async (req: Request, res: Response) => {
  const profession = await Profession.findById(req.params.id);
  if (profession) {
    res.json(profession);
  } else {
    res.status(404).json({ message: "Profession not found" });
  }
};

export const updateProfession = async (req: Request, res: Response) => {
  const profession = await Profession.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (profession) {
    res.json(profession);
  } else {
    res.status(404).json({ message: "Profession not found" });
  }
};

export const deleteProfession = async (req: Request, res: Response) => {
  const profession = await Profession.findByIdAndDelete(req.params.id);
  if (profession) {
    res.json({ message: "Profession deleted" });
  } else {
    res.status(404).json({ message: "Profession not found" });
  }
};
