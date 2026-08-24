#!/usr/bin/env node
/**
 * Generates src/data/external-articles/articles.generated.ts
 * Isolated game-specific guide pages — NOT part of blog discovery.
 * Run: node scripts/generate-external-articles.mjs
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'src', 'data', 'external-articles', 'articles.generated.ts');

const ANCHOR_TEXTS = [
	'this resource',
	'more game information',
	'additional guides',
	'related resources',
	'further reading',
	'more game updates and guides',
	'extra game guides',
	'additional game resources',
];

/** @typedef {{ url: string, game: string, topic: string, category: string }} SourceEntry */

/** @type {SourceEntry[]} */
const SOURCES = [
	{ url: 'https://arcraiderscheat.net/', game: 'ARC Raiders', topic: 'extraction survival', category: 'Extraction' },
	{ url: 'https://genshincheats.net/', game: 'Genshin Impact', topic: 'elemental team building', category: 'RPG' },
	{ url: 'https://dbdcheats.net/', game: 'Dead by Daylight', topic: 'killer chase pressure', category: 'Horror' },
	{ url: 'https://tarkovcheats.net/', game: 'Escape from Tarkov', topic: 'raid economy', category: 'Extraction' },
	{ url: 'https://unturnedcheats.net/', game: 'Unturned', topic: 'survival base building', category: 'Survival' },
	{ url: 'https://unturnedcheats.com/', game: 'Unturned', topic: 'PvP server tactics', category: 'Survival' },
	{ url: 'https://warthundercheats.com/', game: 'War Thunder', topic: 'ground vehicle armor', category: 'Vehicles' },
	{ url: 'https://fortniteaimbot.com/', game: 'Fortnite', topic: 'build fight mechanics', category: 'Battle Royale' },
	{ url: 'https://marathoncheats.org/', game: 'Marathon', topic: 'PvP runner loadouts', category: 'FPS' },
	{ url: 'https://battlefieldcheats.org/', game: 'Battlefield', topic: 'large-scale map control', category: 'FPS' },
	{ url: 'https://lolcheats.org/', game: 'League of Legends', topic: 'lane priority', category: 'MOBA' },
	{ url: 'https://warzonecheats.org/', game: 'Call of Duty Warzone', topic: 'loadout meta', category: 'Battle Royale' },
	{ url: 'https://valocheats.com/', game: 'Valorant', topic: 'agent utility combos', category: 'Tactical FPS' },
	{ url: 'https://grayzonecheats.com/', game: 'Gray Zone Warfare', topic: 'tactical insertion', category: 'Tactical FPS' },
	{ url: 'https://arcraiderscheats.org/', game: 'ARC Raiders', topic: 'loot route planning', category: 'Extraction' },
	{ url: 'https://tarkovcheats.org/', game: 'Escape from Tarkov', topic: 'scav run profit', category: 'Extraction' },
	{ url: 'https://overwatchhacks.com/', game: 'Overwatch', topic: 'team composition', category: 'Hero Shooter' },
	{ url: 'https://dbdcheats.org/', game: 'Dead by Daylight', topic: 'survivor perk synergy', category: 'Horror' },
	{ url: 'https://theislehacks.org/', game: 'The Isle', topic: 'dinosaur growth paths', category: 'Survival' },
	{ url: 'https://islecheats.net/', game: 'The Isle', topic: 'herbivore herd play', category: 'Survival' },
	{ url: 'https://warthunderhacks.com/', game: 'War Thunder', topic: 'air combat energy', category: 'Vehicles' },
	{ url: 'https://marathoncheats.cc/', game: 'Marathon', topic: 'map rotation strategy', category: 'FPS' },
	{ url: 'https://besttarkovcheats.com/', game: 'Escape from Tarkov', topic: 'quest progression', category: 'Extraction' },
	{ url: 'https://thefinalscheats.org/', game: 'The Finals', topic: 'destructible arena play', category: 'FPS' },
	{ url: 'https://calibercheats.com/', game: 'Caliber', topic: 'operator role synergy', category: 'Tactical FPS' },
	{ url: 'https://codcheats.net/', game: 'Call of Duty', topic: 'multiplayer map flow', category: 'FPS' },
	{ url: 'https://huntcheats.com/', game: 'Hunt: Showdown', topic: 'bounty tracking', category: 'Extraction' },
	{ url: 'https://lolcheat.net/', game: 'League of Legends', topic: 'jungle pathing', category: 'MOBA' },
	{ url: 'https://marathonhacks.net/', game: 'Marathon', topic: 'movement tech', category: 'FPS' },
	{ url: 'https://mecchahacks.com/', game: 'Mecha BREAK', topic: 'mech loadout tuning', category: 'Mech' },
	{ url: 'https://palworldhack.com/', game: 'Palworld', topic: 'pal team composition', category: 'Survival' },
	{ url: 'https://tarkovhack.net/', game: 'Escape from Tarkov', topic: 'armor class breakdown', category: 'Extraction' },
	{ url: 'https://warthundercheats.net/', game: 'War Thunder', topic: 'nation lineup building', category: 'Vehicles' },
	{ url: 'https://palworldhacks.com/', game: 'Palworld', topic: 'base automation', category: 'Survival' },
	{ url: 'https://squadhacks.com/', game: 'Squad', topic: 'squad leadership comms', category: 'Tactical FPS' },
	{ url: 'https://eftcheats.net/', game: 'Escape from Tarkov', topic: 'hideout upgrades', category: 'Extraction' },
	{ url: 'https://marathonhack.net/', game: 'Marathon', topic: 'objective control', category: 'FPS' },
	{ url: 'https://abicheats.com/', game: 'Arena Breakout Infinite', topic: 'gear value assessment', category: 'Extraction' },
	{ url: 'https://bodycamcheats.com/', game: 'Bodycam', topic: 'realistic gunplay', category: 'FPS' },
	{ url: 'https://grayzonehacks.com/', game: 'Gray Zone Warfare', topic: 'squad overwatch', category: 'Tactical FPS' },
	{ url: 'https://lolcheats.net/', game: 'League of Legends', topic: 'vision control', category: 'MOBA' },
	{ url: 'https://oncehumanhacks.com/', game: 'Once Human', topic: 'deviant capture', category: 'Survival' },
	{ url: 'https://palworldhacks.net/', game: 'Palworld', topic: 'breeding optimization', category: 'Survival' },
	{ url: 'https://reforgercheats.com/', game: 'Arma Reforger', topic: 'combined arms ops', category: 'Milsim' },
	{ url: 'https://arcraidershack.com/', game: 'ARC Raiders', topic: 'squad extraction timing', category: 'Extraction' },
	{ url: 'https://backroomscheats.com/', game: 'Backrooms', topic: 'level navigation', category: 'Horror' },
	{ url: 'https://marvelrivalshacks.net/', game: 'Marvel Rivals', topic: 'hero counter picks', category: 'Hero Shooter' },
	{ url: 'https://mecchachameleonhacks.com/', game: 'Mecha BREAK', topic: 'chassis mobility', category: 'Mech' },
	{ url: 'https://mecchachameleonhacks.net/', game: 'Mecha BREAK', topic: 'weapon heat management', category: 'Mech' },
	{ url: 'https://overwatch2cheats.com/', game: 'Overwatch 2', topic: 'role queue strategy', category: 'Hero Shooter' },
	{ url: 'https://sandraiderscheats.com/', game: 'Sand Raiders', topic: 'desert raid routes', category: 'Extraction' },
	{ url: 'https://rivalscheats.net/', game: 'Marvel Rivals', topic: 'ultimate economy', category: 'Hero Shooter' },
	{ url: 'https://squadcheat.com/', game: 'Squad', topic: 'FOB placement', category: 'Tactical FPS' },
	{ url: 'https://sandraidersofsophiecheats.net/', game: 'Sand Raiders of Sophie', topic: 'resource scavenging', category: 'Survival' },
	{ url: 'https://tarkovcheat.net/', game: 'Escape from Tarkov', topic: 'ammo type selection', category: 'Extraction' },
	{ url: 'https://thefinalscheats.net/', game: 'The Finals', topic: 'cashout defense', category: 'FPS' },
	{ url: 'https://theislehacks.net/', game: 'The Isle', topic: 'carnivore ambush spots', category: 'Survival' },
	{ url: 'https://valoranthack.net/', game: 'Valorant', topic: 'crosshair placement', category: 'Tactical FPS' },
	{ url: 'https://warzonehacks.net/', game: 'Call of Duty Warzone', topic: 'rotation timing', category: 'Battle Royale' },
];

