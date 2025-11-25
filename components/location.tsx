'use client'

import { MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Location() {
  return (
    <section id="location" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Localização</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Visite-nos
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Estamos localizados à beira do Rio São João, prontos para recebê-los com uma experiência gastronômica única.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Informações */}
          <div className="space-y-8">
            
            {/* Endereço */}
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                <p className="text-foreground/70">
                  Rua Bernardo Gomes, n° 800 <br />
                  Barra de São João - RJ, 28880-000
                </p>
              </div>
            </div>

            {/* Horário */}
            <div className="flex gap-4">
              <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Horário de Funcionamento</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Qua-Qui: 18h às 23h <br />
                  Sex-Sáb: 12h às 00h <br />
                  Domingo: 12h às 17h
                </p>
              </div>
            </div>

            {/* Botão: Reservar pelo Instagram */}
            <a
              href="https://www.instagram.com/petergastrobar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto"
              >
                Reservar pelo Instagram
              </Button>
            </a>

          </div>

          {/* Google Maps + Traçar rota */}
          <div className="space-y-4">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl border border-border bg-black">
              
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                className="w-full h-full border-0"
                src="https://www.google.com/maps?q=-22.585295,-41.991538&hl=pt-BR&z=16&output=embed"
              ></iframe>

              {/* Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

              {/* Marcador pulsante */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <span className="absolute inset-0 rounded-full bg-primary/40 blur-md animate-ping" />
                </div>
              </div>
            </div>

            {/* Botão: Abrir rota no Google Maps */}
            <div className="flex justify-center md:justify-start">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=-22.585295,-41.991538"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto"
                >
                  Abrir rota no Google Maps
                </Button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}