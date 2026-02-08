# 🚀 PROYECTO BACKEND: Laravel 11 + Inertia.js + Vue 3 - VetFisio

## OBJETIVO
Crear backend con panel administrativo integrado usando Laravel Breeze + Inertia.js + Vue 3 para gestionar el contenido de la landing page VetFisio.

---

## 📋 COMANDOS DE INSTALACIÓN

### 1. Crear Proyecto Laravel
```bash
# Crear proyecto Laravel 11
composer create-project laravel/laravel vet-fisio-backend
cd vet-fisio-backend

# Instalar Laravel Breeze con Inertia + Vue + TypeScript
composer require laravel/breeze --dev
php artisan breeze:install vue

# Cuando pregunte, seleccionar:
# ✓ Vue
# ✓ TypeScript? Yes
# ✓ SSR? No (para este proyecto)
# ✓ Pest? No (opcional)

# Instalar dependencias Node
npm install

# Compilar assets
npm run dev
```

### 2. Configurar Base de Datos
```bash
# Editar .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=vet_fisio
DB_USERNAME=root
DB_PASSWORD=
```

**En Laragon:**
- Crear base de datos `vet_fisio` desde HeidiSQL o Adminer
- O usar comando: `mysql -u root -e "CREATE DATABASE vet_fisio"`

### 3. Configurar CORS para API pública
```bash
# Instalar CORS
composer require fruitcake/laravel-cors

# Publicar configuración
php artisan vendor:publish --provider="Fruitcake\Cors\CorsServiceProvider"
```

---

## 🗄️ ESTRUCTURA DEL PROYECTO

```
vet-fisio-backend/
├── app/
│   ├── Http/Controllers/
│   │   ├── Admin/              # Controladores del panel admin (Inertia)
│   │   │   ├── DashboardController.php
│   │   │   ├── HeroSectionController.php
│   │   │   ├── TeamMemberController.php
│   │   │   ├── TreatmentController.php
│   │   │   ├── TestimonialController.php
│   │   │   └── AppointmentController.php
│   │   └── Api/                # Controladores API pública (para React)
│   │       ├── HeroController.php
│   │       ├── TeamController.php
│   │       ├── TreatmentController.php
│   │       ├── TestimonialController.php
│   │       ├── AppointmentController.php
│   │       └── ContactController.php
│   ├── Models/
│   │   ├── HeroSection.php
│   │   ├── TeamMember.php
│   │   ├── Treatment.php
│   │   ├── Testimonial.php
│   │   ├── Appointment.php
│   │   └── ContactInfo.php
│   └── Enums/
│       ├── AppointmentStatus.php
│       └── PetType.php
├── database/
│   ├── migrations/
│   └── seeders/
├── resources/
│   ├── js/
│   │   ├── Components/       # Componentes Vue compartidos
│   │   ├── Layouts/          # Layouts (AuthenticatedLayout, GuestLayout)
│   │   └── Pages/            # Páginas Inertia
│   │       ├── Auth/         # Login, Register (ya vienen con Breeze)
│   │       ├── Dashboard.vue # Dashboard principal
│   │       ├── Hero/
│   │       │   └── Edit.vue
│   │       ├── Team/
│   │       │   ├── Index.vue
│   │       │   ├── Create.vue
│   │       │   └── Edit.vue
│   │       ├── Treatments/
│   │       │   ├── Index.vue
│   │       │   ├── Create.vue
│   │       │   └── Edit.vue
│   │       ├── Testimonials/
│   │       │   ├── Index.vue
│   │       │   ├── Create.vue
│   │       │   └── Edit.vue
│   │       ├── Appointments/
│   │       │   ├── Index.vue
│   │       │   └── Show.vue
│   │       └── Contact/
│   │           └── Edit.vue
│   └── views/
│       └── app.blade.php     # Layout principal (Inertia)
└── routes/
    ├── web.php               # Rutas del panel admin (Inertia)
    └── api.php               # API pública para React
```

---

## 📊 MIGRACIONES

### 1. Hero Section
```bash
php artisan make:migration create_hero_sections_table
```

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

### 2. Team Members
```bash
php artisan make:migration create_team_members_table
```

```php
Schema::create('team_members', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('role');
    $table->text('description');
    $table->json('specialties'); // ["Fisioterapia", "Rehabilitación"]
    $table->string('image_url')->nullable();
    $table->integer('order')->default(0);
    $table->boolean('is_active')->default(true);
    $table->timestamps();
});
```

### 3. Treatments
```bash
php artisan make:migration create_treatments_table
```

