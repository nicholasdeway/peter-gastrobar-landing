'use client'

import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Priscila Santiago',
    role: '@priscilaapgsantiago',
    comment:
      'Lugar aconchegante, com petisco delicioso, vinho e música qualidade. Impossível não querer voltar em breve.',
    rating: 5,
  },
  {
    name: 'Ariane Gama',
    role: '@arianegamaa_',
    comment:
      'A perfeição rica em detalhes e amor pela gastronomia, risoto de frutos do mar 🍤 🐙',
    rating: 5,
  },
  {
    name: 'Mariana Borges Chambarelli',
    role: '@marianachambarellii',
    comment: 'O melhor lugar! Perfeito! 😍❤️',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <motion.section
      className="py-20 bg-background"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-4">
            Depoimentos
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            O Que Nossos Clientes Dizem
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col p-8 border-0 bg-card hover:shadow-xl transition-shadow">
                {/* Estrelas */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Depoimento */}
                <p className="text-foreground/80 mb-6 leading-relaxed italic flex-1">
                  "{t.comment}"
                </p>

                {/* Nome / Perfil */}
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-foreground/60">{t.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}