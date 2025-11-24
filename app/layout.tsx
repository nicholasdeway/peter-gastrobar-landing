import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

export const metadata: Metadata = {
  title: 'Peter Gastrobar - Experiência gastronômica requintada',
  description:
    'Sabores autorais em um ambiente sofisticado. Descubra a nossa refinada experiência gastronômica.',

  icons: {
    icon: [
      // Ícone padrão
      { url: '/peter-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/peter-logo.png', sizes: '64x64', type: 'image/png' },

      // Ícone dark/light (opcional, usando o mesmo arquivo)
      { url: '/peter-logo.png', media: '(prefers-color-scheme: light)' },
      { url: '/peter-logo.png', media: '(prefers-color-scheme: dark)' },
    ],

    // Apple devices (iOS / macOS)
    apple: '/peter-logo.png',

    // Ícone SVG opcional (se quiser usar no futuro)
    other: {
      rel: 'icon',
      url: '/peter-logo.png',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${lato.className} antialiased`}>
        {/* Dark como prioridade */}
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            })();
          `}
        </Script>

        {children}
      </body>
    </html>
  )
}