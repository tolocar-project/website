import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://tolocar-project.github.io",
  base: "/website",
  integrations: [
    mdx(),
    react(),
    tailwind({
      config: { applyBaseStyles: false },
    }),
  ],
});
