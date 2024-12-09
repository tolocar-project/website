import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import svgr from "vite-plugin-svgr";

import icon from 'astro-icon';

export default defineConfig({
  site: "https://www.tolocar.org",
  devToolbar: { enabled: false },
  integrations: [mdx({
    rehypePlugins: [[rehypeAutolinkHeadings, { behavior: "append" }]],
  }), react(), tailwind({
    config: { applyBaseStyles: false },
  }), icon()],
  vite: {
    plugins: [svgr()],
  },
  redirects: {
    '/en/community': '/en/community/partners',
    '/en/playbook': '/en/resources/playbook',
    '/ua/playbook': '/ua/resources/playbook',
    '/en/makersinnovationaward': '/en/get-involved/makers-innovation-award',
    '/ua/makersinnovationaward': '/ua/get-involved/makers-innovation-award'
  }
});