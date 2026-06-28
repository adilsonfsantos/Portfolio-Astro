/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	printWidth: 80,
	semi: true,
	bracketSameLine: true,
	trailingComma: "all",
	plugins: ["prettier-plugin-astro"],

	overrides: [
		{
			files: ["*.md", "*.mdx", "*.toml", "*.yml", "*.yaml"],
			options: {
				useTabs: false,
			},
		},
		{
			files: ["*.md", "*.mdx"],
			options: {
				printWidth: 80,
				proseWrap: "always",
			},
		},
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
