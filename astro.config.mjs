import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import compressor from "astro-compressor";
import { satteri } from "@astrojs/markdown-satteri";
import satteriExternalLinks from "satteri-external-links";
import { loadEnv } from "vite";

const { PUBLIC_SITE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
	site: PUBLIC_SITE_URL,
	prefetch: true,

	integrations: [
		mdx(),
		sitemap({
			filter: (page) => page !== PUBLIC_SITE_URL + "/404/",
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
			scriptDirective: {
				resources: ["'self'", "static.cloudflareinsights.com"],
			},
		},
	},

	markdown: {
		processor: satteri({
			hastPlugins: [
				satteriExternalLinks({
					target: () => "_blank",
					rel: () => ["nofollow", "noopener"],
				}),
			],
		}),
	},

	trailingSlash: "always",
	server: { host: true },
});
