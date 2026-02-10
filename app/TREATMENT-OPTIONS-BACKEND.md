# Opciones de Tratamientos - Referencia para Backend

Este archivo documenta las opciones predefinidas para iconos y gradientes de tratamientos que deben ser usadas tanto en frontend como backend.

## 📋 ICONOS DISPONIBLES (10)

El campo `icon_name` en el backend debe usar **uno** de estos valores exactos:

| Nombre Icono | Uso Recomendado |
|-------------|-----------------|
| `Heart` | Cuidado, amor, cardiología |
| `Activity` | Movimiento, actividad física, signos vitales |
| `Zap` | Energía, estimulación, terapia eléctrica |
| `Waves` | Ondas, hidroterapia, terapia acuática |
| `Star` | Calidad, excelencia, destacado |
| `Shield` | Protección, prevención, fortalecimiento |
| `Sparkles` | Recuperación, mejoría, brillo |
| `Droplets` | Hidroterapia, fluidez, agua |
| `Wind` | Respiración, movimiento suave, aire |
| `Smile` | Bienestar, felicidad, confort |

### Validación para Backend (icon_name)

```php
// Laravel - Validación de iconos
$validIcons = ['Heart', 'Activity', 'Zap', 'Waves', 'Star', 'Shield', 'Sparkles', 'Droplets', 'Wind', 'Smile'];

$request->validate([
    'icon_name' => ['required', 'string', Rule::in($validIcons)],
]);
```

---

## 🎨 GRADIENTES DISPONIBLES (10)

El campo `gradient` en el backend puede usar **cualquiera** de estos formatos:

### Opción 1: Nombre corto (Recomendado)

| Nombre | Clases Generadas | Uso Recomendado |
|--------|-----------------|-----------------|
| `orange` | `from-orange-400 to-orange-600` | Energía, vitalidad |
| `blue` | `from-blue-400 to-blue-600` | Calma, confianza |
| `emerald` | `from-emerald-400 to-emerald-600` | Salud, naturaleza |
| `purple` | `from-purple-400 to-purple-600` | Especializado, premium |
| `pink` | `from-pink-400 to-pink-600` | Cuidado, delicadeza |
| `cyan` | `from-cyan-400 to-cyan-600` | Agua, hidroterapia |
| `amber` | `from-amber-400 to-amber-600` | Calidez, confort |
| `teal` | `from-teal-400 to-teal-600` | Equilibrio, armonía |
| `red` | `from-red-400 to-red-600` | Vitalidad, fuerza |
| `indigo` | `from-indigo-400 to-indigo-600` | Profesionalismo, tecnología |

### Opción 2: Clases completas de Tailwind

También puedes enviar las clases completas directamente:
- `from-orange-400 to-orange-600`
- `from-blue-400 to-blue-600`
- etc.

### Validación para Backend (gradient)

```php
// Laravel - Validación de gradientes (nombre corto)
$validGradients = ['orange', 'blue', 'emerald', 'purple', 'pink', 'cyan', 'amber', 'teal', 'red', 'indigo'];

$request->validate([
    'gradient' => ['required', 'string', Rule::in($validGradients)],
]);

// O si permites tanto nombre corto como clases completas:
$request->validate([
    'gradient' => [
        'required', 
        'string',
        function ($attribute, $value, $fail) {
            $validShortNames = ['orange', 'blue', 'emerald', 'purple', 'pink', 'cyan', 'amber', 'teal', 'red', 'indigo'];
            $isShortName = in_array($value, $validShortNames);
            $isFullClass = preg_match('/^from-[a-z]+-\d{3} to-[a-z]+-\d{3}$/', $value);
            
            if (!$isShortName && !$isFullClass) {
                $fail('El gradiente debe ser un nombre válido o clases de Tailwind válidas.');
            }
        }
    ],
]);
```

---

## 📝 EJEMPLOS DE DATOS

### Ejemplo 1: Usando nombres cortos (Recomendado)

```json
{
    "title": "Fisioterapia",
    "description": "Rehabilitación especializada",
    "icon_name": "Heart",
    "gradient": "orange",
    "benefits": [
        "Recuperación acelerada",
        "Reducción del dolor",
        "Prevención de complicaciones"
    ],
    "duration": "45 min",
    "price": "15.00",
    "order": 0,
    "is_active": true
}
```

