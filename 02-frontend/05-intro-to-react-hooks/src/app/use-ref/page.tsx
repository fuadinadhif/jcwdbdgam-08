"use client";

import { useRef } from "react";

export default function UseRef() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <video ref={videoRef} controls={false} autoPlay muted>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>
      <button
        onClick={() => {
          if (videoRef.current) {
            videoRef.current.play();
          }
        }}
      >
        Play
      </button>
      <button
        onClick={() => {
          videoRef.current?.pause();
        }}
      >
        Pause
      </button>
    </main>
  );
}