function normalizeUrl(url) {
	return url.replace(/\/+$/, '') + '/';
}

function slugFromUrl(url) {
	const host = new URL(url).hostname.replace(/^www\./, '');
	// Include TLD so unturnedcheats.net and unturnedcheats.com get distinct slugs
	return host
		.replace(/\./g, '-')
		.replace(/[^a-z0-9-]+/gi, '-')
		.replace(/-+/g, '-')
		.replace(/^-|-$/g, '')
		.toLowerCase();
}

function idFromUrl(url) {
	return slugFromUrl(url);
}

function hashIndex(str, max) {
	let h = 0;
	for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
	return Math.abs(h) % max;
}

/** @param {SourceEntry} entry @param {number} idx */
function buildArticle(entry, idx) {
	const { url, game, topic, category } = entry;
	const slug = slugFromUrl(url);
	const id = idFromUrl(url);
	const anchorText = ANCHOR_TEXTS[idx % ANCHOR_TEXTS.length];
	const published = `2026-0${1 + (idx % 8)}-${String(10 + (idx % 18)).padStart(2, '0')}`;
	const updated = '2026-08-20';

	const gameShort = game.trim();
	const titleBase = `${gameShort} ${capitalize(topic)} Guide`;
	const title = titleBase.length > 52 ? `${gameShort} ${shortTopic(topic)} Guide` : titleBase;

	return {
		id,
		externalUrl: normalizeUrl(url),
		game: gameShort,
		published,
		updated,
		category,
		slug,
		title,
		metaDescription: buildMeta(gameShort, topic),
		h1: capitalize(topic) + ` in ${gameShort}`,
		intro: buildIntro(gameShort, topic),
		keywords: buildKeywords(gameShort, topic),
		imageAlt: `${gameShort} gameplay — ${topic} guide`,
		sections: buildSections(gameShort, topic, category, idx),
		closingAnchorText: anchorText,
	};
}

