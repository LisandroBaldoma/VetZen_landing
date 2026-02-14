'use client'

import { Calendar, ClipboardList, ArrowRight, CheckCircle, FlaskConical, Dog, PawPrint } from 'lucide-react'

const stats = [
  { value: '10+', label: 'Años de experiencia' },
  { value: '50+', label: 'Pacientes atendidos' },
  { value: '98%', label: 'Tasa de recuperación' },
]

export default function HeroSection() {
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
              Terapias complementarias para el bienestar de tu mascota
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-vet-gray leading-tight mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Terapias complementarias de
              <span className="relative inline-block mx-2">
                <span className="relative z-10 text-vet-green">excelencia</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-vet-green/20 -skew-x-3"/>
              </span>
              para tu mascota
            </h1>

            <p className="text-lg text-vet-gray-light leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Un espacio donde nos unimos para ofrecer terapias complementarias veterinarias de calidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <a 
                href="#turnos"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-vet-green to-vet-green-light text-white px-8 py-4 rounded-full font-semibold shadow-xl shadow-vet-green/25 hover:shadow-2xl hover:shadow-vet-green/30 hover:-translate-y-1 transition-all"
              >
                <Calendar className="w-5 h-5" />
                Solicitar Turno
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#tratamientos"
                className="inline-flex items-center justify-center gap-2 bg-white text-vet-gray px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100"
              >
                <ClipboardList className="w-5 h-5 text-vet-green" />
                Ver Tratamientos
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl font-bold text-vet-green">{stat.value}</div>
                  <div className="text-sm text-vet-gray-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative hidden lg:block animate-slide-in-right" style={{ animationDelay: '300ms' }}>
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-to-br from-vet-green/20 to-vet-blue/20 rounded-[3rem] transform rotate-6"/>
              <div className="absolute -bottom-8 -left-8 w-full h-full bg-gradient-to-tr from-vet-yellow/20 to-vet-green/20 rounded-[3rem] transform -rotate-3"/>
              
              <div className="relative bg-white rounded-[2.5rem] shadow-2xl overflow-hidden p-4">
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-gradient-to-br from-vet-cream to-white flex items-center justify-center">
                  <div className="text-center p-8">
                    <img src="/logo.png" alt="VetZen logo" />                    
                    <h3 className="font-display text-2xl font-bold text-vet-gray mb-2">Fisiatria</h3>
                    <p className="text-vet-gray-light">Tu mascota en las mejores manos</p>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-8 top-1/4 bg-white rounded-2xl shadow-xl p-4 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-vet-green/10 rounded-xl flex items-center justify-center">
                  <Dog className="w-6 h-6 text-vet-green" />                    
                  </div>
                  <div>
                    <div className="font-semibold text-vet-gray">Acupuntura</div>
                    <div className="text-sm text-vet-gray-light">Vetrinaria</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-[38%] bg-white rounded-2xl shadow-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-vet-blue/10 rounded-xl flex items-center justify-center">
                    <FlaskConical className="w-6 h-6 text-vet-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-vet-gray">Terapia Floral</div>
                    <div className="text-sm text-vet-gray-light">Personalizada</div>
                  </div>
                </div>
              </div>

              <div className="absolute right-8 top-10 bg-white rounded-2xl shadow-xl p-4 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-vet-yellow/15 rounded-xl flex items-center justify-center"> 
                  <PawPrint className="w-6 h-6 text-vet-yellow" />                   
                  </div>
                  <div>
                    <div className="font-semibold text-vet-gray">Fisioterapia</div>
                    <div className="text-sm text-vet-gray-light">Veterinaria</div>
                  </div>
                </div>
              </div>
            </div>
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
