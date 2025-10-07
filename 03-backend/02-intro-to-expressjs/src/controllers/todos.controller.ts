import type { Request, Response } from "express";
import { readTodos, writeTodos } from "../utils/io.js";

/* -------------------------------- POST TODO ------------------------------- */
export async function createTodo(request: Request, response: Response) {
  const newTodo = request.body;
  const oldTodos = await readTodos();
  const updatedTodos = [...oldTodos, newTodo];

  await writeTodos(updatedTodos);

  response.status(201).json({ message: "Todo added!" });
}

/* ------------------------------ GET ALL TODOS ----------------------------- */
export async function getAllTodos(request: Request, response: Response) {
  const todos = await readTodos();
  response.status(200).json(todos);
}

/* ----------------------------- GET TODO BY ID ----------------------------- */
export async function getTodoById(request: Request, response: Response) {
  const todos = await readTodos();
  const todoId = request.params.id;
  const result = todos.find((element: { id: number }) => {
    return element.id === Number(todoId);
  });

  if (!result) {
    return response
      .status(404)
      .json({ message: `Todo with id: ${todoId} does not exist` });
  }

  response.status(200).json(result);
}

/* ---------------------------- UPDATE / PUT TODO --------------------------- */
export async function updateTodo(request: Request, response: Response) {
  const todos = await readTodos();
  const updatedId = Number(request.params.id);
  const updatedData = request.body;
  const updatedIndex = todos.findIndex((element: { id: number }) => {
    return element.id === updatedId;
  });

  if (updatedIndex === -1) {
    return response
      .status(404)
      .json({ message: `Todo with id: ${updatedId} does not exist` });
  }

  todos[updatedIndex] = { ...todos[updatedIndex], ...updatedData };
  await writeTodos(todos);

  response.status(200).json({ message: "Todo updated!" });
}

/* ---------------------------- DELETE ALL TODOS ---------------------------- */
export async function deleteAllTodos(request: Request, response: Response) {
  const done = Boolean(Number(request.query.done));
  const todos = await readTodos();

  if (done === undefined) {
    await writeTodos([]);
    return response.status(200).json({ message: "All todos has been deleted" });
  }

  let filteredTodos: { id: number; title: string; done: boolean }[] = [];

  if (done === true) {
    filteredTodos = todos.filter((element: { done: boolean }) => {
      return element.done === false;
    });
  }

  if (done === false) {
    filteredTodos = todos.filter((element: { done: boolean }) => {
      return element.done === true;
    });
  }

  await writeTodos(filteredTodos);

  response
    .status(200)
    .json({ message: `Todos with done: ${done} have been deleted` });
}

/* ---------------------------- DELETE TODO BY ID --------------------------- */
export async function deleteTodoById(request: Request, response: Response) {
  const todos = await readTodos();
  const deletedId = Number(request.params.id);
  const deletedIndex = todos.findIndex((element: { id: number }) => {
    return element.id === deletedId;
  });

  if (deletedIndex === -1) {
    return response
      .status(404)
      .json({ message: `Todo with id: ${deletedId} does not exist` });
  }

  const updatedTodos = todos.filter((element: { id: number }) => {
    return element.id !== deletedId;
  });

  await writeTodos(updatedTodos);

  response
    .status(200)
    .json({ message: `Todo with id: ${deletedId} has been deleted!` });
}
