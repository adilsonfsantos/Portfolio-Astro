import { defineCollection, z } from "astro:content";
import type { CollectionEntry } from "astro:content";
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
					.union([z.string(), z.date()])
					.transform((val) => (val instanceof Date ? val : new Date(val))),
				image: image(),
				card: image(),
				isDraft: z.boolean().default(false),
				categories: z.array(z.string()),
				roles: z.array(z.string()),
				team: z
					.array(
						z.object({
							name: z.string(),
							role: z.string(),
							portfolio: z.string().optional(),
						}),
					)
					.optional(),
			})
			.strict(),
});

export type ProjetoEntry = CollectionEntry<"projetos">;

export const collections = {
	projetos,
};
