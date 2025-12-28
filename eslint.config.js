import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import ts from "typescript-eslint";
import astro from "eslint-plugin-astro";
import * as mdx from "eslint-plugin-mdx";
import prettier from "eslint-plugin-prettier/recommended";

export default defineConfig([
	{
		ignores: ["dist", ".astro"],
	},
	{
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: "module",
		},
	},
	js.configs.recommended,
	ts.configs.recommended,
	astro.configs.recommended,
	{
		files: ["**/*.mdx"],
		plugins: { mdx },
	},
	prettier,
]);
