'use client'

import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    id: '1',
    name: 'Laura Martínez',
    petName: 'Max',
    petType: 'Golden Retriever',
    rating: 5,
    comment: 'Después de la cirugía de cadera de Max, el equipo de VetZen hizo un trabajo increíble. En solo 3 meses volvió a correr como antes. El trato fue excelente y siempre estuvieron disponibles para nuestras consultas.',
    date: '2024-01-15',
  },
  {
    id: '2',
    name: 'Carlos Rodríguez',
    petName: 'Luna',
    petType: 'Labrador',
    rating: 5,
    comment: 'Luna tenía problemas de movilidad por su edad. La hidroterapia cambió su vida completamente. Ahora puede caminar mucho mejor y parece más feliz. ¡Recomiendo VetZen al 100%!',
    date: '2024-01-10',
  },
  {
    id: '3',
    name: 'María González',
    petName: 'Michi',
    petType: 'Gato Persa',
    rating: 5,
    comment: 'Michi sufrió una lesión en la columna y pensamos que no volvería a caminar. Gracias a la rehabilitación neurológica, hoy corre y salta como si nada. Eternamente agradecida con todo el equipo.',
    date: '2024-01-05',
  },
  {
    id: '4',
    name: 'Pedro Sánchez',
    petName: 'Rocky',
    petType: 'Bulldog Francés',
    rating: 5,
    comment: 'El trato profesional y el cariño que le dan a Rocky es increíble. Después de cada sesión de fisioterapia, notamos una mejora significativa. El equipo siempre explica todo con paciencia.',
    date: '2023-12-28',
  },
  {
    id: '5',
    name: 'Ana López',
    petName: 'Bella',
    petType: 'Beagle',
    rating: 5,
    comment: 'Bella tuvo una fractura compleja en su pata trasera. La rehabilitación post-operatoria fue fundamental para su recuperación. Hoy está completamente curada y jugando como siempre.',
    date: '2023-12-20',
  },
  {
    id: '6',
    name: 'Juan Pérez',
    petName: 'Toby',
    petType: 'Caniche',
    rating: 5,
    comment: 'Excelente servicio desde la primera consulta. Evaluaron a Toby de manera integral y diseñaron un plan de tratamiento perfecto para sus necesidades. Muy recomendable.',
    date: '2023-12-15',
  },
]

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 lg:py-32 bg-vet-cream relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-vet-green/5 rounded-full blur-3xl"/>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-vet-blue/5 rounded-full blur-3xl"/>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-vet-green font-semibold text-sm uppercase tracking-wider mb-4">Testimonios</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-vet-gray mb-6">
            Lo que dicen nuestros
            <span className="text-vet-green"> pacientes felices</span>
          </h2>
          <p className="text-lg text-vet-gray-light leading-relaxed">
            Historias reales de dueños que confiaron en nosotros para la recuperación de sus mascotas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="group bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-vet-green/10 rounded-xl flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-vet-green" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-vet-yellow fill-vet-yellow' : 'text-gray-200'}`}
                  />
                ))}
              </div>

              <p className="text-vet-gray leading-relaxed mb-6">
                &ldquo;{testimonial.comment}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-vet-green to-vet-blue rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">{getInitials(testimonial.name)}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-vet-gray">{testimonial.name}</h4>
                  <p className="text-sm text-vet-gray-light">
                    Dueño de {testimonial.petName} ({testimonial.petType})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-16 bg-gradient-to-r from-vet-green to-vet-green-light rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-display text-4xl lg:text-5xl font-bold mb-2">4.9</div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-vet-yellow fill-vet-yellow" />
                ))}
              </div>
              <div className="text-white/80 text-sm">Calificación promedio</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <div className="text-white/80 text-sm">Reseñas positivas</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl lg:text-5xl font-bold mb-2">98%</div>
              <div className="text-white/80 text-sm">Recomendarían</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl lg:text-5xl font-bold mb-2">15+</div>
              <div className="text-white/80 text-sm">Años de experiencia</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-vet-gray-light mb-6">¿Tu mascota fue paciente nuestro? Comparte tu experiencia</p>
          <a 
            href="#contacto"
            className="inline-flex items-center gap-2 bg-white text-vet-green px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all border border-vet-green/20"
          >
            <Star className="w-5 h-5" />
            Dejar una reseña
          </a>
        </div>
      </div>
    </section>
  )
}
