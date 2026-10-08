// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import siteImage from "@images/thumbnail.png";

export const SITE_NAME = import.meta.env.PUBLIC_SITE_NAME;
export const SITE_TITLE = import.meta.env.PUBLIC_SITE_NAME;
export const SITE_URL = import.meta.env.PUBLIC_SITE_URL;
export const SITE_LANG = import.meta.env.PUBLIC_SITE_LANG;
export const SITE_DESCRIPTION = import.meta.env.PUBLIC_SITE_DESCRIPTION;
export const SITE_IMAGE = siteImage;
export const SITE_AUTHOR = import.meta.env.PUBLIC_SITE_NAME;
export const SITE_AUTHOR_EMAIL = import.meta.env.PUBLIC_EMAIL;
export const PROFILE_TYPE = import.meta.env.PROFILE_TYPE;
export const PROFILE_URL = import.meta.env.PROFILE_URL;
export const PROFILE_USER = import.meta.env.PROFILE_USER;

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
			name: PROFILE_TYPE,
			url: PROFILE_URL,
			username: PROFILE_USER,
		},
	],
} satisfies Social;
