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

    // Observa todas as seções baseado na configuração fixa
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
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleSectionClick(section.id)}
            className={`w-2 h-8 rounded-full transition-all duration-500 ${
              activeSection === section.id
                ? 'bg-primary scale-110'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/60 hover:scale-105'
            }`}
            aria-label={`Navegar para ${section.label}`}
          />
        ))}
      </div>
    </nav>
  )
}