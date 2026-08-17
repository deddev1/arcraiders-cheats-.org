/** Authoritative external guide URLs — cite in body copy, not primary CTAs. */
export const EXTERNAL_GUIDES = {
	arcRaiders: {
		href: 'https://www.arcraiders.com/',
		label: 'ARC Raiders',
	},
	eac: {
		href: 'https://www.easyanticheat.dev/',
		label: 'Easy Anti-Cheat',
	},
} as const;

export function externalGuideHtml(key: keyof typeof EXTERNAL_GUIDES, label?: string): string {
	const guide = EXTERNAL_GUIDES[key];
	return `<a href="${guide.href}" target="_blank" rel="noopener noreferrer">${label ?? guide.label}</a>`;
}

export function stripHtmlForSchema(html: string): string {
	return html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}
