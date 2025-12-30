// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export interface SocialLink {
	name: string;
	url: string;
}

export interface Social {
	links: SocialLink[];
}

export const site_name = "Adilson Santos";
export const site_title = "Adilson Santos";
export const site_url = "https://adilsonsantos.pages.dev";
export const site_lang = "pt-BR";
export const site_description =
	"Meu nome é Adilson Santos e eu sou um designer que faz interfaces, identidades visuais e direção de arte.";
export const site_image =
	"https://adilsonsantos.pages.dev/assets/images/thumbnail.png";
export const site_author = "Adilson Santos";
export const site_author_email = "adilson.design@outlook.com";

export const social = {
	links: [
		{
			name: "LinkedIn",
			url: "https://linkedin.com/in/adilsonfsantos",
		},
	],
};
