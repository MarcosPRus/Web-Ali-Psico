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
      // Schibsted Grotesk: una sola familia (variable 400–900) para toda la web
      provider: fontProviders.local(),
      name: "Schibsted Grotesk",
      cssVariable: "--font-sans",
      fallbacks: ["Helvetica Neue", "Arial", "sans-serif"],
      options: {
        variants: [
          { src: ["./src/assets/fonts/schibsted-normal.woff2"], weight: "400 900", style: "normal", display: "swap" },
          { src: ["./src/assets/fonts/schibsted-italic.woff2"], weight: "400 900", style: "italic", display: "swap" },
        ],
      },
    },
  ],
});
