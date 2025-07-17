"use client";

import { useEffect, useState } from "react";

export function TypingText() {
  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const textToType = " 👋 Hi, I'm Alvin Bregana — a Full Stack Web Developer";

  useEffect(() => {
    if (textIndex >= textToType.length) return;

    const interval = setInterval(() => {
      setText((prev) => prev + textToType[textIndex]);
      setTextIndex((prev) => prev + 1);
    }, 80);

    return () => clearInterval(interval);
  }, [textIndex, textToType]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <h1 className="text-xl lg:text-4xl font-medium lg:mb-4">
      {text}
      <span
        className={`${
          showCursor ? "opacity-100" : "opacity-0"
        } transition-opacity duration-100`}
      >
        |
      </span>
    </h1>
  );
}
