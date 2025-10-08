import type { Request, Response, NextFunction } from "express";

export function authMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  console.log("Hellooooo. Middleware activated!");

  const authPassword = request.headers.authorization;

  if (!authPassword) {
    return response.status(401).json({ message: "Unauthenticated" });
  }

  if (authPassword !== "password1234") {
    return response.status(403).json({ message: "Forbidden" });
  }

  next();
}
