/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Arc Raiders Cheats',
	/** Short product label if needed */
	shortName: 'Arc Raiders',
	/** Canonical origin — no trailing slash */
	url: 'https://arcraiderscheats.org',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@arcraiderscheats.org',
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Farc-raiders',

	/** Game this template instance targets */
	game: 'ARC Raiders',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Easy Anti-Cheat',

	logo: '/images/arc-raiders-cheats-logo.webp',
	logoRaster: '/images/arc-raiders-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Arc Raiders Cheats logo',
	defaultOgImage: '/images/arc-raiders-cheats-hero-1024w.webp',
	heroImage: '/images/arc-raiders-cheats-hero-1024w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#e86a24',
		bg: '#080a09',
		soft: '#e9a15b',
		deep: '#9e3d15',
		hover: '#ff7f32',
		panel: '#111512',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'arc raiders cheats',
		list: [
			'arc raiders cheats',
			'arc raiders esp',
			'arc raiders aimbot',
			'arc raiders wallhack',
			'arc raiders hacks',
			'undetected arc raiders cheats',
			'best arc raiders cheats',
			'arc raiders radar hack',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: 'Arc Raiders Cheats | Aimbot, ESP & Wallhack 2026',
		homeDescription:
			'Arc Raiders Cheats for PC with aimbot, ESP and wallhack features. Explore gameplay features, pricing, setup information and the latest updates.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription: 'Everything in one {game} license for Windows PC — ESP, soft aim, radar, loot tools, and patch updates after {antiCheat}. See what is included.',
		storeTitle: '{game} Store | {brand}',
		storeDescription: 'Monthly and lifetime {game} plans for Windows PC. Same ESP, aimbot, and radar features on both. Instant delivery after payment checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription: 'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you queue a surface raid on Windows PC today.',
		previewTitle: 'Arc Raiders Cheats | Undetected ESP & Aimbot',
		previewDescription: 'Buy undetected arc raiders cheats for ARC Raiders on Windows PC. ESP, soft aim, radar, and Easy Anti-Cheat patch updates in one license with instant delivery.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription: 'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can extract faster. Follow each step in order before your first match.',
		supportTitle: '{game} Support | {brand}',
		supportDescription: 'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription: 'Short answers about {brand} for ARC Raiders — delivery, setup, {antiCheat} updates, refunds, and Windows PC system notes before you buy.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription: 'Buyer reviews for {brand} — ESP, soft aim, radar, and patch updates for ARC Raiders on Windows PC. Real feedback from license holders.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription: 'ARC Raiders Intel from {brand} — surface raid guides, ESP and aimbot tips, loot routes, season notes, and {antiCheat} update coverage for PC.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and radar for PC',
		summary: '{brand} is an undetected {game} cheat package for Windows PC. Includes ESP, soft aim, and radar, with {antiCheat} maintenance after patches.',
		heroLede: 'Undetected ESP, soft aim, and radar for ARC Raiders on Windows PC.',
		blogLabel: 'Arc Raiders Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you extract.',
		previewIntro: '{brand} for ARC Raiders — ESP wallhack, soft aim, 2D radar, and Easy Anti-Cheat rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — ESP, soft aim, radar, and support.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Soft aim',
		chipRadar: '2D radar',
		chipUpdates: 'Patch updates',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-08-21',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/arc-raiders-cheats-esp.webp',
				title: 'ESP overlay in ARC Raiders',
				caption: 'Player ESP boxes and distance readouts during a surface raid',
			},
			{
				src: '/images/arc-raiders-cheats-wallhack.webp',
				title: 'Wallhack visibility for extraction runs',
				caption: 'Raider and ARC drone outlines through cover',
			},
			{
				src: '/images/arc-raiders-cheats-aimbot.webp',
				title: 'Soft aim assist for ARC Raiders',
				caption: 'Configurable soft aim FOV and bone priority',
			},
			{
				src: '/images/arc-raiders-cheats-aimbot-view.webp',
				title: 'Aimbot view in Arc Raiders Cheats',
				caption: 'In-menu aimbot controls for Windows PC',
			},
			{
				src: '/images/arc-raiders-cheats-radar.webp',
				title: '2D radar threat overlay',
				caption: 'Radar cues for flanks near extraction zones',
			},
			{
				src: '/images/arc-raiders-cheats-raid.webp',
				title: 'Arc Raiders Cheats license plans',
				caption: 'Monthly and lifetime plans for Windows PC',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
