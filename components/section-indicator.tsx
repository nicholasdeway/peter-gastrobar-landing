'use client'

import { useEffect, useState } from 'react'

export default function SectionIndicator() {
  const [activeSection, setActiveSection] = useState('hero')
  
  const sections = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre', id: 'about' },
    { label: 'Cardápio', id: 'menu' },
    { label: 'Galeria', id: 'gallery' },
    { label: 'Depoimentos', id: 'testimonials' },
    { label: 'Localização', id: 'location' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '0px 0px -20% 0px' }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-[60%] z-40 hidden lg:block">
      <div className="flex flex-col gap-4">
        {sections.map((section) => {
          const isActive = activeSection === section.id

          return (
            <button
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className={`
                relative w-2 h-8 rounded-full overflow-hidden
                transition-all duration-500 cursor-pointer
                ${isActive
                  ? 'bg-primary scale-125 shadow-[0_0_14px_rgba(217,119,6,0.8)]'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/60 hover:scale-110'
                }
              `}
              aria-label={`Navegar para ${section.label}`}
            >
              {/* linha interna animada só no ativo */}
              {isActive && (
                <span className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/70 to-primary/0 animate-pulse" />
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}