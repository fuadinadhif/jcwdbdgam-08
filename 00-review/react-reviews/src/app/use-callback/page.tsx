"use client";

import { memo, useCallback, useState } from "react";

export default function UseCallback() {
  console.log("Parent rendered!");

  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);

  const sayHello = useCallback(() => {
    return "Hello";
  }, []);

  return (
    <main className="p-6 border border-white">
      <h2>Parent Component</h2>

      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>

      <p>Timer: {timer}</p>
      <button onClick={() => setTimer(timer + 1)}>Increment</button>

      <MemoizedChildren counter={counter} sayHello={sayHello} />
    </main>
  );
}

function Children(props) {
  console.log("Children rendered!");

  return (
    <div className="p-6 border border-white">
      <h2>Children Component</h2>

      <p>Counter: {props.counter}</p>
    </div>
  );
}

const MemoizedChildren = memo(Children);
