# Copilot Instructions - VetZen Landing Page

## Project Architecture

This is a **single-page landing application** for a veterinary physiotherapy clinic built with React 19 + TypeScript + Vite. The architecture is **section-based** rather than route-based - all content lives in `App.tsx` orchestrating sections that render sequentially.

**Key directories:**
- `src/sections/` - Main landing sections (Hero, About, Treatments, etc.) - these are the "pages"
- `src/components/` - Reusable components (Navbar, Footer) + shadcn/ui library in `ui/`
- `src/hooks/` - Custom React hooks (currently `use-mobile.ts` for responsive logic)
- `src/lib/utils.ts` - Single utility: `cn()` for merging Tailwind classes with tailwind-merge

## Code Patterns & Conventions

### Component Structure
All section components follow this pattern (see `AppointmentSection.tsx`):
```tsx
'use client' // Legacy directive - kept for compatibility, not needed in this setup

export default function MySection() {
  const [state, setState] = useState(initialValue)
  
  return (
    <section id="section-name" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content */}
      </div>
    </section>
  )
}
```

### Import Conventions
Always use the `@/` alias for internal imports (configured in `vite.config.ts`):
```tsx
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
```

**No need to import React** - `jsx: "react-jsx"` in `tsconfig.app.json` handles it automatically.

### Styling System
This project uses **Tailwind CSS only** with custom colors prefixed `vet-*`:
- `vet-green` (#4A9B8E) - Primary brand color, buttons, CTAs
- `vet-cream` (#FFF8F0) - Background sections
- `vet-gray` (#2D3748) - Text
- See full palette in `tailwind.config.js`

**Always use mobile-first approach:** Base styles → `sm:` → `md:` → `lg:` → `xl:`

Use `cn()` for conditional classes:
```tsx
<div className={cn("base-classes", isActive && "active-classes")} />
```

### Form Handling Pattern
Forms use **react-hook-form + zod** (see `AppointmentSection.tsx` lines 40-95):
- Define Zod schema near component
- Use `useForm` with `zodResolver`
- Validate in `handleSubmit` with `validateForm()`
- Show errors with inline error states

### TypeScript Practices
- Always type props with interfaces
- Use React event types: `React.FormEvent`, `React.MouseEvent`
- Avoid `any` - Component props must be explicit
- Form state example: `useState<FormData>({ name: '', email: '' })`

## Data Flow

**No global state management** - all state is local via `useState`. Navigation uses **smooth scroll** to section IDs (Navbar links → `#section-id`).

**Current "backend":** Forms simulate submission with 2-second timeout. To integrate real API:
1. Replace `setTimeout` in `AppointmentSection.tsx` handleSubmit (line ~75)
2. Add `VITE_API_URL` to `.env.local`
3. Use `fetch` or install axios

## Component Library (shadcn/ui)

40+ components installed in `src/components/ui/`. These are **copied into the project** (not npm packages), so you can modify them directly.

**To add new components:**
```bash
npx shadcn add [component-name]
```

All shadcn components use the "new-york" variant (configured in `components.json`).

## Developer Workflows

### Development
```bash
npm run dev       # Start dev server → http://localhost:5173
npm run build     # TypeScript check + Vite build → /dist
npm run lint      # ESLint check
```

Vite provides **Fast Refresh** - component state persists on save. If HMR breaks, restart dev server.

### Debugging TypeScript
TSC runs in build-only mode (`noEmit: true`). To see type errors during dev:
- VS Code shows inline errors automatically
- Or run `npm run build` to see all errors
- eslint.config.js enforces React Hooks rules

### Common Workflow Pain Points
1. **Tailwind classes not applying?** Check `content` array in `tailwind.config.js` includes your file
2. **"Cannot find module '@/...'"?** Restart TypeScript server in VS Code (Cmd/Ctrl + Shift + P → "Restart TS Server")
3. **HMR stops working?** Ctrl+C and `npm run dev` again

## Project-Specific Context

This is a **learning project** for a Vue developer transitioning to React. Key architectural decisions:

1. **Section-based, not routed** - Simpler for single-page showcase, no react-router needed
2. **shadcn/ui over Material-UI** - More customizable, copies components in-project
3. **No server-side rendering** - Pure client-side SPA, deployed as static site
4. **Strict TypeScript** - Helps catch errors early for learning

**Design constraints:**
- All section spacing: `py-20 lg:py-32` for consistency
- Container pattern: `container mx-auto px-4 sm:px-6 lg:px-8`
- Brand colors must use `vet-*` prefix for visual coherence

## Key Files to Reference

- `App.tsx` - Component composition example
- `sections/AppointmentSection.tsx` - Complex form with validation (151 lines)
- `sections/HeroSection.tsx` - Animations, layout patterns
- `components/Navbar.tsx` - useEffect for scroll behavior, mobile menu state
- `tailwind.config.js` - All brand colors and theme extensions
- `vite.config.ts` - Alias configuration

## When Adding Features

1. **New section?** Create in `src/sections/`, add to `App.tsx` import/render, add nav link in `Navbar.tsx`
2. **New UI component?** Check if shadcn/ui has it first: `npx shadcn add [component]`
3. **New form?** Copy validation pattern from `AppointmentSection.tsx`
4. **New color?** Add to `tailwind.config.js` theme.extend.colors with `vet-` prefix

Always maintain mobile-first responsive design and TypeScript strict typing.
