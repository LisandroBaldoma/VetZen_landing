// Constantes para opciones de tratamientos
// Estas opciones deben ser usadas tanto en el frontend como referencia para el backend

import {
  Heart,
  Activity,
  Zap,
  Waves,
  Star,
  Shield,
  Sparkles,
  Droplets,
  Wind,
  Smile,
} from 'lucide-react'

// ============================================
// ICONOS DISPONIBLES (10)
// ============================================
export const AVAILABLE_ICONS = {
  Heart: Heart,        // Cuidado, amor, cardiología
  Activity: Activity,  // Movimiento, actividad física, signos vitales
  Zap: Zap,           // Energía, estimulación, terapia eléctrica
  Waves: Waves,       // Ondas, hidroterapia, terapia acuática
  Star: Star,         // Calidad, excelencia, destacado
  Shield: Shield,     // Protección, prevención, fortalecimiento
  Sparkles: Sparkles, // Recuperación, mejoría, brillo
  Droplets: Droplets, // Hidroterapia, fluidez, agua
  Wind: Wind,         // Respiración, movimiento suave, aire
  Smile: Smile,       // Bienestar, felicidad, confort
} as const

export type IconName = keyof typeof AVAILABLE_ICONS

// Lista de nombres de iconos para validación en backend
export const ICON_NAMES: IconName[] = [
  'Heart',
  'Activity',
  'Zap',
  'Waves',
  'Star',
  'Shield',
  'Sparkles',
  'Droplets',
  'Wind',
  'Smile',
]

// ============================================
// GRADIENTES DISPONIBLES (10)
// ============================================
export const AVAILABLE_GRADIENTS = {
  orange: 'from-orange-400 to-orange-600',     // Energía, vitalidad
  blue: 'from-blue-400 to-blue-600',           // Calma, confianza
  emerald: 'from-emerald-400 to-emerald-600',  // Salud, naturaleza
  purple: 'from-purple-400 to-purple-600',     // Especializado, premium
  pink: 'from-pink-400 to-pink-600',           // Cuidado, delicadeza
  cyan: 'from-cyan-400 to-cyan-600',           // Agua, hidroterapia
  amber: 'from-amber-400 to-amber-600',        // Calidez, confort
  teal: 'from-teal-400 to-teal-600',           // Equilibrio, armonía
  red: 'from-red-400 to-red-600',              // Vitalidad, fuerza
  indigo: 'from-indigo-400 to-indigo-600',     // Profesionalismo, tecnología
} as const

export type GradientName = keyof typeof AVAILABLE_GRADIENTS

// Lista de nombres de gradientes para validación en backend
export const GRADIENT_NAMES: GradientName[] = [
  'orange',
  'emerald',
  'blue',
  'purple',
  'pink',
  'cyan',
  'amber',
  'teal',
  'red',
  'indigo',
]

// ============================================
// HELPERS
// ============================================

/**
 * Obtiene el componente de icono por su nombre
 * @param iconName - Nombre del icono
 * @returns Componente de React del icono o Heart por defecto
 */
export const getIconComponent = (iconName: string) => {
  const normalizedName = iconName.charAt(0).toUpperCase() + iconName.slice(1).toLowerCase()
  return AVAILABLE_ICONS[normalizedName as IconName] || AVAILABLE_ICONS.Heart
}

/**
 * Obtiene las clases de gradiente por su nombre
 * @param gradientName - Nombre del gradiente (puede ser el nombre corto o las clases completas)
 * @returns String con las clases de Tailwind del gradiente
 */
export const getGradientClasses = (gradientName: string): string => {
  // Si ya viene con el formato "from-X to-Y", devolverlo directamente
  if (gradientName.includes('from-') && gradientName.includes('to-')) {
    return gradientName
  }
  
  // Si es solo el nombre (ej: "orange", "blue"), buscar en el mapa
  const normalizedName = gradientName.toLowerCase() as GradientName
  return AVAILABLE_GRADIENTS[normalizedName] || AVAILABLE_GRADIENTS.emerald
}

// ============================================
// EXPORTAR PARA REFERENCIA DEL BACKEND
// ============================================

/**
 * Objeto con todas las opciones disponibles
 * Usar esto como referencia para validación en el backend
 */
export const TREATMENT_OPTIONS = {
  icons: ICON_NAMES,
  gradients: GRADIENT_NAMES,
  iconComponents: AVAILABLE_ICONS,
  gradientClasses: AVAILABLE_GRADIENTS,
} as const

/**
 * Información para el backend sobre cómo debe enviar los datos
 */
export const BACKEND_REFERENCE = {
  icon_name: 'Debe ser uno de: ' + ICON_NAMES.join(', '),
  gradient: 'Puede ser el nombre corto (orange, blue, etc.) o las clases completas (from-orange-400 to-orange-600)',
  examples: {
    icon_name: 'Heart',
    gradient_short: 'orange',
    gradient_full: 'from-orange-400 to-orange-600',
  },
}
