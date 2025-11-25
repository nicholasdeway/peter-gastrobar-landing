'use client'

import { motion } from 'framer-motion'

export default function Gallery() {
  const images = [
    { src: '/imagem-2.png', alt: 'Prato signature' },
    { src: '/imagem-3.png', alt: 'Vista aconchegante' },
    { src: '/imagem-4.png', alt: 'Drinks' },
    { src: '/imagem-5.png', alt: 'Steak Befe' },
    { src: '/imagem-6.png', alt: 'Frutos do mar' },
    { src: '/imagem-7.png', alt: 'Ambiente clássico' },
    { src: '/imagem-8.png', alt: 'Entrada Especial' },
  ]

  return (
    <motion.section
      id="gallery"
      className="py-20 bg-secondary/20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título com animação */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-4">
            Momentos
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Galeria
          </h2>
        </motion.div>

        {/* Grid com stagger */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {images.map((image, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className={`group relative rounded-lg overflow-hidden cursor-pointer ${
                idx === 0 || idx === 5 ? 'md:col-span-2' : ''
              }`}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay + texto */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 flex items-end p-6">
                <p className="text-white font-display text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}