# 🏥 PROJECT CONTEXT - Veterinary Physiotherapy Landing Page

> **Instrucciones de contexto para asistentes de IA / Desarrolladores**

---

## 📋 INFORMACIÓN DEL PROYECTO

### **Nombre:** VetFisio - Landing Page de Fisioterapia Veterinaria
### **Stack:** React 19 + TypeScript + Vite + Tailwind CSS
### **Propósito:** Landing page profesional para clínica de fisioterapia animal con formulario de turnos

---

## 🎯 OBJETIVO DEL PROYECTO

Crear una landing page moderna y responsive para una clínica veterinaria especializada en fisioterapia animal. El sitio debe:

- ✅ Mostrar servicios de fisioterapia para mascotas
- ✅ Presentar al equipo médico profesional
- ✅ Permitir agendar turnos mediante formulario
- ✅ Incluir testimonios de clientes
- ✅ Proporcionar información de contacto
- ✅ Ser completamente responsive (mobile-first)
- ✅ Tener animaciones sutiles y profesionales

---

## 🛠️ STACK TECNOLÓGICO

### **Core**
- **React 19.2.0** - Framework JavaScript (última versión)
- **TypeScript 5.9.3** - Tipado estático
- **Vite 7.2.4** - Build tool ultra-rápido

### **UI & Styling**
- **Tailwind CSS 3.4.19** - Framework CSS utility-first
- **shadcn/ui** - Sistema de componentes basado en Radix UI
- **Radix UI** - Componentes headless accesibles
- **Lucide React** - Iconos SVG optimizados
- **tailwindcss-animate** - Animaciones CSS

### **Formularios & Validación**
- **React Hook Form 7.70.0** - Manejo de formularios
- **Zod 4.3.5** - Validación de esquemas TypeScript-first
- **@hookform/resolvers** - Integración Zod + RHF

### **Utilidades**
- **date-fns 4.1.0** - Manejo de fechas
- **sonner 2.0.7** - Notificaciones toast elegantes
- **clsx + tailwind-merge** - Combinación de clases CSS

### **Desarrollo**
- **ESLint 9** - Linter con reglas de React Hooks
- **PostCSS + Autoprefixer** - Procesamiento CSS

---

## 📁 ESTRUCTURA DEL PROYECTO

```
app/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navegación sticky con menú hamburguesa
│   │   ├── Footer.tsx          # Pie de página con redes sociales
│   │   └── ui/                 # 40+ componentes de shadcn/ui
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── card.tsx
│   │       ├── form.tsx
│   │       └── ... (más componentes)
│   │
│   ├── sections/               # Secciones de la landing page
│   │   ├── HeroSection.tsx           # Sección principal con CTA
│   │   ├── AboutSection.tsx          # Sobre nosotros + equipo médico
│   │   ├── TreatmentsSection.tsx     # Cards de tratamientos disponibles
│   │   ├── TestimonialsSection.tsx   # Testimonios de clientes
│   │   ├── AppointmentSection.tsx    # Formulario agendamiento turnos
│   │   └── ContactSection.tsx        # Información de contacto + mapa
│   │
│   ├── hooks/
│   │   └── use-mobile.ts       # Custom hook para detección mobile
│   │
│   ├── lib/
│   │   └── utils.ts            # Utilidad cn() para merge de clases
│   │
│   ├── types/
│   │   └── index.ts            # Tipos TypeScript globales
│   │
│   ├── App.tsx                 # Componente raíz (orquesta secciones)
│   ├── main.tsx                # Punto de entrada React
│   ├── index.css               # Estilos globales + Tailwind
│   └── App.css                 # Estilos adicionales
│
├── vite.config.ts              # Config Vite + alias @
├── tsconfig.json               # Config TypeScript
├── eslint.config.js            # Reglas linting
├── tailwind.config.js          # Config Tailwind + colores personalizados
├── postcss.config.js           # PostCSS + Autoprefixer
├── components.json             # Config shadcn/ui
└── package.json                # Dependencias y scripts
```

