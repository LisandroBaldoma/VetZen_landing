'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, ArrowRight, Check, Clock, Phone } from 'lucide-react'
import { treatmentService, type Treatment as TreatmentAPI } from '@/services/api'
import { getIconComponent, getGradientClasses, TREATMENT_OPTIONS } from '@/constants/treatmentOptions'

// Tipo extendido para el frontend
interface TreatmentUI extends Omit<TreatmentAPI, 'gradient'> {
  icon: React.ComponentType<{ className?: string }>
  gradient: string
  benefits: string[]
}

export default function TreatmentsSection() {
  const [treatments, setTreatments] = useState<TreatmentUI[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  

  useEffect(() => {
    const fetchTreatments = async () => {
      try {
        setLoading(true)
        console.log('📥 [TreatmentsSection] Cargando tratamientos...')
        const data = await treatmentService.getAll()
        console.log('📥 [TreatmentsSection] Datos del backend:', data)
        
        // Transformar datos del backend al formato del frontend
        const transformedData: TreatmentUI[] = data
          .filter((t: TreatmentAPI) => t.is_active)
          .map((treatment: TreatmentAPI, index: number) => {
            console.log(`🔄 [Transform] Procesando "${treatment.title}":`, {
              icon_name: treatment.icon_name,
              gradient: (treatment as any).gradient,
              benefits: (treatment as any).benefits || treatment.features || [],
            })
            
            const transformed = {
              ...treatment,
              icon: getIconComponent(treatment.icon_name),
              gradient: getGradientClasses((treatment as any).gradient || 'emerald'),
              benefits: (treatment as any).benefits || treatment.features || [],
            }
            
            console.log(`✅ [Transform] Resultado:`, {
              icon: transformed.icon.name || 'Component',
              gradient: transformed.gradient,
              benefits: transformed.benefits.length,
            })
            
            return transformed
          })
        
        console.log('✅ [TreatmentsSection] Tratamientos transformados:', transformedData.length)
        setTreatments(transformedData)
        setError(null)
      } catch (err) {
        console.error('Error loading treatments:', err)
        setError('No se pudieron cargar los tratamientos')
        // Datos de fallback si falla la API
        setTreatments([])
      } finally {
        setLoading(false)
      }
    }

    fetchTreatments()
  }, [])

  if (loading) {
    return (
      <section id="tratamientos" className="py-20 lg:py-32 bg-vet-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-8 w-64 bg-gray-200 rounded mx-auto mb-6 animate-pulse" />
            <div className="h-12 w-96 bg-gray-300 rounded mx-auto mb-4 animate-pulse" />
            <div className="h-6 w-full max-w-2xl bg-gray-200 rounded mx-auto animate-pulse" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <div className="h-48 bg-gray-200 animate-pulse" />
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-gray-300 rounded animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error && treatments.length === 0) {
    return (
      <section id="tratamientos" className="py-20 lg:py-32 bg-vet-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-red-500 mb-4">⚠️ {error}</div>
            <p className="text-vet-gray-light">Por favor, intenta recargar la página.</p>
          </div>
        </div>
      </section>
    )
  }
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
