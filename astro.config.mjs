// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.alilozanopsico.es",
  trailingSlash: "ignore",
  // Las antiguas fichas de servicio ahora son artículos del blog
  // (GitHub Pages no lee public/_redirects; Astro genera páginas de redirección)
  redirects: {
    "/servicios/tca": "/blog/tca-mucho-mas-que-comida",
    "/servicios/imagen-corporal": "/blog/imagen-corporal-cuando-mirarte-duele",
    "/servicios/psiconutricion": "/blog/psiconutricion-salir-del-circulo",
    "/servicios/gestion-emocional": "/blog/ansiedad-y-autoexigencia",
    "/servicios/familias": "/blog/familias-y-tca-como-acompanar",
    "/servicios/terapia-online": "/blog/terapia-online-como-funciona",
    "/services": "/servicios",
  },
  devToolbar: { enabled: false },
  integrations: [mdx(), sitemap()],
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  fonts: [
    {
      // Serif editorial para titulares (variable: peso + tamaño óptico)
      provider: fontProviders.local(),
      name: "Fraunces",
      cssVariable: "--font-serif",
      fallbacks: ["Georgia", "serif"],
      options: {
        variants: [
          { src: ["./src/assets/fonts/fraunces-normal.woff2"], weight: "300 600", style: "normal", display: "swap" },
          { src: ["./src/assets/fonts/fraunces-italic.woff2"], weight: "300 600", style: "italic", display: "swap" },
        ],
      },
    },
    {
      // Sans cálida y legible para el texto
      provider: fontProviders.local(),
      name: "Figtree",
      cssVariable: "--font-sans",
      fallbacks: ["system-ui", "sans-serif"],
      options: {
        variants: [
          { src: ["./src/assets/fonts/figtree-normal.woff2"], weight: "300 900", style: "normal", display: "swap" },
          { src: ["./src/assets/fonts/figtree-italic.woff2"], weight: "300 900", style: "italic", display: "swap" },
        ],
      },
    },
  ],
});
