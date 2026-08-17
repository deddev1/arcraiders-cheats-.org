/** Official external game source — cite in body copy, not primary CTAs. */
export const EXTERNAL_GUIDES = {
	arcRaiders: {
		href: 'https://www.arcraiders.com/',
		label: 'ARC Raiders',
	},
} as const;

/** Same-site topic guides for cross-linking related content. */
export const TOPIC_GUIDES = {
	cheats: { href: '/arc-raiders-cheats/', label: 'Arc Raiders cheats guide' },
	esp: { href: '/arc-raiders-esp/', label: 'ESP guide' },
	aimbot: { href: '/arc-raiders-aimbot/', label: 'Aimbot guide' },
	radar: { href: '/arc-raiders-radar-hack/', label: 'Radar guide' },
	features: { href: '/features/', label: 'Features' },
	status: { href: '/updates/', label: 'Status page' },
	setup: { href: '/setup/', label: 'Setup guide' },
	undetected: { href: '/undetected-arc-raiders-cheats/', label: 'undetected guide' },
	patchNotes: { href: '/blog/arc-raiders-patch-notes-guide/', label: 'patch notes guide' },
	buyersGuide: { href: '/blog/arc-raiders-cheats-buyers-guide/', label: 'buyers guide' },
	completeGuide: { href: '/blog/arc-raiders-cheats-complete-guide-2026/', label: 'complete cheats guide' },
} as const;

export function externalGuideHtml(label?: string): string {
	const guide = EXTERNAL_GUIDES.arcRaiders;
	return `<a href="${guide.href}" target="_blank" rel="noopener noreferrer">${label ?? guide.label}</a>`;
}

export function topicGuideHtml(key: keyof typeof TOPIC_GUIDES, label?: string): string {
	const guide = TOPIC_GUIDES[key];
	return `<a href="${guide.href}">${label ?? guide.label}</a>`;
}

export function stripHtmlForSchema(html: string): string {
	return html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}
