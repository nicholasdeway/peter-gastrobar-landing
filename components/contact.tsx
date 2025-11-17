'use client'

import { Button } from '@/components/ui/button'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Localização</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Visite-nos
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Estamos localizados no coração da cidade, prontos para recebê-lo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Informações de localização */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                <p className="text-foreground/70">
                  Avenida Paulista, 1000<br />
                  São Paulo, SP 01311-100
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Phone className="w-6 h-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                <p className="text-foreground/70">(11) 3088-0000</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Clock className="w-6 h-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Horário de Funcionamento</h3>
                <p className="text-foreground/70">
                  Seg-Qui: 12h - 23h<br />
                  Sex-Sab: 12h - 00h<br />
                  Domingo: 12h - 22h
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Mail className="w-6 h-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <p className="text-foreground/70">reservas@petergastrobar.com.br</p>
              </div>
            </div>

            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto">
              Reservar via WhatsApp
            </Button>
          </div>

          {/* Google maps */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/restaurant-location-map-view.jpg"
              alt="Mapa de localização"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}