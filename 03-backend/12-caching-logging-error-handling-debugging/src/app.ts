import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { PrismaClient } from "./generated/prisma/index.js";
// import { logger } from "./utils/built-in-logger.js";
import { logger } from "./utils/winston-logger.js";

const PORT: number = 8000;
const app: Application = express();
const prisma = new PrismaClient();

app.get("/status", (request: Request, response: Response) => {
  response
    .status(200)
    .json({ message: "API is running!", uptime: process.uptime() });
});

app.get("/users", async (request: Request, response: Response) => {
  try {
    // working version
    // const users = await prisma.user.findMany();

    // error version
    const users = await prisma.invalidUser.findMany();
    response.status(200).json({ users });
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error(error.message);
      response
        .status(500)
        .json({ message: "General error. Good luck!", error: error.message });
    }
  }
});

app.listen(PORT, async () => {
  logger.info(`Server is listening on port: ${PORT}`);
});
