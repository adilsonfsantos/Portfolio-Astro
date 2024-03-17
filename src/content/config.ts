import { defineCollection, z } from "astro:content";

const projetos = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
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
			roles: z.string().array(),
			team: z.optional(
				z.array(
					z.object({
						name: z.string(),
						portfolio: z.optional(z.string()),
						role: z.string(),
					}),
				),
			),
		}),
});

export const collections = { projetos: projetos };
