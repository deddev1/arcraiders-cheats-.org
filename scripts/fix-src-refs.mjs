#!/usr/bin/env node
/** Final pass: fix remaining Arc Raiders references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['arcRaidersImages', 'arcRaidersImages'],
	["from '../data/arc-raiders'", "from '../data/arc-raiders'"],
	["from './arc-raiders'", "from './arc-raiders'"],
	['/undetected-arc-raiders-cheats/', '/undetected-arc-raiders-cheats/'],
	['/arc-raiders-wallhack/', '/arc-raiders-wallhack/'],
	['/arc-raiders-radar-hack/', '/arc-raiders-radar-hack/'],
	['/eac-bypass/', '/eac-bypass/'],
	['/arc-raiders-cheats-2026/', '/arc-raiders-cheats-2026/'],
	['/arc-raiders-aimbot/', '/arc-raiders-aimbot/'],
	['/arc-raiders-esp/', '/arc-raiders-esp/'],
	['/arc-raiders-cheats/', '/arc-raiders-esp/'],
	['Arc Raiders Cheats', 'Arc Raiders Cheats'],
	['Arc Raiders cheats', 'Arc Raiders cheats'],
	['Arc Raiders wallhack', 'ARC Raiders wallhack'],
	['Arc Raiders radar', 'ARC Raiders radar'],
	['Arc Raiders Aimbot', 'ARC Raiders Aimbot'],
	['Arc Raiders ESP', 'ARC Raiders ESP'],
	['ARC Raiders', 'ARC Raiders'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['arcraiderscheats.org', 'arcraiderscheats.org'],
	['operatorEsp', 'playerEsp'],
	['extractFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}
