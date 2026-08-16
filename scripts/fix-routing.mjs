#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean Arc Raiders source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['arc-raiders-esp', 'arc-raiders-esp'],
	['arc-raiders-aimbot', 'arc-raiders-aimbot'],
	['eac', 'eac'],
	['undetected-arc-raiders-cheats', 'undetected-arc-raiders-cheats'],
	['arc-raiders-wallhack', 'arc-raiders-wallhack'],
	['arc-raiders-radar-hack', 'arc-raiders-radar-hack'],
	['arc-raiders-cheats-2026', 'arc-raiders-cheats-2026'],
	['eac-bypass', 'eac-bypass'],
	['arcraiderscheats.org', 'arcraiderscheats.org'],
	['trucos-arc-raiders', 'trucos-arc-raiders'],
	['triche-arc-raiders', 'triche-arc-raiders'],
	['arc-raiders-cheats', 'escape-from-arc-raiders-cheats'],
	['cheats-arc-raiders', 'cheats-arc-raiders'],
	['trucchi-arc-raiders', 'trucchi-arc-raiders'],
	['cheaty-arc-raiders', 'cheaty-arc-raiders'],
	['chity-arc-raiders', 'chity-arc-raiders'],
	['chitov-arc-raiders', 'chitov-arc-raiders'],
	['chitiv-arc-raiders', 'chitiv-arc-raiders'],
	['cheatow-arc-raiders', 'cheatow-arc-raiders'],
	['hile-arc-raiders', 'hile-arc-raiders'],
	['arc-raiders-hile', 'arc-raiders-hile'],
	['arc-raiders-esp-chity', 'arc-raiders-esp-chity'],
	['arc-raiders-aimbot-chity', 'arc-raiders-aimbot-chity'],
	['unentdeckte-arc-raiders-cheats', 'unentdeckte-escape-from-arc-raiders-cheats'],
	['cheats-arc-raiders-indetectaveis', 'cheats-arc-raiders-indetectaveis'],
	['trucchi-arc-raiders-indetectabili', 'trucchi-arc-raiders-indetectabili'],
	['niewykrywalne-cheats-arc-raiders', 'niewykrywalne-cheats-arc-raiders'],
	['nedecektiruemye-chity-arc-raiders', 'nedecektiruemye-chity-arc-raiders'],
	['tespit-edilemeyen-arc-raiders-hileleri', 'tespit-edilemeyen-arc-raiders-hileleri'],
	['nedecektovani-chity-arc-raiders', 'nedecektovani-chity-arc-raiders'],
	['cheats-arc-raiders-nedetectabile', 'cheats-arc-raiders-nedetectabile'],
	['basta-arc-raiders-cheats', 'basta-escape-from-arc-raiders-cheats'],
	['eac-bypass-trucos-arc-raiders', 'eac-bypass-trucos-arc-raiders'],
	['eac-bypass-triche-arc-raiders', 'eac-bypass-triche-arc-raiders'],
	['eac-bypass-cheats-arc-raiders', 'eac-bypass-cheats-arc-raiders'],
	['eac-bypass-chity-arc-raiders', 'eac-bypass-chity-arc-raiders'],
	['eac-bypass-arc-raiders', 'eac-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix battleye key in englishPaths
	content = content.replace(/\tbattleye: '/, "\t'eac': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich escape-from-arc-raiders-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/escape-from-arc-raiders-cheats-hero.webp',
	'arc-raiders-esp': '/images/escape-from-arc-raiders-cheats-esp-wallhack.webp',
	'arc-raiders-aimbot': '/images/escape-from-arc-raiders-cheats-aimbot-combat.webp',
	features: '/images/escape-from-arc-raiders-cheats-package.webp',
	pricing: '/images/escape-from-arc-raiders-cheats-cover.webp',
	setup: '/images/arc-raiders-loadout-builder.webp',
	updates: '/images/arc-raiders-header-art.webp',
	faq: '/images/arc-raiders-squad-fight.webp',
	support: '/images/escape-from-arc-raiders-cheats-package.webp',
	undetected: '/images/arc-raiders-battle-royale-combat.webp',
	wallhack: '/images/escape-from-arc-raiders-cheats-esp-wallhack.webp',
	radar: '/images/arc-raiders-player-esp.webp',
	'eac': '/images/arc-raiders-reboot-van-fight.webp',
	'cheats-2026': '/images/escape-from-arc-raiders-cheats-hero.webp',
	privacy: '/images/escape-from-arc-raiders-cheats-aimbot-combat.webp',
	refund: '/images/escape-from-arc-raiders-cheats-cover.webp',
	terms: '/images/escape-from-arc-raiders-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'arc-raiders-esp', 'arc-raiders-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'arc-raiders-esp' | 'arc-raiders-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/extractFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
