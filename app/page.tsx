import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import About from '@/components/about'
import Menu from '@/components/menu'
import Gallery from '@/components/gallery'
import Testimonials from '@/components/testimonials'
import Location from '@/components/location'
import Footer from '@/components/footer'
import ThemeToggle from '@/components/theme-toggle'
import SectionIndicator from '@/components/section-indicator'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ThemeToggle />
      <SectionIndicator />
      <Navigation />
      
      <section id="hero">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="menu">
        <Menu />
      </section>
      
      <section id="gallery">
        <Gallery />
      </section>
      
      <section id="testimonials">
        <Testimonials />
      </section>
      
      <section id="location">
        <Location />
      </section>
      
      <Footer />
    </main>
  )
}