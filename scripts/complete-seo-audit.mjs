#!/usr/bin/env node
/**
 * Completes escape-from-arc-raiders-cheats SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'arc-raiders-cheats', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'arc-raiders-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'arc-raiders-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'arc-raiders-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-arc-raiders-cheats', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'arc-raiders-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'arc-raiders-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'arc-raiders-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/arc-raiders-arc-raiders/g, 'arc-raiders'],
	[/eac-bypass-arc-raiders/g, 'eac-bypass'],
	[/ARC Raiders/g, 'ARC Raiders'],
	[/ARC Raiders/g, 'ARC Raiders'],
	[/Call of Duty/g, 'ARC Raiders'],
	[/Arc Raiders Wallhack/g, 'ARC Raiders Wallhack'],
	[/Arc Raiders Radar Hack/g, 'ARC Raiders Radar Hack'],
	[/Arc Raiders Cheat Features/g, 'ARC Raiders Cheat Features'],
	[/Arc Raiders Cheat Pricing/g, 'ARC Raiders Cheat Pricing'],
	[/Arc Raiders Cheat Setup/g, 'ARC Raiders Cheat Setup'],
	[/Arc Raiders Cheat Status/g, 'ARC Raiders Cheat Status'],
	[/Arc Raiders Cheat Support/g, 'ARC Raiders Cheat Support'],
	[/Arc Raiders squad fight/g, 'ARC Raiders squad fight'],
	[/Arc Raiders squad builder/g, 'ARC Raiders loadout builder'],
	[/Arc Raiders store header/g, 'ARC Raiders header'],
	[/Arc Raiders wasteland combat/g, 'ARC Raiders battle royale combat'],
	[/Arc Raiders loadout builder/g, 'ARC Raiders loadout builder'],
	[/Arc Raiders pricing/g, 'ARC Raiders pricing'],
	[/Arc Raiders Easy Anti-Cheat/g, 'ARC Raiders Easy Anti-Cheat'],
	[/on Arc Raiders/g, 'on ARC Raiders'],
	[/for Arc Raiders/g, 'for ARC Raiders'],
	[/Arc Raiders guides/g, 'ARC Raiders guides'],
	[/Arc Raiders guide/g, 'ARC Raiders guide'],
	[/Arc Raiders hileleri/g, 'ARC Raiders hileleri'],
	[/Arc Raiders hile/g, 'ARC Raiders hile'],
	[/Arc Raiders hileleri/g, 'ARC Raiders hileleri'],
	[/cheatów Arc Raiders/g, 'cheatów ARC Raiders'],
	[/cheat Arc Raiders/g, 'cheat ARC Raiders'],
	[/cheats Arc Raiders/g, 'cheats ARC Raiders'],
	[/trucos Arc Raiders/g, 'trucos ARC Raiders'],
	[/triche Arc Raiders/g, 'triche ARC Raiders'],
	[/trucchi Arc Raiders/g, 'trucchi ARC Raiders'],
	[/Wallhack Arc Raiders/g, 'ARC Raiders Wallhack'],
	[/cheat Arc Raiders undetected/g, 'cheat ARC Raiders undetected'],
	[/cheats Arc Raiders undetected/g, 'cheats ARC Raiders undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/scav-run room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Verdansk and scav-run'],
	[/Verdansk, Urzikstan/g, 'Verdansk, scav-run'],
	[/raid and scav-run/g, 'raid and scav-run'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/battleye/gi, 'eac'],
	[/Easy Anti-Cheat/g, 'Easy Anti-Cheat'],
	[/escape-from-arc-raiders-cheats/g, 'escape-from-arc-raiders-cheats'],
	[/arc-raiders/g, 'arc-raiders'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for ARC Raiders'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after ARC Raiders anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy Arc Raiders Cheats')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/Arc Raiders guides/g, 'ARC Raiders guides');
	content = content.replace(/Arc Raiders guide/g, 'ARC Raiders guide');
	content = content.replace(/Arc Raiders hileleri/g, 'ARC Raiders hileleri');
	content = content.replace(/Arc Raiders hile/g, 'ARC Raiders hile');
	content = content.replace(/cheat Arc Raiders/g, 'cheat ARC Raiders');
	content = content.replace(/cheats Arc Raiders/g, 'cheats ARC Raiders');
	content = content.replace(/trucos Arc Raiders/g, 'trucos ARC Raiders');
	content = content.replace(/triche Arc Raiders/g, 'triche ARC Raiders');
	content = content.replace(/trucchi Arc Raiders/g, 'trucchi ARC Raiders');
	content = content.replace(/cheatów Arc Raiders/g, 'cheatów ARC Raiders');
	content = content.replace(/читов Arc Raiders/g, 'читов ARC Raiders');
	content = content.replace(/читів Arc Raiders/g, 'читів ARC Raiders');
	content = content.replace(/Arc Raidersチート/g, 'ARC Raidersチート');
	content = content.replace(/Arc Raiders 치트/g, 'ARC Raiders 치트');
	content = content.replace(/Arc Raiders作弊/g, 'ARC Raiders作弊');
	content = content.replace(/Arc Raiders rehberleri/g, 'ARC Raiders rehberleri');
	content = content.replace(/Arc Raiders gidsen/g, 'ARC Raiders gidsen');
	content = content.replace(/Arc Raiders průvodce/g, 'ARC Raiders průvodce');
	content = content.replace(/Arc Raiders guider/g, 'ARC Raiders guider');
	content = content.replace(/Arc Raiders related/g, 'ARC Raiders related');
	content = content.replace(/Arc Raiders ガイド/g, 'ARC Raiders ガイド');
	content = content.replace(/Arc Raiders 가이드/g, 'ARC Raiders 가이드');
	content = content.replace(/Arc Raiders指南/g, 'ARC Raiders指南');
	content = content.replace(/Arc Raiders गाइड/g, 'ARC Raiders गाइड');
	content = content.replace(/Arc Raiders panduan/g, 'ARC Raiders panduan');
	content = content.replace(/Arc Raiders คู่มือ/g, 'ARC Raiders คู่มือ');
	content = content.replace(/Arc Raiders hướng dẫn/g, 'ARC Raiders hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== Arc Raiders Cheats SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
