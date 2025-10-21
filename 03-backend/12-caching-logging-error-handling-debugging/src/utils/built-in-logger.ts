import fs from "node:fs/promises";
import path from "node:path";

type logType = "error" | "warn" | "info" | "general";

const logDirectory = path.resolve(process.cwd(), "logs");

export async function logger(message: string, type: logType) {
  // Ensure folder exist
  await fs.mkdir(logDirectory, { recursive: true });

  const logFile = path.join(logDirectory, `${type}.log`);
  const time = new Date().toISOString();

  await fs.appendFile(logFile, `[${time}]: ${message}\n`);

  if (process.env.NODE_ENV === "development") {
    switch (type) {
      case "error":
        console.error(message);
        break;
      case "warn":
        console.warn(message);
        break;
      case "info":
        console.info(message);
        break;
      default:
        console.log(message);
    }
  }
}

/* ---------------------------------- NOTES --------------------------------- */
// 1. Absolute Path => Absolute from the computer root
// 2. Relative Path => Relative from where the code is executed
