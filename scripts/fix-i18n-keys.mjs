#!/usr/bin/env node
/** Fix remaining i18n key mismatches and ui-strings. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const UI_REPLACEMENTS = [
	['Arc Raiders Cheats', 'Arc Raiders Cheats'],
	['Arc Raiders cheats', 'Arc Raiders cheats'],
	['Arc Raiders Cheats', 'Arc Raiders Cheats'],
	['ARC Raiders', 'ARC Raiders'],
	['ARC Raiders', 'ARC Raiders'],
	['Call of Duty', 'ARC Raiders'],
	['Arc Raiders PC', 'ARC Raiders PC'],
	['for Arc Raiders', 'for ARC Raiders'],
	['Arc Raiders ', 'ARC Raiders '],
	['arc-raiders ', 'arc-raiders '],
	['Easy Anti-Cheat maintenance', 'Easy Anti-Cheat maintenance'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['operatorEsp', 'playerEsp'],
	['extractFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
	['Raiders', 'players'],
	['operator', 'player'],
	['Raiders', 'Players'],
	['Operator', 'Player'],
	['Al Mazrah', 'Verdansk'],
	['Verdansk', 'Verdansk'],
	['scav-run', 'scav-run'],
	['extract', 'extract'],
	['arcraiderscheats.org', 'arcraiderscheats.org'],
	['Trucos Arc Raiders', 'Trucos ARC Raiders'],
	['Triches Arc Raiders', 'Triches ARC Raiders'],
	['Cheats Arc Raiders', 'Cheats ARC Raiders'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of UI_REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

// Rebuild ui-strings from clean source
for (const file of ['ui-strings-part1.mjs', 'ui-strings-part2.mjs']) {
	let content = await readFile(path.join(SRC, 'scripts/i18n-data', file), 'utf8');
	content = apply(content);
	await writeFile(path.join(ROOT, 'scripts/i18n-data', file), content);
	console.log('Fixed', file);
}

// Fix pages-en battleye key
let pagesEn = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), 'utf8');
pagesEn = pagesEn.replace(/\tbattleye: \{/, "\t'eac': {");
pagesEn = pagesEn.replace(/ARC Raiders Arc Raiders/g, 'ARC Raiders');
pagesEn = pagesEn.replace(/for ARC Raiders Arc Raiders/g, 'for ARC Raiders');
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), pagesEn);

// Fix pages-i18n
let pagesI18n = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), 'utf8');
pagesI18n = apply(pagesI18n);
pagesI18n = pagesI18n.replace(/'eac'/g, "'eac'");
pagesI18n = pagesI18n.replace(/battleye:/g, "'eac':");
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), pagesI18n);

// Fix generate-i18n pages count
let gen = await readFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), 'utf8');
gen = gen.replace('Pages per locale: 25', 'Pages per locale: 17');
await writeFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), gen);

console.log('Fixed i18n keys.');
