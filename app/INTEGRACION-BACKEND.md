# 🔗 Guía de Integración Backend-Frontend

## Resumen
Este documento explica cómo integrar el backend Laravel con el frontend React de VetFisio.

---

## 📋 CHECKLIST DE INTEGRACIÓN

### Backend (Laravel)
- [ ] Proyecto Laravel creado y configurado
- [ ] Base de datos MySQL configurada
- [ ] Migraciones ejecutadas
- [ ] Seeders con datos de ejemplo
- [ ] API endpoints implementados
- [ ] CORS configurado
- [ ] Laravel Sanctum instalado
- [ ] Server corriendo en `http://localhost:8000`

### Frontend (React)
- [ ] Servicio API creado (`src/services/api.ts`)
- [ ] Variables de entorno configuradas (`.env.local`)
- [ ] Dependencias actualizadas si es necesario
- [ ] Componentes migrados a usar API

---

## 🚀 ORDEN DE MIGRACIÓN RECOMENDADO

### 1. **Hero Section** (Más simple)
**Backend**: Tabla `hero_sections` con un solo registro
**Frontend**: `HeroSection.tsx` 
**Complejidad**: ⭐ Baja

**Pasos:**
1. Crear endpoint GET `/api/hero` en Laravel
2. Seedear datos de ejemplo
3. Actualizar `HeroSection.tsx` usando el ejemplo en `HeroSection.EXAMPLE-WITH-API.tsx`
4. Probar endpoint con Postman/Insomnia
5. Verificar que funciona en navegador

### 2. **Contact Info** (Simple)
**Backend**: Tabla `contact_info` con un solo registro
**Frontend**: `ContactSection.tsx`
**Complejidad**: ⭐ Baja

### 3. **Treatments** (Lista)
**Backend**: Tabla `treatments` con múltiples registros
**Frontend**: `TreatmentsSection.tsx`
**Complejidad**: ⭐⭐ Media

### 4. **Testimonials** (Lista)
**Backend**: Tabla `testimonials` con múltiples registros
**Frontend**: `TestimonialsSection.tsx`
**Complejidad**: ⭐⭐ Media

### 5. **Team Members** (Lista con imágenes)
**Backend**: Tabla `team_members` + storage de imágenes
**Frontend**: `AboutSection.tsx`
**Complejidad**: ⭐⭐⭐ Media-Alta (por imágenes)

### 6. **Appointments** (Formulario con POST)
**Backend**: Endpoint POST `/api/appointments`
**Frontend**: `AppointmentSection.tsx`
**Complejidad**: ⭐⭐⭐ Media-Alta (validación, notificaciones)

---

## 📝 EJEMPLO DE MIGRACIÓN COMPLETA

### Backend Laravel

#### 1. Migración
```php
// database/migrations/xxxx_create_hero_sections_table.php
Schema::create('hero_sections', function (Blueprint $table) {
    $table->id();
    $table->string('title');
    $table->string('subtitle');
    $table->text('description');
    $table->json('stats'); // [{"value":"15+","label":"Años..."}]
    $table->json('cta_primary'); // {"text":"...","link":"..."}
    $table->json('cta_secondary');
    $table->boolean('is_active')->default(true);
    $table->timestamps();
});
```

#### 2. Modelo
```php
// app/Models/HeroSection.php
class HeroSection extends Model
{
    protected $fillable = [
        'title', 'subtitle', 'description', 
        'stats', 'cta_primary', 'cta_secondary', 
        'is_active'
    ];

    protected $casts = [
        'stats' => 'array',
        'cta_primary' => 'array',
        'cta_secondary' => 'array',
        'is_active' => 'boolean',
    ];
}
```

#### 3. Controller
```php
// app/Http/Controllers/Api/HeroController.php
class HeroController extends Controller
{
    public function show()
    {
        $hero = HeroSection::where('is_active', true)->first();
        
        if (!$hero) {
            return response()->json([
                'success' => false,
                'message' => 'No hero section found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $hero
        ]);
    }

    // Para el admin panel
    public function update(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'required|string|max:255',
            'description' => 'required|string',
            'stats' => 'required|array',
            'cta_primary' => 'required|array',
            'cta_secondary' => 'required|array',
        ]);

        $hero = HeroSection::firstOrFail();
        $hero->update($validated);

        return response()->json([
            'success' => true,
            'data' => $hero,
            'message' => 'Hero section updated successfully'
        ]);
    }
}
```

#### 4. Rutas
```php
// routes/api.php
Route::get('/hero', [HeroController::class, 'show']);

// Rutas protegidas para admin
Route::middleware('auth:sanctum')->group(function () {
    Route::put('/hero', [HeroController::class, 'update']);
});
```

