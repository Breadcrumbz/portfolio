import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/work",
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    clientType: z.string(),
    sector: z.string(),
    year: z.number(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).min(1),
    outcome: z.string(),
    confidentiality: z.string().default("NDA-safe case study"),
    heroImage: z.string().optional(),
    order: z.number().default(999),
  }),
});

export const collections = { work };