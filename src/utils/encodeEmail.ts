export function encodeEmail(email: string): string {
	return Array.from(email)
		.map((char) => "%" + char.charCodeAt(0).toString(16).padStart(2, "0"))
		.join("");
}
