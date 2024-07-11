import { Request, Response } from "express";
import Category from "../models/category";

export const createCategory = async (req: Request, res: Response) => {
  const { name, description } = req.body;

  try {
    const category = new Category({ name, description });
    await category.save();

    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
