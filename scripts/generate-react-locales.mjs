#!/usr/bin/env node
/**
 * Generates public/locales/{locale}/translation.json for React i18n.
 * Merges ui-strings (22 locales) into the English template.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { LOCALES } from './i18n-data/constants.mjs';
import { allUiStrings } from './i18n-data/ui-strings.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const EN_TEMPLATE = path.join(ROOT, 'public', 'locales', 'en', 'translation.json');
const LOCALES_DIR = path.join(ROOT, 'public', 'locales');

/** Deep-merge source into target (mutates target). */
function deepMerge(target, source) {
	for (const [key, value] of Object.entries(source)) {
		if (
			value &&
			typeof value === 'object' &&
			!Array.isArray(value) &&
			target[key] &&
			typeof target[key] === 'object' &&
			!Array.isArray(target[key])
		) {
			deepMerge(target[key], value);
		} else {
			target[key] = value;
		}
	}
	return target;
}

async function main() {
	const enRaw = await readFile(EN_TEMPLATE, 'utf8');
	const enTemplate = JSON.parse(enRaw);

	for (const locale of LOCALES) {
		const ui = allUiStrings[locale];
		if (!ui) throw new Error(`Missing UI strings for locale: ${locale}`);

		const merged = structuredClone(enTemplate);
		deepMerge(merged, ui);

		if (locale !== 'en') {
			// Preserve locale-specific hero title when ui-strings omit it.
			if (!ui.hero?.title && merged.hero?.title === enTemplate.hero.title) {
				merged.hero.title = merged.product?.title ?? merged.hero.title;
			}
			merged.hero.buyNow = ui.hero?.buyNow ?? merged.hero.buyNow;
			merged.cta = merged.cta ?? {};
			merged.cta.buy = ui.hero?.buyNow ?? merged.cta.buy;
		}

		const outDir = path.join(LOCALES_DIR, locale);
		await mkdir(outDir, { recursive: true });
		const outFile = path.join(outDir, 'translation.json');
		await writeFile(outFile, `${JSON.stringify(merged, null, 2)}\n`, 'utf8');
		console.log(`Wrote ${path.relative(ROOT, outFile)}`);
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
