#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const pairs = [
	["Activision's", "Embark Studios'"],
	['Activision\u2019', "Embark Studios'"],
	['Activision services', 'Embark Studios services'],
	['Activision service', 'Embark Studios service'],
	['Activision platform', 'Embark Studios platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'Embark Studios bans'],
	['Activision security', 'Easy Anti-Cheat security'],
	['Activision Status', 'ARC Raiders Support'],
	['Activision Arc Raiders', 'ARC Raiders'],
	['Activision Support', 'ARC Raiders Support'],
	['Activision', 'Embark Studios'],
	['EAC guide', 'Easy Anti-Cheat guide'],
	['undetected EAC notes', 'undetected Easy Anti-Cheat notes'],
	['status.epicgames.com', 'www.escapefromarc-raiders.com/support'],
	['www.epicgames.com/arc-raiders', 'www.escapefromarc-raiders.com'],
	['www.arc-raiders.com/competitive', 'www.escapefromarc-raiders.com'],
	['https://www.arc-raiders.com/', 'https://www.escapefromarc-raiders.com/'],
	['Arc Raiders.com', 'ARC Raiders'],
	['Arc Raiders Competitive', 'ARC Raiders'],
];

for (const f of files) {
	let c = readFileSync(f, 'utf8');
	const orig = c;
	for (const [a, b] of pairs) c = c.split(a).join(b);
	if (c !== orig) {
		writeFileSync(f, c);
		console.log('updated', f);
	} else {
		console.log('no change', f);
	}
}
