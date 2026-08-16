#!/usr/bin/env node
/**
 * Rebrand: Tarkov Cheats → Arc Raiders Cheats (arcraiderscheats.org)
 * Run from project root: node scripts/adapt-arc-raiders.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['tarkov-aimbot', 'arc-raiders-aimbot'],
	['tarkov-esp', 'arc-raiders-esp'],
	['tarkov-wallhack', 'arc-raiders-wallhack'],
	['tarkov-radar-hack', 'arc-raiders-radar-hack'],
	['undetected-tarkov-cheats', 'undetected-arc-raiders-cheats'],
	['tarkov-cheats-2026', 'arc-raiders-cheats-2026'],
	['battleye-bypass', 'eac-bypass'],
	['tarkov-cheats', 'arc-raiders-cheats'],
	['tarkov-cheat-download', 'arc-raiders-cheat-download'],
	['tarkov-mod-menu', 'arc-raiders-mod-menu'],
	['tarkov-soft-aim', 'arc-raiders-soft-aim'],
	['best-tarkov-cheats', 'best-arc-raiders-cheats'],
	['tarkov-aimbot-hack', 'arc-raiders-aimbot-hack'],
	['tarkov-esp-hack', 'arc-raiders-esp-hack'],
	['tarkov-unlock-all', 'arc-raiders-unlock-all'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://www.tarkovcheats.org', 'https://www.arcraiderscheats.org'],
	['https://tarkovcheats.org', 'https://arcraiderscheats.org'],
	['www.tarkovcheats.org', 'www.arcraiderscheats.org'],
	['tarkovcheats.org', 'arcraiderscheats.org'],
	['support@tarkovcheats.org', 'support@arcraiderscheats.org'],
	['besttarkovcheats.com', 'bestarcraiderscheats.com'],
	['www.besttarkovcheats.com', 'www.bestarcraiderscheats.com'],
	['/products/escape-from-tarkov', '/products/arc-raiders'],
	['project-name=tarkov-cheats--org', 'project-name=arc-raiders-cheats--org'],
	['name = "tarkov-cheats--org"', 'name = "arc-raiders-cheats--org"'],
	['"name": "tarkov-cheats"', '"name": "arc-raiders-cheats"'],
	['undetected-tarkov-cheats', 'undetected-arc-raiders-cheats'],
	['best-tarkov-cheats', 'best-arc-raiders-cheats'],
	['tarkov-cheats-2026', 'arc-raiders-cheats-2026'],
	['tarkov-cheat-download', 'arc-raiders-cheat-download'],
	['tarkov-aimbot-hack', 'arc-raiders-aimbot-hack'],
	['tarkov-esp-hack', 'arc-raiders-esp-hack'],
	['tarkov-radar-hack', 'arc-raiders-radar-hack'],
	['tarkov-unlock-all', 'arc-raiders-unlock-all'],
	['tarkov-soft-aim', 'arc-raiders-soft-aim'],
	['tarkov-mod-menu', 'arc-raiders-mod-menu'],
	['tarkov-wallhack', 'arc-raiders-wallhack'],
	['tarkov-aimbot', 'arc-raiders-aimbot'],
	['tarkov-esp', 'arc-raiders-esp'],
	['tarkov-cheats', 'arc-raiders-cheats'],
	['escape-from-tarkov-cheats', 'arc-raiders-cheats'],
	['escape-from-tarkov', 'arc-raiders'],
	['Escape from Tarkov Support', 'ARC Raiders Support'],
	['Escape from Tarkov', 'ARC Raiders'],
	['Tarkov Cheats', 'Arc Raiders Cheats'],
	['Tarkov cheats', 'Arc Raiders cheats'],
	['tarkov cheats', 'arc raiders cheats'],
	['Tarkov Intel', 'Arc Raiders Intel'],
	['TarkovCheatsSite', 'ArcRaidersCheatsSite'],
	['battleye-bypass', 'eac-bypass'],
	['BattlEye anti-cheat', 'Easy Anti-Cheat'],
	['BattlEye maintenance', 'Easy Anti-Cheat maintenance'],
	['BattlEye bypass', 'Easy Anti-Cheat bypass'],
	['BattlEye Bypass', 'Easy Anti-Cheat Bypass'],
	['BattlEye patches', 'Easy Anti-Cheat patches'],
	['BattlEye patch', 'Easy Anti-Cheat patch'],
	['BattlEye updates', 'Easy Anti-Cheat updates'],
	['BattlEye update', 'Easy Anti-Cheat update'],
	['after BattlEye', 'after Easy Anti-Cheat'],
	['BattlEye', 'Easy Anti-Cheat'],
	["'battleye'", "'eac'"],
	['pageId="battleye"', 'pageId="eac"'],
	["pageId: 'battleye'", "pageId: 'eac'"],
	['"battleye"', '"eac"'],
	["'tarkov-esp'", "'arc-raiders-esp'"],
	["'tarkov-aimbot'", "'arc-raiders-aimbot'"],
	['tarkov-esp-player-tags', 'arc-raiders-esp-player-tags'],
	['tarkov-wallhack-skeleton', 'arc-raiders-wallhack-skeleton'],
	['tarkov-aimbot-sniper', 'arc-raiders-aimbot-sniper'],
	['tarkov-aimbot-skeleton', 'arc-raiders-aimbot-skeleton'],
	['tarkov-esp-radar', 'arc-raiders-esp-radar'],
	['tarkovImages', 'arcRaidersImages'],
	["from './tarkov'", "from './arc-raiders'"],
	["from '../data/tarkov'", "from '../data/arc-raiders'"],
	["from '../../data/tarkov'", "from '../../data/arc-raiders'"],
	['fetch-tarkov-images', 'fetch-arc-raiders-images'],
	['tarkov-hack-overlays', 'arc-raiders-hack-overlays'],
	['fix-tarkov-copy', 'fix-arc-raiders-copy'],
	['trucos-tarkov', 'trucos-arc-raiders'],
	['triche-tarkov', 'triche-arc-raiders'],
	['cheats-tarkov', 'cheats-arc-raiders'],
	['trucchi-tarkov', 'trucchi-arc-raiders'],
	['cheaty-tarkov', 'cheaty-arc-raiders'],
	['chity-tarkov', 'chity-arc-raiders'],
	['chitov-tarkov', 'chitov-arc-raiders'],
	['chitiv-tarkov', 'chitiv-arc-raiders'],
	['cheatow-tarkov', 'cheatow-arc-raiders'],
	['hile-tarkov', 'hile-arc-raiders'],
	['tarkov-hile', 'arc-raiders-hile'],
	['unentdeckte-tarkov-cheats', 'unentdeckte-arc-raiders-cheats'],
	['cheats-tarkov-indetectaveis', 'cheats-arc-raiders-indetectaveis'],
	['trucchi-tarkov-indetectabili', 'trucchi-arc-raiders-indetectabili'],
	['niewykrywalne-cheats-tarkov', 'niewykrywalne-cheats-arc-raiders'],
	['nedecektiruemye-chity-tarkov', 'nedecektiruemye-chity-arc-raiders'],
	['tespit-edilemeyen-tarkov-hileleri', 'tespit-edilemeyen-arc-raiders-hileleri'],
	['nedecektovani-chity-tarkov', 'nedecektovani-chity-arc-raiders'],
	['cheats-tarkov-nedetectabile', 'cheats-arc-raiders-nedetectabile'],
	['basta-tarkov-cheats', 'basta-arc-raiders-cheats'],
	['Customs, Woods, and Streets of Tarkov', 'Speranza surface zones and extraction routes'],
	['Customs, Woods and Streets of Tarkov', 'Speranza surface zones and extraction routes'],
	['extract fights', 'extraction fights'],
	['PMC raids and Scav runs', 'surface raids and extraction runs'],
	['PMC & Scav', 'Raider & extraction'],
	['PMC raids', 'surface raids'],
	['Scav runs', 'extraction runs'],
	['Scav run', 'extraction run'],
	['PMCs and Scavs', 'Raiders and ARC drones'],
	['PMCs', 'Raiders'],
	['Scavs', 'ARC drones'],
	['Battlestate Games', 'Embark Studios'],
	['Buy Tarkov Cheats', 'Buy Arc Raiders Cheats'],
	['Tarkov', 'Arc Raiders'],
	['tarkov', 'arc-raiders'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.html', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro', 'tarkov-cheats-.org']);
const SKIP_FILES = new Set([
	'adapt-warzone.mjs',
	'adapt-fortnite.mjs',
	'adapt-tarkov.mjs',
	'adapt-arc-raiders.mjs',
]);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameDataFile() {
	const from = path.join(ROOT, 'src', 'data', 'tarkov.ts');
	const to = path.join(ROOT, 'src', 'data', 'arc-raiders.ts');
	try {
		await rename(from, to);
		console.log('Renamed tarkov.ts → arc-raiders.ts');
	} catch (e) {
		console.warn(`tarkov.ts rename: ${e.message}`);
	}
}

async function renameScripts() {
	const pairs = [
		['fetch-tarkov-images.mjs', 'fetch-arc-raiders-images.mjs'],
		['tarkov-hack-overlays.mjs', 'arc-raiders-hack-overlays.mjs'],
		['fix-tarkov-copy.mjs', 'fix-arc-raiders-copy.mjs'],
	];
	for (const [from, to] of pairs) {
		try {
			await rename(path.join(ROOT, 'scripts', from), path.join(ROOT, 'scripts', to));
			console.log(`Renamed script: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip script rename ${from}: ${e.message}`);
		}
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'arc-raiders-aimbot': 'arc-raiders-aimbot',
		'arc-raiders-esp': 'arc-raiders-esp',
		'arc-raiders-wallhack': 'wallhack',
		'arc-raiders-radar-hack': 'radar',
		'undetected-arc-raiders-cheats': 'undetected',
		'arc-raiders-cheats-2026': 'cheats-2026',
		'eac-bypass': 'eac',
		'arc-raiders-cheats': 'hacks',
		'arc-raiders-cheat-download': 'cheat-download',
		'arc-raiders-mod-menu': 'mod-menu',
		'arc-raiders-soft-aim': 'soft-aim',
		'best-arc-raiders-cheats': 'best-cheats',
		'arc-raiders-aimbot-hack': 'aimbot-hack',
		'arc-raiders-esp-hack': 'esp-hack',
		'arc-raiders-unlock-all': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore missing dirs
		}
	}
}

async function renameImages() {
	const imagesDir = path.join(ROOT, 'public', 'images');
	let files;
	try {
		files = await readdir(imagesDir);
	} catch {
		return;
	}
	for (const file of files) {
		if (!file.includes('tarkov')) continue;
		const newName = file.replace(/tarkov/g, 'arc-raiders');
		if (newName !== file) {
			try {
				await rename(path.join(imagesDir, file), path.join(imagesDir, newName));
				console.log(`Renamed image: ${file} → ${newName}`);
			} catch (e) {
				console.warn(`Skip image ${file}: ${e.message}`);
			}
		}
	}
}

async function main() {
	console.log('Adapting Tarkov Cheats → Arc Raiders Cheats (arcraiderscheats.org)...\n');
	await renamePageDirs();
	await renameDataFile();
	await renameScripts();
	await transformTextFiles();
	await updatePageAstroFiles();
	await renameImages();
	console.log('\nDone. Next: update brand.ts theme, npm run generate:i18n, generate-blog-posts, sync:brand.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
