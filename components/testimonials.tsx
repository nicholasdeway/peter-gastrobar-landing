'use client'

import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Priscila Santiago',
    role: '@priscilaapgsantiago',
    comment: 'Lugar aconchegante, com petisco delicioso, vinho e música qualidade. Impossível não querer voltar em breve.',
    rating: 5
  },
  {
    name: 'Ariane Gama',
    role: '@arianegamaa_',
    comment: 'A perfeição rica em detalhes e amor pela gastronomia, risoto de frutos do mar 🍤 🐙',
    rating: 5
  },
  {
    name: 'Mariana Borges Chambarelli',
    role: '@marianachambarellii',
    comment: 'O melhor lugar! Perfeito! 😍❤️',
    rating: 5
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Depoimentos</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            O Que Nossos Clientes Dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="p-8 border-0 bg-card hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed italic">
                "{testimonial.comment}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}