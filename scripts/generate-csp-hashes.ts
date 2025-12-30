import fs from "fs";
import path from "path";
import crypto from "crypto";

// Função para gerar hash SHA-256 em base64
function generateHash(content: string): string {
	const hash = crypto.createHash("sha256").update(content).digest("base64");
	return `sha256-${hash}`;
}

// Caminho para os componentes Astro
const componentsDir = path.resolve("./src");

// Função para ler todos os arquivos .astro
function getAstroFiles(dir: string): string[] {
	return fs.readdirSync(dir).flatMap((file) => {
		const fullPath = path.join(dir, file);
		if (fs.statSync(fullPath).isDirectory()) {
			return getAstroFiles(fullPath);
		} else if (fullPath.endsWith(".astro")) {
			return [fullPath];
		} else {
			return [];
		}
	});
}

// Função para extrair conteúdo de <style> inline
function extractStyleContent(fileContent: string): string[] {
	const regex = /<style[^>]*>([\s\S]*?)<\/style>/g;
	const matches = [];
	let match;
	while ((match = regex.exec(fileContent)) !== null) {
		matches.push(match[1]);
	}
	return matches;
}

// Percorre todos os arquivos e gera hashes
const astroFiles = getAstroFiles(componentsDir);
const hashes: string[] = [];

astroFiles.forEach((file) => {
	const content = fs.readFileSync(file, "utf-8");
	const styles = extractStyleContent(content);
	styles.forEach((style) => {
		hashes.push(generateHash(style));
	});
});

console.log(JSON.stringify(hashes, null, 2));
