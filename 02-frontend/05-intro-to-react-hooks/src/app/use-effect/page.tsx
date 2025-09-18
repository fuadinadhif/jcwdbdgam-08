"use client";

import { useEffect, useState } from "react";

export default function UseEffect() {
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      console.log("x: ", event.clientX);
      console.log("y: ", event.clientY);
      setCirclePos({ x: event.clientX, y: event.clientY });
    });
  }, []);

  return (
    <main className="min-h-screen flex justify-center items-center">
      <div
        className="h-10 w-10 bg-blue-500 rounded-full"
        style={{ position: "fixed", top: circlePos.y, left: circlePos.x }}
      ></div>
    </main>
  );
}
