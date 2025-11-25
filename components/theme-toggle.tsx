'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    <motion.button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="cursor-pointer fixed bottom-8 right-8 z-40 p-3 rounded-full bg-primary text-primary-foreground shadow-lg"
      whileTap={{ scale: 0.85 }}
      animate={{ rotate: isDark ? 360 : 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Modo animado com morph entre ícones */}
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <Sun size={22} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <Moon size={22} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}