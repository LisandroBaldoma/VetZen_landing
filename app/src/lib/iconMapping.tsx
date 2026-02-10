import { CheckCircle, Clock, Zap, Waves, Hand, Heart, Activity } from 'lucide-react'

// Mapeo de iconos del backend a componentes React
export const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'check-circle': CheckCircle,
  'clock': Clock,
  'zap': Zap,
  'lightning': ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
    </svg>
  ),
  'waves': Waves,
  'water': ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 14.66V20a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h2.34M20 14.66a7 7 0 01-14 0M20 14.66A3 3 0 0117 11a3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 01-3 3 3 3 0 01-3-3"/>
    </svg>
  ),
  'hand': Hand,
  'hand-wave': ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11"/>
    </svg>
  ),
  'heart': Heart,
  'activity': Activity,
  'laser': ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
    </svg>
  ),
}

// Mapeo de gradientes por tipo de tratamiento o ID
export const gradientMap: Record<string, string> = {
  // Por nombre
  'fisioterapia-post-operatoria': 'from-vet-green to-vet-green-light',
  'rehabilitacion-neurologica': 'from-vet-blue to-vet-blue-light',
  'hidroterapia': 'from-cyan-500 to-blue-500',
  'kinesiologia': 'from-vet-yellow to-orange-400',
  'mascotas-gerontes': 'from-purple-500 to-pink-500',
  'terapia-laser': 'from-red-500 to-rose-500',
  // Fallback por índice
  '0': 'from-vet-green to-vet-green-light',
  '1': 'from-vet-blue to-vet-blue-light',
  '2': 'from-cyan-500 to-blue-500',
  '3': 'from-vet-yellow to-orange-400',
  '4': 'from-purple-500 to-pink-500',
  '5': 'from-red-500 to-rose-500',
  // Default
  'default': 'from-vet-green to-vet-green-light',
}

// Función helper para obtener el icono
export const getIcon = (iconName: string) => {
  return iconMap[iconName] || iconMap['check-circle']
}

// Función helper para obtener el gradiente
export const getGradient = (treatmentId: number, index: number): string => {
  // Intentar obtener por ID o índice, sino usar default
  return gradientMap[treatmentId.toString()] || gradientMap[index.toString()] || gradientMap['default']
}
