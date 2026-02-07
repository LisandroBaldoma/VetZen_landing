'use client'

import { MapPin, Phone, Mail, Clock, ExternalLink, AlertTriangle } from 'lucide-react'

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-vet-cream to-transparent opacity-50"/>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-vet-green font-semibold text-sm uppercase tracking-wider mb-4">Contacto</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-vet-gray mb-6">
            Estamos aquí para
            <span className="text-vet-green"> ayudarte</span>
          </h2>
          <p className="text-lg text-vet-gray-light leading-relaxed">
            Visítanos en nuestra clínica, contáctanos por teléfono o escríbenos por WhatsApp. Estamos listos para atender a tu mascota.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Address */}
            <div className="group bg-vet-cream rounded-3xl p-6 lg:p-8 hover:bg-vet-green transition-colors duration-300">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-vet-green/10 group-hover:bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors">
                  <MapPin className="w-7 h-7 text-vet-green group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-vet-gray group-hover:text-white mb-2 transition-colors">Dirección</h4>
                  <p className="text-vet-gray-light group-hover:text-white/80 transition-colors mb-2">
                    Av. Libertador 1234, Palermo<br/>
                    CABA, Buenos Aires, Argentina
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Av.+Libertador+1234+Palermo+CABA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-vet-green group-hover:text-white text-sm font-medium transition-colors"
                  >
                    Ver en Google Maps
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div className="group bg-vet-cream rounded-3xl p-6 lg:p-8 hover:bg-vet-blue transition-colors duration-300">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-vet-blue/10 group-hover:bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone className="w-7 h-7 text-vet-blue group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-lg font-bold text-vet-gray group-hover:text-white mb-2 transition-colors">Teléfono & WhatsApp</h4>
                  <div className="space-y-2">
                    <a 
                      href="tel:+541145678900"
                      className="flex items-center gap-2 text-vet-gray-light group-hover:text-white/80 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      +54 11 4567-8900
                    </a>
                    <a 
                      href="https://wa.me/541145678900"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600 transition-colors"
                    >
                      <WhatsAppIcon />
                      Enviar WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group bg-vet-cream rounded-3xl p-6 lg:p-8 hover:bg-vet-yellow transition-colors duration-300">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-vet-yellow/20 group-hover:bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors">
                  <Mail className="w-7 h-7 text-vet-yellow group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-vet-gray group-hover:text-white mb-2 transition-colors">Email</h4>
                  <a 
                    href="mailto:info@vetfisio.com"
                    className="text-vet-gray-light group-hover:text-white/80 transition-colors"
                  >
                    info@vetfisio.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-vet-cream rounded-3xl p-6 lg:p-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-vet-green/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-vet-green" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-vet-gray mb-2">Horario de Atención</h4>
                  <div className="space-y-1 text-vet-gray-light">
                    <div className="flex justify-between gap-8">
                      <span>Lunes - Viernes</span>
                      <span className="font-medium">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Sábado</span>
                      <span className="font-medium">9:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Domingo</span>
                      <span className="font-medium text-red-500">Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-vet-cream rounded-3xl p-4 lg:p-6 h-full min-h-[400px] lg:min-h-0">
            <div className="bg-white rounded-2xl overflow-hidden h-full shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016887889514!2d-58.38414532346179!3d-34.60373887295417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf425a4a9b%3A0x5e7c5b0a4c6c8c8c!2sAv.%20Libertador%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1704067200000!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="mt-12 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-6 lg:p-8 text-white text-center">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h4 className="font-display font-bold text-lg">¿Emergencia?</h4>
                <p className="text-white/80 text-sm">Atención 24 horas para casos urgentes</p>
              </div>
            </div>
            <a 
              href="tel:+541145678900"
              className="inline-flex items-center gap-2 bg-white text-red-500 px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Llamar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
