"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex h-6 w-6 items-center justify-center rounded-md border"
    >
      <span className="sr-only">Toggle mode</span>
      {theme !== "dark" ? <Moon /> : <Sun />}
    </button>
  )
}
