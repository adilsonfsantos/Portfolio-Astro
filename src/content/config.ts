import { defineCollection, z } from 'astro:content';

const projetos = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z
		.string()
		.or(z.date())
		.transform((val) => new Date(val)),
	image: z.string().optional(),
	isDraft: z.boolean().default(false),
	categories: z.string().array(),
	})
})


export const collections = { "projetos": projetos };

