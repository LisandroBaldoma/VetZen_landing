'use client'

import { CheckCircle, ArrowRight, Check, Clock, Phone } from 'lucide-react'

const treatments = [
  {
    id: '1',
    title: 'Fisioterapia Post-Operatoria',
    description: 'Rehabilitación especializada después de cirugías ortopédicas para una recuperación óptima.',
    icon: CheckCircle,
    benefits: ['Recuperación acelerada', 'Reducción del dolor', 'Prevención de complicaciones'],
    duration: '45-60 min',
    gradient: 'from-vet-green to-vet-green-light',
  },
  {
    id: '2',
    title: 'Rehabilitación Neurológica',
    description: 'Tratamientos para mascotas con problemas neurológicos que afectan su movilidad.',
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    benefits: ['Mejora de la coordinación', 'Estimulación neural', 'Recuperación funcional'],
    duration: '60 min',
    gradient: 'from-vet-blue to-vet-blue-light',
  },
  {
    id: '3',
    title: 'Hidroterapia',
    description: 'Ejercicios terapéuticos en agua que permiten movimiento sin impacto articular.',
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 14.66V20a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h2.34M20 14.66a7 7 0 01-14 0M20 14.66A3 3 0 0117 11a3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 01-3 3 3 3 0 01-3-3"/>
      </svg>
    ),
    benefits: ['Bajo impacto', 'Fortalecimiento muscular', 'Mejora cardiovascular'],
    duration: '30-45 min',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: '4',
    title: 'Kinesiología Animal',
    description: 'Terapia manual y ejercicios terapéuticos para mejorar la funcionalidad muscular.',
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11"/>
      </svg>
    ),
    benefits: ['Masaje terapéutico', 'Movilización articular', 'Estiramientos'],
    duration: '45 min',
    gradient: 'from-vet-yellow to-orange-400',
  },
  {
    id: '5',
    title: 'Mascotas Gerontes',
    description: 'Cuidados especiales para mascotas mayores con artritis, artrosis o movilidad reducida.',
    icon: Clock,
    benefits: ['Alivio del dolor', 'Mayor movilidad', 'Calidad de vida'],
    duration: '30-45 min',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: '6',
    title: 'Terapia Láser',
    description: 'Tratamiento con láser de baja intensidad para reducir inflamación y acelerar la curación.',
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    benefits: ['Antiinflamatorio', 'Analgésico', 'Regeneración tisular'],
    duration: '15-30 min',
    gradient: 'from-red-500 to-rose-500',
  },
]

export default function TreatmentsSection() {
  return (
    <section id="tratamientos" className="py-20 lg:py-32 bg-vet-cream relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-vet-green/5 rounded-full blur-3xl"/>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-vet-blue/5 rounded-full blur-3xl"/>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-vet-green font-semibold text-sm uppercase tracking-wider mb-4">Nuestros Servicios</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-vet-gray mb-6">
            Tratamientos especializados para
            <span className="text-vet-green"> cada necesidad</span>
          </h2>
          <p className="text-lg text-vet-gray-light leading-relaxed">
            Ofrecemos una amplia gama de tratamientos de fisioterapia y rehabilitación, personalizados según las necesidades específicas de tu mascota.
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {treatments.map((treatment) => {
            const Icon = treatment.icon
            return (
              <div 
                key={treatment.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${treatment.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}/>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${treatment.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-12 h-12 text-white"/>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-vet-gray shadow-sm flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {treatment.duration}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-vet-gray mb-3 group-hover:text-vet-green transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-vet-gray-light text-sm leading-relaxed mb-4">
                    {treatment.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {treatment.benefits.map((benefit) => (
                      <li 
                        key={benefit}
                        className="flex items-center gap-2 text-sm text-vet-gray"
                      >
                        <Check className="w-4 h-4 text-vet-green flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <a 
                    href="#turnos"
                    className={`inline-flex items-center gap-2 w-full justify-center py-3 rounded-xl font-medium text-sm transition-all bg-gradient-to-r ${treatment.gradient} text-white hover:shadow-lg hover:shadow-vet-green/25`}
                  >
                    Reservar Turno
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl font-bold text-vet-gray mb-4">
                ¿No sabes qué tratamiento necesita tu mascota?
              </h3>
              <p className="text-vet-gray-light mb-6">
                Agenda una consulta de evaluación gratuita donde nuestros especialistas determinarán el mejor plan de tratamiento para tu compañero peludo.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#turnos"
                  className="inline-flex items-center gap-2 bg-vet-green text-white px-6 py-3 rounded-full font-medium hover:bg-vet-green-dark transition-colors"
                >
                  <CheckCircle className="w-5 h-5" />
                  Evaluación Gratuita
                </a>
                <a 
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-vet-green font-medium hover:underline"
                >
                  <Phone className="w-5 h-5" />
                  Llamar Ahora
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-vet-cream rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-vet-green/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-vet-green" />
                </div>
                <div className="font-display text-2xl font-bold text-vet-gray">100%</div>
                <div className="text-sm text-vet-gray-light">Personalizado</div>
              </div>
              <div className="bg-vet-cream rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-vet-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-vet-blue" />
                </div>
                <div className="font-display text-2xl font-bold text-vet-gray">24h</div>
                <div className="text-sm text-vet-gray-light">Seguimiento</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
