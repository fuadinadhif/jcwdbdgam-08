"use client";

import { useState } from "react";

export default function UseReducer() {
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);

  function increment() {
    setCounter(counter + 1);
    setHistory([...history, "Increment By 1"]);
  }

  function decrement() {
    setCounter(counter - 1);
    setHistory([...history, "Decrement By 1"]);
  }

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <p>{counter}</p>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <div>
        {history.map((value) => (
          <p>{value}</p>
        ))}
      </div>
    </main>
  );
}
