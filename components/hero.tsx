'use client'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-20 min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Imagem de background na homepage */}
      <div className="absolute inset-0 -z-10">

        {/* Imagem de fundo comentada para futura referência
        <img
          src="testee.png"
          alt="Peter Gastrobar interior"
          className="w-full h-full object-cover"
        />
        */}

        {/* overlay para garantir contraste nos dois temas */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto fade-in">
        <p className="text-primary text-sm tracking-widest uppercase mb-4 opacity-90">
          Bem-vindo
        </p>

        <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 text-balance leading-tight">
          Peter Gastrobar
        </h1>

        <p className="text-xl text-foreground/80 mb-8 text-balance font-light">
          Sabores autorais em um ambiente sofisticado. Uma experiência gastronômica única onde tradição
          encontra inovação.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* seus botões/CTAs podem ficar aqui, se quiser adicionar depois */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="text-foreground/60 text-xs uppercase tracking-widest">
            Explore
          </p>
          <svg
            className="w-5 h-5 text-foreground/60"
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
        </div>
      </div>
    </section>
  )
}