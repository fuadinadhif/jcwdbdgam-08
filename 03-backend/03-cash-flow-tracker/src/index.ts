import express from "express";
import type { Application, Request, Response } from "express";

import cashflowRoutes from "./routes/cash-flow.route.js";

import { notFound } from "./middlewares/not-found.middleware.js";

const PORT: number = 8000;
const app: Application = express();

app.get("/health", (request: Request, response: Response) => {
  response.status(200).send("<h1>API is running smoothly</h1>");
});

app.use("/cashflow", cashflowRoutes);

app.use(notFound);

app.listen(PORT, () => {
  console.info(`Server is listening on port: ${PORT}`);
});
