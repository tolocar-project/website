# Tolocar Website

This repository holds the source files for the [website of the Tolocar project](https://www.tolocar.org).

>The Tolocar project sends mobile makerspaces into Ukraine to help, empower, equip and train local communities through open technology, knowledge and innovation.

Changes to the content in this repository are automatically deployed to the website via GitHub Actions.

## Tech Stack
This website is statically generated and uses the following software components:
- [Astro](https://astro.build/) (Static Site Generator)
- [React](https://reactjs.org/) (Frontend components)
- [MDX](https://mdxjs.com/) (Content format)
- [TailwindCSS](https://tailwindcss.com/) (CSS framework)

## Development setup
If you want to run this setup locally:
- Make sure you have `node` and `npm` installed (desired node version is indicated in `.nvmrc`)
- Clone the repo
- Inside the repo folder, run `npm install`
- Run `npm run dev` to start the local dev server

## Preview deployments
This project will automatically deploy a preview version, when a new Pull Request is created. Because this requires to set a different URL and Base path, and Astro does not allow `.env` variables in their config file, we are manually overwriting the Astro config with this one (stored in a GitHub secret):

```
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import svgr from "vite-plugin-svgr";

async function loadEnv() {
  const { loadEnv: loadViteEnv } = await import("vite");
  const { MODE } = process.env;
  const PROD = MODE === "production";
  const env = loadViteEnv(MODE, process.cwd(), "");
  return { ...env, MODE, DEV: !PROD, PROD };
}

const { ASTRO_BASE_PATH } = await loadEnv();

export default defineConfig({
  site: "https://dev.tolocar.org",
  base: ASTRO_BASE_PATH,
  integrations: [
    mdx({
      rehypePlugins: [[rehypeAutolinkHeadings, { behavior: "append" }]],
    }),
    react(),
    tailwind({
      config: { applyBaseStyles: false },
    }),
  ],
  vite: {
    plugins: [svgr()],
  },
});
```
