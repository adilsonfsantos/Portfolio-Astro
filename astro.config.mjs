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
	build: { inlineStylesheets: "never" },

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
					// https://imageloadlab.com/avif-encoder-effort-speed-vs-size/#what-it-means
					effort: 2,
					// https://imageloadlab.com/jpeg-webp-avif-quality-equivalence/
					// https://eng.aurelienpierre.com/2021/10/webp-is-so-great-except-its-not/
					quality: 70,
				},
				jpeg: {
					chromaSubsampling: "4:4:4",
					progressive: true,
				},
				webp: {
					effort: 6,
					// https://imageloadlab.com/chroma-subsampling-420-vs-444/#decision
					smartSubsample: true,
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
