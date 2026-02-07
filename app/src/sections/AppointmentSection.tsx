'use client'

import { useState } from 'react'
import { Calendar, CheckCircle, Clock, Phone, Mail, Loader2, Check } from 'lucide-react'

const features = [
  {
    title: 'Primera evaluación gratuita',
    description: 'Diagnóstico inicial sin costo para determinar el mejor tratamiento.',
    icon: CheckCircle,
  },
  {
    title: 'Confirmación inmediata',
    description: 'Recibirás una confirmación por WhatsApp o email en minutos.',
    icon: Mail,
  },
  {
    title: 'Flexibilidad de horarios',
    description: 'Atención de lunes a viernes con horarios adaptados a tu disponibilidad.',
    icon: Clock,
  },
]

export default function AppointmentSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [form, setForm] = useState({
    ownerName: '',
    petName: '',
    petType: '',
    treatment: '',
    date: '',
    time: '',
    phone: '',
    email: '',
    notes: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const minDate = new Date().toISOString().split('T')[0]

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!form.ownerName.trim()) {
      newErrors.ownerName = 'El nombre del dueño es requerido'
    }
    if (!form.petName.trim()) {
      newErrors.petName = 'El nombre de la mascota es requerido'
    }
    if (!form.petType) {
      newErrors.petType = 'Selecciona el tipo de animal'
    }
    if (!form.treatment) {
      newErrors.treatment = 'Selecciona un tratamiento'
    }
    if (!form.date) {
      newErrors.date = 'Selecciona una fecha'
    }
    if (!form.time) {
      newErrors.time = 'Selecciona un horario'
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido'
    } else if (!/^\d{7,15}$/.test(form.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Ingresa un teléfono válido'
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Ingresa un email válido'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setShowSuccess(true)

    setForm({
      ownerName: '',
      petName: '',
      petType: '',
      treatment: '',
      date: '',
      time: '',
      phone: '',
      email: '',
      notes: '',
    })

    setTimeout(() => {
      setShowSuccess(false)
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section id="turnos" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-vet-cream to-transparent"/>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-vet-green/5 rounded-full blur-3xl"/>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-vet-green font-semibold text-sm uppercase tracking-wider mb-4">Solicitar Turno</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-vet-gray mb-6">
              Agenda tu consulta
              <span className="text-vet-green"> hoy mismo</span>
            </h2>
            <p className="text-lg text-vet-gray-light leading-relaxed mb-8">
              Completa el formulario y nos pondremos en contacto contigo para confirmar tu turno. La primera evaluación es completamente gratuita.
            </p>

            <div className="space-y-4">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-vet-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-vet-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-vet-gray mb-1">{feature.title}</h4>
                      <p className="text-sm text-vet-gray-light">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-10 p-6 bg-vet-cream rounded-2xl">
              <h4 className="font-semibold text-vet-gray mb-4">¿Prefieres llamar?</h4>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+541145678900" className="inline-flex items-center gap-2 text-vet-green hover:underline">
                  <Phone className="w-5 h-5" />
                  +54 11 4567-8900
                </a>
                <a href="https://wa.me/541145678900" className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-gray-100">
            <h3 className="font-display text-2xl font-bold text-vet-gray mb-6">Completa tus datos</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-vet-gray mb-2">
                  Nombre del dueño <span className="text-red-500">*</span>
                </label>
                <input 
                  name="ownerName"
                  value={form.ownerName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Ej: María González"
                  className={`w-full px-4 py-3 rounded-xl border focus:border-vet-green focus:ring-2 focus:ring-vet-green/20 outline-none transition-all ${errors.ownerName ? 'border-red-300' : 'border-gray-200'}`}
                />
                {errors.ownerName && <p className="text-red-500 text-xs mt-1">{errors.ownerName}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-vet-gray mb-2">
                    Nombre de la mascota <span className="text-red-500">*</span>
                  </label>
                  <input 
                    name="petName"
                    value={form.petName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Ej: Luna"
                    className={`w-full px-4 py-3 rounded-xl border focus:border-vet-green focus:ring-2 focus:ring-vet-green/20 outline-none transition-all ${errors.petName ? 'border-red-300' : 'border-gray-200'}`}
                  />
                  {errors.petName && <p className="text-red-500 text-xs mt-1">{errors.petName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-vet-gray mb-2">
                    Tipo de animal <span className="text-red-500">*</span>
                  </label>
                  <select 
                    name="petType"
                    value={form.petType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border focus:border-vet-green focus:ring-2 focus:ring-vet-green/20 outline-none transition-all bg-white ${errors.petType ? 'border-red-300' : 'border-gray-200'}`}
                  >
                    <option value="">Seleccionar</option>
                    <option value="perro">Perro</option>
                    <option value="gato">Gato</option>
                    <option value="conejo">Conejo</option>
                    <option value="ave">Ave</option>
                    <option value="otro">Otro</option>
                  </select>
                  {errors.petType && <p className="text-red-500 text-xs mt-1">{errors.petType}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-vet-gray mb-2">
                  Tratamiento o motivo de consulta <span className="text-red-500">*</span>
                </label>
                <select 
                  name="treatment"
                  value={form.treatment}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border focus:border-vet-green focus:ring-2 focus:ring-vet-green/20 outline-none transition-all bg-white ${errors.treatment ? 'border-red-300' : 'border-gray-200'}`}
                >
                  <option value="">Seleccionar tratamiento</option>
                  <option value="post-operatoria">Fisioterapia Post-Operatoria</option>
                  <option value="neurologica">Rehabilitación Neurológica</option>
                  <option value="hidroterapia">Hidroterapia</option>
                  <option value="kinesiologia">Kinesiología Animal</option>
                  <option value="geronte">Mascotas Gerontes</option>
                  <option value="evaluacion">Evaluación Gratuita</option>
                  <option value="otro">Otro</option>
                </select>
                {errors.treatment && <p className="text-red-500 text-xs mt-1">{errors.treatment}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-vet-gray mb-2">
                    Fecha preferida <span className="text-red-500">*</span>
                  </label>
                  <input 
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    type="date"
                    min={minDate}
                    className={`w-full px-4 py-3 rounded-xl border focus:border-vet-green focus:ring-2 focus:ring-vet-green/20 outline-none transition-all ${errors.date ? 'border-red-300' : 'border-gray-200'}`}
                  />
                  {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-vet-gray mb-2">
                    Horario preferido <span className="text-red-500">*</span>
                  </label>
                  <select 
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border focus:border-vet-green focus:ring-2 focus:ring-vet-green/20 outline-none transition-all bg-white ${errors.time ? 'border-red-300' : 'border-gray-200'}`}
                  >
                    <option value="">Seleccionar</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                  </select>
                  {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-vet-gray mb-2">
                    Teléfono <span className="text-red-500">*</span>
                  </label>
                  <input 
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="Ej: 11 4567-8900"
                    className={`w-full px-4 py-3 rounded-xl border focus:border-vet-green focus:ring-2 focus:ring-vet-green/20 outline-none transition-all ${errors.phone ? 'border-red-300' : 'border-gray-200'}`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-vet-gray mb-2">
                    Email
                  </label>
                  <input 
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Ej: maria@email.com"
                    className={`w-full px-4 py-3 rounded-xl border focus:border-vet-green focus:ring-2 focus:ring-vet-green/20 outline-none transition-all ${errors.email ? 'border-red-300' : 'border-gray-200'}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-vet-gray mb-2">
                  Notas adicionales
                </label>
                <textarea 
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Cuéntanos más sobre tu mascota..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-vet-green focus:ring-2 focus:ring-vet-green/20 outline-none transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-vet-green to-vet-green-light text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-vet-green/25 hover:shadow-xl hover:shadow-vet-green/30 hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5" />
                    Solicitar Turno
                  </>
                )}
              </button>
            </form>

            {showSuccess && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-center animate-fade-in">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-green-800 mb-1">¡Solicitud enviada!</h4>
                <p className="text-green-600 text-sm">Nos pondremos en contacto contigo pronto para confirmar tu turno.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
