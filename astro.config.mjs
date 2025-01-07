import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";

import metaTags from "astro-meta-tags";

// https://astro.build/config
export default defineConfig({
  site: "https://miguelpimentel.do/",
  integrations: [
    tailwind(),
    sitemap(),
    mdx(),
    pagefind(),
    metaTags(),
  ],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
