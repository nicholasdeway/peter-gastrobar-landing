'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const handleScrollDown = () => {
    const target = document.getElementById('about') // seção de destino
    if (!target) return

    const offset = 80 // ajuste se tiver navbar fixa
    const y = target.getBoundingClientRect().top + window.scrollY - offset

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="hero"
      className="relative pt-20 min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Imagem de background / overlay */}
      <div className="absolute inset-0 -z-10">
        {/* Se quiser usar imagem depois, é só descomentar
        <img
          src="testee.png"
          alt="Peter Gastrobar interior"
          className="w-full h-full object-cover"
        />
        */}

        {/* overlay principal para contraste (mais suave no light, mais forte no dark) */}
        <div className="absolute inset-0 bg-black/10 dark:bg-black/40" />

        {/* glow sutil no centro, animado */}
        <motion.div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0.2, scale: 1 }}
          animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 1.05, 1] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-[420px] h-[420px] rounded-full bg-primary/25 blur-3xl" />
        </motion.div>

        {/* vinheta nas bordas pra focar no centro (também suavizada no light) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 dark:from-black/40 dark:to-black/50" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.p
          className="text-primary text-sm tracking-[0.3em] uppercase mb-4 opacity-90"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          Bem-vindo
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 text-balance leading-tight"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          Peter Gastrobar
        </motion.h1>

        <motion.p
          className="text-xl text-foreground/80 mb-8 text-balance font-light"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        >
          Sabores autorais em um ambiente sofisticado. Uma experiência gastronômica única
          onde tradição encontra inovação.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
        >
          {/* CTAs futuros */}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        onClick={handleScrollDown}
        className="group absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 focus:outline-none cursor-pointer"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
      >
        <span className="text-foreground/60 text-xs uppercase tracking-[0.3em] group-hover:text-foreground/80 transition-colors">
          Explore
        </span>
        <span className="inline-flex h-10 w-[1px] overflow-hidden">
          <span className="w-full bg-foreground/40 group-hover:bg-foreground/70 origin-top animate-[scroll-line_1.4s_ease-in-out_infinite]" />
        </span>
        <svg
          className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.button>
    </section>
  )
}