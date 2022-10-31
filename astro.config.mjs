import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default defineConfig({
  site: "https://www.tolocar.org",
  integrations: [
    mdx({
      rehypePlugins: [[rehypeAutolinkHeadings, { behavior: "append" }]],
    }),
    react(),
    tailwind({
      config: { applyBaseStyles: false },
    }),
  ],
});
