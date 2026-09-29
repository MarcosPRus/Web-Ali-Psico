import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const scenes = [
  "retrato",
  "mesa",
  "espejo",
  "sol",
  "jardin",
  "abrazo",
  "pantalla",
  "jarrones",
  "taza",
  "ventana",
] as const;

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().default("Reflexiones"),
    /** Ilustración provisional */
    scene: z.enum(scenes).default("taza"),
    /** Foto real (ruta en /public). Si existe, sustituye a la ilustración */
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const services = defineCollection({
  loader: glob({ base: "./src/content/services", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    kicker: z.string(),
    /** Una línea: se usa en la lista de la portada */
    short: z.string(),
    /** Resumen de 2-3 frases para la página «Cómo te ayudo» */
    summary: z.string(),
    /** Tres ideas clave */
    points: z.array(z.string()).default([]),
    order: z.number(),
    scene: z.enum(scenes),
    heroImage: z.string().optional(),
    accent: z.enum(["terracotta", "lilac", "sage", "blush", "butter", "wine"]).default("terracotta"),
    /** Slug del artículo del blog con la información ampliada (opcional) */
    post: z.string().optional(),
  }),
});

export const collections = { blog, services };
