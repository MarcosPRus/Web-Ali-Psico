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