function capitalize(s) {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

function shortTopic(topic) {
	const words = topic.split(' ');
	return words.slice(0, 2).map(capitalize).join(' ');
}

function buildMeta(game, topic) {
	const base = `Learn ${topic} in ${game}. Practical tips for Windows PC players — loadouts, map awareness, and smarter decision-making.`;
	return base.length > 160 ? base.slice(0, 157) + '…' : base;
}

function buildIntro(game, topic) {
	return `Whether you are new to ${game} or pushing for a higher rank, understanding ${topic} changes how every match plays out. This guide breaks down the habits that separate clean wins from frustrating losses.`;
}

function buildKeywords(game, topic) {
	const g = game.toLowerCase();
	const t = topic.replace(/\s+/g, ' ');
	return [g, `${g} ${t}`, `${g} guide`, `${g} tips`, t];
}

/** @param {string} game @param {string} topic @param {string} category @param {number} idx */
function buildSections(game, topic, category, idx) {
	const variant = idx % 4;
	const sections = [];

	sections.push({
		h2: `Why ${topic} matters in ${game}`,
		paragraphs: [
			`${game} rewards players who read the match state early. ${capitalize(topic)} is not a single trick — it is a chain of small decisions that compound across rounds, lives, or extractions.`,
			variant === 0
				? `Most losses in ${category.toLowerCase()} titles come from rushing without a plan. Slow down at the start of each session and ask what your win condition actually is before you commit gear or credits.`
				: variant === 1
					? `Top players in ${game} treat every engagement as a trade. If you win the fight but lose your objective window, the trade was bad. ${capitalize(topic)} keeps those trades aligned with your actual goal.`
					: variant === 2
						? `Patch cycles shift the meta, but fundamentals around ${topic} stay relevant. Build habits that survive balance changes instead of copying one streamer's loadout without context.`
						: `New players often chase highlight plays. Consistent ${topic} wins more games than one flashy clip — especially when stakes include gear, rank, or squad coordination.`,
		],
	});

	sections.push({
		h2: `Core habits for better ${topic}`,
		paragraphs: [
			getHabitBlock(game, topic, variant),
			getHabitBlock2(game, topic, (variant + 1) % 4),
		],
	});

	sections.push({
		h2: `Common mistakes to avoid`,
		paragraphs: [
			getMistakeBlock(game, topic, variant),
			`Review one VOD or replay each week with ${topic} as the only lens. Note three moments where a different call would have saved time, health, or resources. That review habit beats grinding blind for ten more hours.`,
		],
	});

	if (idx % 3 !== 2) {
		sections.push({
			h2: `Putting it together in your next session`,
			paragraphs: [
				`Before you queue, write a one-line goal tied to ${topic}. After the session, score yourself honestly: did the goal guide your decisions, or did autopilot take over?`,
				`${game} gets easier when you stack small improvements. Pick one drill — map timing, resource routing, or comms clarity — and run it for five sessions before you add another layer.`,
			],
		});
	}

	return sections;
}

function getHabitBlock(game, topic, variant) {
	const blocks = [
		`Map the first two minutes of every ${game} round before you chase fights. Where do players usually path? Where does ${topic} create the biggest advantage? Answering those questions early frees you to play on your terms.`,
		`Track one stat or outcome related to ${topic} — extractions secured, objectives captured, or farm per minute. Numbers keep you honest when adrenaline makes every play feel correct.`,
		`Pair ${topic} with clear comms if you play in a group. Call the plan once, confirm roles, and stick to it for at least one full attempt before you improvise.`,
		`Warm up with a low-stakes mode or practice tool before you risk ranked gear. Muscle memory for ${topic} needs reps without the pressure of a full loss.`,
	];
	return blocks[variant];
}

function getHabitBlock2(game, topic, variant) {
	const blocks = [
		`Inventory and loadout discipline support ${topic} more than people admit. Carry what the plan needs, not what looks cool in the menu. Dead weight slows rotations and punishes bad fights.`,
		`Learn when to disengage. ${game} often punishes ego pushes harder than cautious resets. A clean reset preserves your ability to execute ${topic} on the next window.`,
		`Study patch notes when the game updates. Even small tuning changes can shift which routes or tools best support ${topic}.`,
		`Use audio and UI cues the game already gives you. Many players mute useful feedback while chasing overlay clutter. Clean information beats more screen noise.`,
	];
	return blocks[variant];
}

function getMistakeBlock(game, topic, variant) {
	const blocks = [
		`Copying a pro setup without matching their ${topic} habits is the fastest way to feel stuck. Import ideas, then adapt them to your ping, squad, and play hours.`,
		`Switching strategies every death prevents pattern recognition. Commit to one approach for a full session so you can see whether ${topic} or execution was the weak link.`,
		`Ignoring economy — credits, ammo, heals, or lives — turns wins into bankrupt streaks. ${capitalize(topic)} includes knowing when you are too poor to force the play.`,
		`Playing tired or tilted erases good ${topic} faster than any balance patch. Short breaks after two bad losses protect both rank and gear.`,
	];
	return blocks[variant];
}

// Deduplicate by URL
const seen = new Set();
const uniqueSources = SOURCES.filter((s) => {
	const norm = normalizeUrl(s.url);
	if (seen.has(norm)) return false;
	seen.add(norm);
	return true;
});

const articles = uniqueSources.map((entry, idx) => buildArticle(entry, idx));

const file = `// AUTO-GENERATED by scripts/generate-external-articles.mjs — do not edit by hand
import type { ExternalArticleDefinition } from './types';

export const externalArticles: ExternalArticleDefinition[] = ${JSON.stringify(articles, null, '\t').replace(/"([^"]+)":/g, '$1:')};
`;

writeFileSync(OUT, file, 'utf8');
console.log(`Wrote ${articles.length} external articles to ${OUT}`);
