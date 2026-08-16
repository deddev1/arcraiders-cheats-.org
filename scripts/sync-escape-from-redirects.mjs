#!/usr/bin/env node
/**
 * Generates 301s from legacy escape-from-* locale slugs to current ARC Raiders slugs.
 * Writes functions/escape-from-redirects.json (merged by worker-redirects.ts).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROUTING = path.join(ROOT, 'src/data/i18n/routing.ts');
const OUT = path.join(ROOT, 'functions/escape-from-redirects.json');

const LEGACY_TOKEN = 'escape-from-arc-raiders-cheats';
const CURRENT_TOKEN = 'arc-raiders-cheats';

function extractLocalizedSlugs(src) {
	const block = src.match(/export const localizedSlugs[\s\S]*?= \{([\s\S]*?)\n\};/);
	if (!block) throw new Error('localizedSlugs block not found');
	const slugsByPage = {};
	let currentPage = null;
	for (const line of block[1].split('\n')) {
		const pageMatch = line.match(/^\t'?([\w-]+)'?: \{/);
		if (pageMatch) {
			currentPage = pageMatch[1];
			slugsByPage[currentPage] = {};
			continue;
		}
		const slugMatch = line.match(/^\t\t(\w+): '([^']+)'/);
		if (slugMatch && currentPage) {
			slugsByPage[currentPage][slugMatch[1]] = slugMatch[2];
		}
	}
	return slugsByPage;
}

const routing = readFileSync(ROUTING, 'utf8');
const slugsByPage = extractLocalizedSlugs(routing);
const map = {};

for (const slugs of Object.values(slugsByPage)) {
	for (const [locale, newSlug] of Object.entries(slugs)) {
		if (locale === 'en' || !newSlug.includes(CURRENT_TOKEN)) continue;
		const oldSlug = newSlug.replaceAll(CURRENT_TOKEN, LEGACY_TOKEN);
		if (oldSlug === newSlug) continue;
		const toPath = locale === 'en' ? `/${newSlug}/` : `/${locale}/${newSlug}/`;
		const fromPaths = [
			locale === 'en' ? `/${oldSlug}/` : `/${locale}/${oldSlug}/`,
			locale === 'en' ? `/${oldSlug}` : `/${locale}/${oldSlug}`,
		];
		for (const from of fromPaths) {
			if (from !== toPath) map[from] = toPath;
		}
	}
}

writeFileSync(OUT, `${JSON.stringify(map, null, 2)}\n`);
console.log(
	`Synced ${Object.keys(map).length} escape-from locale redirect rules → functions/escape-from-redirects.json`,
);
