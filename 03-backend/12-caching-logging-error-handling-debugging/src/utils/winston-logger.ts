import path from "path";
import { createLogger, format, transports } from "winston";

const logFormat = format.printf(({ timestamp, level, message }) => {
  return `[${timestamp}] [${level}]: ${message}`;
});

export const logger = createLogger({
  level: "info",
  format: format.combine(import path from "path";
import { createLogger, format, transports } from "winston";

const logFormat = format.printf(({ timestamp, level, message }) => {
  return `[${timestamp}] [${level}]: ${message}`;
});

export const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DDTHH:mm:ss.SSSZ" }),
    format.errors({ stack: true }),
    format.json(),
    logFormat
  ),
  transports: [
    new transports.File({ filename: path.resolve("logs/info.log") }),
  ],
});

    format.timestamp({ format: "YYYY-MM-DDTHH:mm:ss.SSSZ" }),
    format.errors({ stack: true }),
    format.json(),
    logFormat
  ),
  transports: [
    new transports.File({ filename: path.resolve("logs/info.log") }),
  ],
});
