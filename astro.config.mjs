import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, sharpImageService } from "astro/config";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
	site: "https://adilsonsantos.pages.dev/",
	prefetch: false,
	build: { inlineStylesheets: "never" },
	integrations: [
		mdx(),
		sitemap({
			filter: (page) => page !== "https://adilsonsantos.pages.dev/404/",
		}),
		compressor({ brotli: true }),
	],
	image: {
		service: sharpImageService(),
	},
	trailingSlash: "always",
});
