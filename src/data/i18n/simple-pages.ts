import type { PageId } from './content.generated';
import { fillBrandTokens, seoDescription } from '../brand';
import { brandCopy, brandSeo, seoPageTitle } from '../site-core';

/** External game source + same-site topic guides. */
const EXT = {
	game: '<a href="https://www.arcraiders.com/" target="_blank" rel="noopener noreferrer">ARC Raiders</a>',
};
const TOPIC = {
	status: '<a href="/updates/">Status page</a>',
	esp: '<a href="/arc-raiders-esp/">ESP guide</a>',
	aimbot: '<a href="/arc-raiders-aimbot/">Aimbot guide</a>',
	undetected: '<a href="/undetected-arc-raiders-cheats/">undetected guide</a>',
	patchNotes: '<a href="/blog/arc-raiders-patch-notes-guide/">patch notes guide</a>',
	buyersGuide: '<a href="/blog/arc-raiders-cheats-buyers-guide/">buyers guide</a>',
	features: '<a href="/features/">Features</a>',
	setup: '<a href="/setup/">Setup guide</a>',
};

export type SimpleSection = {
	h2: string;
	paragraphs: string[];
	list?: string[];
};

export type SimplePageCopy = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
	galleryTitle: string;
	sections: SimpleSection[];
};

function page(copy: SimplePageCopy): SimplePageCopy {
	return {
		...copy,
		title: seoPageTitle(copy.title),
		description: seoDescription(copy.description),
		intro: fillBrandTokens(copy.intro),
		sections: copy.sections.map((section) => ({
			...section,
			h2: fillBrandTokens(section.h2),
			paragraphs: section.paragraphs.map(fillBrandTokens),
			list: section.list?.map(fillBrandTokens),
		})),
	};
}

