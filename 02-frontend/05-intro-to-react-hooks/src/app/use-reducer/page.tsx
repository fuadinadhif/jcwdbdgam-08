"use client";

import { useReducer } from "react";
import { counterReducer } from "./reducer";

export default function UseReducer() {
  const [state, dispatch] = useReducer(counterReducer, {
    counter: 0,
    history: [],
  });

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <p>{state.counter}</p>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>

      <div>
        {state.history.map((value) => (
          <p>{value}</p>
        ))}
      </div>
    </main>
  );
}
