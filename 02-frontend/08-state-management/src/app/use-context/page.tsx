"use client";

import React, { useContext } from "react";
import { CounterProvider, CounterContext } from "@/contexts/counter-context";

export default function Parent1() {
  const counterContext = useContext(CounterContext);
  return (
    <CounterProvider>
      <main>
        <div className="border p-4">
          <span>Parent 1:</span>
          <span>{counterContext?.counter}</span>

          <Parent2 />
        </div>
      </main>
    </CounterProvider>
  );
}

function Parent2() {
  const counterContext = useContext(CounterContext);

  return (
    <div className="border p-4">
      <span>Parent 2:</span>
      <span>{counterContext?.counter}</span>

      <Parent3 />
    </div>
  );
}

function Parent3() {
  const counterContext = useContext(CounterContext);

  return (
    <div className="border p-4">
      <span>Parent 3:</span>
      <span>{counterContext?.counter}</span>

      <Parent4 />
    </div>
  );
}

function Parent4() {
  return (
    <div className="border p-4">
      <span>Parent 4:</span>
      <span>-</span>

      <Parent5 />
    </div>
  );
}

function Parent5() {
  const counterContext = useContext(CounterContext);

  return (
    <div className="border p-4">
      <p>Parent 5: -</p>
      <button
        onClick={() => counterContext?.setCounter(counterContext.counter + 1)}
      >
        Increment
      </button>
      <button
        onClick={() => counterContext?.setCounter(counterContext.counter - 1)}
      >
        Decrement
      </button>
    </div>
  );
}
