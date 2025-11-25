'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 bg-secondary/30"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Coluna de texto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-primary text-sm tracking-widest uppercase mb-4">
              Sobre Nós
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Uma Experiência Singular
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              Peter Gastrobar é mais que um restaurante — é um destino gastronômico onde cada prato conta uma história. 
              Com uma abordagem inovadora à culinária tradicional, criamos pratos que desafiam expectativas e celebram 
              ingredientes de qualidade superior.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              Nosso espaço refinado oferece o ambiente perfeito para jantares memoráveis, reuniões executivas ou 
              celebrações especiais.
            </p>

            <button className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all group">
              <span>Conheça Nossa História</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </motion.div>

          {/* Coluna da imagem */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/imagem-1.png"
                alt="Peter Gastrobar signature dish"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 rounded-lg border border-primary/20" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}