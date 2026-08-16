#!/usr/bin/env node
/**
 * Validates built sitemaps match all routable pages.
 * Run after `npm run build`: node scripts/validate-sitemaps.mjs
 * Site URL and image-sitemap count come from src/data/brand.ts.
 */
import { readFileSync } from 'node:fs';
import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function readBrandSource() {
	return readFileSync(path.join(ROOT, 'src/data/brand.ts'), 'utf8');
}

function readBrandUrl() {
	const src = readBrandSource();
	const m = src.match(/(?:^|\n)\turl:\s*'((?:\\'|[^'])*)'/);
	if (!m) throw new Error('brand.ts missing url');
	return m[1].replace(/\\'/g, "'").replace(/\/$/, '');
}

function countBrandSitemapImages() {
	const src = readBrandSource();
	const block = src.match(/sitemap:\s*\{([\s\S]*?)\n\t\},/);
	if (!block) return 6;
	const srcs = [...block[1].matchAll(/src:\s*'((?:\\'|[^'])*)'/g)].map((m) => m[1]);
	return new Set(srcs).size || 6;
}

/** dist/ for static builds; dist/client/ when a Cloudflare adapter rearranges assets. */
async function resolveDistRoot() {
	const candidates = [
		path.join(ROOT, 'dist'),
		path.join(ROOT, 'dist', 'client'),
	];
	for (const dir of candidates) {
		try {
			await access(path.join(dir, 'sitemap.xml'));
			return dir;
		} catch {
			// try next candidate
		}
	}
	throw new Error(
		'Could not find sitemap.xml in dist/ or dist/client/. Run `astro build` first.',
	);
}
const SITE = readBrandUrl();
const IMAGE_SITEMAP_ENTRIES = countBrandSitemapImages();

const BLOG_PAGES = 18; // /blog/ index + 17 posts
const REVIEW_PAGES = 11; // /reviews/ index + 10 review detail pages
const FAQ_PAGES = 11; // FAQ answer pages (index is in the product pages)
/** Product pages in sitemap — excludes cannibal EN URLs that 301 to stronger pillars */
const ENGLISH_PRODUCT_PAGES = 14;
const ENGLISH_PAGES = ENGLISH_PRODUCT_PAGES + BLOG_PAGES + REVIEW_PAGES + FAQ_PAGES;
const I18N_LOCALES = 21;
/** Locale product pages also exclude the same cannibal pageIds */
const PRODUCT_PAGES_PER_LOCALE = 14;
const BLOG_PAGES_PER_LOCALE = 0; // Locale blog URLs 301 to EN; not in sitemaps
const PAGES_PER_LOCALE = PRODUCT_PAGES_PER_LOCALE + BLOG_PAGES_PER_LOCALE;
const I18N_URLS = I18N_LOCALES * PAGES_PER_LOCALE;
const TOTAL_PAGES = ENGLISH_PAGES + I18N_URLS;
/** Full EN HTML — 14 product + blog + reviews + FAQ (no cannibal redirect stubs) */
const ENGLISH_HTML_PAGES = ENGLISH_PRODUCT_PAGES + BLOG_PAGES + REVIEW_PAGES + FAQ_PAGES;
/** Locale HTML = product pages + blog redirect stubs (index + 17 posts) omitted from sitemaps */
const LOCALE_BLOG_REDIRECT_PAGES = 18;
const TOTAL_HTML_PAGES =
	ENGLISH_HTML_PAGES + I18N_LOCALES * (PRODUCT_PAGES_PER_LOCALE + LOCALE_BLOG_REDIRECT_PAGES);
const HREFLANG_PER_URL = 23;
const SITEMAP_INDEX_ENTRIES = 1 + I18N_LOCALES + 1; // EN + locales + images

/** Built HTML that intentionally 301s — allowed to be absent from sitemaps */
const REDIRECT_ONLY_PATHS = new Set([
	'/best-arc-raiders-cheats/',
	'/arc-raiders-aimbot-hack/',
	'/arc-raiders-esp-hack/',
	'/arc-raiders-cheats-2026/',
	'/undetected-arc-raiders-cheats/',
	'/arc-raiders-mod-menu/',
	'/arc-raiders-unlock-all/',
	'/arc-raiders-soft-aim/',
	'/arc-raiders-wallhack/',
	'/arc-raiders-cheat-download/',
	'/eac-bypass/',
]);

const ENGLISH_PATHS = [
	'/',
	'/arc-raiders-esp/',
	'/arc-raiders-aimbot/',
	'/features/',
	'/pricing/',
	'/setup/',
	'/updates/',
	'/faq/',
	'/support/',
	'/arc-raiders-radar-hack/',
	'/arc-raiders-cheats/',
	'/privacy-policy/',
	'/refund-policy/',
	'/terms/',
	'/blog/',
	'/blog/arc-raiders-extraction-run-aggressive-strategies/',
	'/blog/arc-raiders-loot-routes-guide/',
	'/blog/arc-raiders-weapon-tier-list/',
	'/blog/arc-raiders-skin-leaks-guide/',
	'/blog/arc-raiders-tournament-meta-guide/',
	'/blog/arc-raiders-pro-settings-guide/',
	'/blog/arc-raiders-warmup-maps-ranked/',
	'/blog/arc-raiders-patch-notes-guide/',
	'/blog/arc-raiders-cheats-complete-guide-2026/',
	'/blog/arc-raiders-cheats-buyers-guide/',
	'/blog/arc-raiders-cheats-2026-whats-new/',
	'/blog/arc-raiders-aimbot-settings-guide/',
	'/blog/arc-raiders-esp-wallhack-explained/',
	'/blog/undetected-arc-raiders-cheats-eac/',
	'/blog/arc-raiders-cheats-vs-cheatvault-comparison/',
	'/blog/elitefn-vs-arc-raiders-cheats-two-week-test/',
	'/blog/arc-raiders-cheats-vs-ghostware-features-pricing/',
	'/reviews/',
	'/reviews/arc-raiders-soft-aim-review-xkrypt0/',
	'/reviews/arc-raiders-esp-extraction-run-review-buildsr4k/',
	'/reviews/arc-raiders-cloud-dma-review-dma-wizard/',
	'/reviews/arc-raiders-soft-aim-review-ctrl-player99/',
	'/reviews/arc-raiders-cheat-setup-review-stormchaser07/',
	'/reviews/arc-raiders-loot-esp-review-lootgoblinx/',
	'/reviews/arc-raiders-soft-aim-raid-review-rankedgrind42/',
	'/reviews/arc-raiders-radar-hack-review-vanlifearc/',
	'/reviews/arc-raiders-eac-update-review-patchdaymike/',
	'/reviews/arc-raiders-sniper-soft-aim-review-snipezonly/',
	'/faq/what-are-arc-raiders-cheats/',
	'/faq/are-arc-raiders-cheats-undetected-in-2026/',
	'/faq/surface-raids-and-extractions/',
	'/faq/esp-wallhack-radar-or-aimbot/',
	'/faq/how-are-licenses-delivered/',
	'/faq/where-to-check-updates/',
	'/faq/how-to-contact-support/',
	'/faq/what-is-a-arc-raiders-wallhack/',
	'/faq/does-arc-raiders-cheats-include-radar-hack/',
	'/faq/eac-anti-cheat-and-arc-raiders-cheats/',
	'/faq/buy-undetected-arc-raiders-cheats-windows-pc/',
];

const LOCALE_CODES = [
	'en', 'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr',
	'ar', 'ja', 'ko', 'zh', 'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv',
];

const I18N_LOCALE_CODES = LOCALE_CODES.filter((code) => code !== 'en');

function extractLocs(xml) {
	return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

function extractHreflangCount(xml, url) {
	const block = xml.split('<loc>').find((part) => part.startsWith(url.replace(/&/g, '&amp;')));
	if (!block) return 0;
	return (block.match(/hreflang="/g) ?? []).length;
}

async function collectHtmlPaths(dir, base = '') {
	const entries = await readdir(dir, { withFileTypes: true });
	const paths = [];
	for (const entry of entries) {
		const rel = `${base}/${entry.name}`.replace(/\\/g, '/');
		if (entry.isDirectory()) {
			paths.push(...(await collectHtmlPaths(path.join(dir, entry.name), rel)));
		} else if (entry.name === 'index.html') {
			const urlPath = rel.replace(/\/index\.html$/, '/') || '/';
			paths.push(urlPath === '' ? '/' : urlPath);
		}
	}
	return paths;
}

function fail(msg) {
	console.error(`✗ ${msg}`);
	process.exitCode = 1;
}

function ok(msg) {
	console.log(`✓ ${msg}`);
}

const FORBIDDEN_DOMAIN = 'tarkovcheats.org';

async function assertNoForbiddenDomains(distRoot, bump) {
	const files = [];
	async function walk(dir) {
		for (const entry of await readdir(dir, { withFileTypes: true })) {
			const full = path.join(dir, entry.name);
			if (entry.isDirectory()) await walk(full);
			else if (/\.(html|xml|txt)$/.test(entry.name)) files.push(full);
		}
	}
	await walk(distRoot);
	let found = false;
	for (const file of files) {
		const content = await readFile(file, 'utf8');
		if (content.toLowerCase().includes(FORBIDDEN_DOMAIN)) {
			fail(`Forbidden domain ${FORBIDDEN_DOMAIN} in ${path.relative(ROOT, file)}`);
			bump();
			found = true;
		}
	}
	return !found;
}

async function main() {
	console.log('Validating sitemaps…\n');
	let errors = 0;
	const bump = () => {
		errors += 1;
	};

	const DIST = await resolveDistRoot();
	if (DIST !== path.join(ROOT, 'dist')) {
		console.log(`Using build output at ${path.relative(ROOT, DIST)}/\n`);
	}

	const sitemapIndex = await readFile(path.join(DIST, 'sitemap.xml'), 'utf8');
	const sitemapEn = await readFile(path.join(DIST, 'sitemap-en.xml'), 'utf8');
	const sitemapI18n = await readFile(path.join(DIST, 'sitemap-i18n.xml'), 'utf8');
	const sitemapImages = await readFile(path.join(DIST, 'sitemap-images.xml'), 'utf8');
	const robots = await readFile(path.join(ROOT, 'public', 'robots.txt'), 'utf8');
	if (robots.toLowerCase().includes(FORBIDDEN_DOMAIN)) {
		fail(`Forbidden domain ${FORBIDDEN_DOMAIN} in public/robots.txt`);
		bump();
	} else ok(`robots.txt has no ${FORBIDDEN_DOMAIN} references`);

	if (await assertNoForbiddenDomains(DIST, bump)) {
		ok(`No ${FORBIDDEN_DOMAIN} references in dist HTML/XML/txt`);
	}

	const pathRedirects = JSON.parse(
		await readFile(path.join(ROOT, 'functions', 'path-redirects.json'), 'utf8'),
	);

	const indexLocs = extractLocs(sitemapIndex);
	const enLocs = extractLocs(sitemapEn);
	const i18nLocs = extractLocs(sitemapI18n);
	const imageLocs = extractLocs(sitemapImages);

	// sitemap.xml must be a sitemap index (not a urlset)
	if (!sitemapIndex.includes('<sitemapindex')) {
		fail('sitemap.xml must be a sitemap index (<sitemapindex>)');
		bump();
	} else ok('sitemap.xml is a valid sitemap index');

	// Legacy sitemap-index.xml must not be emitted — redirect handles old URLs
	try {
		await access(path.join(DIST, 'sitemap-index.xml'));
		fail('sitemap-index.xml must not exist in dist/ (use redirect to sitemap.xml)');
		bump();
	} catch {
		ok('sitemap-index.xml not emitted (legacy URL redirects to sitemap.xml)');
	}

	if (pathRedirects['/sitemap-index.xml'] !== '/sitemap.xml') {
		fail('path-redirects.json missing 301: /sitemap-index.xml → /sitemap.xml');
		bump();
	} else ok('path-redirects.json 301s sitemap-index.xml → sitemap.xml');

	// Per-locale sitemap files
	const localeSitemapLocs = {};
	let localeUrlTotal = 0;
	for (const locale of I18N_LOCALE_CODES) {
		const file = path.join(DIST, `sitemap-${locale}.xml`);
		const xml = await readFile(file, 'utf8');
		const locs = extractLocs(xml);
		localeSitemapLocs[locale] = locs;
		localeUrlTotal += locs.length;

		if (locs.length !== PAGES_PER_LOCALE) {
			fail(`sitemap-${locale}.xml: expected ${PAGES_PER_LOCALE} URLs, got ${locs.length}`);
			bump();
		}
	}
	if (errors === 0) {
		ok(`All 21 locale sitemaps have ${PAGES_PER_LOCALE} URLs each (${localeUrlTotal} total)`);
	}

	// Count checks
	if (enLocs.length !== ENGLISH_PAGES) {
		fail(`sitemap-en.xml: expected ${ENGLISH_PAGES} URLs, got ${enLocs.length}`);
		bump();
	} else ok(`sitemap-en.xml has ${ENGLISH_PAGES} English URLs`);

	if (i18nLocs.length !== I18N_URLS) {
		fail(`sitemap-i18n.xml: expected ${I18N_URLS} URLs, got ${i18nLocs.length}`);
		bump();
	} else ok(`sitemap-i18n.xml has ${I18N_URLS} localized URLs (backward-compat aggregate)`);

	if (localeUrlTotal !== I18N_URLS) {
		fail(`Per-locale sitemaps total: expected ${I18N_URLS}, got ${localeUrlTotal}`);
		bump();
	}

	if (imageLocs.length !== IMAGE_SITEMAP_ENTRIES) {
		fail(`sitemap-images.xml: expected ${IMAGE_SITEMAP_ENTRIES} image host URLs, got ${imageLocs.length}`);
		bump();
	} else ok(`sitemap-images.xml has ${IMAGE_SITEMAP_ENTRIES} image entries`);

	const uniqueImageHosts = new Set(imageLocs);
	if (uniqueImageHosts.size !== imageLocs.length) {
		fail(
			`sitemap-images.xml has duplicate <loc> hosts (${imageLocs.length} locs, ${uniqueImageHosts.size} unique) — causes crawl warnings`,
		);
		bump();
	} else ok('sitemap-images.xml has unique page <loc> hosts (no duplicates)');

	for (const required of [`${SITE}/features/`, `${SITE}/pricing/`, `${SITE}/updates/`]) {
		if (!enLocs.includes(required)) {
			fail(`Missing core page in sitemap-en.xml: ${required}`);
			bump();
		}
	}
	if (errors === 0) {
		ok('Core pages present in sitemap-en.xml: /features/ /pricing/ (Store) /updates/ (Status)');
	}

	for (const required of [`${SITE}/features/`, `${SITE}/pricing/`, `${SITE}/updates/`]) {
		if (!imageLocs.includes(required)) {
			fail(`Missing core host in sitemap-images.xml: ${required}`);
			bump();
		}
	}
	if (errors === 0) {
		ok('Image sitemap hosts Features, Store (/pricing/), and Status (/updates/)');
	}

	// English path coverage (skip intentional 301 stubs)
	for (const p of ENGLISH_PATHS) {
		if (REDIRECT_ONLY_PATHS.has(p)) continue;
		const full = `${SITE}${p === '/' ? '/' : p}`;
		if (!enLocs.includes(full)) {
			fail(`Missing English URL in sitemap-en.xml: ${full}`);
			bump();
		}
	}
	if (errors === 0) ok(`All ${ENGLISH_PAGES} English canonical paths present in sitemap-en.xml`);

	if (sitemapEn.includes('/undefined') || sitemapEn.includes('undefined</image:loc>')) {
		fail('sitemap-en.xml contains broken image:loc ending in /undefined');
		bump();
	} else ok('sitemap-en.xml has no undefined image URLs');

	// Every page URL must include Google image sitemap annotations (SERP / Images crawl)
	function countUrlsMissingImages(xml) {
		const blocks = xml.split(/<url>/i).slice(1);
		return blocks.filter((block) => !/<image:image[\s>]/i.test(block)).length;
	}

	const enMissingImages = countUrlsMissingImages(sitemapEn);
	if (enMissingImages > 0) {
		fail(`sitemap-en.xml: ${enMissingImages} <url> entries missing <image:image>`);
		bump();
	} else ok('Every English sitemap URL has <image:image>');

	let localeMissingImages = 0;
	for (const locale of I18N_LOCALE_CODES) {
		const xml = await readFile(path.join(DIST, `sitemap-${locale}.xml`), 'utf8');
		localeMissingImages += countUrlsMissingImages(xml);
	}
	if (localeMissingImages > 0) {
		fail(`Locale sitemaps: ${localeMissingImages} <url> entries missing <image:image>`);
		bump();
	} else ok('Every locale sitemap URL has <image:image>');

	// No overlap between EN and i18n sitemaps
	const overlap = enLocs.filter((u) => i18nLocs.includes(u));
	if (overlap.length > 0) {
		fail(`Duplicate URLs in both sitemaps: ${overlap.join(', ')}`);
		bump();
	} else ok('No duplicate URLs between sitemap-en.xml and sitemap-i18n.xml');

	// Per-locale sitemaps match combined i18n sitemap
	const perLocaleSet = new Set(Object.values(localeSitemapLocs).flat());
	const i18nSet = new Set(i18nLocs);
	const missingInAggregate = [...perLocaleSet].filter((u) => !i18nSet.has(u));
	const extraInAggregate = [...i18nSet].filter((u) => !perLocaleSet.has(u));
	if (missingInAggregate.length > 0 || extraInAggregate.length > 0) {
		fail('Per-locale sitemaps and sitemap-i18n.xml URL sets differ');
		bump();
	} else ok('Per-locale sitemaps match sitemap-i18n.xml URL set');

	// HTTPS + trailing slash (page URLs only — sub-sitemap .xml locs omit trailing slash)
	for (const loc of [...enLocs, ...i18nLocs]) {
		if (!loc.startsWith('https://')) {
			fail(`Non-HTTPS URL: ${loc}`);
			bump();
		}
		if (!loc.endsWith('/')) {
			fail(`URL missing trailing slash: ${loc}`);
			bump();
		}
		if (loc.includes('www.')) {
			fail(`URL must use apex domain (no www): ${loc}`);
			bump();
		}
	}
	for (const loc of indexLocs) {
		if (!loc.startsWith('https://')) {
			fail(`Non-HTTPS sub-sitemap URL: ${loc}`);
			bump();
		}
		if (loc.includes('www.')) {
			fail(`Sub-sitemap URL must use apex domain (no www): ${loc}`);
			bump();
		}
	}
	if (errors === 0) ok('All sitemap URLs use HTTPS apex with trailing slashes');

	// hreflang on homepage
	const homeHreflang = extractHreflangCount(sitemapEn, `${SITE}/`);
	if (homeHreflang !== HREFLANG_PER_URL) {
		fail(`Homepage hreflang links: expected ${HREFLANG_PER_URL}, got ${homeHreflang}`);
		bump();
	} else ok(`Homepage has ${HREFLANG_PER_URL} hreflang alternates (22 locales + x-default)`);

	// sitemap.xml index — EN + 21 locale sitemaps + images
	if (indexLocs.length !== SITEMAP_INDEX_ENTRIES) {
		fail(`sitemap.xml: expected ${SITEMAP_INDEX_ENTRIES} sub-sitemaps, got ${indexLocs.length}`);
		bump();
	} else ok(`sitemap.xml lists ${SITEMAP_INDEX_ENTRIES} sub-sitemaps`);

	if (!indexLocs.includes(`${SITE}/sitemap-en.xml`)) {
		fail('sitemap.xml missing sitemap-en.xml');
		bump();
	}
	if (!indexLocs.includes(`${SITE}/sitemap-images.xml`)) {
		fail('sitemap.xml missing sitemap-images.xml');
		bump();
	}
	for (const locale of I18N_LOCALE_CODES) {
		const loc = `${SITE}/sitemap-${locale}.xml`;
		if (!indexLocs.includes(loc)) {
			fail(`sitemap.xml missing sitemap-${locale}.xml`);
			bump();
		}
	}
	if (errors === 0) ok('sitemap.xml lists English, all 21 locale, and image sitemaps');

	// robots.txt — single GSC submission path
	if (!robots.includes(`${SITE}/sitemap.xml`)) {
		fail('robots.txt missing Sitemap: sitemap.xml');
		bump();
	}
	if (robots.includes(`${SITE}/sitemap-index.xml`)) {
		fail('robots.txt must not list legacy sitemap-index.xml');
		bump();
	}
	for (const sub of ['sitemap-i18n.xml', 'sitemap-images.xml', 'sitemap-en.xml', 'sitemap-blog.xml']) {
		if (robots.includes(`${SITE}/${sub}`)) {
			fail(`robots.txt must not list redundant sitemap: ${sub} (already covered by sitemap.xml index)`);
			bump();
		}
	}
	if (errors === 0) ok('robots.txt lists sitemap.xml only (primary GSC submission path)');

	// Built HTML vs sitemap total
	const htmlPaths = await collectHtmlPaths(DIST);
	const sitemapPaths = new Set([
		...enLocs.map((u) => u.replace(SITE, '') || '/'),
		...i18nLocs.map((u) => u.replace(SITE, '')),
	]);

	const htmlSet = new Set(htmlPaths);
	const missingFromSitemap = [...htmlSet].filter((p) => {
		if (sitemapPaths.has(p) || REDIRECT_ONLY_PATHS.has(p)) return false;
		// Locale blog stubs 301 to EN — intentionally omitted from sitemaps
		if (/^\/[a-z]{2}\/blog(\/|$)/.test(p)) return false;
		return true;
	});
	const extraInSitemap = [...sitemapPaths].filter((p) => !htmlSet.has(p));

	if (htmlSet.size !== TOTAL_HTML_PAGES) {
		fail(`Built HTML pages: expected ${TOTAL_HTML_PAGES}, got ${htmlSet.size}`);
		bump();
	} else ok(`${TOTAL_HTML_PAGES} HTML pages built (${REDIRECT_ONLY_PATHS.size} EN redirect-only omitted from sitemaps)`);

	if (missingFromSitemap.length > 0) {
		fail(`HTML pages missing from sitemaps: ${missingFromSitemap.slice(0, 5).join(', ')}${missingFromSitemap.length > 5 ? '…' : ''}`);
		bump();
	} else ok('Every indexable HTML page is listed in a sitemap');

	if (extraInSitemap.length > 0) {
		fail(`Sitemap URLs without HTML: ${extraInSitemap.slice(0, 5).join(', ')}`);
		bump();
	} else ok('Every sitemap URL has a matching HTML page');

	// Locale homepages in per-locale sitemaps
	for (const locale of I18N_LOCALE_CODES) {
		const home = `${SITE}/${locale}/`;
		if (!localeSitemapLocs[locale].includes(home)) {
			fail(`Missing locale homepage in sitemap-${locale}.xml: ${home}`);
			bump();
		}
	}
	if (errors === 0) ok('All 21 non-English locale homepages in per-locale sitemaps');

	// Locale URL count summary
	console.log('\nLocale URL counts (per-locale sitemaps):');
	for (const locale of I18N_LOCALE_CODES) {
		console.log(`  ${locale}: ${localeSitemapLocs[locale].length}`);
	}

	console.log('');
	if (errors > 0) {
		console.error(`Validation failed with ${errors} error(s).`);
		process.exit(1);
	}
	console.log('All sitemap checks passed.');
	console.log(`\nSubmit to Google Search Console: ${SITE}/sitemap.xml`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
