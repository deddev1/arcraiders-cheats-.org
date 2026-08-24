import type { ExternalArticleSection } from './types';

export type ExternalArticleDefinition = {
	id: string;
	externalUrl: string;
	game: string;
	published: string;
	updated: string;
	category: string;
	slug: string;
	title: string;
	metaDescription: string;
	h1: string;
	intro: string;
	keywords: string[];
	imageAlt: string;
	sections: ExternalArticleSection[];
	closingAnchorText: string;
};

export type ResolvedExternalArticle = ExternalArticleDefinition & {
	imageSrc: string;
	canonicalPath: string;
};