```php
Schema::create('treatments', function (Blueprint $table) {
    $table->id();
    $table->string('title');
    $table->text('description');
    $table->string('icon_name'); // Nombre del icono Lucide
    $table->json('features')->nullable(); // ["Feature 1", "Feature 2"]
    $table->decimal('price', 10, 2)->nullable();
    $table->string('duration')->nullable(); // "45 minutos"
    $table->integer('order')->default(0);
    $table->boolean('is_active')->default(true);
    $table->timestamps();
});
```

### 4. Testimonials
```bash
php artisan make:migration create_testimonials_table
```

```php
Schema::create('testimonials', function (Blueprint $table) {
    $table->id();
    $table->string('client_name');
    $table->string('pet_name');
    $table->enum('pet_type', ['Perro', 'Gato', 'Conejo', 'Otro']);
    $table->integer('rating')->default(5); // 1-5
    $table->text('comment');
    $table->string('avatar_url')->nullable();
    $table->boolean('is_published')->default(false);
    $table->timestamps();
});
```

### 5. Appointments
```bash
php artisan make:migration create_appointments_table
```

```php
Schema::create('appointments', function (Blueprint $table) {
    $table->id();
    $table->string('owner_name');
    $table->string('pet_name');
    $table->enum('pet_type', ['Perro', 'Gato', 'Conejo', 'Otro']);
    $table->foreignId('treatment_id')->nullable()->constrained()->nullOnDelete();
    $table->date('appointment_date');
    $table->time('appointment_time');
    $table->string('phone');
    $table->string('email')->nullable();
    $table->text('notes')->nullable();
    $table->enum('status', ['pending', 'confirmed', 'cancelled', 'completed'])->default('pending');
    $table->timestamps();
});
```

### 6. Contact Info
```bash
php artisan make:migration create_contact_info_table
```

```php
Schema::create('contact_info', function (Blueprint $table) {
    $table->id();
    $table->string('phone');
    $table->string('whatsapp');
    $table->string('email');
    $table->string('address');
    $table->text('schedule');
    $table->json('social_networks')->nullable(); // {"facebook":"...","instagram":"..."}
    $table->text('map_embed_url')->nullable();
    $table->timestamps();
});
```

### Ejecutar Migraciones
```bash
php artisan migrate
```

---

## 🎨 MODELOS

### HeroSection
```bash
php artisan make:model HeroSection
```

```php
// app/Models/HeroSection.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HeroSection extends Model
{
    protected $fillable = [
        'title',
        'subtitle',
        'description',
        'stats',
        'cta_primary',
        'cta_secondary',
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

### TeamMember
```php
// app/Models/TeamMember.php
class TeamMember extends Model
{
    protected $fillable = [
        'name', 'role', 'description', 'specialties',
        'image_url', 'order', 'is_active'
    ];

    protected $casts = [
        'specialties' => 'array',
        'is_active' => 'boolean',
    ];
}
```

### Treatment
```php
// app/Models/Treatment.php
class Treatment extends Model
{
    protected $fillable = [
        'title', 'description', 'icon_name', 'features',
        'price', 'duration', 'order', 'is_active'
    ];

    protected $casts = [
        'features' => 'array',
        'price' => 'decimal:2',
        'is_active' => 'boolean',
    ];

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }
}
```

### Testimonial
```php
// app/Models/Testimonial.php
class Testimonial extends Model
{
    protected $fillable = [
        'client_name', 'pet_name', 'pet_type',
        'rating', 'comment', 'avatar_url', 'is_published'
    ];

    protected $casts = [
        'rating' => 'integer',
        'is_published' => 'boolean',
    ];

    public function scopePublished($query)
    {
        return $query->where('is_published', true);
    }
}
```

### Appointment
```php
// app/Models/Appointment.php
class Appointment extends Model
{
    protected $fillable = [
        'owner_name', 'pet_name', 'pet_type', 'treatment_id',
        'appointment_date', 'appointment_time', 'phone',
        'email', 'notes', 'status'
    ];

    protected $casts = [
        'appointment_date' => 'date',
        'appointment_time' => 'datetime:H:i',
    ];

    public function treatment()
    {
        return $this->belongsTo(Treatment::class);
    }

    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }
}
```

### ContactInfo
```php
// app/Models/ContactInfo.php
class ContactInfo extends Model
{
    protected $table = 'contact_info';

    protected $fillable = [
        'phone', 'whatsapp', 'email', 'address',
        'schedule', 'social_networks', 'map_embed_url'
    ];

    protected $casts = [
        'social_networks' => 'array',
    ];
}
```

---

## 🌐 RUTAS

### API Pública (routes/api.php)
```php
use App\Http\Controllers\Api\{
    HeroController,
    TeamController,
    TreatmentController,
    TestimonialController,
    AppointmentController,
    ContactController
};

