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
    order: z.number().optional()
  }),
});

export const collections = {
  news: newsCollection,
};
