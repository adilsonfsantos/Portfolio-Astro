import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
	site: "https://adilsonsantos.pages.dev/",
	prefetch: true,
	build: { inlineStylesheets: "never" },

	integrations: [
		mdx(),
		sitemap({
			filter: (page) => page !== "https://adilsonsantos.pages.dev/404/",
		}),
		compressor({ brotli: true }),
	],

	image: {
		service: {
			config: {
				avif: {
					effort: 2,
				},
				jpeg: {
					chromaSubsampling: "4:4:4",
					progressive: true,
				},
				webp: {
					effort: 6,
				},
			},
		},
	},

	security: {
		csp: {
			algorithm: "SHA-256",
		},
	},

	trailingSlash: "always",
	server: { host: true },
});