#### 5. Seeder
```php
// database/seeders/HeroSectionSeeder.php
class HeroSectionSeeder extends Seeder
{
    public function run()
    {
        HeroSection::create([
            'title' => 'Fisioterapia de excelencia para tu mascota',
            'subtitle' => 'Especialistas en rehabilitación animal',
            'description' => 'Recuperamos la movilidad y calidad de vida de tu compañero peludo con tratamientos personalizados, tecnología de vanguardia y un equipo de especialistas dedicados.',
            'stats' => [
                ['value' => '15+', 'label' => 'Años de experiencia'],
                ['value' => '5000+', 'label' => 'Pacientes atendidos'],
                ['value' => '98%', 'label' => 'Tasa de recuperación'],
            ],
            'cta_primary' => [
                'text' => 'Solicitar Turno',
                'link' => '#turnos'
            ],
            'cta_secondary' => [
                'text' => 'Ver Tratamientos',
                'link' => '#tratamientos'
            ],
            'is_active' => true
        ]);
    }
}
```

### Frontend React

Ya creado en `src/sections/HeroSection.EXAMPLE-WITH-API.tsx`

**Cambios clave:**
1. ✅ Import de `heroService` desde API
2. ✅ `useState` para datos, loading y error
3. ✅ `useEffect` para fetch al montar componente
4. ✅ Loading skeleton opcional
5. ✅ Fallback a datos por defecto si falla
6. ✅ Manejo de errores

---

## 🔧 CONFIGURACIÓN CORS

En Laravel `config/cors.php`:
```php
return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    
    'allowed_methods' => ['*'],
    
    'allowed_origins' => [
        'http://localhost:5173',  // Vite dev server
        'http://localhost:3000',  // Si usas otro puerto
    ],
    
    'allowed_origins_patterns' => [],
    
    'allowed_headers' => ['*'],
    
    'exposed_headers' => [],
    
    'max_age' => 0,
    
    'supports_credentials' => true,
];
```

---

## 🧪 TESTING LA INTEGRACIÓN

### 1. Verificar Backend
```bash
# En terminal del proyecto Laravel
php artisan serve

# Probar endpoint
curl http://localhost:8000/api/hero
```

Deberías ver:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Fisioterapia de excelencia para tu mascota",
    ...
  }
}
```

### 2. Verificar Frontend
```bash
# En terminal del proyecto React
npm run dev

# Abrir navegador en http://localhost:5173
# Abrir DevTools → Network → filtrar por "hero"
# Deberías ver la petición GET /api/hero con status 200
```

### 3. Debugging
```tsx
// Agregar console.log temporal en HeroSection.tsx
useEffect(() => {
  const fetchHeroData = async () => {
    try {
      console.log('🔄 Fetching hero data...')
      const data = await heroService.get()
      console.log('✅ Hero data received:', data)
      setHeroData(data)
    } catch (err) {
      console.error('❌ Error:', err)
    }
  }
  fetchHeroData()
}, [])
```

---

## ⚠️ ERRORES COMUNES Y SOLUCIONES

### Error: CORS policy
**Síntoma**: `Access to fetch at 'http://localhost:8000/api/hero' from origin 'http://localhost:5173' has been blocked by CORS policy`

**Solución**:
```bash
# En Laravel
php artisan config:clear
php artisan cache:clear

# Verificar config/cors.php
# Agregar 'http://localhost:5173' a allowed_origins
```

### Error: 404 Not Found
**Verificar**:
- ✅ Laravel server corriendo en port 8000
- ✅ Ruta definida en `routes/api.php`
- ✅ URL correcta en `.env.local`: `VITE_API_URL=http://localhost:8000/api`

### Error: Network Error
**Verificar**:
- ✅ Backend corriendo: `php artisan serve`
- ✅ Firewall no bloqueando
- ✅ URL correcta (sin trailing slash)

### Datos no se actualizan
**Solución**:
```bash
# Limpiar cache de React
rm -rf node_modules/.vite
npm run dev
```

---

## 📱 REACT QUERY (OPCIONAL - Recomendado)

Para mejor gestión de cache y estado:

```bash
npm install @tanstack/react-query
```

```tsx
// src/main.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
```

```tsx
// src/sections/HeroSection.tsx (con React Query)
import { useQuery } from '@tanstack/react-query'
import { heroService } from '@/services/api'

export default function HeroSection() {
  const { data: heroData, isLoading, error } = useQuery({
    queryKey: ['hero'],
    queryFn: heroService.get,
    staleTime: 1000 * 60 * 5, // Cache por 5 minutos
  })

  if (isLoading) return <LoadingSkeleton />
  if (error) return <ErrorMessage />
  
  return (
    <section>
      <h1>{heroData.title}</h1>
      {/* ... */}
    </section>
  )
}
```

**Ventajas**:
- ✅ Cache automático
- ✅ Refetch automático
- ✅ Loading states built-in
- ✅ Error handling mejorado
- ✅ Menos código boilerplate

---

## 📚 RECURSOS

- [Laravel API Resources](https://laravel.com/docs/11.x/eloquent-resources)
- [Laravel Sanctum](https://laravel.com/docs/11.x/sanctum)
- [React Query](https://tanstack.com/query/latest)
- [Axios Documentation](https://axios-http.com/)

---

**Última actualización:** Febrero 2026
