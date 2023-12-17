import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, sharpImageService } from "astro/config";

import lighthouse from "astro-lighthouse";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: "https://adilsonsantos.netlify.app/",
  integrations: [mdx(), sitemap(), lighthouse()],
  image: {
    service: sharpImageService()
  },
  trailingSlash: 'always'
});
