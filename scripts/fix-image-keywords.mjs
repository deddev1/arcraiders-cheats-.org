#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'arc raiders cheats', espWallhack: 'arc raiders cheats wallhack', aimbotCombat: 'arc raiders cheats aimbot', squadFight: 'arc raiders cheats', playerEsp: 'arc raiders cheats esp', headerArt: 'arc raiders cheats aimbot', cheatsPackage: 'arc raiders cheats radar', rebootFight: 'arc raiders cheats aimbot', battleRoyale: 'arc raiders cheats', battleRoyaleIsland: 'arc raiders cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Arc Raiders ESP player tags hack'", "imageAlt: 'arc raiders cheats esp'"],
	["imageAlt: 'Arc Raiders ESP radar hack'", "imageAlt: 'arc raiders cheats radar'"],
	["imageAlt: 'Arc Raiders aimbot sniper kill'", "imageAlt: 'arc raiders cheats aimbot'"],
	["imageAlt: 'Arc Raiders aimbot skeleton targeting'", "imageAlt: 'arc raiders cheats aimbot'"],
	["imageAlt: 'Arc Raiders cheats ADS combat'", "imageAlt: 'arc raiders cheats'"],
	["imageAlt: 'Arc Raiders cheats setup PC activation'", "imageAlt: 'arc raiders cheats'"],
	["imageAlt: 'Arc Raiders cheats updates Easy Anti-Cheat maintenance'", "imageAlt: 'arc raiders cheats'"],
	["imageAlt: 'Arc Raiders cheats FAQ ESP aimbot'", "imageAlt: 'arc raiders cheats'"],
	["imageAlt: 'Arc Raiders cheats support license help'", "imageAlt: 'arc raiders cheats'"],
	["imageAlt: 'Undetected arc raiders cheats ESP wallhack'", "imageAlt: 'undetected arc raiders cheats'"],
	["imageAlt: 'Arc Raiders wallhack skeleton ESP'", "imageAlt: 'arc raiders cheats wallhack'"],
	["imageAlt: 'Easy Anti-Cheat bypass arc-raiders ESP aimbot'", "imageAlt: 'arc raiders cheats battleye'"],
	["imageAlt: 'Arc Raiders cheats 2026 ESP aimbot'", "imageAlt: 'arc raiders cheats'"],
	["imageAlt: 'Arc Raiders cheats combat aimbot'", "imageAlt: 'arc raiders cheats'"],
	["imageAlt: 'Arc Raiders cheat download ESP aimbot'", "imageAlt: 'arc raiders cheats download'"],
	["imageAlt: 'Arc Raiders mod menu ESP aimbot'", "imageAlt: 'arc raiders cheats mod menu'"],
	["imageAlt: 'Arc Raiders soft aim aimbot settings'", "imageAlt: 'arc raiders cheats soft aim'"],
	["imageAlt: 'Best arc raiders cheats 2026 ESP'", "imageAlt: 'best arc raiders cheats'"],
	["imageAlt: 'Arc Raiders aimbot hack combat'", "imageAlt: 'arc raiders cheats aimbot'"],
	["imageAlt: 'Arc Raiders ESP hack wallhack'", "imageAlt: 'arc raiders cheats esp'"],
	["imageAlt: 'Arc Raiders unlock all ESP aimbot guide'", "imageAlt: 'arc raiders cheats'"],
	["imageAlt: 'Arc Raiders cheats privacy policy'", "imageAlt: 'arc raiders cheats'"],
	["imageAlt: 'Arc Raiders cheats refund policy'", "imageAlt: 'arc raiders cheats'"],
	["imageAlt: 'Arc Raiders cheats terms of use'", "imageAlt: 'arc raiders cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Arc Raiders ${meta.altKeyword}`")
	.join("imageAlt: 'arc raiders cheats'")
	.split("galleryTitle: `Arc Raiders Cheats ${topicName}`")
	.join("galleryTitle: 'arc raiders cheats'")
	.split("imageAlt: `Arc Raiders cheats ${kind} policy`")
	.join("imageAlt: 'arc raiders cheats'")
	.split("galleryTitle: `Arc Raiders Cheats ${kind} resources`")
	.join("galleryTitle: 'arc raiders cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
