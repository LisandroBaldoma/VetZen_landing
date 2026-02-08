// src/services/api.ts
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'
console.log('meta.env.VITE_API_URL', API_URL)
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

// Types
export interface HeroData {
  title: string
  subtitle: string
  description: string
  stats: Array<{ value: string; label: string }>
  cta_primary: { text: string; link: string }
  cta_secondary: { text: string; link: string }
}

export interface TeamMember {
  id: number
  name: string
  role: string
  description: string
  specialties: string[]
  image_url: string
  is_active: boolean
}

export interface Treatment {
  id: number
  title: string
  description: string
  icon_name: string
  features: string[]
  price?: number
  duration?: string
  is_active: boolean
}

export interface Testimonial {
  id: number
  client_name: string
  pet_name: string
  pet_type: string
  rating: number
  comment: string
  avatar_url?: string
}

export interface AppointmentData {
  owner_name: string
  pet_name: string
  pet_type: string
  treatment_id?: number
  appointment_date: string
  appointment_time: string
  phone: string
  email: string
  notes?: string
}

export interface ContactInfo {
  phone: string
  whatsapp: string
  email: string
  address: string
  schedule: string
  social_networks: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
  map_embed_url?: string
}

// API Services
export const heroService = {
  get: () => api.get<{ data: HeroData }>('/hero').then(res => res.data.data)
}

export const teamService = {
  getAll: () => api.get<{ data: TeamMember[] }>('/team').then(res => res.data.data)
}

export const treatmentService = {
  getAll: () => api.get<{ data: Treatment[] }>('/treatments').then(res => res.data.data)
}

export const testimonialService = {
  getAll: () => api.get<{ data: Testimonial[] }>('/testimonials').then(res => res.data.data)
}

export const appointmentService = {
  create: (data: AppointmentData) => 
    api.post<{ success: boolean; message: string }>('/appointments', data).then(res => res.data)
}

export const contactService = {
  get: () => api.get<{ data: ContactInfo }>('/contact').then(res => res.data.data)
}

export default api