// Rutas públicas (para React frontend)
Route::get('/hero', [HeroController::class, 'show']);
Route::get('/team', [TeamController::class, 'index']);
Route::get('/treatments', [TreatmentController::class, 'index']);
Route::get('/testimonials', [TestimonialController::class, 'index']);
Route::get('/contact', [ContactController::class, 'show']);
Route::post('/appointments', [AppointmentController::class, 'store']);
```

### Panel Admin (routes/web.php)
```php
use App\Http\Controllers\Admin\{
    DashboardController,
    HeroSectionController,
    TeamMemberController,
    TreatmentController,
    TestimonialController,
    AppointmentController as AdminAppointmentController
};

Route::middleware(['auth', 'verified'])->group(function () {
    // Dashboard
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Hero Section
    Route::get('/admin/hero', [HeroSectionController::class, 'edit'])->name('admin.hero.edit');
    Route::put('/admin/hero', [HeroSectionController::class, 'update'])->name('admin.hero.update');

    // Team Members
    Route::resource('admin/team', TeamMemberController::class)->names('admin.team');

    // Treatments
    Route::resource('admin/treatments', TreatmentController::class)->names('admin.treatments');

    // Testimonials
    Route::resource('admin/testimonials', TestimonialController::class)->names('admin.testimonials');
    Route::patch('/admin/testimonials/{testimonial}/toggle-publish', [TestimonialController::class, 'togglePublish'])
        ->name('admin.testimonials.toggle-publish');

    // Appointments
    Route::get('/admin/appointments', [AdminAppointmentController::class, 'index'])->name('admin.appointments.index');
    Route::get('/admin/appointments/{appointment}', [AdminAppointmentController::class, 'show'])->name('admin.appointments.show');
    Route::patch('/admin/appointments/{appointment}/status', [AdminAppointmentController::class, 'updateStatus'])
        ->name('admin.appointments.update-status');

    // Contact Info
    Route::get('/admin/contact', [ContactController::class, 'edit'])->name('admin.contact.edit');
    Route::put('/admin/contact', [ContactController::class, 'update'])->name('admin.contact.update');
});
```

---

## 🎯 CONTROLADORES API (Ejemplos)

### HeroController (API)
```bash
php artisan make:controller Api/HeroController
```

```php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\HeroSection;

class HeroController extends Controller
{
    public function show()
    {
        $hero = HeroSection::where('is_active', true)->first();

        if (!$hero) {
            return response()->json([
                'success' => false,
                'message' => 'Hero section not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $hero
        ]);
    }
}
```

### AppointmentController (API)
```php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'owner_name' => 'required|string|max:255',
            'pet_name' => 'required|string|max:255',
            'pet_type' => 'required|in:Perro,Gato,Conejo,Otro',
            'treatment_id' => 'nullable|exists:treatments,id',
            'appointment_date' => 'required|date|after_or_equal:today',
            'appointment_time' => 'required|date_format:H:i',
            'phone' => 'required|string|max:20',
            'email' => 'nullable|email',
            'notes' => 'nullable|string|max:1000',
        ]);

        $appointment = Appointment::create($validated);

        // Aquí puedes enviar email de notificación

        return response()->json([
            'success' => true,
            'data' => $appointment,
            'message' => 'Turno agendado exitosamente'
        ], 201);
    }
}
```

---

## 🖥️ CONTROLADORES ADMIN (Inertia)

### DashboardController
```bash
php artisan make:controller Admin/DashboardController
```

```php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\{Appointment, Testimonial, TeamMember, Treatment};
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard', [
            'stats' => [
                'total_appointments' => Appointment::count(),
                'pending_appointments' => Appointment::pending()->count(),
                'total_testimonials' => Testimonial::count(),
                'team_members' => TeamMember::where('is_active', true)->count(),
            ],
            'recent_appointments' => Appointment::with('treatment')
                ->latest()
                ->take(5)
                ->get(),
        ]);
    }
}
```

### HeroSectionController (Admin)
```bash
php artisan make:controller Admin/HeroSectionController
```

```php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\HeroSection;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HeroSectionController extends Controller
{
    public function edit()
    {
        $hero = HeroSection::firstOrFail();
        
        return Inertia::render('Hero/Edit', [
            'hero' => $hero
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'required|string|max:255',
            'description' => 'required|string',
            'stats' => 'required|array',
            'stats.*.value' => 'required|string',
            'stats.*.label' => 'required|string',
            'cta_primary' => 'required|array',
            'cta_primary.text' => 'required|string',
            'cta_primary.link' => 'required|string',
            'cta_secondary' => 'required|array',
            'cta_secondary.text' => 'required|string',
            'cta_secondary.link' => 'required|string',
        ]);

        $hero = HeroSection::firstOrFail();
        $hero->update($validated);

        return redirect()->route('admin.hero.edit')
            ->with('success', 'Hero section actualizada exitosamente');
    }
}
```

---

## 🌱 SEEDERS

### DatabaseSeeder
```php
// database/seeders/DatabaseSeeder.php
public function run(): void
{
    // Crear usuario admin
    User::create([
        'name' => 'Admin',
        'email' => 'admin@vetfisio.com',
        'password' => bcrypt('password'),
    ]);

    $this->call([
        HeroSectionSeeder::class,
        TeamMemberSeeder::class,
        TreatmentSeeder::class,
        TestimonialSeeder::class,
        ContactInfoSeeder::class,
    ]);
}
```

### HeroSectionSeeder
```php
php artisan make:seeder HeroSectionSeeder
```

```php
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
```

---

## ⚙️ CONFIGURAR CORS

```php
// config/cors.php
return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'],
    'allowed_origins' => [
        'http://localhost:5173',
        'http://localhost:3000',
    ],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];
