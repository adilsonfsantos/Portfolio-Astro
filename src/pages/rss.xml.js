import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";
import { loadEnv } from "vite";

const { PUBLIC_SITE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

export async function GET() {
	const posts = await getCollection("projetos");
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: PUBLIC_SITE_URL,
		items: posts.map((post) => ({
			...post.data,
			title: post.data.title,
			pubDate: post.data.date,
			description: post.data.description,
			link: `/projetos/${post.id}/`,
		})),
	});
}
