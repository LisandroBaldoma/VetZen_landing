# 📚 Guía de Configuración - Proyecto React + TypeScript + Vite

> Documentación completa del proyecto de Fisioterapia Veterinaria

---

## 📋 Tabla de Contenidos

1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [Arquitectura React vs Vue](#arquitectura-react-vs-vue)
3. [Archivos de Configuración](#archivos-de-configuración)
4. [Dependencias del Proyecto](#dependencias-del-proyecto)
5. [Scripts Disponibles](#scripts-disponibles)
6. [Conceptos Clave de React](#conceptos-clave-de-react)
7. [Migración a Vue](#migración-a-vue)

---

## 🏗️ Estructura del Proyecto

```
app/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Navbar.tsx      # Navegación principal
│   │   ├── Footer.tsx      # Pie de página
│   │   └── ui/             # Componentes de shadcn/ui (30+ componentes)
│   ├── sections/            # Secciones de la landing page
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── TreatmentsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── AppointmentSection.tsx
│   │   └── ContactSection.tsx
│   ├── hooks/              # Custom hooks de React
│   │   └── use-mobile.ts
│   ├── lib/                # Utilidades y helpers
│   │   └── utils.ts
│   ├── types/              # Tipos TypeScript
│   │   └── index.ts
│   ├── App.tsx             # Componente raíz
│   ├── main.tsx            # Punto de entrada
│   └── index.css           # Estilos globales + Tailwind
├── vite.config.ts          # Configuración de Vite
├── tsconfig.json           # Configuración TypeScript
├── eslint.config.js        # Reglas de linting
├── tailwind.config.js      # Configuración Tailwind CSS
├── postcss.config.js       # Procesador CSS
├── components.json         # Config shadcn/ui
└── package.json            # Dependencias y scripts
```

---

## 🔄 Arquitectura React vs Vue

### Declaración de Componentes

#### **React (este proyecto)**
```tsx
// AppointmentSection.tsx
import { useState } from 'react'

export default function AppointmentSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState({
    ownerName: '',
    petName: '',
  })
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // lógica
  }
  
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input 
          value={form.ownerName}
          onChange={(e) => setForm({...form, ownerName: e.target.value})}
        />
      </form>
    </section>
  )
}
```

#### **Vue (equivalente)**
```vue
<!-- AppointmentSection.vue -->
<script setup lang="ts">
import { ref } from 'vue'

const isSubmitting = ref(false)
const form = ref({
  ownerName: '',
  petName: '',
})

const handleSubmit = (e: Event) => {
  e.preventDefault()
  // lógica
}
</script>

<template>
  <section>
    <form @submit="handleSubmit">
      <input v-model="form.ownerName" />
    </form>
  </section>
</template>
```

### Comparativa de Sintaxis

| Concepto | React | Vue |
|----------|-------|-----|
| **Estado** | `useState()` | `ref()` / `reactive()` |
| **Efectos** | `useEffect()` | `watch()` / `watchEffect()` |
| **Props** | `function Button({ title })` | `defineProps<{ title: string }>()` |
| **Two-way binding** | `value` + `onChange` | `v-model` |
| **Condicionales** | `{condition && <div/>}` | `v-if` / `v-show` |
| **Loops** | `.map()` | `v-for` |
| **Eventos** | `onClick`, `onChange` | `@click`, `@input` |
| **Clase CSS** | `className` | `class` |

---

## ⚙️ Archivos de Configuración

### 1. **package.json** - Dependencias y Scripts

#### Scripts disponibles:
```bash
npm run dev      # Servidor de desarrollo (localhost:5173)
npm run build    # Build para producción
npm run lint     # Verifica errores de código
npm run preview  # Vista previa del build
```

#### Dependencias principales:
- **React Core**: `react` + `react-dom` (v19.2.0)
- **UI Components**: `@radix-ui/*` (30+ componentes accesibles)
- **Iconos**: `lucide-react` (1000+ iconos SVG)
- **Formularios**: `react-hook-form` + `zod`
- **Estilos**: `tailwindcss` + `tailwind-merge`
- **Utilidades**: `date-fns`, `sonner`, `recharts`

---

### 2. **vite.config.ts** - Build Tool

```typescript
export default defineConfig({
  base: './',                    // Ruta base para producción
  plugins: [
    inspectAttr(),               // Plugin de inspección
    react()                      // Transforma JSX + Fast Refresh
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")  // @/components/Button
    }
  }
})
```

#### ¿Qué hace Vite?
- ⚡ **Hot Module Replacement (HMR)**: Cambios instantáneos sin recargar
- 📦 **Build optimizado**: Usa Rollup para producción
- 🎯 **ESM native**: Import/export nativos en desarrollo
- 🔥 **Fast Refresh**: Mantiene el estado de React al guardar

**Equivalente en Vue:**
```typescript
import vue from '@vitejs/plugin-vue'
plugins: [vue()]  // Cambia solo el plugin
```

---

### 3. **TypeScript Configuration**

#### **tsconfig.json** (Raíz)
```json
{
  "references": [
    { "path": "./tsconfig.app.json" },    // Config para src/
    { "path": "./tsconfig.node.json" }    // Config para vite.config.ts
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]  // Alias de rutas
    }
  }
}
```

#### **tsconfig.app.json** (Aplicación)
```json
{
  "compilerOptions": {
    "target": "ES2022",              // JavaScript moderno
    "lib": ["ES2022", "DOM"],        // APIs disponibles
    "jsx": "react-jsx",              // JSX sin import React
    "module": "ESNext",              // Módulos ES6+
    "moduleResolution": "bundler",   // Resolución moderna
    "strict": true,                  // TypeScript estricto
    "noEmit": true                   // Vite maneja el build
  }
}
```

#### Características importantes:
- `"jsx": "react-jsx"`: No necesitas `import React from 'react'` en cada archivo
- `"strict": true`: Máxima verificación de tipos (detecta más errores)
- `"noEmit": true`: TypeScript solo verifica tipos, Vite hace el build

---

### 4. **eslint.config.js** - Linter

```javascript
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,          // Reglas base JavaScript
      tseslint.configs.recommended,    // Reglas TypeScript
      reactHooks.configs.flat.recommended,  // Reglas de Hooks
      reactRefresh.configs.vite        // Fast Refresh
    ]
  }
])
```

#### ¿Qué valida ESLint?
- ✅ Uso correcto de Hooks (useEffect, useState)
- ✅ Dependencias de useEffect completas
- ✅ Sintaxis TypeScript válida
- ✅ Mejores prácticas de React

**Ejemplo de error detectado:**
```tsx
// ❌ MAL - useEffect sin dependencias
useEffect(() => {
  console.log(count)
})

// ✅ BIEN - con dependencias
useEffect(() => {
  console.log(count)
}, [count])
```

---

### 5. **tailwind.config.js** - Estilos

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"  // Archivos a procesar
  ],
  theme: {
    extend: {
      colors: {
        // Colores personalizados del proyecto
        'vet-green': '#4A9B8E',
        'vet-green-light': '#6BC1B2',
        'vet-blue': '#2C5F8D',
        'vet-cream': '#FFF8F0',
        'vet-yellow': '#FFB547',
        'vet-gray': '#2D3748',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
}
```

---

### 6. **postcss.config.js** - Procesador CSS

```javascript
export default {
  plugins: {
    tailwindcss: {},      // Procesa directivas de Tailwind
    autoprefixer: {}      // Agrega prefijos de navegador
  }
}
```

#### Flujo de procesamiento:
```
index.css → PostCSS → Tailwind → Autoprefixer → CSS final
```

---

### 7. **components.json** - shadcn/ui Config

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",      // Estilo de componentes
  "rsc": false,             // No usa React Server Components
  "tsx": true,              // TypeScript
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}
```

#### ¿Para qué sirve?
Define cómo instalar componentes con:
```bash
npx shadcn add button
```

---

## 📦 Dependencias del Proyecto

### **Core React**
```json
"react": "^19.2.0",           // Framework principal
"react-dom": "^19.2.0"        // Renderizado en el DOM
```

### **UI Components (shadcn/ui + Radix)**
```json
"@radix-ui/react-*": "^1.x",  // 30+ componentes accesibles
"lucide-react": "^0.562.0",   // Iconos SVG optimizados
"class-variance-authority": "^0.7.1",  // Variantes de componentes
"clsx": "^2.1.1",             // Combinación de clases CSS
"tailwind-merge": "^3.4.0"    // Merge inteligente de Tailwind
```

### **Formularios y Validación**
```json
"react-hook-form": "^7.70.0", // Manejo de formularios
"zod": "^4.3.5",              // Validación de esquemas
"@hookform/resolvers": "^5.2.2"  // Integra Zod con RHF
```

### **Utilidades**
```json
"date-fns": "^4.1.0",         // Manejo de fechas
"sonner": "^2.0.7",           // Notificaciones toast
"recharts": "^2.15.4"         // Gráficos y charts
```

### **Build Tools**
```json
"vite": "^7.2.4",             // Bundler ultra-rápido
"typescript": "~5.9.3",       // Tipado estático
"tailwindcss": "^3.4.19",     // Framework CSS
"eslint": "^9.39.1"           // Linter de código
```

---

## 🚀 Scripts Disponibles

### Desarrollo
```bash
npm run dev
```
- Inicia servidor en `http://localhost:5173`
- Hot Module Replacement (HMR) activado
- Fast Refresh para React

### Build Producción
```bash
npm run build
```
- Compila TypeScript (`tsc -b`)
- Genera build optimizado en `/dist`
- Minifica y optimiza assets

### Vista Previa
```bash
npm run preview
```
- Sirve el build de producción localmente
- Útil para testear antes de deploy

### Linting
```bash
npm run lint
```
- Verifica errores de código
- Valida reglas de React Hooks
- Revisa tipos TypeScript

---

## 🧠 Conceptos Clave de React

### 1. **Componentes Funcionales**
```tsx
// Componente básico
function Button({ title, onClick }) {
  return <button onClick={onClick}>{title}</button>
}

// Con TypeScript
interface ButtonProps {
  title: string
  onClick: () => void
}

function Button({ title, onClick }: ButtonProps) {
  return <button onClick={onClick}>{title}</button>
}
```

### 2. **Hooks Principales**

#### **useState** - Estado local
```tsx
const [count, setCount] = useState(0)
const [form, setForm] = useState({ name: '', email: '' })

// Actualizar estado
setCount(count + 1)
setForm({ ...form, name: 'Juan' })
```

#### **useEffect** - Efectos secundarios
```tsx
useEffect(() => {
  // Se ejecuta después del render
  console.log('Componente montado')
  
  return () => {
    // Cleanup al desmontar
    console.log('Componente desmontado')
  }
}, []) // [] = solo al montar

useEffect(() => {
  console.log('Count cambió:', count)
}, [count]) // Se ejecuta cuando count cambia
```

#### **useRef** - Referencias
```tsx
const inputRef = useRef<HTMLInputElement>(null)

const focusInput = () => {
  inputRef.current?.focus()
}

return <input ref={inputRef} />
```

### 3. **Props y Children**
```tsx
interface CardProps {
  title: string
  children: React.ReactNode
}

function Card({ title, children }: CardProps) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  )
}

// Uso
<Card title="Hola">
  <p>Contenido aquí</p>
</Card>
```

### 4. **Renderizado Condicional**
```tsx
// Con &&
{isLoading && <Spinner />}

// Con ternario
{isLogin ? <Dashboard /> : <Login />}

// Con función
const renderContent = () => {
  if (error) return <Error />
  if (loading) return <Loading />
  return <Content />
}
```

### 5. **Listas y Keys**
```tsx
const items = ['Perro', 'Gato', 'Conejo']

return (
  <ul>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
)
```

### 6. **Eventos**
```tsx
// Evento básico
<button onClick={() => console.log('Click!')}>

// Con handler
const handleClick = (e: React.MouseEvent) => {
  e.preventDefault()
  console.log('Click!')
}

<button onClick={handleClick}>

// Pasar parámetros
<button onClick={() => deleteItem(id)}>
```

### 7. **Formularios**
```tsx
const [name, setName] = useState('')

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  console.log('Nombre:', name)
}

return (
  <form onSubmit={handleSubmit}>
    <input 
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <button type="submit">Enviar</button>
  </form>
)
```

---

## 🔄 Migración a Vue

### ¿Es posible migrar?
**✅ SÍ**, pero requiere reescribir todos los componentes manualmente.

### Ventajas de migrar a Vue:
- ✅ Sintaxis más familiar (templates HTML)
- ✅ `v-model` simplifica formularios
- ✅ Mejor separación HTML/JS/CSS
- ✅ Scoped styles nativos
- ✅ Computed properties y watchers

### Desventajas:
- ❌ Trabajo manual (~80-100 horas)
- ❌ No hay conversión automática
- ❌ Debes reescribir cada componente
- ❌ Menor demanda laboral que React

### Proceso de migración:

#### 1. **Setup inicial**
```bash
npm create vue@latest vet-fisioterapia-vue
# Seleccionar: TypeScript + Router + Pinia
cd vet-fisioterapia-vue
npm install
```

#### 2. **Instalar Tailwind + shadcn-vue**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npx shadcn-vue@latest init
```

#### 3. **Convertir componente React → Vue**

**React:**
```tsx
// Navbar.tsx
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <nav>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Cerrar' : 'Abrir'}
      </button>
    </nav>
  )
}
```

**Vue:**
```vue
<!-- Navbar.vue -->
<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <nav>
    <button @click="isOpen = !isOpen">
      {{ isOpen ? 'Cerrar' : 'Abrir' }}
    </button>
  </nav>
</template>

<style scoped>
/* Estilos opcionales */
</style>
```

#### 4. **Convertir hooks comunes**

| React | Vue |
|-------|-----|
| `useState(0)` | `ref(0)` |
| `useState({})` | `reactive({})` |
| `useEffect(() => {}, [])` | `onMounted(() => {})` |
| `useEffect(() => {}, [dep])` | `watch(() => dep, () => {})` |
| `useMemo()` | `computed()` |
| `useCallback()` | `computed()` |

### Recomendación:
📌 **Aprende React primero con este proyecto**, luego crea una versión Vue para comparar. Ambas tecnologías son valiosas en el mercado laboral.

---

## 📚 Recursos Adicionales

### Documentación oficial:
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

### Tutoriales recomendados:
- React Docs (nuevo sitio con hooks)
- TypeScript Handbook
- Tailwind CSS Crash Course

---

## 📝 Notas

- Este proyecto usa **React 19.2.0** (versión más reciente)
- No necesitas `import React` en los archivos (gracias a `jsx: "react-jsx"`)
- Usa `@/` como alias para imports: `import Button from '@/components/ui/button'`
- Tailwind CSS en modo JIT (Just-In-Time)
- shadcn/ui usa Radix UI por debajo (accesibilidad A++)

---

**Última actualización:** Febrero 2026