---

## 🎨 DISEÑO Y MARCA

### **Paleta de Colores**
```javascript
// tailwind.config.js
colors: {
  'vet-green': '#4A9B8E',        // Verde principal (botones, acentos)
  'vet-green-light': '#6BC1B2',  // Verde claro (hover)
  'vet-blue': '#2C5F8D',         // Azul secundario
  'vet-cream': '#FFF8F0',        // Crema (backgrounds)
  'vet-yellow': '#FFB547',       // Amarillo (acentos)
  'vet-gray': '#2D3748',         // Gris oscuro (textos)
  'vet-gray-light': '#718096'    // Gris claro (subtextos)
}
```

### **Tipografía**
- **Display/Headers:** Poppins (Google Fonts)
- **Body/Textos:** Inter (Google Fonts)

### **Espaciado**
- Secciones: `py-20 lg:py-32`
- Container: `container mx-auto px-4 sm:px-6 lg:px-8`
- Mobile-first approach

### **Componentes de UI**
Todos los componentes usan la variante **"new-york"** de shadcn/ui con:
- Bordes redondeados suaves
- Sombras sutiles
- Animaciones de transición
- Estados hover/focus accesibles

---

## 📄 SECCIONES DE LA LANDING PAGE

### **1. HeroSection** (Sección Principal)
- **Propósito:** Primera impresión, CTA principal
- **Elementos:**
  - Headline grande con texto destacado
  - Descripción de servicios
  - 2 botones CTA: "Pedir turno" + "Ver tratamientos"
  - Stats cards (años experiencia, pacientes, tasa recuperación)
  - Background con efectos de blur decorativos
- **Estado:** Funcional ✅

### **2. AboutSection** (Sobre Nosotros)
- **Propósito:** Generar confianza mostrando el equipo
- **Elementos:**
  - 3 valores de la empresa (Experiencia, Tecnología, Cuidado)
  - 4 cards del equipo médico con especialidades
  - Fotos y descripciones de veterinarios
- **Estado:** Funcional ✅

### **3. TreatmentsSection** (Tratamientos)
- **Propósito:** Mostrar servicios disponibles
- **Elementos:**
  - Grid de tratamientos con iconos
  - Hidroterapia, Electroestimulación, Masajes, Láser, etc.
  - Hover effects en cards
- **Estado:** Funcional ✅

### **4. TestimonialsSection** (Testimonios)
- **Propósito:** Prueba social con opiniones reales
- **Elementos:**
  - Cards de testimonios con avatar
  - Nombre del cliente + nombre de la mascota
  - Rating de estrellas
  - Quote/opinión
- **Estado:** Funcional ✅

### **5. AppointmentSection** (Agendar Turno)
- **Propósito:** Conversión - captura de leads
- **Elementos:**
  - Formulario completo con validación Zod
  - Campos: Nombre dueño, nombre mascota, tipo animal, tratamiento, fecha, hora, teléfono, email, notas
  - Validación en tiempo real
  - Estados: loading, success, error
  - Mensaje de confirmación
- **Estado:** Funcional con validación completa ✅
- **Características:**
  - ✅ Validación de email y teléfono
  - ✅ Fecha mínima (hoy)
  - ✅ Estados visuales de error
  - ✅ Simulación de envío (2 segundos)

### **6. ContactSection** (Contacto)
- **Propósito:** Información de contacto
- **Elementos:**
  - Dirección física
  - Teléfono + WhatsApp
  - Email
  - Horarios de atención
  - Mapa placeholder (Google Maps placeholder preparado)
- **Estado:** Funcional ✅

### **Navbar** (Navegación)
- **Tipo:** Fixed sticky responsive
- **Elementos:**
  - Logo con icono de corazón
  - Links de navegación (desktop)
  - Menú hamburguesa (mobile)
  - Smooth scroll a secciones
  - Background blur al hacer scroll
