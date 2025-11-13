# 🥗 Nutri-Track - Landing Page

> Landing page completa, optimizada y con modo oscuro para Nutri-Track. Construida con SvelteKit, TailwindCSS y TypeScript.

[![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)](https://kit.svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Secciones de la Landing](#-secciones-de-la-landing)
- [Modo Oscuro](#-modo-oscuro)
- [Optimizaciones](#-optimizaciones)
- [Personalización](#-personalización)
- [Deploy](#-deploy)

## ✨ Características

### 🎨 Diseño
- **Modo Oscuro Completo**: Toggle con detección automática de preferencias del sistema
- **100% Responsive**: Adaptado para móviles, tablets y desktop
- **Animaciones Suaves**: Efectos on-scroll con Intersection Observer
- **UI Moderna**: Diseño limpio siguiendo mejores prácticas de UX

### ⚡ Rendimiento
- **Ultra Optimizado**: Carga rápida y scroll fluido
- **CSS Minificado**: TailwindCSS JIT para CSS mínimo
- **Lazy Loading**: Componentes y assets cargados bajo demanda
- **Fuentes Optimizadas**: Preconnect a Google Fonts

### 🛠️ Desarrollo
- **SvelteKit 5**: Framework moderno con Runes API
- **TypeScript**: Tipado fuerte para mayor confiabilidad
- **Componentes Modulares**: Reutilizables y mantenibles
- **Hot Module Replacement**: Desarrollo ágil con HMR

## 📦 Instalación

### Prerrequisitos
- Node.js 18+ 
- npm o pnpm

### Clonar el repositorio

```bash
git clone https://github.com/juan-altamira/landing-nutri-track.git
cd landing-nutri-track
```

### Instalar dependencias

```bash
npm install
```

## 🚀 Uso

### Desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### Build de Producción

```bash
npm run build
```

### Preview del Build

```bash
npm run preview
```

### Verificar Tipos

```bash
npm run check
```

## 📁 Estructura del Proyecto

```
landing-nutri-track/
├── src/
│   ├── lib/
│   │   ├── components/          # Componentes reutilizables
│   │   │   ├── AnimatedElement.svelte  # Wrapper para animaciones on-scroll
│   │   │   ├── Button.svelte           # Botones CTA
│   │   │   ├── Card.svelte             # Tarjetas con hover
│   │   │   ├── Footer.svelte           # Footer del sitio
│   │   │   ├── Section.svelte          # Wrapper de secciones
│   │   │   └── ThemeToggle.svelte      # Toggle modo oscuro
│   │   │
│   │   └── sections/            # Secciones de la landing
│   │       ├── Hero.svelte              # Hero con CTA principal
│   │       ├── SocialProof.svelte       # Prueba social
│   │       ├── Problem.svelte           # Problema que se resuelve
│   │       ├── Future.svelte            # Futuro deseado
│   │       ├── Solution.svelte          # La solución
│   │       ├── Features.svelte          # 6 características principales
│   │       ├── Bonuses.svelte           # Bonos de lanzamiento
│   │       ├── Testimonials.svelte      # Testimonios + stats
│   │       ├── Pricing.svelte           # Plan y precio
│   │       ├── Guarantee.svelte         # Garantía 14 días
│   │       ├── Objections.svelte        # Manejo de objeciones
│   │       ├── FAQ.svelte               # Preguntas frecuentes
│   │       └── FinalCTA.svelte          # CTA final
│   │
│   ├── routes/
│   │   ├── +layout.svelte       # Layout global
│   │   └── +page.svelte         # Página principal
│   │
│   ├── app.css                  # Estilos globales + Tailwind
│   └── app.html                 # Template HTML base
│
├── static/                      # Archivos estáticos
├── tailwind.config.js           # Configuración Tailwind
├── vite.config.ts              # Configuración Vite
├── svelte.config.js            # Configuración SvelteKit
├── tsconfig.json               # Configuración TypeScript
├── package.json
└── README.md
```

## 📄 Secciones de la Landing

### 1. **Hero** (`Hero.svelte`)
- Título principal y propuesta de valor
- Mockup del dashboard
- Badge con prueba social
- CTA principal destacado

### 2. **Prueba Social** (`SocialProof.svelte`)
- Número de usuarios activos
- Logos de equipos/clientes

### 3. **Problema** (`Problem.svelte`)
- 3 testimonios que describen el problema
- Texto de cierre sobre datos dispersos

### 4. **Futuro Deseado** (`Future.svelte`)
- Lista de beneficios con iconos
- Card antes/después

### 5. **Solución** (`Solution.svelte`)
- Descripción de Nutri-Track
- Card con 3 pasos del proceso

### 6. **Features** (`Features.svelte`)
- 6 módulos principales en grid de 2 columnas:
  - Panel inteligente 360°
  - Plan personalizado
  - Alertas proactivas
  - Catálogo verificado
  - Reportes semanales
  - Soporte humano

### 7. **Bonos** (`Bonuses.svelte`)
- 3 bonos de lanzamiento con emojis

### 8. **Testimonios** (`Testimonials.svelte`)
- 2 testimonios con estrellas
- 3 estadísticas destacadas (73%, 61%, 88%)

### 9. **Pricing** (`Pricing.svelte`)
- Plan mensual con precio
- Lista de features incluidas
- CTA destacado

### 10. **Garantía** (`Guarantee.svelte`)
- Garantía 14 días
- Lista de beneficios garantizados

### 11. **Objeciones** (`Objections.svelte`)
- 7 objeciones comunes con acordeones
- Respuestas detalladas

### 12. **FAQ** (`FAQ.svelte`)
- 5 preguntas frecuentes con acordeones

### 13. **CTA Final** (`FinalCTA.svelte`)
- Llamado a la acción final
- Fondo verde oscuro
- Lista de beneficios
- CTA con botón blanco

### 14. **Footer** (`Footer.svelte`)
- Enlaces del sitio
- Copyright

## 🌓 Modo Oscuro

### Características
- **Toggle flotante** en esquina superior derecha
- **Persistencia** en localStorage
- **Detección automática** de preferencias del sistema
- **100% de cobertura** en todas las secciones

### Paleta de Colores

#### Modo Claro
```css
/* Fondos */
--bg-primary: #FFFFFF
--bg-secondary: #F9FAFB (gray-50)
--bg-tertiary: #ECFDF3 (green-50)

/* Textos */
--text-primary: #0F172A (slate-900)
--text-secondary: #64748B (slate-600)
--text-tertiary: #94A3B8 (slate-400)

/* Bordes */
--border: #E2E8F0 (gray-200)

/* Acento */
--accent: #22C55E (green-500)
```

#### Modo Oscuro
```css
/* Fondos */
--bg-primary: #111827 (gray-900)
--bg-secondary: #1F2937 (gray-800)
--bg-tertiary: #374151 (gray-700)

/* Textos */
--text-primary: #FFFFFF
--text-secondary: #D1D5DB (gray-300)
--text-tertiary: #9CA3AF (gray-400)

/* Bordes */
--border: #374151 (gray-700)

/* Acento */
--accent: #22C55E (green-500) - sin cambios
```

### Uso del Toggle

```typescript
// ThemeToggle.svelte
function toggleTheme() {
  isDark = !isDark;
  
  if (isDark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}
```

## ⚡ Optimizaciones

### Performance
- **Intersection Observer**: Animaciones solo cuando el elemento es visible
- **CSS mínimo**: TailwindCSS con JIT genera solo las clases usadas
- **Tree Shaking**: Vite elimina código no utilizado
- **Code Splitting**: Chunks optimizados automáticamente

### SEO
- Meta tags configurados en `app.html`
- Semantic HTML en todos los componentes
- Estructura de headings correcta (h1, h2, h3)

### Accesibilidad
- Labels en todos los botones
- Contraste WCAG AA en ambos modos
- Focus states visibles
- Navegación por teclado funcional

## 🎨 Personalización

### Cambiar Colores

Edita `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      nutri: {
        green: '#22C55E',        // Color principal
        'green-dark': '#16A34A', // Hover/CTA oscuro
        'green-light': '#ECFDF3', // Fondos suaves
      }
    }
  }
}
```

### Modificar Copy

Todo el texto está en los componentes de `src/lib/sections/`. Edita directamente el contenido HTML.

### Ajustar Animaciones

Modifica delays en `AnimatedElement`:

```svelte
<AnimatedElement delay={100}>
  <!-- Contenido -->
</AnimatedElement>
```

### Cambiar URL del CTA

Todos los botones apuntan a `https://www.nutri-track.pro`. Busca y reemplaza esta URL en:
- `Hero.svelte`
- `Pricing.svelte`
- `FinalCTA.svelte`


## 👤 Autor

**Juan Altamira**
- GitHub: [@juan-altamira](https://github.com/juan-altamira)


