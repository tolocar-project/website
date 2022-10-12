import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://www.tolocar.org",
  integrations: [
    mdx(),
    react(),
    tailwind({
      config: { applyBaseStyles: false },
    }),
  ],
});