- **Estado:** Funcional ✅

### **Footer** (Pie de Página)
- **Elementos:**
  - Logo y descripción breve
  - Links útiles
  - Redes sociales
  - Copyright
- **Estado:** Funcional ✅

---

## 🔧 CONFIGURACIÓN ACTUAL

### **Alias de rutas**
```typescript
// vite.config.ts + tsconfig.json
"@/*" → "./src/*"

// Ejemplo de uso:
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
```

### **Utilidad cn()**
```typescript
// src/lib/utils.ts
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Uso: combina clases Tailwind inteligentemente
cn('px-4 py-2', 'px-6') // → 'px-6 py-2'
```

### **Scripts disponibles**
```bash
npm run dev      # Desarrollo en localhost:5173
npm run build    # Build producción -> /dist
npm run lint     # Verificar errores ESLint
npm run preview  # Preview del build
```

---

## 💡 CONVENCIONES DE CÓDIGO

### **Componentes**
- ✅ Usar **export default** para componentes de sección
- ✅ Componentes funcionales con TypeScript
- ✅ Props con interface explícita
- ✅ Usar `'use client'` solo si necesario (legacy)

```tsx
// ✅ CORRECTO
interface ButtonProps {
  title: string
  onClick: () => void
}

export default function CustomButton({ title, onClick }: ButtonProps) {
  return <button onClick={onClick}>{title}</button>
}
```

### **Estado**
- ✅ Usar `useState` para estado local
- ✅ Usar `useEffect` con dependencias correctas
- ✅ Definir tipos para estado complejo

```tsx
// ✅ CORRECTO
const [form, setForm] = useState<FormData>({
  name: '',
  email: ''
})

useEffect(() => {
  console.log(form)
}, [form]) // Dependencia explícita
```

### **Estilos**
- ✅ Usar Tailwind classes directamente
- ✅ Usar colores personalizados: `text-vet-green`, `bg-vet-cream`
- ✅ Mobile-first: `sm:`, `md:`, `lg:`, `xl:`
- ✅ Usar `cn()` para combinar clases condicionalmente

```tsx
// ✅ CORRECTO
<button className={cn(
  "px-6 py-3 rounded-full",
  isActive ? "bg-vet-green" : "bg-gray-200"
)}>
```

### **Imports**
- ✅ Usar alias `@/` para imports internos
- ✅ Agrupar imports: React → Librerías → Componentes → Utilidades

```tsx
// ✅ CORRECTO
import { useState, useEffect } from 'react'
import { Calendar, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
```

### **TypeScript**
- ✅ Tipar todos los props
- ✅ Evitar `any` - usar `unknown` si es necesario
- ✅ Usar tipos de React: `React.FormEvent`, `React.MouseEvent`

```tsx
// ✅ CORRECTO
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
}
```

---

## 🚨 REGLAS PARA ASISTENTES DE IA

### **Al agregar features:**
1. ✅ Mantener la estructura actual de carpetas
2. ✅ Usar TypeScript con tipos explícitos
3. ✅ Seguir el sistema de colores existente (vet-*)
4. ✅ Seguir el mismo estilo de componentes (shadcn/ui)
5. ✅ Mantener responsive design (mobile-first)
6. ✅ Agregar validación en formularios (Zod)

### **Al modificar código existente:**
1. ✅ No remover funcionalidad existente sin avisar
2. ✅ Mantener compatibilidad con componentes actuales
3. ✅ Preservar el estilo de código actual
4. ✅ Actualizar tipos TypeScript si es necesario
5. ✅ Testear que no rompa otras secciones

### **Al responder preguntas:**
1. ✅ Referir a archivos específicos con rutas correctas
2. ✅ Mostrar código completo, no snippets parciales
3. ✅ Explicar arquitectura React cuando sea relevante
4. ✅ Comparar con Vue si el usuario lo pide (viene de Vue)
5. ✅ Usar ejemplos del proyecto actual

