'use client'

import { Facebook, Instagram } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === '/'

  const handleFooterNavigation = async (section: string) => {
    if (isHomePage) {
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    } else {
      await router.push('/')
      setTimeout(() => {
        const element = document.getElementById(section)
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 300)
    }
  }

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* LOGO E TEXTO */}
          <div>
            <div className="mb-4">
              <img 
                src="/peter-logo.png" 
                alt="Peter Gastrobar logo"
                className="h-24 w-auto"
              />
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Uma experiência gastronômica refinada que celebra a excelência em cada detalhe.
            </p>
          </div>

          {/* MENU */}
          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <button 
                  onClick={() => handleFooterNavigation('about')}
                  className="cursor-pointer hover:text-background transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterNavigation('menu')}
                  className="cursor-pointer hover:text-background transition-colors"
                >
                  Cardápio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterNavigation('gallery')}
                  className="cursor-pointer hover:text-background transition-colors"
                >
                  Galeria
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterNavigation('location')}
                  className="cursor-pointer hover:text-background transition-colors"
                >
                  Localização
                </button>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/petergastrobar" 
                  className="hover:text-background transition-colors"
                >
                  Reserve aqui
                </a>
              </li>
            </ul>
          </div>

          {/* LOCALIZAÇÃO / TEXTO INSTITUCIONAL */}
          <div>
            <h4 className="font-semibold mb-4">Localização</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Barra de São João, RJ - Brasil</li>
              <li>Ambiente acolhedor no coração da cidade</li>
            </ul>
          </div>

          {/* REDES SOCIAIS */}
          <div>
            <h4 className="font-semibold mb-4">Siga-nos</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/petergastrobar" 
                className="text-background/70 hover:text-background transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/peter.gastrobar" 
                className="text-background/70 hover:text-background transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/60">
            <p>&copy; 2025 Peter Gastrobar. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <p>Desenvolvido por Nicholas Deway</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}