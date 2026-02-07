'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Calendar, Heart } from 'lucide-react'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-vet-green to-vet-blue rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-tight text-vet-green">VetFisio</span>
              <span className="text-xs text-vet-gray-light">Fisioterapia Animal</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-vet-gray hover:text-vet-green relative group transition-colors"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vet-green transition-all group-hover:w-full"/>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a 
              href="#turnos"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-vet-green to-vet-green-light text-white px-6 py-2.5 rounded-full font-medium text-sm shadow-lg shadow-vet-green/25 hover:shadow-xl hover:shadow-vet-green/30 hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="w-4 h-4" />
              Solicitar Turno
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-vet-green/10 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-vet-green" />
            ) : (
              <Menu className="w-6 h-6 text-vet-gray" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-100 animate-fade-in">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-vet-gray hover:text-vet-green hover:bg-vet-green/5 px-4 py-2 rounded-lg transition-all"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#turnos"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-vet-green text-white px-6 py-3 rounded-full font-medium"
              >
                <Calendar className="w-4 h-4" />
                Solicitar Turno
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