### **Prioridades:**
1. 🥇 Funcionalidad correcta
2. 🥈 TypeScript sin errores
3. 🥉 Accesibilidad (a11y)
4. 🏅 Performance
5. 🎨 Diseño visual

---

## 🐛 PROBLEMAS CONOCIDOS Y SOLUCIONES

### **Error: Module not found**
```bash
# Solución: Verificar alias en tsconfig.json y vite.config.ts
{
  "compilerOptions": {
    "paths": { "@/*": ["./src/*"] }
  }
}
```

### **Tailwind classes no aplican**
```bash
# Solución: Agregar extensión al content de tailwind.config.js
content: ["./src/**/*.{ts,tsx}"]
```

### **TypeScript errors en shadcn/ui**
```bash
# Solución: Verificar que @types/react esté instalado
npm install -D @types/react @types/react-dom
```

### **Hot reload no funciona**
```bash
# Solución: Reinicar Vite
# Ctrl+C en terminal
npm run dev
```

---

## 📦 COMPONENTES DE shadcn/ui DISPONIBLES

Componentes ya instalados en `/src/components/ui/`:

- ✅ accordion, alert-dialog, alert, aspect-ratio
- ✅ avatar, badge, breadcrumb, button, button-group
- ✅ calendar, card, carousel, chart, checkbox
- ✅ collapsible, command, context-menu, dialog
- ✅ drawer, dropdown-menu, empty, field, form
- ✅ hover-card, input, input-group, input-otp
- ✅ item, kbd, label, menubar, navigation-menu
- ✅ pagination, popover, progress, radio-group
- ✅ resizable, scroll-area, select, separator
- ✅ sheet, sidebar, skeleton, slider, sonner
- ✅ spinner, switch, table, tabs, textarea
- ✅ toggle, toggle-group, tooltip

**Agregar más componentes:**
```bash
npx shadcn add [component-name]
```

---

## 🎯 TAREAS PENDIENTES / MEJORAS SUGERIDAS

### **Funcionalidades**
- [ ] Integrar backend real para formulario de turnos
- [ ] Agregar galería de imágenes de pacientes (con permiso)
- [ ] Implementar blog de consejos veterinarios
- [ ] Sistema de notificaciones por email
- [ ] Panel de administración para gestionar turnos

### **UX/UI**
- [ ] Agregar más animaciones sutiles (framer-motion)
- [ ] Implementar tema oscuro (next-themes ya instalado)
- [ ] Mejorar loading states
- [ ] Agregar skeleton loaders
- [ ] Implementar lazy loading de imágenes

### **Performance**
- [ ] Optimizar imágenes (WebP)
- [ ] Implementar code splitting
- [ ] Agregar service worker (PWA)
- [ ] Mejorar lighthouse score

### **SEO**
- [ ] Agregar meta tags completos
- [ ] Implementar sitemap.xml
- [ ] Agregar structured data (JSON-LD)
- [ ] Optimizar para búsqueda local

---

## 📞 CONTACTO DEL PROYECTO

### **Usuario/Desarrollador**
- **Nombre:** Lisandro
- **Background:** Desarrollador Vue.js aprendiendo React
- **Objetivo:** Aprender React mediante proyecto real

### **Contexto del usuario:**
- ✅ Conoce bien Vue.js (referencia principal)
- ✅ Primera vez con React
- ✅ Familiarizado con TypeScript
- ✅ Usa Laragon como entorno de desarrollo
- ✅ Le interesa comparativas React vs Vue

---

## 🎓 GUÍAS DE APRENDIZAJE

### **Conceptos React para usuario Vue:**

