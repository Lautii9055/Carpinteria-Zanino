# Zanino — Carpintería a medida

Sitio web de Zanino Carpintería (Beccar, Zona Norte). HTML, CSS y JavaScript sin frameworks: se abre directo en el navegador o se publica en cualquier hosting estático (GitHub Pages, Netlify, Vercel).

## Estructura

```
index.html        → contenido, SEO (meta tags, datos estructurados) y accesibilidad
styles.css        → estilos
main.js           → menú, galería de trabajos + visor de fotos, formulario → WhatsApp
robots.txt
img/
├── trabajos/     → fotos de trabajos en tamaño grande (visor)
├── thumbs/       → las mismas fotos en tamaño chico (galería)
└── hero, nosotros, materiales y og-zanino.jpg (vista previa al compartir)
imagenes/         → fotos originales de WhatsApp (ya no las usa el sitio, se pueden borrar)
```

## Agregar una foto a la galería

1. Exportarla en `.webp` a `img/trabajos/` (lado largo ~1600px) y a `img/thumbs/` (~720px), con un nombre descriptivo: `cocina-blanca-isla-roble.webp`.
2. Sumar una línea en el array `PROJECTS` de `main.js` con la categoría (`cocina`, `living`, `vestidor`, `placard`, `escritorio`, `bano`, `otros`), el nombre del archivo, sus medidas y un `alt` que describa lo que se ve.

## Pendiente antes de publicar

- [ ] Confirmar con la familia: marcas (Blum, Häfele, Faplac, Egger, Sherwin-Williams, Alba) y maderas listadas en "Materiales".
- [ ] Dominio: agregar `<link rel="canonical">`, y pasar `og:image` y la imagen del JSON-LD a URL absoluta.
- [ ] Crear el **Perfil de Empresa de Google** (Google Maps) con la misma dirección, teléfono y zona: es lo que más clientes locales trae.
- [ ] Reseñas reales: pedirles a clientes recientes que dejen una reseña en Google; cuando haya varias, sumar una sección de testimonios con esas reseñas.
- [ ] Email profesional (ej. `contacto@dominio`) cuando exista, y agregarlo en Contacto.
