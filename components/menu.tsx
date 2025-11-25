'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const menuCategories = [
  {
    id: 'entradas',
    name: 'Entradas',
    items: [
      {
        name: 'Bolinho de Salmão (10 unidades)',
        description:
          'Massa delicada recheada com salmão, dourada até ficar crocante por fora e macia por dentro.',
        price: 'R$ 49',
      },
      {
        name: 'Dadinho de Tapioca (10 unidades)',
        description:
          'Clássicos dadinhos de tapioca com queijo, crocantes por fora e leves por dentro.',
        price: 'R$ 30',
      },
      {
        name: 'Caldinho de Feijoada',
        description:
          'Versão cremosa da feijoada, servida em porção individual, perfeita para abrir o apetite.',
        price: 'R$ 25',
      },
      {
        name: 'Escondidinho de Camarão',
        description:
          'Camarões selecionados ao creme, cobertos com purê gratinado, em uma combinação irresistível.',
        price: 'R$ 40',
      },
    ],
  },
  {
    id: 'principais',
    name: 'Pratos Principais',
    items: [
      {
        name: 'Risoto de Moqueca',
        description:
          'Arroz arbóreo cremoso inspirado na moqueca, com sabores marcantes do litoral brasileiro.',
        price: 'R$ 90',
      },
      {
        name: 'Papardelle com Fonduta de Queijo',
        description:
          'Massa larga envolvida em fonduta de queijos selecionados, rica e aveludada.',
        price: 'R$ 89',
      },
      {
        name: 'Lombo de Salmão',
        description:
          'Lombo de salmão grelhado, suculento, pensado para compartilhar em uma experiência especial.',
        price: 'R$ 179',
      },
      {
        name: 'Ancho',
        description:
          'Corte nobre de carne grelhado no ponto ideal, acompanhado de guarnições clássicas.',
        price: 'R$ 159',
      },
    ],
  },
  {
    id: 'drinks',
    name: 'Drinks',
    items: [
      {
        name: 'Caipirinha & Caipvodka',
        description:
          'Clássica combinação brasileira com frutas frescas, em versões com cachaça ou vodka.',
        price: 'R$ 30',
      },
      {
        name: 'Aperol Spritz',
        description:
          'Drink leve e cítrico com Aperol, espumante e toque de laranja, perfeito para brindar.',
        price: 'R$ 35',
      },
      {
        name: 'Gin Tônica',
        description:
          'Gin premium com tônica e botânicos selecionados, refrescante e aromático.',
        price: 'R$ 30',
      },
      {
        name: 'Moscow Mule',
        description:
          'Vodka, limão e espuma cremosa de gengibre, servido bem gelado na caneca.',
        price: 'R$ 35',
      },
    ],
  },
  {
    id: 'sobremesas',
    name: 'Sobremesas',
    items: [
      {
        name: 'Mudinha de Cacau',
        description:
          'Sobremesa intensa de chocolate, com textura úmida e finalização sofisticada.',
        price: 'R$ 35',
      },
      {
        name: 'Mousse de Chocolate',
        description:
          'Mousse aerado de chocolate, equilibrando cremosidade e sabor marcante.',
        price: 'R$ 38',
      },
      {
        name: 'Petit Gateau de Doce de Leite',
        description:
          'Bolo macio com recheio cremoso de doce de leite, servido com sorvete.',
        price: 'R$ 28',
      },
      {
        name: 'Brownie de Chocolate',
        description:
          'Brownie denso e úmido de chocolate, perfeito para finalizar a experiência.',
        price: 'R$ 30',
      },
    ],
  },
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('entradas')

  const currentCategory = menuCategories.find((cat) => cat.id === activeCategory)

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">
            Seleção Culinária
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Nosso Cardápio
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Cada prato é cuidadosamente preparado com ingredientes premium e técnicas refinadas
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`cursor-pointer px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu items grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {currentCategory?.items.map((item, idx) => (
            <Card
              key={idx}
              className="p-6 hover:shadow-lg transition-shadow border-0 bg-card"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-display font-semibold text-foreground">
                  {item.name}
                </h3>
                <span className="text-primary font-semibold whitespace-nowrap ml-4">
                  {item.price}
                </span>
              </div>
              <p className="text-foreground/60 leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA: Ver cardápio completo */}
        <div className="mt-12 flex justify-center">
          <Link href="/cardapio">
            <Button
              size="lg"
              className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Ver cardápio completo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}