import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // Used for the filter chips and the tag on each card
    category: z.enum(['app', 'ai', 'web', 'design']),
    status: z.string(),
    role: z.string(),
    timeline: z.string(),
    stack: z.array(z.string()),
    origin: z.string().optional(),
    /** Button text for links.demo when "Try the live demo" would overpromise. */
    demoLabel: z.string().optional(),
    featured: z.boolean().default(false),
    // Wide cards span two columns on the work grid
    wide: z.boolean().default(false),
    // Show this many phone-shaped previews instead of one wide preview
    phones: z.number().optional(),
    // Phone screenshots, in display order. The card shows the first `phones` of them.
    screens: z.array(z.object({ src: z.string(), alt: z.string() })).optional(),
    order: z.number().default(99),
    coverLabel: z.string(),
    // Optional screenshot in /public; replaces the placeholder when set
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    // 'cover' fills the frame (screenshots), 'contain' fits the whole image (diagrams, boards)
    coverFit: z.enum(['cover', 'contain']).default('contain'),
    links: z
      .object({
        demo: z.string().optional(),
        repo: z.string().optional(),
        appStore: z.string().optional(),
        site: z.string().optional(),
      })
      .default({}),
  }),
});

export const collections = { projects };
