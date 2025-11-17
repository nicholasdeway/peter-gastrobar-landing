'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    if (isDark) {
      html.classList.remove('dark')
      localStorage.theme = 'light'
    } else {
      html.classList.add('dark')
      localStorage.theme = 'dark'
    }
    setIsDark(!isDark)
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}