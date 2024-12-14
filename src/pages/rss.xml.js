import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { site_description, site_title } from "../consts";

export async function GET(context) {
	const posts = await getCollection("projetos");
	return rss({
		title: site_title,
		description: site_description,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			title: post.data.title,
			pubDate: post.data.date,
			description: post.data.description,
			link: `/projetos/${post.id}/`,
		})),
	});
}
