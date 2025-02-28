import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import path from "node:path";
import { fileURLToPath } from "node:url";
import eslintConfigPrettier from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default [
	js.configs.recommended,
	{
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
		},
	},
	eslintConfigPrettier,
	includeIgnoreFile(gitignorePath),
];
