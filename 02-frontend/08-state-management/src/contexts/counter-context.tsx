"use client";

import React, { createContext, useState } from "react";

interface ICounterContext {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

export const CounterContext = createContext<ICounterContext | undefined>(
  undefined
);

export function CounterProvider(props: { children: React.ReactNode }) {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {props.children}
    </CounterContext.Provider>
  );
}
