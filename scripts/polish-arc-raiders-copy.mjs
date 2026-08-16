#!/usr/bin/env node
/**
 * Second-pass ARC Raiders copy polish — removes Tarkov/EFT leftovers.
 * Run: node scripts/polish-arc-raiders-copy.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const FILES = [
	'scripts/generate-blog-posts.mjs',
	'src/data/blog/posts.generated.ts',
	'src/data/i18n/gallery-ui.ts',
	'src/data/i18n/simple-pages.ts',
	'src/data/site-core.ts',
	'scripts/i18n-data/pages-i18n.mjs',
	'public/locales/en/translation.json',
	'scripts/validate-sitemaps.mjs',
	'functions/_middleware.js',
	'functions/path-redirects.json',
];

const REPLACEMENTS = [
	// Slugs (blog)
	['arc-raiders-scav-run-aggressive-strategies', 'arc-raiders-extraction-run-aggressive-strategies'],
	['escape-from-arc-raiders-cheats-buyers-guide', 'arc-raiders-cheats-buyers-guide'],
	['undetected-arc-raiders-cheats-battleye', 'undetected-arc-raiders-cheats-eac'],
	['arc-raiders-scav-run-meta', 'arc-raiders-extraction-run-meta'],
	// Maps & zones
	['Customs, Woods, and Interchange', 'Speranza, Rust Belt, and underground zones'],
	['Customs, Woods and Interchange', 'Speranza, Rust Belt, and underground zones'],
	['Woods and Interchange', 'Rust Belt and underground zones'],
	['Customs and Interchange', 'Speranza and underground zones'],
	['Customs, Woods', 'Speranza, Rust Belt'],
	['Customs and Factory', 'Speranza and industrial zones'],
	['Customs dorms', 'underground zones'],
	['Customs push', 'Speranza push'],
	['Customs or Factory', 'Speranza or industrial zones'],
	['on Customs', 'on Speranza'],
	['in Customs', 'in Speranza'],
	['Customs', 'Speranza'],
	['Woods and Lighthouse', 'Rust Belt and extraction routes'],
	['on Woods', 'on Rust Belt'],
	['on Woods and', 'on Rust Belt and'],
	[' Woods ', ' Rust Belt '],
	['Interchange hallways', 'underground corridors'],
	['Interchange tech stores', 'industrial loot zones'],
	['Interchange', 'underground zones'],
	['Factory or', 'industrial zones or'],
	['Factory', 'industrial zones'],
	['dorms or', 'underground zones or'],
	['dorms clears', 'underground zone clears'],
	['dorms sprays', 'close-quarters sprays'],
	['dorms', 'underground zones'],
	['Shoreline and Lighthouse', 'Rust Belt and extraction routes'],
	['Lighthouse', 'extraction routes'],
	// EFT mechanics
	['PMC loadouts', 'Raider loadouts'],
	['PMC loadout', 'Raider loadout'],
	['PMC fights', 'surface raid fights'],
	['PMC raid', 'surface raid'],
	['PMC raids', 'surface raids'],
	['PMC and Scav ESP', 'Raider and ARC drone ESP'],
	['PMC and Scav', 'Raider and extraction'],
	['PMCs and Scavs', 'Raiders and ARC drones'],
	['PMCs', 'Raiders'],
	['PMC', 'Raider'],
	['Scav kits', 'extraction runner kits'],
	['Scav kit', 'extraction runner kit'],
	['Scav timing', 'extraction timing'],
	['Scav strategies', 'extraction strategies'],
	['Scav strategies article', 'extraction strategies article'],
	['Scav aggression guide', 'extraction aggression guide'],
	['Scav aggression', 'extraction aggression'],
	['Scav Runs', 'Extraction Runs'],
	['Scav Run Strategies', 'Extraction Run Strategies'],
	['Scav Run', 'Extraction Run'],
	['Scav run', 'extraction run'],
	['Scav runs', 'extraction runs'],
	['Scav-run', 'Extraction run'],
	['scav-run', 'extraction-run'],
	['Scav filters', 'ARC drone filters'],
	['Scav', 'ARC drone'],
	['scavenger panic', 'loot panic'],
	// Economy / seasons
	['this wipe', 'this season'],
	['last wipe', 'last season'],
	['late-wipe', 'late-season'],
	['wipe update', 'season update'],
	['wipe progression', 'season progression'],
	['wipe after wipe', 'season after season'],
	['wipe cadence', 'season cadence'],
	[' arc-raiders wipe', ' ARC Raiders season'],
	['flea money', 'credits'],
	['roubles', 'credits'],
	['offline mode', 'training mode'],
	['trader unlocks', 'vendor unlocks'],
	// Anti-cheat / keywords
	['battleye patch', 'Easy Anti-Cheat patch'],
	['battleye 2026', 'Easy Anti-Cheat 2026'],
	['battleye arc-raiders', 'Easy Anti-Cheat arc-raiders'],
	['eft cheats 2026', 'arc raiders cheats 2026'],
	['eft undetected', 'arc raiders undetected'],
	['escape from arc-raiders patch notes', 'arc raiders patch notes'],
	['escape from arc-raiders', 'arc raiders'],
	// Blog categories / ids
	['category: "Scav Runs"', 'category: "Extraction Runs"'],
	["category: 'Scav Runs'", "category: 'Extraction Runs'"],
];

function polish(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		result = result.split(from).join(to);
	}
	return result;
}

let changed = 0;
for (const rel of FILES) {
	const file = path.join(ROOT, rel);
	let content;
	try {
		content = readFileSync(file, 'utf8');
	} catch {
		console.warn(`Skip missing ${rel}`);
		continue;
	}
	const updated = polish(content);
	if (updated !== content) {
		writeFileSync(file, updated);
		console.log(`Polished ${rel}`);
		changed++;
	}
}
console.log(`Done — ${changed} file(s) updated.`);
