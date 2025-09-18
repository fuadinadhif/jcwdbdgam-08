"use client";

import { useState, useMemo } from "react";

export default function UseMemo() {
  const [counter, setCounter] = useState(0);
  const [bigCounter, setBigCounter] = useState(1_000_000_000);

  function expensiveCalculation(num: number) {
    let total = 0;

    for (let i = 0; i < num; i++) {
      total = total + i;
    }

    return total;
  }

  const expensiveResult = useMemo(
    () => expensiveCalculation(bigCounter),
    [bigCounter]
  );

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <div>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Add Counter</button>
      </div>

      <div>
        <p>{bigCounter}</p>
        <p>{expensiveResult}</p>
        <button onClick={() => setBigCounter(bigCounter + 1)}>
          Add Big Counter
        </button>
      </div>
    </main>
  );
}
