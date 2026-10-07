import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { site_description, site_title } from "../consts";
import { loadEnv } from "vite";

const { PUBLIC_SITE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

export async function GET() {
	const posts = await getCollection("projetos");
	return rss({
		title: site_title,
		description: site_description,
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
