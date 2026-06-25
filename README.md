# A&A Inoxidables SAC - Portal Web Gastronómico Professional

Este repositorio contiene la plataforma web moderna y profesional para **A&A Inoxidables SAC**, una empresa líder en el mercado peruano dedicada a la venta y fabricación a medida de equipos gastronómicos en acero inoxidable, así como al servicio técnico y mantenimiento preventivo/correctivo.

El proyecto ha sido desarrollado con **Next.js (App Router)** para garantizar el mejor rendimiento, velocidad de carga y optimización en motores de búsqueda (SEO).

---

## 🚀 Características Clave del Proyecto

1.  **Catálogo Interactivo con Planos Técnicos (Blueprints):**
    *   Filtro dinámico de equipos por categorías (Línea de cocción, refrigeración comercial, carpintería metálica a medida y equipos importados).
    *   Buscador en tiempo real integrado.
    *   Gráficos vectoriales SVG que actúan como planos de ingeniería de cada equipo, proporcionando una estética técnica y premium.
2.  **Sistema de Cotización Inteligente (Carrito de WhatsApp):**
    *   Permite a los usuarios seleccionar equipos del catálogo e ir agregándolos a una cesta de cotización flotante.
    *   Formulario integrado para capturar datos comerciales del cliente (Nombre, Teléfono, Empresa, Rubro, Notas de fabricación).
    *   Generación automática de un mensaje estructurado y envío inmediato a la línea de ventas de **WhatsApp** de la empresa (`+51 927 272 678`).
3.  **Módulo de Reservas de Servicio Técnico:**
    *   Formulario interactivo para agendar visitas técnicas por mantenimiento preventivo, reparaciones de emergencia o montajes industriales.
    *   Integración directa de ticket técnico con WhatsApp.
4.  **Estética Premium e Inocuidad:**
    *   Paleta de colores metalizada inspirada en el acero inoxidable, combinada con acentos de color naranja (fuego de cocina) y cian (refrigeración).
    *   Diseño limpio con bordes degradados y paneles de vidrio (*Glassmorphism*).
    *   Explicación interactiva sobre los estándares de acero inoxidable grado alimentario (AISI 304 vs AISI 430).
5.  **Optimización SEO (Search Engine Optimization):**
    *   Estructura HTML5 semántica completa.
    *   Metadatos SEO en el servidor (`layout.js`) para indexación óptima en buscadores como Google.

---

## 🛠️ Arquitectura de Directorios

El código está organizado siguiendo un patrón modular y limpio (Separación de Estructuras y Features):

```text
src/
├── app/
│   ├── layout.js       # Skeleton HTML, Metadatos globales y fuentes
│   ├── page.js         # Página Home principal (reúne las secciones)
│   └── globals.css     # Estilos globales y tokens de diseño
├── components/
│   ├── layout/         # Componentes estructurales persistentes
│   │   ├── Navbar.jsx / Navbar.css
│   │   └── Footer.jsx / Footer.css
│   └── features/       # Componentes de secciones específicas
│       ├── hero/       # Banner de presentación y CTAs
│       ├── catalog/    # Catálogo, buscador y SVG blueprints
│       ├── services/   # Mantenimiento correctivo/preventivo
│       ├── quote/      # Sidebar flotante de cotización
│       ├── about/      # Sección "Nosotros" y estándares de acero
│       └── contact/    # Datos de contacto, horarios y mapa digital
├── context/
│   └── QuoteContext.jsx # Manejo del estado global de cotizaciones
public/                 # Activos estáticos (Logotipo e imágenes optimizadas)
```

---

## 💻 Configuración Local y Desarrollo

Sigue estos pasos para arrancar el proyecto en tu entorno local:

### Requisitos Previos
*   [Node.js](https://nodejs.org/) (versión 18.0 o superior recomendada)
*   npm o yarn

### 1. Clonar e Instalar Dependencias
Instala los paquetes necesarios definidos en el archivo `package.json`:
```bash
npm install
```

### 2. Iniciar el Servidor de Desarrollo
Corre el servidor local de Next.js:
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) (o el puerto indicado en tu terminal) en tu navegador para ver la página en tiempo real.

### 3. Compilación de Producción (Optimización)
Para generar un empaquetado optimizado listo para subir a producción (que pre-renderizará la página de forma estática):
```bash
npm run build
```

### 4. Ejecutar la Compilación de Producción Localmente
Una vez compilado, puedes simular el entorno de producción corriendo:
```bash
npm run start
```

---

## ✒️ Créditos
*   **Desarrollo de Software:** [GalactiCode Devs](https://github.com/tu-organizacion)
*   **Cliente:** A&A Inoxidables SAC
