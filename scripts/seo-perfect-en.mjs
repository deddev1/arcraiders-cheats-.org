#!/usr/bin/env node
/**
 * Purge Fortnite/Warzone/BR leftovers from EN page source and regenerate i18n.
 * Run: node scripts/seo-perfect-en.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGES_EN = path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs');

/** @type {Array<[RegExp|string, string]>} */
const replacements = [
	// Wrong publishers in prose (EXT.activision already links to escapefromarc-raiders.com)
	['published by ${EXT.activision}', 'published by Embark Studios (${EXT.arc-raiders})'],
	['from ${EXT.activision}', 'from ${EXT.arc-raiders}'],
	['via ${EXT.activision}', 'via ${EXT.arc-raiders}'],
	['belong with ${EXT.activision}', 'belong with Embark Studios'],
	['${EXT.activision} terms', 'Embark Studios terms'],
	['${EXT.activision} season updates', '${EXT.arc-raiders} wipe and map updates'],

	['PC & Controllers', 'Windows PC'],
	['PC & Controller Guide', 'Windows PC Guide'],
	['PC and controller cheats', 'Windows PC cheats'],

	// BR / Fortnite lexicon → Arc Raiders
	['vehicles, loot', 'Raiders, ARC drones, loot'],
	['notice vehicles before they push your position', 'spot Raiders and ARC drones before they push your angle'],
	['Player, vehicle, and loot', 'Player, boss, and loot'],
	[
		'vehicle threat cues, supply-drop awareness markers, and loot or chest pins so only BR-critical',
		'boss markers, extract cues, and loot pins so only raid-critical',
	],
	['Vehicle and supply-drop threat cues', 'Boss and extract awareness cues'],
	['vehicle and supply-drop threat cues', 'boss and extract awareness cues'],
	['loot or chest pins', 'loot and container pins'],
	['Loot and chest markers', 'Loot and container markers'],
	['loot and chest markers', 'loot and container markers'],
	['chests worth the detour', 'high-value loot worth the detour'],
	['vehicles, and chests', 'bosses, and containers'],
	['loot, vehicles, and chests', 'loot, bosses, and containers'],
	['players, loot, and vehicles', 'Raiders, ARC drones, and loot'],
	['players, loot, vehicles', 'Raiders, ARC drones, loot'],
	['vehicle threat cues', 'boss threat cues'],
	['vehicle pushes', 'flank pushes'],
	['track vehicles and chests', 'track bosses and containers'],
	['full BR loop', 'full raid loop'],
	['BR rotations', 'map rotations'],
	['BR-critical', 'raid-critical'],
	['endgame circles', 'extract holds'],
	['final circles', 'late-raid extracts'],
	['final-circle scrims', 'extract camp fights'],
	['before your first ranked block', 'before your first raid'],
	['before ranked', 'before you queue'],
	['reboot rounds', 'close-range scav fights'],
	['Battle Pass', 'wipe progression'],
	[
		'long-range AR beams and close-quarters room clears without reopening menus every spawn',
		'long-range DMR fights and dorms clears without reopening menus every raid',
	],
	['assault rifles, SMGs, and snipers', 'ARs, SMGs, and bolt-actions'],
	['AR / SMG / sniper', 'AR / SMG / bolt-action'],
	['players, loot, and vehicles', 'Raiders, ARC drones, and loot'],
	['for players, loot, and vehicles', 'for players, loot, and extracts'],

	// Broken / truncated meta fragments
	['soft aim, and .', 'soft aim, and radar.'],
	['soft aim, and on Windows PC', 'soft aim, and radar on Windows PC'],
	['soft aim, and for Windows PC', 'soft aim, and radar for Windows PC'],
	['soft aim, and in our', 'soft aim, and radar in our'],
	['soft aim, and maintenance', 'soft aim, and radar maintenance'],
	['soft aim, boxes, and on Windows PC', 'soft aim, and radar on Windows PC'],
	['ESP, Soft Aim, ', 'ESP, Soft Aim & Radar'],
	['Best Hacks with ESP & ', 'ESP Soft Aim & Radar'],
	['ESP, Soft Aim & ', 'ESP, Soft Aim & Radar'],
	['with — learn', '— learn'],
	['REasy Anti-Cheat out for', 'Reach out for'],
	['an Easy Anti-Cheat', 'a Easy Anti-Cheat'],
	['After a Escape', 'After an Escape'],
	['after a Escape', 'after an Escape'],

	// Keyword stuffing / nonsense duplicates
	['arc raiders cheats & arc raiders cheats', 'arc raiders cheats'],
	[
		'covering both arc raiders cheats and arc raiders cheats search intent',
		'covering both “arc raiders cheats” and “escape from arc raiders cheats” search intent',
	],
	[
		'also searched as arc raiders cheats and arc-raiders cheat.',
		'built for ARC Raiders on Windows PC.',
	],
	[
		'Arc Raiders cheats vs arc raiders cheats — same stack, clear pages',
		'How this Arc Raiders cheats pillar fits nearby pages',
	],
	[
		'Searchers use arc raiders cheats and arc raiders cheats interchangeably. This pillar focuses on hacks language; the',
		'Use this pillar for the core product overview. For year-specific buying notes, see the',
	],

	// Point cannibal URLs at canonicals
	['/arc-raiders-esp-hack/', '/arc-raiders-esp/'],
	['/arc-raiders-aimbot-hack/', '/arc-raiders-aimbot/'],
	['/best-arc-raiders-cheats/', '/arc-raiders-cheats/'],
	['best Arc Raiders cheats guide', 'Arc Raiders cheats pillar'],
	['best Arc Raiders cheats checklist', 'Arc Raiders cheats checklist'],
	['best Arc Raiders cheats', 'Arc Raiders cheats'],
	[
		'Prefer softer tracking? Read the <a href="/arc-raiders-soft-aim/">soft aim guide</a>. Want the search term most players use? See <a href="/arc-raiders-aimbot/">aimbot hack</a>.',
		'Prefer softer tracking? Read the <a href="/arc-raiders-soft-aim/">soft aim guide</a>.',
	],
	['Related landings: <a href="/arc-raiders-cheat-download/">cheat download</a>, <a href="/arc-raiders-mod-menu/">mod menu</a>, <a href="/arc-raiders-aimbot/">aimbot hack</a>, <a href="/arc-raiders-esp/">ESP hack</a>.',
		'Related landings: <a href="/arc-raiders-cheat-download/">cheat download</a>, <a href="/arc-raiders-mod-menu/">mod menu</a>, <a href="/arc-raiders-aimbot/">aimbot</a>, <a href="/arc-raiders-esp/">ESP</a>.'],
];

let src = readFileSync(PAGES_EN, 'utf8');
let hits = 0;
for (const [from, to] of replacements) {
	if (typeof from === 'string') {
		if (!src.includes(from)) continue;
		const count = src.split(from).length - 1;
		src = src.split(from).join(to);
		hits += count;
	} else {
		const next = src.replace(from, to);
		if (next !== src) hits += 1;
		src = next;
	}
}

writeFileSync(PAGES_EN, src);
console.log(`Replaced ${hits} occurrences in pages-en.mjs`);

const gen = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'generate-i18n-content.mjs')], {
	cwd: ROOT,
	stdio: 'inherit',
});
if (gen.status !== 0) process.exit(gen.status ?? 1);
console.log('Regenerated content.generated.ts');
