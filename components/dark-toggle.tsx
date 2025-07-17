"use client";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSmoothTheme } from "@/lib/use-smooth-theme";

export function DarkToggle() {
  const { theme, toggleTheme, mounted, isTransitioning } = useSmoothTheme();

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <Button variant="outline" size="icon" disabled>
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="icon"
      disabled={isTransitioning}
      className="m-1"
    >
      <Sun
        className={`theme-toggle-icon h-[1.2rem] w-[1.2rem] transition-all ${
          theme === "dark" ? "scale-0 rotate-90" : "scale-100 rotate-0"
        }`}
      />
      <Moon
        className={`theme-toggle-icon absolute h-[1.2rem] w-[1.2rem] transition-all ${
          theme === "dark" ? "scale-100 rotate-0" : "scale-0 -rotate-90"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
