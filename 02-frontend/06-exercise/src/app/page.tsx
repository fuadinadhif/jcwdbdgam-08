"use client";

import { useState } from "react";

interface ITask {
  id: number;
  isDone: boolean;
  description: string;
  createdAt: Date;
  finishedAt?: Date;
}

const initialTasks: ITask[] = [
  {
    id: 3,
    isDone: false,
    description: "Review code and refactor",
    createdAt: new Date("2025-09-18T07:20:00Z"),
  },
  {
    id: 2,
    isDone: true,
    description: "Build a simple to-do app",
    createdAt: new Date("2025-09-10T10:30:00Z"),
    finishedAt: new Date("2025-09-12T15:45:00Z"),
  },
  {
    id: 1,
    isDone: false,
    description: "Learn TypeScript basics",
    createdAt: new Date("2025-09-15T09:00:00Z"),
  },
];

export default function Home() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={(event) => {
          event.preventDefault();

          setTasks([
            {
              id: tasks[0].id + 1,
              isDone: false,
              description: newTask,
              createdAt: new Date(),
            },
            ...tasks,
          ]);

          setNewTask("");
        }}
      >
        <input
          type="text"
          placeholder="Input new task..."
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button type="submit">Add New Task</button>
      </form>

      <ul>
        {tasks.map((element) => (
          <div key={element.id} className="flex gap-2">
            <input
              type="checkbox"
              checked={element.isDone}
              onChange={() => {
                setTasks((prev) => {
                  return prev.map((task) => {
                    if (task.id === element.id) {
                      return {
                        ...task,
                        isDone: !task.isDone,
                        finishedAt: task.finishedAt ? undefined : new Date(),
                      };
                    } else {
                      return task;
                    }
                  });
                });
              }}
            />
            <p>{element.description}</p>
          </div>
        ))}
      </ul>
    </main>
  );
}
