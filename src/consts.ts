// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const site_name = import.meta.env.PUBLIC_SITE_NAME;
export const site_title = import.meta.env.PUBLIC_SITE_NAME;
export const site_url = import.meta.env.PUBLIC_SITE_URL;
export const site_lang = import.meta.env.PUBLIC_SITE_LANG;
export const site_description = import.meta.env.PUBLIC_SITE_DESCRIPTION;
export const site_image = "portfolio-static/assets/images/thumbnail.png";
export const site_author = import.meta.env.PUBLIC_SITE_NAME;
export const site_author_email = import.meta.env.PUBLIC_EMAIL;
export const profile_type = import.meta.env.PROFILE_TYPE;
export const profile_url = import.meta.env.PROFILE_URL;
export const profile_user = import.meta.env.PROFILE_USER;

export interface SocialLink {
	name: string;
	url: string;
	username?: string;
}

export interface Social {
	links: readonly SocialLink[];
}

export const social = {
	links: [
		{
			name: profile_type,
			url: profile_url,
			username: profile_user,
		},
	],
} satisfies Social;
