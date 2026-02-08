// EJEMPLO: HeroSection.tsx usando API
// Este archivo muestra cómo reemplazar datos hardcodeados con datos de la API

'use client'

import { useState, useEffect } from 'react'
import { Calendar, ClipboardList, ArrowRight, CheckCircle, FlaskConical } from 'lucide-react'
import { heroService, HeroData } from '@/services/api'

// Datos por defecto (fallback si la API falla)
const defaultData: HeroData = {
  title: 'Fisioterapia de excelencia para tu mascota',
  subtitle: 'Especialistas en rehabilitación animal',
  description: 'Recuperamos la movilidad y calidad de vida de tu compañero peludo con tratamientos personalizados, tecnología de vanguardia y un equipo de especialistas dedicados.',
  stats: [
    { value: '15+', label: 'Años de experiencia' },
    { value: '5000+', label: 'Pacientes atendidos' },
    { value: '98%', label: 'Tasa de recuperación' },
  ],
  cta_primary: { text: 'Solicitar Turno', link: '#turnos' },
  cta_secondary: { text: 'Ver Tratamientos', link: '#tratamientos' }
}

export default function HeroSection() {
  const [heroData, setHeroData] = useState<HeroData>(defaultData)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        setIsLoading(true)
        const data = await heroService.get()
        setHeroData(data)
        setError(null)
      } catch (err) {
        console.error('Error loading hero data:', err)
        setError('Error al cargar los datos')
        // Mantener datos por defecto
      } finally {
        setIsLoading(false)
      }
    }

    fetchHeroData()
  }, [])

  // Opcional: Mostrar skeleton loader mientras carga
  if (isLoading) {
    return (
      <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="relative z-10 container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-vet-cream via-white to-vet-cream">
        <div className="absolute top-20 right-10 w-72 h-72 bg-vet-green/5 rounded-full blur-3xl"/>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-vet-blue/5 rounded-full blur-3xl"/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vet-yellow/5 rounded-full blur-3xl"/>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #4A9B8E 1px, transparent 1px)', backgroundSize: '30px 30px' }}/>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-vet-green/10 text-vet-green px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-vet-green rounded-full animate-pulse"/>
              {heroData.subtitle}
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-vet-gray leading-tight mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              {heroData.title}
            </h1>

            <p className="text-lg text-vet-gray-light leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
              {heroData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <a 
                href={heroData.cta_primary.link}
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-vet-green to-vet-green-light text-white px-8 py-4 rounded-full font-semibold shadow-xl shadow-vet-green/25 hover:shadow-2xl hover:shadow-vet-green/30 hover:-translate-y-1 transition-all"
              >
                <Calendar className="w-5 h-5" />
                {heroData.cta_primary.text}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={heroData.cta_secondary.link}
                className="inline-flex items-center justify-center gap-2 bg-white text-vet-gray px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100"
              >
                <ClipboardList className="w-5 h-5 text-vet-green" />
                {heroData.cta_secondary.text}
              </a>
            </div>

            {/* Stats - Ahora desde la API */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
              {heroData.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl font-bold text-vet-green">{stat.value}</div>
                  <div className="text-sm text-vet-gray-light">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Mostrar error si existe */}
            {error && (
              <div className="mt-4 text-sm text-red-600">
                {error} - Mostrando datos por defecto
              </div>
            )}
          </div>

          {/* Right Content - Image (sin cambios) */}
          <div className="relative hidden lg:block animate-slide-in-right" style={{ animationDelay: '300ms' }}>
            {/* ... resto del contenido visual sin cambios ... */}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <span className="text-sm text-vet-gray-light">Desplázate para conocer más</span>
        <div className="w-6 h-10 border-2 border-vet-gray-light/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-vet-green rounded-full animate-bounce"/>
        </div>
      </div>
    </section>
  )
}
