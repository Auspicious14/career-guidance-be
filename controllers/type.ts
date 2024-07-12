import { Request, Response } from "express";
import Type from "../models/type";

export const createType = async (req: Request, res: Response) => {
  const { name, profession, steps } = req.body;

  try {
    const type = new Type({ name, profession, steps });
    await type.save();

    res.status(201).json({ data: type });
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

export const getTypeById = async (req: Request, res: Response) => {
  const type = await Type.findById(req.params.id);
  if (type) {
    res.json(type);
  } else {
    res.status(404).json({ message: "Type not found" });
  }
};

export const updateType = async (req: Request, res: Response) => {
  const type = await Type.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (type) {
    res.json(type);
  } else {
    res.status(404).json({ message: "Type not found" });
  }
};

export const deleteType = async (req: Request, res: Response) => {
  const type = await Type.findByIdAndDelete(req.params.id);
  if (type) {
    res.json({ message: "Type deleted" });
  } else {
    res.status(404).json({ message: "Type not found" });
  }
};
