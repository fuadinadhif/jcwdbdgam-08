import type { Request, Response, NextFunction } from "express";

export function notFound(
  request: Request,
  response: Response,
  next: NextFunction
) {
  response
    .status(404)
    .json({ message: "The route you are looking for does not exist" });
}
