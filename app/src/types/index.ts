export interface Treatment {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  benefits: string[]
  duration: string
  gradient: string
}

export interface Testimonial {
  id: string
  name: string
  petName: string
  petType: string
  rating: number
  comment: string
  date: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  description: string
  specialties: string[]
}

export interface AppointmentForm {
  ownerName: string
  petName: string
  petType: string
  treatment: string
  date: string
  time: string
  phone: string
  email: string
  notes: string
}

export interface ContactInfo {
  address: string
  phone: string
  whatsapp: string
  email: string
  hours: string
}

export interface NavItem {
  label: string
  href: string
}

export interface Value {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}
