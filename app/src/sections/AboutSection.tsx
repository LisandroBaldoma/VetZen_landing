'use client'

import { Clock, FlaskConical, Heart } from 'lucide-react'

const values = [
  {
    title: 'Experiencia',
    description: 'Más de 10 años dedicados exclusivamente a la fisioterapia y rehabilitación animal.',
    icon: Clock,
  },
  {
    title: 'Tecnología',
    description: 'Equipamiento de última generación para diagnósticos precisos y tratamientos efectivos.',
    icon: FlaskConical,
  },
  {
    title: 'Cuidado',
    description: 'Tratamos a cada paciente con el mismo amor y dedicación que tú le das.',
    icon: Heart,
  },
]

const team = [
  {
    name: 'M.V Evangelina Baldoma',
    role: 'Médica Veterinaria Especialista en Fisioterapia y Rehabilitación',
    description: 'Especializada en fisioterapia y rehabilitación de pequeños animales, enfocada en la recuperación funcional, fortalecimiento muscular y manejo del dolor. Diseña planes terapéuticos personalizados para mejorar la movilidad y acelerar la recuperación postquirúrgica o postraumática.',
    specialties: ['Fisioterapia', 'Rehabilitación'],
    },
  {
    name: 'M.V Jaqueline Marelli',
    role: 'Médica Veterinaria Especialista en Terapias Integrativas',
    description: 'Profesional especializada en acupuntura, fisioterapia y terapia floral aplicada a pequeños animales. Trabaja en el tratamiento del dolor, la rehabilitación física y el equilibrio emocional, abordando cada caso de manera integral y personalizada para mejorar la calidad de vida de sus pacientes.',
    specialties: ['Acupuntura', 'Fisioterapia', 'Terapia Floral'],
  },

  
  // {
  //   name: 'Lic. Ana Martínez',
  //   role: 'Terapeuta Acuática',
  //   description: 'Experta en hidroterapia y ejercicios terapéuticos en agua.',
  //   specialties: ['Hidroterapia', 'Ejercicio'],
  // },
  // {
  //   name: 'Dr. Pedro Sánchez',
  //   role: 'Cirujano Ortopédico',
  //   description: 'Cirujano especializado en procedimientos ortopédicos y post-operatorios.',
  //   specialties: ['Cirugía', 'Traumatología'],
  // },
]

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-vet-cream to-transparent opacity-50"/>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-vet-green/5 rounded-full blur-3xl"/>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-vet-green font-semibold text-sm uppercase tracking-wider mb-4">Sobre Nosotros</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-vet-gray mb-6">
            Un equipo dedicado al
            <span className="text-vet-green"> bienestar animal</span>
          </h2>
          <p className="text-lg text-vet-gray-light leading-relaxed">
            Somos un centro especializado en fisioterapia y rehabilitación animal, comprometidos con devolver la calidad de vida a tus mascotas mediante tratamientos innovadores y personalizados.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div 
                key={value.title}
                className="group bg-vet-cream rounded-3xl p-8 hover:bg-vet-green transition-colors duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-vet-green/10 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-colors">
                  <Icon className="w-7 h-7 text-vet-green group-hover:text-white transition-colors"/>
                </div>
                <h3 className="font-display text-xl font-bold text-vet-gray group-hover:text-white mb-3 transition-colors">
                  {value.title}
                </h3>
                <p className="text-vet-gray-light group-hover:text-white/80 transition-colors">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-vet-gray mb-4">
              Nuestro Equipo Profesional
            </h3>
            <p className="text-vet-gray-light max-w-2xl mx-auto">
              Especialistas certificados con años de experiencia en fisioterapia y rehabilitación animal
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square bg-gradient-to-br from-vet-cream to-vet-green/10 flex items-center justify-center p-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-vet-green to-vet-blue rounded-full flex items-center justify-center shadow-xl">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                  </div>
                </div>
                
                <div className="p-6 text-center">
                  <h4 className="font-display text-lg font-bold text-vet-gray mb-1">{member.name}</h4>
                  <p className="text-vet-green text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-vet-gray-light text-sm mb-4">{member.description}</p>
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.specialties.map((specialty) => (
                      <span 
                        key={specialty}
                        className="text-xs bg-vet-cream text-vet-gray px-3 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
