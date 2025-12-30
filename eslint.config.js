import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import ts from "typescript-eslint";
import astro from "eslint-plugin-astro";
import * as mdx from "eslint-plugin-mdx";
import prettier from "eslint-plugin-prettier/recommended";
import globals from "globals";

export default defineConfig([
	{
		ignores: ["**/dist", "**/node_modules", "**/.astro"],
	},
	{
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: "module",
			globals: {
				...globals.node,
			},
		},
	},
	js.configs.recommended,
	...ts.configs.recommended,
	...astro.configs.recommended,
	{
		files: ["**/*.mdx"],
		...mdx.flat,
		processor: mdx.createRemarkProcessor({
			lintCodeBlocks: true,
		}),
		rules: {
			"@typescript-eslint/no-unused-vars": "off",
			"@typescript-eslint/no-unused-expressions": "off",
		},
	},
	{ files: ["**/*.mdx"], ...mdx.flatCodeBlocks },
	prettier,
]);
