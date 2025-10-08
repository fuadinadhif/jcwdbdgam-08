import express from "express";
import {
  createTodo,
  deleteAllTodos,
  deleteTodoById,
  getAllTodos,
  getTodoById,
  updateTodo,
} from "../controllers/todos.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router
  .route("/")
  .post(createTodo)
  .get(authMiddleware, getAllTodos)
  .delete(deleteAllTodos);
router.route("/:id").get(getTodoById).put(updateTodo).delete(deleteTodoById);

export default router;
