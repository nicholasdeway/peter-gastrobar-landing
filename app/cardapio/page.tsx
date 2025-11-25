'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Navigation from '@/components/navigation'
import ThemeToggle from '@/components/theme-toggle'
import { menuData } from '@/data/menu'
import MenuCategoryComponent from '@/components/menu-category'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function CardapioPage() {
  const [activeCategory, setActiveCategory] = useState<string>(menuData[0].id)
  const pathname = usePathname()

  const OFFSET = 150 // ajuste fino para o scroll

  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash && menuData.some(category => category.id === hash)) {
        setActiveCategory(hash)
        
        // Scroll suave para a categoria
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - OFFSET
            window.scrollTo({
              top: y,
              behavior: 'smooth',
            })
          }
        }, 100)
      }
    }

    // Executa quando a página carrega
    handleHashNavigation()

    // Limpa o hash da URL sem recarregar a página
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname)
    }
  }, [pathname])

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId)

    const element = document.getElementById(categoryId)
    if (!element) return

    const y = element.getBoundingClientRect().top + window.scrollY - OFFSET

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <ThemeToggle />

      {/* Hero Section */}
      <motion.section
        className="pt-24 pb-12 px-4 bg-gradient-to-b from-secondary/30 to-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4 font-medium"
          >
            <ArrowLeft size={18} />
            Voltar ao início
          </Link>
          <motion.h1
            className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4 text-balance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            Cardápio
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
          >
            Explore nosso cardápio completo de entradas, petiscos, pratos, drinks e sobremesas.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Category Tabs */}
      <motion.section
        className="sticky top-16 bg-background/95 backdrop-blur-sm border-b border-border z-40 py-4 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 md:flex-wrap justify-start md:justify-center">
            {menuData.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`cursor-pointer px-4 py-2 rounded-full whitespace-nowrap transition-colors text-sm font-medium ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Menu Content */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {menuData.map((category, index) => (
            <motion.div
              key={category.id}
              id={category.id}
              className="mb-12 scroll-mt-32"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05, ease: 'easeOut' }}
            >
              <MenuCategoryComponent category={category} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
