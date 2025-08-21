"use client";

import { useTheme } from "next-themes";
import { ButtonHTMLAttributes } from "react";

export default function ThemeToggle({
  onIcons,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  onIcons?: { light?: React.ReactNode; dark?: React.ReactNode };
}) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="inline-flex items-center justify-center rounded-xl border border-border px-3 py-2 text-sm hover:bg-muted transition-colors"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      {...props}
    >
      <span className="sr-only">Toggle theme</span>
      {isDark ? onIcons?.dark : onIcons?.light}
    </button>
  );
}