/** Short, plain-English overrides for key EN nav pages — meta from brand.seo */
export const simplePageCopy: Partial<Record<PageId, SimplePageCopy>> = {
	features: page({
		title: brandSeo.featuresTitle,
		description: brandSeo.featuresDescription,
		h1: 'Features',
		intro: brandCopy.featuresIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View store',
		ctaSecondaryHref: '/pricing/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'ESP & wallhack',
				paragraphs: [
					'See Raiders, ARC drones, bosses, and loot through walls with distance readouts.',
					'Use filters so the overlay stays clear in underground zones, industrial zones, and extraction-run chaos. Map and loot rules evolve with {game} seasons — see the <a href="/arc-raiders-esp/">ESP guide</a> for category details.',
				],
				list: ['Player boxes & distance', 'Loot and extract markers', 'Boss and ARC drone filters'],
			},
			{
				h2: 'Aimbot & soft aim',
				paragraphs: [
					'Aim help you can tune to feel natural.',
					'Set FOV, smoothness, and bone priority per weapon before you raid. Weapon balance shifts after patches on ' + EXT.game + ' — revisit profiles on the <a href="/arc-raiders-aimbot/">Aimbot page</a>.',
				],
				list: ['Smooth aim strength', 'FOV and bone priority', 'Hotkeys mid-match'],
			},
			{
				h2: 'Radar',
				paragraphs: [
					'A simple 2D radar for threats outside your view.',
					'Spot flanks near extracts without filling the whole screen. Pair with <a href="/arc-raiders-radar-hack/">radar overlay</a> docs and <a href="/arc-raiders-esp/">ESP</a> for full awareness.',
				],
				list: ['Nearby enemy cues', 'Adjustable range', 'Works in Raider & extraction'],
			},
			{
				h2: 'Updates & support',
				paragraphs: [
					'We rebuild after big {game} or {antiCheat} patches. Official seasons and client updates come from ' + EXT.game + '.',
					'Check Status before you play after a patch day — cross-check our ' + TOPIC.status + ' and ' + TOPIC.undetected + '.',
				],
				list: ['Status on the Status page', 'Setup guide included', 'Email support with your order ID'],
			},
		],
	}),
	pricing: page({
		title: brandSeo.storeTitle,
		description: brandSeo.storeDescription,
		h1: 'Store',
		intro: brandCopy.storeIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'Full package access for Windows 10 / 11.',
					'Same ESP, soft aim, and radar on monthly and lifetime plans.',
				],
				list: ['ESP, aimbot, and radar', 'Patch rebuilds while active', 'Digital delivery after checkout'],
			},
			{
				h2: 'Plans',
				paragraphs: [
					'Pick monthly to try first, or lifetime for one payment.',
					'Both plans unlock the same features after checkout.',
				],
				list: ['Monthly — 30 days', 'Lifetime — one-time', 'Instant license by email'],
			},
			{
				h2: 'Before you buy',
				paragraphs: [
					'Read the refund policy if you need it. Contact support with your order ID for help.',
					'{game} seasons and wipe timing are announced on ' + EXT.game + '. We rebuild ESP, radar, and aimbot after patches — check ' + TOPIC.status + ' before patch-day queues.',
				],
				list: [
					'<a href="/refund-policy/">Refund policy</a>',
					'<a href="/faq/">FAQ</a>',
					'<a href="/support/">Support</a>',
					'<a href="/blog/arc-raiders-cheats-buyers-guide/">Buyers guide</a>',
				],
			},
		],
	}),
	updates: page({
		title: brandSeo.statusTitle,
		description: brandSeo.statusDescription,
		h1: 'Status',
		intro: brandCopy.statusIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Arc Raiders Cheats overview',
		ctaSecondaryHref: '/arc-raiders-cheats/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Current status',
				paragraphs: [
					'As of 13 Aug 2026 the package is online for ARC Raiders on Windows PC. We post a new note here when a game or {antiCheat} patch needs a rebuild.',
					'If Status is green, you can raid. If we are rebuilding, wait for the next note. On patch mornings, also check ' + EXT.game + ' for Embark Studios service health before you assume a loader issue.',
				],
				list: [
					'Check this page before every raid after a patch',
					'Monthly and lifetime licenses get rebuilds while active',
					'No cheat stays undetected forever — status first, then play',
				],
			},
			{
				h2: 'After a patch',
				paragraphs: [
					'Wait for our rebuild note, then launch. Do not play on an old build after a big update. Read our ' + TOPIC.patchNotes + ', then follow ' + TOPIC.undetected + '.',
				],
				list: ['Read the latest status note', 'Follow <a href="/setup/">setup</a> if something fails', 'Email support with your order ID'],
			},
			{
				h2: 'Important',
				paragraphs: ['No cheat is 100% safe forever. Stay updated and use safe settings. Official game updates come from ' + EXT.game + '.'],
				list: ['Status first, then play', '<a href="/support/">Support</a> for license help', '<a href="/undetected-arc-raiders-cheats/">Undetected guide</a>'],
			},
		],
	}),
	hacks: page({
		title: brandSeo.previewTitle,
		description: brandSeo.previewDescription,
		h1: 'Arc Raiders Cheats',
		intro: brandCopy.previewIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View features',
		ctaSecondaryHref: '/features/',
		galleryTitle: 'In-raid look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'One license for ARC Raiders on Windows PC — built for surface raids and extraction runs. Official seasons and map updates are published on ' + EXT.game + '.',
				],
				list: [
					'ESP / wallhack with distance',
					'Soft aim & aimbot profiles',
					'2D radar for flanks',
					'Easy Anti-Cheat rebuilds after patches',
				],
			},
			{
				h2: 'Built for Arc Raiders raids',
				paragraphs: [
					'Read Raiders and ARC drones before you push, mark loot worth the risk, and stay aware near extracts. Tune soft aim per weapon class for underground zones, industrial zones, and long-range maps.',
				],
				list: [
					'<a href="/arc-raiders-esp/">ESP guide</a>',
					'<a href="/arc-raiders-aimbot/">Aimbot controls</a>',
					'<a href="/arc-raiders-radar-hack/">Radar overlay</a>',
					'<a href="/features/">All features</a>',
					'<a href="/updates/">Live status</a>',
				],
			},
			{
				h2: 'How to start',
				paragraphs: ['Buy a plan, get your license by email, then follow setup. Check Status after every major patch.'],
				list: [
					'<a href="/pricing/">Open store</a>',
					'<a href="/setup/">Setup guide</a>',
					'<a href="/updates/">Check status</a>',
				],
			},
		],
	}),
	'arc-raiders-esp': page({
		title: 'Arc Raiders ESP | {brand}',
		description:
			'Arc Raiders ESP and wallhack for ARC Raiders on Windows PC — player boxes, distance, loot filters, and clear overlays in raids.',
		h1: 'ESP',
		intro: 'See players and loot through walls during Arc Raiders raids. Part of the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Arc Raiders Cheats overview',
		ctaSecondaryHref: '/arc-raiders-cheats/',
		galleryTitle: 'ESP in raid',
		sections: [
			{
				h2: 'What ESP shows',
				paragraphs: [
					'Boxes, distance, and filters for Raiders, ARC drones, bosses, and loot.',
					'When POIs or loot rules shift after a ' + EXT.game + ' season update, ESP categories stay useful because they track players and containers — not a single static landmark.',
				],
				list: ['Player ESP', 'Loot markers', 'Boss and ARC drone filters'],
			},
			{
				h2: 'When to use it',
				paragraphs: [
					'Clear underground zones, industrial zones, and scav runs without flooding the screen.',
					'Pair with the <a href="/arc-raiders-radar-hack/">radar overlay</a> for flanks outside your FOV and the <a href="/arc-raiders-aimbot/">Aimbot page</a> when you push.',
				],
				list: ['Tune opacity', 'Filter noise', 'Pair with radar'],
			},
			{
				h2: 'Next steps',
				paragraphs: [
					'ESP is included with aimbot and radar in one plan. Check our ' + TOPIC.status + ' after major patches and read the ' + TOPIC.esp + '.',
				],
				list: [
					'<a href="/arc-raiders-cheats/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	'arc-raiders-aimbot': page({
		title: 'Arc Raiders Aimbot | {brand}',
		description:
			'Arc Raiders aimbot and soft aim for ARC Raiders on Windows PC — FOV, smoothness, and bone priority you can tune per weapon.',
		h1: 'Aimbot',
		intro: 'Soft aim and aim assist you can tune for Arc Raiders. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Arc Raiders Cheats overview',
		ctaSecondaryHref: '/arc-raiders-cheats/',
		galleryTitle: 'Aimbot view',
		sections: [
			{
				h2: 'Controls',
				paragraphs: [
					'Set FOV, smoothness, and bone priority before you raid.',
					'Weapon balance and season rules change via ' + EXT.game + '. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches live TTK windows.',
				],
				list: ['Soft aim strength', 'Bone priority', 'Hotkeys mid-match'],
			},
			{
				h2: 'Play styles',
				paragraphs: [
					'Keep settings subtle for longer sessions. Raise strength only when you accept more risk.',
					'Aimbot ships alongside <a href="/arc-raiders-esp/">ESP wallhack</a> and <a href="/arc-raiders-radar-hack/">2D radar</a> in the same license.',
				],
				list: ['Legit soft aim', 'Per-weapon profiles', 'Works with ESP'],
			},
			{
				h2: 'Next steps',
				paragraphs: [
					'Aimbot ships with ESP and radar in one license. On patch days, confirm ' + TOPIC.status + ' before you tune profiles.',
				],
				list: [
					'<a href="/arc-raiders-cheats/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	radar: page({
		title: 'Arc Raiders Radar | {brand}',
		description:
			'Arc Raiders 2D radar for ARC Raiders on Windows PC — flank cues near extracts without filling the whole screen.',
		h1: 'Radar',
		intro: 'A simple 2D radar for threats outside your view. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Arc Raiders Cheats overview',
		ctaSecondaryHref: '/arc-raiders-cheats/',
		galleryTitle: 'Radar overlay',
		sections: [
			{
				h2: 'What it shows',
				paragraphs: [
					'Nearby enemy cues with adjustable range for Raider and extraction runs.',
					'Mode rules and seasonal changes come from ' + EXT.game + '. Radar range stays configurable when map scale or mobility meta shifts.',
				],
				list: ['Flank awareness', 'Extract approaches', 'Adjustable range'],
			},
			{
				h2: 'With ESP',
				paragraphs: [
					'Use radar for threats you cannot see yet. Use ESP when you push.',
					'Compare category detail on the ' + TOPIC.esp + ' and check ' + TOPIC.status + ' after patches.',
				],
				list: [
					'<a href="/arc-raiders-esp/">ESP guide</a>',
					'<a href="/arc-raiders-cheats/">Full product</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	setup: page({
		title: brandSeo.setupTitle,
		description: brandSeo.setupDescription,
		h1: 'Setup',
		intro: brandCopy.setupIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Check status',
		ctaSecondaryHref: '/updates/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Before you install',
				paragraphs: [
					'Buy a plan first. You get a license by email.',
					'If the launcher itself fails on patch day, confirm Embark Studios service health on ' + EXT.game + ' before you blame the loader.',
				],
				list: ['Windows 10 / 11 PC', 'Disable conflicting overlays', 'Have your order email ready'],
			},
			{
				h2: 'Install steps',
				paragraphs: [
					'Run the loader as admin, paste your license, then launch {game}.',
					'After a game or {antiCheat} update, wait for our ' + TOPIC.status + ' note before queueing on an old build.',
				],
				list: ['Download the loader from your delivery email', 'Paste license key', 'Launch the game'],
			},
			{
				h2: 'If something fails',
				paragraphs: [
					'Check ' + TOPIC.status + ' after a patch. Email {email} with your order ID. See ' + TOPIC.setup + ' and ' + TOPIC.undetected + ' if modules need a rebuild.',
				],
				list: ['<a href="/updates/">Status page</a>', '<a href="/support/">Support</a>', '<a href="/faq/">FAQ</a>'],
			},
		],
	}),
	support: page({
		title: brandSeo.supportTitle,
		description: brandSeo.supportDescription,
		h1: 'Support',
		intro: brandCopy.supportIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'FAQ',
		ctaSecondaryHref: '/faq/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'How to contact us',
				paragraphs: ['Email {email}. Include your order ID and a short note about the issue.'],
				list: ['Order ID from your receipt', 'Windows version', 'What you already tried'],
			},
			{
				h2: 'Faster answers',
				paragraphs: [
					'Check FAQ and Status before you write. Many setup questions are already covered.',
					'If the launcher fails on patch day, confirm Embark Studios service health on ' + EXT.game + ' before opening a ticket.',
				],
				list: ['<a href="/faq/">FAQ</a>', TOPIC.status, TOPIC.setup, TOPIC.undetected],
			},
		],
	}),
	faq: page({
		title: brandSeo.faqTitle,
		description: brandSeo.faqDescription,
		h1: 'FAQ',
		intro: brandCopy.faqIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Support',
		ctaSecondaryHref: '/support/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Buying & delivery',
				paragraphs: ['You get a digital license by email after payment.'],
				list: ['Instant delivery after checkout', 'Keep your order email', 'One license per purchase'],
			},
			{
				h2: 'Setup & updates',
				paragraphs: [
					'Follow Setup after you buy. Check Status after big {game} or {antiCheat} patches.',
					'Official seasons and game updates come from ' + EXT.game + '. Our rebuild notes live on the ' + TOPIC.status + '.',
				],
				list: [TOPIC.setup, TOPIC.status, TOPIC.patchNotes],
			},
			{
				h2: 'Refunds',
				paragraphs: [
					'Read the refund policy before you buy if you need details. {game} is published by Embark Studios (' + EXT.game + ') — cheats are third-party tools and may violate their rules.',
				],
				list: ['<a href="/refund-policy/">Refund policy</a>', '<a href="/support/">Support</a>'],
			},
		],
	}),
};
