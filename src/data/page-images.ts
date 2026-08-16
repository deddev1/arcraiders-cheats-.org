import { siteConfig } from './site';
import { arcRaidersImages } from './arc-raiders';
import { pageIds, type PageId } from './i18n/routing';
import { pageSitemapImageLabels } from './brand-sitemap';

/** Rotating product screenshots for FAQ / review detail URLs. */
export const crawlPhotoPool = [
	arcRaidersImages.espWallhack,
	arcRaidersImages.aimbotCombat,
	arcRaidersImages.aimbotSkeleton,
	arcRaidersImages.playerEsp,
	arcRaidersImages.cheatsCombat,
	'/images/arc-raiders-cheats-esp.webp',
] as const;

/**
 * One primary crawl/OG photo per product page.
 * Prefer compressed WebP screenshots so Google can fetch them quickly.
 */
export const pageImageSrcById: Record<PageId, string> = {
	home: '/images/arc-raiders-cheats-hero-1024w.webp',
	'arc-raiders-esp': arcRaidersImages.playerEsp,
	'arc-raiders-aimbot': arcRaidersImages.aimbotCombat,
	features: arcRaidersImages.aimbotSkeleton,
	pricing: arcRaidersImages.cheatsCombat,
	setup: arcRaidersImages.playerEsp,
	updates: '/images/arc-raiders-cheats-hero-1024w.webp',
	faq: arcRaidersImages.aimbotSkeleton,
	support: arcRaidersImages.cheatsCombat,
	undetected: arcRaidersImages.espWallhack,
	wallhack: arcRaidersImages.espWallhack,
	radar: arcRaidersImages.playerEsp,
	eac: arcRaidersImages.aimbotCombat,
	'cheats-2026': '/images/arc-raiders-cheats-hero-1024w.webp',
	hacks: arcRaidersImages.cheatsCombat,
	'cheat-download': arcRaidersImages.cheatsCombat,
	'mod-menu': arcRaidersImages.playerEsp,
	'soft-aim': arcRaidersImages.aimbotSkeleton,
	'best-cheats': '/images/arc-raiders-cheats-hero-1024w.webp',
	'aimbot-hack': arcRaidersImages.aimbotSkeleton,
	'esp-hack': arcRaidersImages.espWallhack,
	'unlock-all': arcRaidersImages.playerEsp,
	privacy: arcRaidersImages.aimbotCombat,
	refund: arcRaidersImages.cheatsCombat,
	terms: arcRaidersImages.aimbotSkeleton,
};

for (const pageId of pageIds) {
	if (!pageImageSrcById[pageId]) {
		throw new Error(`[page-images] No image path configured for pageId: ${pageId}`);
	}
}

export function absoluteImageUrl(path: string): string {
	return new URL(path, siteConfig.url).href;
}

export function getPageImageSrc(pageId: PageId): string {
	return pageImageSrcById[pageId];
}

export function getPageCrawlImage(pageId: PageId): {
	src: string;
	url: string;
	title: string;
	caption: string;
} {
	const src = pageImageSrcById[pageId];
	const labels = pageSitemapImageLabels(pageId);
	return {
		src,
		url: absoluteImageUrl(src),
		title: labels.title,
		caption: labels.caption,
	};
}

/** Stable pick from the photo pool (FAQ answers, reviews, etc.). */
export function pickCrawlPhoto(seed: string): string {
	let hash = 0;
	for (let i = 0; i < seed.length; i += 1) {
		hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
	}
	return crawlPhotoPool[hash % crawlPhotoPool.length];
}

export function crawlPhotoMeta(
	seed: string,
	title: string,
	caption: string,
): { src: string; url: string; title: string; caption: string } {
	const src = pickCrawlPhoto(seed);
	return {
		src,
		url: absoluteImageUrl(src),
		title,
		caption,
	};
}

/** Default large social / SERP image when a page has no specific asset. */
export const defaultCrawlImageSrc = pageImageSrcById.home;
