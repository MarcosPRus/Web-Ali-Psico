# Alicia Lozano · Psicología

Web de [www.alilozanopsico.es](https://www.alilozanopsico.es), hecha con **Astro** y publicada como web estática en **Cloudflare Pages** (plan gratuito).

> Todo el contenido que ves (textos, formación, precios, ilustraciones) es **provisional**. Aquí abajo explicamos cómo cambiarlo.

## Puesta en marcha

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist (lo que publica Cloudflare)
```

Cloudflare Pages: *Build command* `npm run build`, *Output directory* `dist`, variable `NODE_VERSION=22`.

## Dónde se cambia cada cosa

| Qué | Dónde |
| --- | --- |
| Teléfono, email, WhatsApp, Instagram, nº de colegiada | `src/consts.ts` → `CONTACT` |
| Consultas (direcciones, notas, posición en el mapa) | `src/consts.ts` → `LOCATIONS` |
| Tarifa (precio y duración) | `src/consts.ts` → `PRICE` |
| Menú | `src/consts.ts` → `NAV` |
| Servicios (resumen, tres ideas clave y artículo relacionado) | `src/content/services/*.md` |
| Artículos del blog | `src/content/blog/*.md` |
| Página “Sobre mí” (historia, formación, curiosidades) | `src/pages/sobre-mi.astro` |
| Portada | `src/pages/index.astro` y `src/components/home/*` |
| Textos legales | `src/pages/aviso-legal.astro`, `privacidad.astro`, `cookies.astro` |
| Colores y tipografías | `src/styles/global.css` (variables al principio) |

### Escribir un artículo nuevo

Crea `src/content/blog/mi-articulo.md`:

```md
---
title: "Título del artículo"
description: "Resumen de una o dos frases (sale en Google y en las tarjetas)."
pubDate: "2026-10-01"
category: "Imagen corporal"
scene: "espejo"               # ilustración provisional (ver lista abajo)
# heroImage: "/img/blog/mi-foto.jpg"   # foto real, si la hay
---

Texto en Markdown…
```

## Cambiar las ilustraciones por fotos reales

Las imágenes son ilustraciones SVG “recortadas” hechas a medida (`src/components/art/Art.astro`). Pesan casi nada y sirven de marcador de posición. Para poner una foto:

1. Guarda la foto en `public/img/` (mejor en `.webp` o `.jpg`, unos 1200 px de ancho).
2. Donde aparezca `<Media scene="retrato" … />`, añade `src`:

   ```astro
   <Media src="/img/alicia-retrato.jpg" alt="Alicia sonriendo en su consulta" shape="arch" />
   ```

3. En servicios y blog basta con añadir `heroImage: "/img/…"` al principio del `.md`.

Escenas disponibles: `retrato`, `mesa`, `espejo`, `sol`, `jardin`, `abrazo`, `pantalla`, `jarrones`, `taza`, `ventana`.

## Formulario de contacto

Como la web es estática, el formulario necesita un servicio externo. Recomendado (gratis): **[Web3Forms](https://web3forms.com)**.

1. Pide una *access key* con el email de Alicia.
2. Pégala en `src/consts.ts` → `FORM_ACCESS_KEY`.

Mientras esté vacía, el formulario abre la aplicación de correo de la persona con el mensaje ya redactado.

## Detalles técnicos

- Sin frameworks de JavaScript: solo unos pocos scripts pequeños (menú, mapa de consultas, frases interactivas, filtro del blog).
- Tipografías *Fraunces* y *Figtree* alojadas en la propia web, recortadas a los caracteres del español para que carguen rápido.
- Sin cookies ni rastreadores, así que no hace falta banner de cookies.
- SEO: sitemap, RSS, Open Graph (`public/og.jpg`) y datos estructurados `Psychologist` para Google.
- `public/_redirects` redirige las rutas antiguas (`/services/…`) a `/servicios/…`.
- Accesibilidad: contraste AA, navegación con teclado, “saltar al contenido” y respeto de “reducir movimiento”.
