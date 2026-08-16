#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Arc Raiders source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['arc-raiders-esp', 'arc-raiders-esp'],
	['arc-raiders-aimbot', 'arc-raiders-aimbot'],
	["'eac'", "'eac'"],
	['eac-bypass', 'eac-bypass'],
	['undetected-arc-raiders-cheats', 'undetected-arc-raiders-cheats'],
	['arc-raiders-wallhack', 'arc-raiders-wallhack'],
	['arc-raiders-radar-hack', 'arc-raiders-radar-hack'],
	['arc-raiders-cheats-2026', 'arc-raiders-cheats-2026'],
	['escape-from-arc-raiders-cheats', 'escape-from-arc-raiders-cheats'],
	['arc-raiders', 'arc-raiders'],
	['ARC Raiders', 'ARC Raiders'],
	['ARC Raiders', 'ARC Raiders'],
	['Arc Raiders Cheats', 'Arc Raiders Cheats'],
	['Arc Raiders cheats', 'Arc Raiders cheats'],
	['Arc Raiders cheat', 'Arc Raiders cheat'],
	['Arc Raiders ESP', 'ARC Raiders ESP'],
	['Arc Raiders Aimbot', 'ARC Raiders Aimbot'],
	['Arc Raiders wallhack', 'ARC Raiders wallhack'],
	['Arc Raiders radar', 'ARC Raiders radar'],
	['Arc Raiders firefights', 'ARC Raiders firefights'],
	['Arc Raiders combat', 'ARC Raiders combat'],
	['Arc Raiders patches', 'ARC Raiders patches'],
	['Arc Raiders updates', 'ARC Raiders updates'],
	['Arc Raiders setup', 'ARC Raiders setup'],
	['Arc Raiders license', 'ARC Raiders license'],
	['Arc Raiders licenses', 'ARC Raiders licenses'],
	['Arc Raiders sessions', 'ARC Raiders sessions'],
	['in Arc Raiders', 'in ARC Raiders'],
	['for Arc Raiders', 'for ARC Raiders'],
	['Arc Raiders on', 'ARC Raiders on'],
	['Arc Raiders or', 'ARC Raiders or'],
	['Arc Raiders\'s', 'ARC Raiders\'s'],
	['Arc Raiders ', 'ARC Raiders '],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['Easy Anti-Cheat maintenance', 'Easy Anti-Cheat maintenance'],
	['Easy Anti-Cheat bypass', 'Easy Anti-Cheat bypass'],
	['Easy Anti-Cheat Bypass', 'Easy Anti-Cheat Bypass'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['support@arcraiderscheats.org', 'support@arcraiderscheats.org'],
	['Speranza surface zones and extraction routes', 'Speranza surface zones and extraction routes'],
	['Speranza surface zones and extraction routes', 'Speranza surface zones and extraction routes'],
	['extraction fights', 'extraction fights'],
	['extract fight', 'extract fight'],
	['raid rounds', 'raid rounds'],
	['extract', 'extract'],
	['Raiders', 'players'],
	['operator', 'player'],
	['Raiders', 'Players'],
	['Operator', 'Player'],
	['extract timer', 'extract timer'],
	['surface raids and extraction runs', 'surface raids and extraction runs'],
	['surface raids and extraction runs', 'surface raids and extraction runs'],
	['Raider & extraction', 'Raider & extraction'],
	['high-value loot', 'high-value loot'],
	['high-value loot', 'high-value loot'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'ARC Raiders combat pace'],
	['COD', 'ARC Raiders'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'Arc Raiders Cheats',
	game: 'ARC Raiders',
	checkout: 'Zadeyo',
	battleye: 'Easy Anti-Cheat',
};`,
);
phrases = phrases.replace(/KW\.battleye/g, 'KW.battleye');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'Speranza surface zones and extraction routes'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
