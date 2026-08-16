/**
 * Download Supabase ARC Raiders screenshots and write simple /images/*.webp paths.
 * Skips hero assets (arc-raiders-cheats-hero*).
 */
import { mkdir, writeFile, unlink, readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const BASE =
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/arcraiders%20new/arc/';

const SCREENSHOTS = [
	'Screenshot%202026-08-15%20171736.png',
	'Screenshot%202026-08-15%20171754.png',
	'Screenshot%202026-08-15%20171803.png',
	'Screenshot%202026-08-15%20171936.png',
	'Screenshot%202026-08-15%20171946.png',
	'Screenshot%202026-08-15%20171956.png',
	'Screenshot%202026-08-15%20172015.png',
	'Screenshot%202026-08-15%20172053.png',
	'Screenshot%202026-08-15%20172207.png',
	'Screenshot%202026-08-15%20172223.png',
	'Screenshot%202026-08-15%20172232.png',
	'Screenshot%202026-08-15%20172246.png',
	'Screenshot%202026-08-15%20172259.png',
	'Screenshot%202026-08-15%20172308.png',
	'Screenshot%202026-08-15%20172454.png',
	'Screenshot%202026-08-15%20172504.png',
	'Screenshot%202026-08-15%20172515.png',
	'Screenshot%202026-08-15%20172531.png',
	'Screenshot%202026-08-15%20172546.png',
];

/** Existing simple site paths — hero excluded. */
const TARGETS = [
	'arc-raiders-cheats-esp',
	'arc-raiders-cheats-wallhack',
	'arc-raiders-cheats-aimbot',
	'arc-raiders-cheats-aimbot-view',
	'arc-raiders-cheats-radar',
	'arc-raiders-cheats-raid',
	'arc-raiders-cheats-combat',
	'arc-raiders-aimbot-skeleton',
	'arc-raiders-aimbot-sniper',
	'arc-raiders-esp-player-tags',
	'arc-raiders-esp-radar',
	'arc-raiders-screenshot-01',
	'arc-raiders-screenshot-02',
	'arc-raiders-screenshot-03',
	'arc-raiders-screenshot-04',
	'arc-raiders-screenshot-05',
	'arc-raiders-screenshot-06',
	'arc-raiders-screenshot-07',
	'arc-raiders-screenshot-08',
];

const CONTENT_WIDTHS = [480, 960];
const imagesDir = path.resolve('public/images');
const tmpDir = path.resolve('public/images/.import-tmp');

async function download(name) {
	const url = BASE + name;
	const res = await fetch(url);
	if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
	return Buffer.from(await res.arrayBuffer());
}

async function writeWebpVariants(baseName, inputBuffer) {
	const mainPath = path.join(imagesDir, `${baseName}.webp`);
	const mainBuffer = await sharp(inputBuffer)
		.webp({ quality: 82, effort: 6 })
		.toBuffer();
	await writeFile(mainPath, mainBuffer);
	console.log(`Wrote ${baseName}.webp (${mainBuffer.length} bytes)`);

	const meta = await sharp(mainBuffer).metadata();
	for (const width of CONTENT_WIDTHS) {
		if (meta.width && width >= meta.width) continue;
		const variant = `${baseName}-${width}w.webp`;
		const variantBuffer = await sharp(mainBuffer)
			.resize({ width, withoutEnlargement: true })
			.webp({ quality: 78, effort: 6 })
			.toBuffer();
		await writeFile(path.join(imagesDir, variant), variantBuffer);
		console.log(`  → ${variant}`);
	}
}

async function removeOldVariants(baseName) {
	const files = await readdir(imagesDir);
	for (const file of files) {
		if (file.startsWith(baseName) && file.endsWith('.webp') && file !== `${baseName}.webp`) {
			if (/-\d+w\.webp$/i.test(file)) {
				await unlink(path.join(imagesDir, file)).catch(() => {});
			}
		}
	}
}

await mkdir(tmpDir, { recursive: true });

const count = Math.min(SCREENSHOTS.length, TARGETS.length);
console.log(`Importing ${count} screenshots…`);

for (let i = 0; i < count; i += 1) {
	const raw = await download(SCREENSHOTS[i]);
	const tmpPng = path.join(tmpDir, `${TARGETS[i]}.png`);
	await writeFile(tmpPng, raw);
	await removeOldVariants(TARGETS[i]);
	await writeWebpVariants(TARGETS[i], raw);
}

console.log('Done.');
