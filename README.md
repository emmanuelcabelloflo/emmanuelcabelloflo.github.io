# Landing Page - Emmanuel (Licenciado en Periodismo)

Proyecto de landing page profesional de una sola página con una paleta de azules, animaciones y secciones: Aptitudes, Resumen Profesional, Historial Educativo, Trabajos Anteriores y Datos de Contacto.

## Estructura
- `index.html` Página principal.
- `css/styles.css` Estilos globales y animaciones.
- `js/app.js` Interactividad (menú responsive, animaciones on-scroll, parallax).
- `assets/` Recursos (imagen de perfil y CV PDF placeholder).

## Personalización Rápida
1. Reemplaza `assets/profile.jpg` con una fotografía (300x300 aprox.)
2. Sustituye emails, teléfono y enlaces de redes.
3. Actualiza el archivo `assets/CV_Dilan.pdf` con el CV real.
4. Ajusta las aptitudes, líneas del timeline y tarjetas de trabajos según experiencia real.

## Notas Técnicas
- Diseño responsive (mobile-first adaptado a pantallas grandes).
- Animaciones controladas con `IntersectionObserver` y degradados dinámicos.
- Se añadió soporte `prefers-reduced-motion` para accesibilidad.

## Próximas Mejores (Opcional)
- Integrar un backend / servicio de correo (EmailJS, Formspree o endpoint serverless).
- Añadir microdatos Schema.org para perfil profesional.
- Implementar modo claro/oscuro.

## Licencia
Uso libre para fines demostrativos.