| Vue | React | Archivo ejemplo |
|-----|-------|-----------------|
| `ref()` | `useState()` | AppointmentSection.tsx |
| `reactive()` | `useState({})` | AppointmentSection.tsx |
| `computed()` | `useMemo()` | - |
| `watch()` | `useEffect()` | Navbar.tsx |
| `onMounted()` | `useEffect([], [])` | Navbar.tsx |
| `v-model` | `value` + `onChange` | AppointmentSection.tsx |
| `v-if` | `{condition && <div/>}` | Todas las secciones |
| `v-for` | `.map()` | AboutSection.tsx |
| `@click` | `onClick` | Navbar.tsx |
| `<template>` | `return (<div/>)` | Todos los componentes |

### **Archivos clave para aprender:**
1. **AppointmentSection.tsx** - Formularios, validación, estado complejo
2. **Navbar.tsx** - useEffect, eventos, estado simple
3. **AboutSection.tsx** - Renderizado de listas, props estáticas
4. **App.tsx** - Composición de componentes

---

## 🔐 VARIABLES DE ENTORNO

Actualmente no hay variables de entorno configuradas.

**Para agregar en el futuro:**
```env
# .env.local
VITE_API_URL=https://api.vetfisio.com
VITE_GOOGLE_MAPS_KEY=tu_key_aqui
VITE_EMAIL_SERVICE=tu_servicio
```

**Uso en código:**
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

---

## 📊 MÉTRICAS ACTUALES

### **Performance**
- Build time: ~3 segundos
- Dev server start: ~1 segundo
- Hot reload: <100ms

### **Tamaño**
- Líneas de código: ~2000+
- Componentes: 40+ (shadcn) + 8 custom
- Bundle size: ~500KB (estimado)

---

## 🚀 DEPLOYMENT

### **Build para producción:**
```bash
npm run build
# Output: /dist folder
```

### **Opciones de hosting:**
- ✅ **Vercel** (recomendado) - Deploy automático desde Git
- ✅ **Netlify** - Drag & drop o Git
- ✅ **GitHub Pages** - Gratuito para sitios estáticos
- ✅ **Servidor propio** - Servir carpeta /dist con Nginx/Apache

### **Configuración Vercel:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

---

## 📝 NOTAS IMPORTANTES

1. **No usar `import React from 'react'`** - Ya no es necesario en React 19 con jsx: react-jsx
2. **Siempre usar el alias `@/`** - Para imports internos
3. **Mobile-first** - Empezar estilos sin breakpoint, luego `sm:`, `md:`, etc.
4. **shadcn/ui** - Los componentes son copiados al proyecto (no npm package), se pueden modificar
5. **Lucide icons** - Importar solo los necesarios para optimizar bundle
6. **Zod schemas** - Definir cerca de los formularios que los usan
7. **TypeScript strict** - Configuración estricta activada, aprovecharla

---

## 🎯 COMANDOS RÁPIDOS

```bash
# Desarrollo
npm run dev

# Instalar nuevo componente shadcn
npx shadcn add [component]

# Ver errores TypeScript
npm run build

# Lint
npm run lint

# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install

# Actualizar dependencias
npm update
```

---

## 🆘 DEBUGGING

### **Errores comunes:**

1. **"Cannot find module '@/...'"**
   - Verificar alias en vite.config.ts y tsconfig.json
   - Reiniciar TypeScript server en VS Code

2. **"Unexpected token '<'"**
   - Archivo no procesado por Vite
   - Verificar extensión .tsx
   - Reiniciar dev server

3. **Tailwind classes no funcionan**
   - Verificar content en tailwind.config.js
   - Verificar import de index.css en main.tsx
   - Purgar cache: eliminar node_modules/.vite

4. **TypeScript errors en componentes existentes**
   - npm install -D @types/react @types/react-dom
   - Verificar versión TypeScript ~5.9.3

---

**Última actualización:** Febrero 7, 2026  
**Versión del contexto:** 1.0  
**Estado del proyecto:** ✅ Funcional - En desarrollo
