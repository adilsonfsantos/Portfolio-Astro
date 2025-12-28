import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projetos = defineCollection({
	loader: glob({
		pattern: "**/[^_]*.mdx",
		base: "./src/content/projetos",
	}),
	schema: ({ image }) =>
		z
			.object({
				title: z.string(),
				description: z.string(),
				date: z
					.string()
					.or(z.date())
					.transform((val) => new Date(val)),
				image: image(),
				card: image(),
				isDraft: z.boolean().default(false),
				categories: z.string().array(),
				roles: z.array(z.string()),
				team: z.optional(
					z.array(
						z.object({
							name: z.string(),
							portfolio: z.optional(z.string()),
							role: z.string(),
						}),
					),
				),
			})
			.strict(),
});

export const collections = {
	projetos,
};
