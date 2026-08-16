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
		{ src: '/images/arc-raiders-cheats-radar.webp', alt: '2D radar overlay during a surface raid' },
		{ src: '/images/arc-raiders-cheats-raid.webp', alt: 'Combat overlay in an ARC Raiders extraction run' },
		{ src: '/images/arc-raiders-cheats-combat.webp', alt: 'In-match cheat menu and toggles' },
		{ src: '/images/arc-raiders-aimbot-skeleton.webp', alt: 'Skeleton ESP and bone targeting preview' },
		{ src: '/images/arc-raiders-esp-radar.webp', alt: 'Loot and extract ESP markers on radar' },
	],
	gallery: [
		{ src: '/images/arc-raiders-cheats-esp.webp', alt: 'ESP overlay showing enemy distance', featured: true },
		{ src: '/images/arc-raiders-cheats-wallhack.webp', alt: 'Wallhack view through terrain' },
		{ src: '/images/arc-raiders-cheats-aimbot.webp', alt: 'Soft aim FOV ring in combat' },
		{ src: '/images/arc-raiders-cheats-aimbot-view.webp', alt: 'Aimbot settings and bone priority' },
		{ src: '/images/arc-raiders-cheats-radar.webp', alt: '2D radar with squad positions' },
		{ src: '/images/arc-raiders-cheats-raid.webp', alt: 'Raid combat with overlay active' },
		{ src: '/images/arc-raiders-cheats-combat.webp', alt: 'Mod menu toggles mid-match' },
		{ src: '/images/arc-raiders-aimbot-sniper.webp', alt: 'Long-range aim assist preview' },
		{ src: '/images/arc-raiders-esp-player-tags.webp', alt: 'Player tags and distance ESP' },
		{ src: '/images/arc-raiders-screenshot-01.webp', alt: 'ARC Raiders cheat overlay screenshot' },
		{ src: '/images/arc-raiders-screenshot-02.webp', alt: 'Wallhack and visibility tools in raid' },
		{ src: '/images/arc-raiders-screenshot-03.webp', alt: 'ESP markers during extraction' },
		{ src: '/images/arc-raiders-screenshot-04.webp', alt: 'Radar and combat overlay' },
		{ src: '/images/arc-raiders-screenshot-05.webp', alt: 'In-game cheat configuration panel' },
		{ src: '/images/arc-raiders-screenshot-06.webp', alt: 'Surface raid with ESP active' },
		{ src: '/images/arc-raiders-screenshot-07.webp', alt: 'Aimbot and visibility stack preview' },
		{ src: '/images/arc-raiders-screenshot-08.webp', alt: 'Full ARC Raiders cheats package view' },
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
		{ src: '/images/arc-raiders-cheats-combat.webp', title: '', caption: '' },
		{ src: '/images/arc-raiders-esp-radar.webp', title: '', caption: '' },
	],
} as const;
