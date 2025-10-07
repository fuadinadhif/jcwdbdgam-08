import express from "express";
import {
  createTodo,
  deleteAllTodos,
  deleteTodoById,
  getAllTodos,
  getTodoById,
  updateTodo,
} from "../controllers/todos.controller.js";

const router = express.Router();

router.route("/").post(createTodo).get(getAllTodos).delete(deleteAllTodos);
router
  .route("/:id")
  .get(getTodoById)
  .put(updateTodo)
  .delete(deleteTodoById);

export default router;
