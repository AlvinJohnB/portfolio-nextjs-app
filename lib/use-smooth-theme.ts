"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useSmoothTheme() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    // Add transition class to document
    document.documentElement.classList.add("theme-transitioning");

    // Change theme
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    // Remove transition class after animation completes
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transitioning");
      setIsTransitioning(false);
    }, 800); // Match this with CSS transition duration
  };

  return {
    theme: currentTheme,
    toggleTheme,
    mounted,
    isTransitioning,
  };
}
