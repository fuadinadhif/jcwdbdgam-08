"use client";

import React, { useState } from "react";

export default function Parent1() {
  const [counter, setCounter] = useState(0);

  return (
    <main>
      <div className="border p-4">
        <span>Parent 1:</span>
        <span>{counter}</span>

        <Parent2 counter={counter} setCounter={setCounter} />
      </div>
    </main>
  );
}

function Parent2(props: {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="border p-4">
      <span>Parent 2:</span>
      <span>{props.counter}</span>

      <Parent3 counter={props.counter} setCounter={props.setCounter} />
    </div>
  );
}

function Parent3(props: {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="border p-4">
      <span>Parent 3:</span>
      <span>{props.counter}</span>

      <Parent4 counter={props.counter} setCounter={props.setCounter} />
    </div>
  );
}

function Parent4(props: {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="border p-4">
      <span>Parent 4:</span>
      <span>-</span>

      <Parent5 counter={props.counter} setCounter={props.setCounter} />
    </div>
  );
}

function Parent5(props: {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="border p-4">
      <p>Parent 5: -</p>
      <button onClick={() => props.setCounter(props.counter + 1)}>
        Increment
      </button>
      <button onClick={() => props.setCounter(props.counter - 1)}>
        Decrement
      </button>
    </div>
  );
}
