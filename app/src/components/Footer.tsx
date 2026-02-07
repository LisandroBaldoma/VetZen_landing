'use client'

import { Heart, MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react'

const quickLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Nosotros', href: '#nosotros' },
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Solicitar Turno', href: '#turnos' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

const treatments = [
  'Fisioterapia Post-Operatoria',
  'Rehabilitación Neurológica',
  'Hidroterapia',
  'Kinesiología Animal',
  'Mascotas Gerontes',
]

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-vet-gray text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-vet-green to-vet-blue rounded-xl flex items-center justify-center shadow-lg">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="font-display font-bold text-xl">VetFisio</span>
                  <span className="block text-xs text-white/60">Fisioterapia Animal</span>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Especialistas en fisioterapia y rehabilitación animal. Devolvemos la movilidad y calidad de vida a tus mascotas.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-vet-green transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-vet-green transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://wa.me/541145678900" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors">
                  <WhatsAppIcon />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-6">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-white/70 hover:text-vet-green transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatments */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-6">Tratamientos</h4>
              <ul className="space-y-3">
                {treatments.map((treatment) => (
                  <li key={treatment}>
                    <a href="#tratamientos" className="text-white/70 hover:text-vet-green transition-colors text-sm">
                      {treatment}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-6">Contacto</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-vet-green mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 text-sm">Av. Libertador 1234, Palermo, CABA</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-vet-green flex-shrink-0" />
                  <span className="text-white/70 text-sm">+54 11 4567-8900</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-vet-green flex-shrink-0" />
                  <span className="text-white/70 text-sm">info@vetfisio.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-vet-green flex-shrink-0" />
                  <span className="text-white/70 text-sm">Lun - Vie: 9:00 - 18:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {currentYear} VetFisio. Todos los derechos reservadoaaaaaaaaas.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Política de Privacidad</a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
