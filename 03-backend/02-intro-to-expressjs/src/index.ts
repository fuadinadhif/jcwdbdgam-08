import express from "express";
import { readTodos, writeTodos } from "./utils/io.js";

const PORT: number = 8080;

const server = express();

server.use(express.json()); // Middleware agar request body bisa dibaca oleh Express.js

/* ---------------------------- Health Endpoints ---------------------------- */
server.get("/health", (request, response) => {
  response.status(200).json("API is running and okay!");
});

/* --------------------------- Articles Endpoints --------------------------- */
server.get("/articles", (request, response) => {
  response.status(200).json({ data: [] });
});
server.post("/articles", () => {});

/* ----------------------------- Todos Endpoints ---------------------------- */
server.get("/todos", async (request, response) => {
  const todos = await readTodos();
  response.status(200).json(todos);
});
server.post("/todos", async (request, response) => {
  const newTodo = request.body;
  const oldTodos = await readTodos();
  const updatedTodos = [...oldTodos, newTodo];

  await writeTodos(updatedTodos);

  response.status(201).json({ message: "Todo added!" });
});

server.listen(PORT, () => {
  console.info(`Application run on port: ${PORT}`);
});
