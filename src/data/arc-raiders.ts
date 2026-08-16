import { siteConfig } from './site';

/** Screenshots used across product pages — simple arc raiders cheats keyword alts. */
export const arcRaidersImages = {
	hero: '/images/arc-raiders-cheats-hero-full.png',
	espWallhack: '/images/arc-raiders-cheats-wallhack.webp',
	aimbotCombat: '/images/arc-raiders-cheats-aimbot.webp',
	aimbotSkeleton: '/images/arc-raiders-cheats-aimbot-view.webp',
	playerEsp: '/images/arc-raiders-cheats-radar.webp',
	cheatsCombat: '/images/arc-raiders-cheats-raid.webp',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one of the six assets above */
	cover: '/images/arc-raiders-cheats-raid.webp',
	loadoutBuilder: '/images/arc-raiders-cheats-radar.webp',
	squadFight: '/images/arc-raiders-cheats-aimbot-view.webp',
	cheatsPackage: '/images/arc-raiders-cheats-radar.webp',
	headerArt: '/images/arc-raiders-cheats-aimbot-view.webp',
	battleRoyaleCombat: '/images/arc-raiders-cheats-raid.webp',
	extractFight: '/images/arc-raiders-cheats-aimbot.webp',
	rebootFight: '/images/arc-raiders-cheats-aimbot.webp',
	scavRunCombat: '/images/arc-raiders-cheats-wallhack.webp',
	scavRunMode: '/images/arc-raiders-cheats-esp.webp',
	battleRoyaleIsland: '/images/arc-raiders-cheats-esp.webp',
	raidMap: '/images/arc-raiders-cheats-esp.webp',
	product: [
		{ src: '/images/arc-raiders-cheats-esp.webp', alt: 'ESP player boxes in an ARC Raiders raid' },
		{ src: '/images/arc-raiders-cheats-wallhack.webp', alt: 'Wallhack outlines for Raiders and ARC drones' },
		{ src: '/images/arc-raiders-cheats-aimbot.webp', alt: 'Soft aim assist overlay for Arc Raiders' },
		{ src: '/images/arc-raiders-cheats-esp.webp', alt: 'Loot and extract ESP markers' },
		{ src: '/images/arc-raiders-cheats-wallhack.webp', alt: 'Through-wall visibility during a raid' },
		{ src: '/images/arc-raiders-cheats-aimbot.webp', alt: 'Aimbot bone priority settings' },
	],
	gallery: [
		{ src: '/images/arc-raiders-cheats-esp.webp', alt: 'ESP overlay showing enemy distance', featured: true },
		{ src: '/images/arc-raiders-cheats-wallhack.webp', alt: 'Wallhack view through terrain' },
		{ src: '/images/arc-raiders-cheats-aimbot.webp', alt: 'Soft aim FOV ring in combat' },
		{ src: '/images/arc-raiders-cheats-esp.webp', alt: 'Container and loot ESP pins' },
		{ src: '/images/arc-raiders-cheats-wallhack.webp', alt: 'Boss and player wallhack filters' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/images/arc-raiders-cheats-esp.webp', title: '', caption: '' },
		{ src: '/images/arc-raiders-cheats-wallhack.webp', title: '', caption: '' },
		{ src: '/images/arc-raiders-cheats-aimbot.webp', title: '', caption: '' },
		{ src: '/images/arc-raiders-cheats-aimbot-view.webp', title: '', caption: '' },
		{ src: '/images/arc-raiders-cheats-radar.webp', title: '', caption: '' },
		{ src: '/images/arc-raiders-cheats-raid.webp', title: '', caption: '' },
	],
} as const;
