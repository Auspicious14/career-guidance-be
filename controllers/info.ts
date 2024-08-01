import { Request, Response } from "express";
import InfoModel from "../models/info";

export const getInfoByName = async (req: Request, res: Response) => {
  const { name } = req.params;

  try {
    const info = await InfoModel.findOne({ name });
    if (info) {
      res.json({ data: info });
    } else {
      res.status(404).json({ message: "Informaion not found" });
    }
  } catch (error) {
    res.json(error);
  }
};
