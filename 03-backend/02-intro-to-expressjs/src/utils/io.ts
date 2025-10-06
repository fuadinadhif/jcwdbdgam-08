import fs from "fs/promises";

interface ITodo {
  id: number;
  title: string;
  done: boolean;
}

export async function readTodos() {
  const todosJSON = await fs.readFile("data.json", "utf-8");
  const todos = JSON.parse(todosJSON);

  return todos;
}

export async function writeTodos(todos: ITodo[]) {
  await fs.writeFile("data.json", JSON.stringify(todos));
}
