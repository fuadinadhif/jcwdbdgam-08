import type { Request, Response } from "express";
import { readData, writeData } from "../utils/io.js";

export async function getAllCashflow(request: Request, response: Response) {
  try {
    const cashflow = await readData();
    response.status(200).json(cashflow);
  } catch (err) {
    console.error(err);
    response
      .status(500)
      .json({ message: "Failed to read cashflow data", error: err });
  }
}
