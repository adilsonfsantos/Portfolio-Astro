import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site_description, site_title } from '../consts';

export async function get(context) {
	const posts = await getCollection('blog');
	return rss({
		title: site_title,
		description: site_description,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}
