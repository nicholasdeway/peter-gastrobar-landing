'use client'

export default function Gallery() {
  const images = [
    { src: '/imagem-2.png', alt: 'Prato signature' },
    { src: '/imagem-3.png', alt: 'Vista aconchegante' },
    { src: '/imagem-4.png', alt: 'Drinks' },
    { src: '/imagem-5.png', alt: 'Pratos exuberantes' },
    { src: '/imagem-6.png', alt: 'Frutos do mar' },
    { src: '/imagem-7.png', alt: 'Ambiente clássico' },
    { src: '/imagem-8.png', alt: 'Entrada Especial' },
  ]

  return (
    <section id="gallery" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Momentos</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Galeria
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {images.map((image, idx) => (
            <div
              key={idx}
              className={`group relative rounded-lg overflow-hidden cursor-pointer ${
                idx === 0 || idx === 5 ? 'md:col-span-2' : ''
              }`}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-end p-6">
                <p className="text-white font-display text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}