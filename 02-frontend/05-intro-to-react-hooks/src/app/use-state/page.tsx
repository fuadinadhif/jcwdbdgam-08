"use client"; // directive

import { useState } from "react";

export default function UseState() {
  // Original Variable
  // let counter = 0;

  // useState Manual
  // const state = useState(0); // return [variable_state, function_set_state]
  // const counter = state[0];
  // const setCounter = state[1];

  // useState Destructure
  const [counter, setCounter] = useState(0);

  return (
    <main className="grid h-screen place-items-center">
      <div>
        <p>{counter}</p>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Increment (+)
        </button>
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          Decrement (-)
        </button>
      </div>
    </main>
  );
}

/* ---------------------------------- NOTES --------------------------------- */
/*
1. Tampilan web tidak akan berubah jika tidak di-render ulang
2. React hanya akan melakukan re-render, ketika ada state yang nilainya berubah
3. State adalah variable spesial di React. Spesial karena setiap kali value-nya berubah, komponen akan di-render ulang
4. Cara membuat state adalah dengan menggunakan useState hook
*/
