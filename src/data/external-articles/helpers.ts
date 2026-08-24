import { arcRaidersImages } from '../arc-raiders';
import { siteConfig } from '../site';
import type { ExternalArticleDefinition, ResolvedExternalArticle } from './types';
import { externalArticles as rawArticles } from './articles.generated';
import { externalGuideGameImages } from './game-images.generated';

const FALLBACK_IMAGE = arcRaidersImages.espWallhack;
const GUIDES_BASE = '/guides/';

export const externalArticles: ExternalArticleDefinition[] = rawArticles;

export function getExternalArticleImageSrc(game: string): string {
	return externalGuideGameImages[game] ?? FALLBACK_IMAGE;
}

export function getExternalArticlePath(slug: string): string {
	return `${GUIDES_BASE}${slug}/`;
}

export function absoluteExternalArticleUrl(slug: string): string {
	return new URL(getExternalArticlePath(slug), siteConfig.url).href;
}

export function resolveExternalArticle(article: ExternalArticleDefinition): ResolvedExternalArticle {
	return {
		...article,
		imageSrc: getExternalArticleImageSrc(article.game),
		canonicalPath: getExternalArticlePath(article.slug),
	};
}

export function getExternalArticleBySlug(slug: string): ResolvedExternalArticle | undefined {
	const article = externalArticles.find((a) => a.slug === slug);
	return article ? resolveExternalArticle(article) : undefined;
}

export function getAllExternalArticles(): ResolvedExternalArticle[] {
	return externalArticles.map(resolveExternalArticle);
}
