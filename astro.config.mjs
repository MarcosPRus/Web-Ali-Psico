// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://alicialozanopsicologia.com",
  trailingSlash: "ignore",
  devToolbar: { enabled: false },
  integrations: [mdx(), sitemap()],
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  fonts: [
    {
      // Fraunces "blanda": instanciada con SOFT=100 y WONK=1 → serif redondeada, como barro (peso + tamaño óptico)
      provider: fontProviders.local(),
      name: "Fraunces",
      cssVariable: "--font-serif",
      fallbacks: ["Georgia", "serif"],
      options: {
        variants: [
          { src: ["./src/assets/fonts/fraunces-blanda-normal.woff2"], weight: "300 700", style: "normal", display: "swap" },
          { src: ["./src/assets/fonts/fraunces-blanda-italic.woff2"], weight: "300 700", style: "italic", display: "swap" },
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
    {
      // Letra "a mano" (Shantell Sans con rebote): solo para notas y firmas
      provider: fontProviders.local(),
      name: "Mano",
      cssVariable: "--font-hand",
      fallbacks: ["Comic Sans MS", "cursive"],
      options: {
        variants: [{ src: ["./src/assets/fonts/shantell-mano.woff2"], weight: "500", style: "normal", display: "swap" }],
      },
    },
  ],
});
