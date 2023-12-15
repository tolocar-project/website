import { z, defineCollection } from "astro:content";

const newsCollection = defineCollection({
  type: "data",
  schema: z.object({
    target: z.string(),
    title: z.string(),
    description: z.string(),
    green: z.boolean(),
  }),
});

export const collections = {
  news: newsCollection,
};
