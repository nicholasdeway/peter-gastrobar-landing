'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === '/'
  const isCardapioPage = pathname === '/cardapio'

  const handleNavigation = (section: string) => {
    if (isHomePage) {
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else if (isCardapioPage && section === 'menu') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
      setTimeout(() => {
        const element = document.getElementById(section)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
    setIsOpen(false)
  }

  const navItems = [
    { label: 'Início', section: 'hero' },
    { label: 'Sobre', section: 'about' },
    { label: 'Cardápio', section: 'menu' },
    { label: 'Galeria', section: 'gallery' },
    { label: 'Localização', section: 'location' },
  ]

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-0 w-full bg-background/70 backdrop-blur-xl z-50 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-display font-bold text-primary hover:text-primary/80 transition-colors"
          >
            Peter Gastrobar
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.section)}
                className="
                  cursor-pointer text-sm text-foreground/70 hover:text-primary transition-colors
                  relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                  after:bg-primary after:transition-all after:duration-300 hover:after:w-full
                "
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex gap-3">
            <Link 
              href="/cardapio" 
              className="
                text-sm text-foreground/70 hover:text-primary transition-colors
                relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                after:bg-primary after:transition-all after:duration-300 hover:after:w-full
              "
            >
              Menu Completo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="md:hidden pb-4 border-t border-border"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.section)}
                className="cursor-pointer block w-full text-left py-2 text-foreground/70 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="flex gap-3 mt-4">
              <Link 
                href="/cardapio" 
                className="block py-2 text-foreground/70 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Menu Completo
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}