```

---

## 🚀 COMANDOS FINALES

```bash
# Migrar y seedear
php artisan migrate:fresh --seed

# Iniciar servidor Laravel
php artisan serve

# En otra terminal: Compilar assets Vue (dev)
npm run dev

# Acceder al panel admin
http://localhost:8000/login
# Email: admin@vetfisio.com
# Password: password

# API pública para React
http://localhost:8000/api/hero
```

---

## 📦 DEPENDENCIAS ADICIONALES RECOMENDADAS

```bash
# Para upload de imágenes
composer require intervention/image

# Para generar slugs
composer require spatie/laravel-sluggable
```

---

## 🎨 COMPONENTES VUE (Ejemplo Dashboard)

```vue
<!-- resources/js/Pages/Dashboard.vue -->
<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';

interface Props {
    stats: {
        total_appointments: number;
        pending_appointments: number;
        total_testimonials: number;
        team_members: number;
    };
    recent_appointments: Array<any>;
}

defineProps<Props>();
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <!-- Stats Cards -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div class="text-gray-600 text-sm">Total Turnos</div>
                        <div class="text-3xl font-bold text-gray-900">
                            {{ stats.total_appointments }}
                        </div>
                    </div>

                    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div class="text-gray-600 text-sm">Turnos Pendientes</div>
                        <div class="text-3xl font-bold text-orange-600">
                            {{ stats.pending_appointments }}
                        </div>
                    </div>

                    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div class="text-gray-600 text-sm">Testimonios</div>
                        <div class="text-3xl font-bold text-gray-900">
                            {{ stats.total_testimonials }}
                        </div>
                    </div>

                    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div class="text-gray-600 text-sm">Miembros del Equipo</div>
                        <div class="text-3xl font-bold text-gray-900">
                            {{ stats.team_members }}
                        </div>
                    </div>
                </div>

                <!-- Quick Actions -->
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6 mb-8">
                    <h3 class="text-lg font-semibold mb-4">Acciones Rápidas</h3>
                    <div class="flex gap-4">
                        <Link 
                            :href="route('admin.hero.edit')"
                            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Editar Hero Section
                        </Link>
                        <Link 
                            :href="route('admin.team.index')"
                            class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                        >
                            Gestionar Equipo
                        </Link>
                        <Link 
                            :href="route('admin.appointments.index')"
                            class="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                        >
                            Ver Turnos
                        </Link>
                    </div>
                </div>

                <!-- Recent Appointments -->
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                    <h3 class="text-lg font-semibold mb-4">Turnos Recientes</h3>
                    <div class="space-y-3">
                        <div 
                            v-for="appointment in recent_appointments" 
                            :key="appointment.id"
                            class="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50"
                        >
                            <div>
                                <div class="font-semibold">{{ appointment.owner_name }}</div>
                                <div class="text-sm text-gray-600">
                                    {{ appointment.pet_name }} ({{ appointment.pet_type }})
                                </div>
                            </div>
                            <div class="text-right">
                                <div class="text-sm">{{ appointment.appointment_date }}</div>
                                <span 
                                    class="text-xs px-2 py-1 rounded-full"
                                    :class="{
                                        'bg-yellow-100 text-yellow-800': appointment.status === 'pending',
                                        'bg-green-100 text-green-800': appointment.status === 'confirmed',
                                    }"
                                >
                                    {{ appointment.status }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
```

---

## 📝 PRÓXIMOS PASOS

1. ✅ Ejecutar comandos de instalación
2. ✅ Crear migraciones y modelos
3. ✅ Seedear base de datos
4. ✅ Probar API endpoints con Postman
5. ✅ Implementar páginas Vue del panel admin
6. ✅ Conectar con frontend React

---

**Ventajas de Inertia.js:**
- ✅ Todo en un solo proyecto
- ✅ No necesitas API para el admin (usa Inertia)
- ✅ Vue con SSR opcional
- ✅ Routing de Laravel, componentes de Vue
- ✅ TypeScript out of the box
