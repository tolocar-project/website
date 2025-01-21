import { z, defineCollection } from "astro:content";

const newsCollection = defineCollection({
  type: "data",
  schema: z.object({
    target: z.string(),
    title: z.string().optional(),
    description: z.string(),
    type: z.enum(["instagram", "cta", "fullImage"]),
    newTab: z.boolean().optional(),
    image: z.string().optional(),
    order: z.number().optional(),
    id: z.string().optional()
  }),
});

const interventionsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    teaser: z.string(),
    images: z.array(z.string()).optional()
  }),
});

const poisCollection = defineCollection({
  type: "data",
  schema: z.object({
    id: z.string(),
    title: z.string(),
    date: z.string(),
    locationLngLat: z.array(z.number()).length(2),
    image: z.string(),
    category: z.string().optional()
  }),
});

export const collections = {
  news: newsCollection,
  interventions: interventionsCollection,
  pois: poisCollection
};