### Ejemplo 2: Usando clases completas

```json
{
    "title": "Hidroterapia",
    "description": "Ejercicios terapéuticos en agua",
    "icon_name": "Droplets",
    "gradient": "from-cyan-400 to-cyan-600",
    "benefits": [
        "Bajo impacto",
        "Fortalecimiento muscular",
        "Mejora cardiovascular"
    ],
    "duration": "30-45 min",
    "price": "35.00",
    "order": 1,
    "is_active": true
}
```

---

## 🔧 IMPLEMENTACIÓN EN BACKEND

### Laravel - Modelo Treatment

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Validation\Rule;

class Treatment extends Model
{
    protected $fillable = [
        'title',
        'description',
        'icon_name',
        'gradient',
        'benefits',
        'duration',
        'price',
        'order',
        'is_active',
    ];

    protected $casts = [
        'benefits' => 'array',
        'price' => 'decimal:2',
        'is_active' => 'boolean',
    ];

    // Constantes para validación
    public const VALID_ICONS = [
        'Heart', 'Activity', 'Zap', 'Waves', 'Star', 
        'Shield', 'Sparkles', 'Droplets', 'Wind', 'Smile'
    ];

    public const VALID_GRADIENTS = [
        'orange', 'blue', 'emerald', 'purple', 'pink', 
        'cyan', 'amber', 'teal', 'red', 'indigo'
    ];

    // Validación en el modelo
    public static function validationRules()
    {
        return [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'icon_name' => ['required', 'string', Rule::in(self::VALID_ICONS)],
            'gradient' => ['required', 'string', Rule::in(self::VALID_GRADIENTS)],
            'benefits' => 'required|array|min:1',
            'benefits.*' => 'string',
            'duration' => 'required|string',
            'price' => 'required|numeric|min:0',
            'order' => 'nullable|integer',
            'is_active' => 'boolean',
        ];
    }
}
```

### Laravel - Controller

```php
<?php

namespace App\Http\Controllers;

use App\Models\Treatment;
use Illuminate\Http\Request;

class TreatmentController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate(Treatment::validationRules());
        
        $treatment = Treatment::create($validated);
        
        return response()->json([
            'success' => true,
            'data' => $treatment,
        ], 201);
    }

    public function update(Request $request, Treatment $treatment)
    {
        $validated = $request->validate(Treatment::validationRules());
        
        $treatment->update($validated);
        
        return response()->json([
            'success' => true,
            'data' => $treatment,
        ]);
    }
}
```

---

## 🎯 COMBINACIONES RECOMENDADAS

Algunas combinaciones sugeridas de icono + color para tipos comunes de tratamientos:

| Tratamiento | Icono | Gradiente | Razón |
|-------------|-------|-----------|-------|
| Fisioterapia | `Heart` | `orange` | Cuidado + energía |
| Rehabilitación Neurológica | `Activity` | `purple` | Actividad + especializado |
| Hidroterapia | `Droplets` | `cyan` | Agua + agua |
| Terapia Láser | `Zap` | `red` | Energía + vitalidad |
| Masaje Terapéutico | `Smile` | `pink` | Bienestar + cuidado |
| Acupuntura | `Star` | `amber` | Excelencia + calidez |
| Quiropráctica | `Shield` | `teal` | Protección + equilibrio |
| Electroestimulación | `Zap` | `indigo` | Energía + tecnología |
| Terapia Respiratoria | `Wind` | `blue` | Aire + calma |
| Recuperación Post-Operatoria | `Sparkles` | `emerald` | Mejora + salud |

---

## ⚠️ IMPORTANTE

1. **Los iconos y gradientes deben validarse en el backend** para evitar valores no soportados
2. **Usar nombres cortos para gradientes** es más fácil de mantener
3. **No crear nuevos iconos o colores** sin antes agregarlos al frontend
4. **Mantener sincronizadas** las constantes entre frontend y backend

---

## 📞 CONTACTO

Si necesitas agregar nuevos iconos o colores, contacta al equipo de frontend para coordinar los cambios en ambos sistemas.
