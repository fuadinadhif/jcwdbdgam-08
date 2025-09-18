"use client";

import { useState } from "react";

export default function FormAndInput() {
  const [newTask, setNewTask] = useState("");
  const [category, setCategory] = useState("");

  return (
    <main>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          // Kode untuk kirim data ke server

          console.log("Form submitted");
          console.log(newTask);
          console.log(category);

          setNewTask("");
          setCategory("");
        }}
      >
        <input
          type="text"
          placeholder="Input the new task..."
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="" disabled>
            -- Select Category --
          </option>
          <option value="1">Exercise</option>
          <option value="2">Learn</option>
          <option value="3">Entertaiment</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

/* ---------------------------------- NOTES --------------------------------- */
/*
1. Uncontrolled Input: Input yang tidak dikontrol oleh React
2. Controlled Input: Kebalikan uncontrolled
*/
