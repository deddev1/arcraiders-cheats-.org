import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT, TOPIC, CHECKOUT, CHECKOUT_STORE, CHECKOUT_URL } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'Arc Raiders Cheats 2026 | Undetected ESP, Aimbot & Wallhack',
		description:
			'Arc Raiders cheats for Windows PC — ESP, soft aim, radar, and Easy Anti-Cheat updates. Compare plans and buy.',
		h1: 'Arc Raiders Cheats — Undetected ESP, Wallhack & Aimbot',
		intro:
			'Arc Raiders Cheats is the undetected arc raiders cheats package for Windows PC — built for ARC Raiders on Windows PC. Arc Raiders esp wallhack, 2D radar, and arc-raiders aimbot with Easy Anti-Cheat maintenance after every major patch.',
		imageAlt: "Arc Raiders Cheats homepage hero — ESP and aimbot for ARC Raiders",
		galleryTitle: 'Arc Raiders Cheats gallery — ESP, Aimbot and wallhack visuals',
		ctaPrimary: 'Buy Arc Raiders Cheats',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why players choose Arc Raiders cheats in 2026',
				'Arc Raiders rewards map awareness. Arc Raiders Cheats combines ESP wallhack for enemy players and loot, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on raid, extraction-run, and competitive lobbies.',
				`Official seasons and patch notes come from ${EXT.game}. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on ${TOPIC.status}.`,
				'Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include Easy Anti-Cheat maintenance rebuilds when anti-cheat or game patches require updates.',
				'Start with the <a href="/arc-raiders-cheats/">Arc Raiders cheats pillar</a>, <a href="/arc-raiders-esp/">ESP guide</a>, <a href="/arc-raiders-aimbot/">Aimbot controls</a>, and <a href="/arc-raiders-cheats/">undetected status</a> pages if you are comparing tools before checkout.',
			),
			section(
				'ESP wallhack, radar hack, and Aimbot in one license',
				'Instead of stacking separate tools, Arc Raiders Cheats bundles player ESP wallhack, loot markers, 2D radar overlays, and Aimbot profiles in one undetected package built for surface raids and extraction-runs — covering both “arc raiders cheats” and “arc raiders hacks” search intent.',
				`Browse the <a href="/arc-raiders-esp/">ESP</a>, <a href="/arc-raiders-aimbot/">Aimbot</a>, <a href="/arc-raiders-esp/">wallhack</a>, and <a href="/arc-raiders-radar-hack/">radar</a> pages for control details — or jump to ${CHECKOUT_STORE} for monthly and lifetime options.`,
				`Before patch days, check ${EXT.status} for Embark Studios service health, then confirm our maintenance notes so you are not queueing on an outdated build.`,
				`Ready to buy? Open ${CHECKOUT_STORE}, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> bookmarked for license questions.`,
			),
		],
	},
	'arc-raiders-esp': {
		title: 'Arc Raiders ESP 2026 | Player Boxes & Wallhack',
		description:
			'Arc Raiders ESP for Windows PC — player boxes, loot markers, and distance readouts. Part of our undetected arc raiders cheats for ARC Raiders.',
		h1: 'Arc Raiders ESP — Player Boxes & Wallhack',
		intro:
			'Arc Raiders esp visibility tools for raid and extraction-run. Read enemy squads, Raiders, ARC drones, loot, and distance before you commit — toggleable arc-raiders esp wallhack overlays bundled in our arc raiders cheats package.',
		imageAlt: "Arc Raiders ESP player boxes and distance readouts in a raid",
		galleryTitle: 'Arc Raiders ESP overlay visuals',
		ctaPrimary: 'Buy Arc Raiders Cheats',
		ctaSecondary: 'Arc Raiders wallhack guide',
		ctaSecondaryHref: '/arc-raiders-esp/',
		sections: [
			section(
				'What Arc Raiders ESP solves in raids',
				'Arc Raiders maps punish incomplete information. Arc Raiders Cheats ESP wallhack helps you spot enemy squads early, spot Raiders and ARC drones before they push your angle, and mark high-value loot worth the detour.',
				'On raid, extraction-run, and competitive lobbies, that visibility gap is often the difference between a clean third-party and a wiped squad. ESP ships bundled with radar overlays and Aimbot in one license.',
				`Arc Raiders’s live seasons and map updates are published by Embark Studios (${EXT.game}). When POIs or loot rules shift, ESP categories stay useful because they track players and containers — not a single static landmark.`,
			),
			section(
				'Player, boss, and loot ESP wallhack categories',
				'Toggle enemy player outlines, boss markers, extract cues, and loot pins so only raid-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports surface raids and extraction-runs lobbies alike.',
				'Compare category detail on the <a href="/arc-raiders-esp/">wallhack page</a> and pair visibility with the <a href="/arc-raiders-radar-hack/">radar hack</a> for flanks outside your FOV.',
				[
					'Enemy player ESP outlines with distance',
					'Loot and container markers for faster rotations',
					'Boss and extract awareness cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with Easy Anti-Cheat maintenance',
				'Arc Raiders Cheats ESP wallhack is maintained for Arc Raiders with rebuilds after Easy Anti-Cheat patches. Check the <a href="/updates/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Cross-check our ${TOPIC.patchNotes} after major patches, then confirm rebuild notes on ${TOPIC.status}.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first raid.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the firefight. Review <a href="/arc-raiders-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				`Compare monthly ($35) and lifetime ($150) on ${CHECKOUT_STORE}, then keep <a href="/support/">Support</a> ready if activation needs a human reply.`,
				'Still researching? The <a href="/arc-raiders-cheats/">Arc Raiders cheats pillar</a> and <a href="/arc-raiders-cheats/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'arc-raiders-aimbot': {
		title: 'Arc Raiders Aimbot 2026 | Soft Aim for Windows PC',
		description:
			'Arc Raiders aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our arc raiders cheats package.',
		h1: 'Arc Raiders Aimbot — Soft Aim for Windows PC',
		intro:
			'Configurable Aimbot tools for Arc Raiders firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Arc Raiders aimbot and soft aim controls on Windows PC",
		galleryTitle: 'Arc Raiders Aimbot combat previews',
		ctaPrimary: 'Buy Arc Raiders Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/arc-raiders-esp/',
		sections: [
			section(
				'Aimbot tuned for Arc Raiders combat pace',
				'Arc Raiders mixes long-range AR fights with close-quarters SMG pushes. Arc Raiders Cheats Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.',
				'Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and close-range scav fights.',
				`Weapon balance and season rules change via ${EXT.game}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.`,
			),
			section(
				'Per-weapon Aimbot profiles',
				'Save separate Aimbot profiles for ARs, SMGs, and bolt-actions. Switch between long-range DMR fights and underground zone clears without reopening menus every raid.',
				'Prefer softer tracking? Read the <a href="/arc-raiders-aimbot/">soft aim guide</a>.',
				'Aimbot ships alongside <a href="/arc-raiders-esp/">ESP wallhack</a> and <a href="/arc-raiders-radar-hack/">2D radar</a> in the same Arc Raiders Cheats license.',
				[
					'Smoothness, FOV, and sensitivity sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-match',
					'Per-weapon profile slots for AR / SMG / bolt-action',
				],
			),
			section(
				'Easy Anti-Cheat maintenance for undetected Aimbot',
				'Arc Raiders Cheats rebuilds Aimbot behavior when Easy Anti-Cheat or major Arc Raiders patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status}, then follow our ${TOPIC.status} and ${TOPIC.undetected} before queueing on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP — pricing and setup',
				`Every plan includes Aimbot plus ESP and radar. Compare options on ${CHECKOUT_STORE}, then activate with the <a href="/setup/">Setup guide</a>.`,
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'Arc Raiders Cheats Features | ESP, Soft Aim & Radar',
		description:
			'Full arc raiders cheats feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.',
		h1: 'Arc Raiders Cheats Features — Full Control List',
		intro:
			'Every ESP wallhack, radar hack, and Aimbot control included in the Arc Raiders Cheats package for Arc Raiders on Windows PC — with Easy Anti-Cheat maintenance after major patches.',
		imageAlt: "Arc Raiders Cheats features — ESP, soft aim, and radar screenshots",
		galleryTitle: 'Arc Raiders Cheats feature gallery',
		ctaPrimary: 'Buy Arc Raiders Cheats',
		ctaSecondary: 'Get Access',
		ctaSecondaryHref: CHECKOUT_URL,
		sections: [
			section(
				'ESP wallhack and visibility features',
				'Enemy player ESP wallhack, boss and extract awareness cues, loot and container markers, distance readouts, snaplines, and toggleable ESP categories for raid-critical overlays only.',
				'Team and enemy colour coding supports surface raids and extraction-runs. Deep-dive the <a href="/arc-raiders-esp/">ESP page</a> and <a href="/arc-raiders-esp/">wallhack guide</a> for category-level detail.',
				`Map and loot systems evolve with ${EXT.game} wipe and map updates — toggleable ESP categories keep overlays useful when POIs rotate.`,
			),
			section(
				'Radar hack and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for rotations and late-raid extracts, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Arc Raiders sessions. See <a href="/arc-raiders-radar-hack/">radar</a> and <a href="/arc-raiders-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/arc-raiders-cheats/">mod menu page</a> explains mid-match toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and Easy Anti-Cheat maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. Easy Anti-Cheat maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@arcraiderscheats.org.`,
				`Next step: compare plans on ${CHECKOUT_STORE} or read <a href="/arc-raiders-cheats/">how undetected maintenance works</a>.`,
			),
		],
	},
	pricing: {
		title: 'Arc Raiders Cheats Pricing | $35/mo or $150 Life',
		description:
			'Arc Raiders cheats pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.',
		h1: 'Arc Raiders Cheats Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected Arc Raiders Cheats — ESP wallhack, radar hack, and Aimbot for Arc Raiders on Windows PC. Instant digital delivery after payment.',
		imageAlt: "Arc Raiders Cheats store plans for monthly and lifetime licenses",
		galleryTitle: 'Arc Raiders Cheats package visuals',
		ctaPrimary: 'Buy Arc Raiders Cheats',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime Arc Raiders Cheats plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with Easy Anti-Cheat maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected Arc Raiders Cheats package — ideal if you play Arc Raiders regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'Player ESP wallhack, loot markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Easy Anti-Cheat or major Arc Raiders patches.',
				`Season calendars and client updates come from ${EXT.game}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/arc-raiders-cheats/">Arc Raiders cheats</a>, <a href="/arc-raiders-cheats/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'Arc Raiders Cheats Setup | Windows PC Guide',
		description:
			'Set up arc raiders cheats on Windows PC — activate ESP boxes, soft aim profiles, and . Check Easy Anti-Cheat updates before your first queue.',
		h1: 'Arc Raiders Cheats Setup — Windows PC Guide',
		intro:
			'Install and configure Arc Raiders Cheats for Arc Raiders on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify Easy Anti-Cheat maintenance status before queueing.',
		imageAlt: "Arc Raiders Cheats setup guide screenshot for Windows PC",
		galleryTitle: 'Arc Raiders Cheats setup visuals',
		ctaPrimary: 'Buy Arc Raiders Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install Arc Raiders Cheats',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest Easy Anti-Cheat maintenance build before launching Arc Raiders.',
				`Also glance at ${EXT.status} if Embark Studios services look unstable on patch day — a platform outage is not a license fault.`,
				'Arc Raiders Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for Raiders, ARC drones, and loot — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for Easy Anti-Cheat module live on <a href="/arc-raiders-esp/">ESP</a>, <a href="/arc-raiders-aimbot/">Aimbot</a>, and <a href="/arc-raiders-cheats/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/arc-raiders-aimbot/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After Arc Raiders or Easy Anti-Cheat patches',
				'When Embark Studios ships a major Arc Raiders update or Easy Anti-Cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.',
				`Our practical maintenance workflow is documented on ${TOPIC.status} and ${TOPIC.undetected}. Official game updates ship through ${EXT.game}.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'Arc Raiders Cheats Updates | Easy Anti-Cheat Maintenance Log',
		description:
			'Arc Raiders cheats update log: Easy Anti-Cheat rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before queueing after patches.',
		h1: 'Arc Raiders Cheats Updates — Maintenance Log',
		intro:
			'Track Easy Anti-Cheat maintenance and Arc Raiders patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.',
		imageAlt: "Arc Raiders Cheats live status after Easy Anti-Cheat and game patches",
		galleryTitle: 'Arc Raiders patch and maintenance visuals',
		ctaPrimary: 'Buy Arc Raiders Cheats',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/arc-raiders-cheats/',
		sections: [
			section(
				'Why the Updates page matters',
				'Arc Raiders and Easy Anti-Cheat receive frequent patches. Arc Raiders Cheats publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for Embark Studios platform health and this page for Arc Raiders Cheats build status — both matter on big update days.`,
				'Checking this log before you queue reduces surprises after game days or seasonal launches on raid and extraction-run.',
			),
			section(
				'What maintenance entries cover',
				'Entries note Easy Anti-Cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.',
				`Lifetime and monthly subscribers receive rebuild access during active license terms. See ${CHECKOUT_STORE} if you need to renew.`,
				'For context on why rebuilds happen, read the <a href="/updates/">Easy Anti-Cheat bypass guide</a> and <a href="/arc-raiders-cheats/">undetected Arc Raiders cheats</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow season notes from ${EXT.game}, then confirm our rebuild is live before you queue.`,
				'For urgent status questions after a Easy Anti-Cheat update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'Arc Raiders Cheats FAQ | ESP, Soft Aim & Radar Answers',
		description:
			'Arc Raiders cheats FAQ: ESP boxes, soft aim, Easy Anti-Cheat maintenance, and pricing for PC. Clear answers before you buy.',
		h1: 'Arc Raiders Cheats FAQ — Common Questions',
		intro:
			'Answers about undetected Arc Raiders Cheats — ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance, checkout, and Arc Raiders compatibility on Windows PC.',
		imageAlt: "Arc Raiders Cheats FAQ — delivery, setup, and update answers",
		galleryTitle: 'Arc Raiders Cheats FAQ visuals',
		ctaPrimary: 'Buy Arc Raiders Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is Arc Raiders Cheats?',
				'Arc Raiders Cheats is an undetected cheat package for Arc Raiders on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with Easy Anti-Cheat maintenance updates.',
				'Packages cover raid and extraction-run. Explore <a href="/features/">Features</a> for the full control list and <a href="/arc-raiders-esp/">ESP</a> / <a href="/arc-raiders-aimbot/">Aimbot</a> for module detail.',
				`Arc Raiders itself is published by Embark Studios (${EXT.game}). Cheats are third-party tools and may violate Embark Studios' rules — use is at your own risk.`,
			),
			section(
				'Are Arc Raiders Cheats undetected in 2026?',
				'Arc Raiders Cheats is maintained with rebuilds after Easy Anti-Cheat and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/arc-raiders-cheats/">undetected Arc Raiders cheats</a> and the <a href="/updates/">Easy Anti-Cheat guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before queueing are essential.',
			),
			section(
				'Delivery, pricing, and support',
				`Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see ${CHECKOUT_STORE}.`,
				'Contact support@arcraiderscheats.org or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'Arc Raiders Cheats Support | Help & Contact',
		description:
			'Contact arc raiders cheats support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.',
		h1: 'Arc Raiders Cheats Support — Contact Us',
		intro:
			'Get help with Arc Raiders Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and Easy Anti-Cheat maintenance for Arc Raiders on Windows PC.',
		imageAlt: "Arc Raiders Cheats support page for license and setup help",
		galleryTitle: 'Arc Raiders Cheats support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after Easy Anti-Cheat maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/updates/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. Arc Raiders Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Embark Studios bans.',
				`Account and game policy questions belong with Embark Studios (${EXT.game}). We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. Easy Anti-Cheat bypass notes live on the dedicated <a href="/eac-bypass/">Easy Anti-Cheat page</a>.',
				`Game updates and service health are published on ${EXT.game}. For product rebuild timing, check ${TOPIC.status} first.`,
				'Email: support@arcraiderscheats.org',
				`Ready to purchase or renew? Open ${CHECKOUT_STORE}. Need feature detail first? See <a href="/features/">Features</a>.`,
			),
		],
	},
	undetected: {
		title: 'Undetected Arc Raiders Cheats 2026 | Easy Anti-Cheat Maintenance',
		description:
			'Undetected arc raiders cheats with Easy Anti-Cheat maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.',
		h1: 'Undetected Arc Raiders Cheats — Easy Anti-Cheat Maintenance',
		intro:
			'How Arc Raiders Cheats stays maintained for Arc Raiders after Easy Anti-Cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.',
		imageAlt: "Arc Raiders Cheats undetected status overview for Windows PC",
		galleryTitle: 'Undetected Arc Raiders Cheats visuals',
		ctaPrimary: 'Buy Arc Raiders Cheats',
		ctaSecondary: 'Easy Anti-Cheat bypass guide',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'What undetected means for Arc Raiders Cheats',
				'Undetected Arc Raiders Cheats means the package is actively maintained against Easy Anti-Cheat and major Arc Raiders patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Easy Anti-Cheat security updates.',
				`Undetected status is an ongoing process tied to ${EXT.game} client updates. Follow ${TOPIC.status} and ${TOPIC.undetected} on patch days.`,
			),
			section(
				'Easy Anti-Cheat maintenance workflow',
				'When Easy Anti-Cheat or Arc Raiders updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for launcher outages that can look like product failures.`,
				'Deep technical workflow: <a href="/updates/">Easy Anti-Cheat bypass Arc Raiders guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				`Lifetime and monthly plans include rebuild access during active terms — see ${CHECKOUT_STORE}.`,
				'New buyers should also read <a href="/arc-raiders-cheats/">Arc Raiders cheats 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'Arc Raiders Wallhack 2026 | ESP Boxes & Visibility',
		description:
			'Arc Raiders wallhack ESP with player boxes and loot markers for Windows PC. Undetected arc raiders cheats — learn overlays and buy.',
		h1: 'Arc Raiders Wallhack — ESP Boxes & Visibility',
		intro:
			'Arc Raiders wallhack ESP for Arc Raiders — see players, loot, bosses, and containers through toggleable wallhack overlays built for surface raids and extraction-runs.',
		imageAlt: "Arc Raiders wallhack visibility through walls in a raid",
		galleryTitle: 'Arc Raiders wallhack ESP gallery',
		ctaPrimary: 'Buy Arc Raiders Cheats',
		ctaSecondary: 'Arc Raiders ESP page',
		ctaSecondaryHref: '/arc-raiders-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'A Arc Raiders wallhack focuses on information — player outlines, loot pins, boss threat cues — rather than automatic aiming. Arc Raiders Cheats bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and extract holds.',
				'For the broader ESP keyword page see <a href="/arc-raiders-esp/">Arc Raiders ESP</a>; for combat assist see <a href="/arc-raiders-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support raid, extraction-run, and competitive lobbies with distance readouts and snaplines for engagement control.',
				`Season maps and POI changes are announced via ${EXT.game}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/arc-raiders-radar-hack/">radar hack</a> cues for flanks during building and rooftop fights.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Easy Anti-Cheat patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/arc-raiders-cheats/">undetected Arc Raiders cheats</a> and <a href="/updates/">Easy Anti-Cheat bypass</a>.',
				`Ready to buy? Compare ${CHECKOUT_STORE} or continue to the <a href="/arc-raiders-esp/">ESP hack</a> landing for alternate search wording.`,
			),
		],
	},
	radar: {
		title: 'Arc Raiders Radar Hack 2026 | 2D Threat Overlay',
		description:
			'Arc Raiders radar hack for flank awareness on Windows PC. 2D threat overlay bundled with ESP boxes, soft aim, and patch updates in our arc raiders cheats package.',
		h1: 'Arc Raiders Radar Hack — 2D Threat Awareness',
		intro:
			'2D radar-style overlay for Arc Raiders — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: "Arc Raiders 2D radar overlay showing nearby threats",
		galleryTitle: 'Arc Raiders radar hack visuals',
		ctaPrimary: 'Buy Arc Raiders Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/arc-raiders-esp/',
		sections: [
			section(
				'Why radar hack matters in Arc Raiders',
				'raids fights happen in three dimensions — rooftops, windows, and flanks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third party.',
				'Arc Raiders Cheats radar complements <a href="/arc-raiders-esp/">ESP wallhack</a> markers during squad pushes and extract camp fights.',
				`Mode rules and seasonal changes come from ${EXT.game}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight extract holds. Directional cues highlight flanks during building clears and flank pushes across raid and extraction-run.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href="/arc-raiders-cheats/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/arc-raiders-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				`Radar hack modules receive Easy Anti-Cheat maintenance rebuilds with the full Arc Raiders Cheats package. Monthly and lifetime licenses include digital delivery — see ${CHECKOUT_STORE}.`,
				'Check <a href="/updates/">Updates</a> after major Arc Raiders patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/arc-raiders-cheats/">undetected status</a>.',
			),
		],
	},
	'eac': {
		title: 'Easy Anti-Cheat Bypass Arc Raiders | Arc Raiders Cheats Maintenance',
		description:
			'How arc raiders cheats rebuild after Easy Anti-Cheat patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before queueing.',
		h1: 'Easy Anti-Cheat Bypass — Arc Raiders Cheats Maintenance',
		intro:
			'Understand Easy Anti-Cheat maintenance for Arc Raiders Cheats — how ESP wallhack, radar hack, and Aimbot rebuild after Arc Raiders security updates.',
		imageAlt: "Arc Raiders Cheats maintenance after a Easy Anti-Cheat patch",
		galleryTitle: 'Easy Anti-Cheat maintenance visuals',
		ctaPrimary: 'Buy Arc Raiders Cheats',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'Easy Anti-Cheat overview',
				`Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds. Follow ${TOPIC.status} and read our ${TOPIC.completeGuide} for the full workflow.`,
				`Arc Raiders Cheats monitors Easy Anti-Cheat patch notes and Arc Raiders seasonal updates from ${EXT.game} to schedule module reviews.`,
				'“Easy Anti-Cheat bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after a Easy Anti-Cheat patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Embark Studios service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/arc-raiders-cheats/">undetected Arc Raiders cheats</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'Easy Anti-Cheat bypass in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every session.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				`Buying for the first time? Compare ${CHECKOUT_STORE} and finish <a href="/setup/">Setup</a> only after Updates shows a live build.`,
			),
		],
	},
	'cheats-2026': {
		title: 'Arc Raiders Cheats 2026 | ESP Soft Aim & Radar',
		description:
			'Best arc raiders cheats 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected arc raiders cheats with Easy Anti-Cheat maintenance — compare and buy.',
		h1: 'Arc Raiders Cheats 2026 — ESP, Soft Aim & Radar',
		intro:
			'The 2026 Arc Raiders Cheats package for Arc Raiders — undetected ESP wallhack, radar hack, and Aimbot with Easy Anti-Cheat maintenance, instant delivery, and Windows PC support.',
		imageAlt: "Arc Raiders Cheats product overview for ARC Raiders",
		galleryTitle: 'Arc Raiders Cheats 2026 gallery',
		ctaPrimary: 'Buy Arc Raiders Cheats',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why arc raiders cheats buyers choose Arc Raiders Cheats in 2026',
				'2026 seasons bring new maps, weapons, and Easy Anti-Cheat updates. Arc Raiders Cheats bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official season messaging on ${EXT.game}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				`Monthly ($35) and lifetime ($150) plans cover raid and extraction-run loops — see ${CHECKOUT_STORE}.`,
			),
			section(
				'Full feature stack for 2026 buyers',
				'Player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/arc-raiders-cheats/">Arc Raiders cheats pillar</a>, <a href="/arc-raiders-esp/">ESP</a>, <a href="/arc-raiders-aimbot/">Aimbot</a>, <a href="/arc-raiders-esp/">wallhack</a>, <a href="/arc-raiders-radar-hack/">radar</a>, <a href="/arc-raiders-cheats/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/arc-raiders-cheats/">Arc Raiders cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/arc-raiders-cheats/">Arc Raiders cheats</a> checklist, <a href="/blog/arc-raiders-cheats-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@arcraiderscheats.org via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'Arc Raiders Cheats 2026 | Undetected ESP Aimbot Guide',
		description:
			'Arc Raiders cheats for Windows PC: undetected ESP wallhack, radar hack, and Aimbot with Easy Anti-Cheat maintenance. Compare arc raiders cheats options and buy the full package.',
		h1: 'Arc Raiders Cheats — Undetected ESP, Aimbot & Wallhack',
		intro:
			'Arc Raiders cheats for raid and extraction-run combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after Easy Anti-Cheat patches. This is the pillar guide for arc raiders cheats in 2026.',
		imageAlt: "Arc Raiders Cheats product page — ESP, aimbot, and radar",
		galleryTitle: 'Arc Raiders cheats gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy Arc Raiders Cheats',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/arc-raiders-cheats/',
		sections: [
			section(
				'What Arc Raiders cheats include in 2026',
				'Players searching for Arc Raiders cheats usually want visibility and combat tools without stacking separate downloads. Arc Raiders Cheats bundles player ESP wallhack, loot markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called arc raiders cheats.',
				'Coverage spans raid and extraction-run with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.game}; our hacks package tracks those releases via the <a href="/updates/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day queues.`,
			),
			section(
				'How this Arc Raiders cheats pillar fits nearby pages',
				'Use this pillar for the core product overview. For year-specific buying notes, see the <a href="/arc-raiders-cheats/">arc raiders cheats 2026</a> and <a href="/arc-raiders-cheats/">Arc Raiders cheats</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/arc-raiders-esp/">Arc Raiders ESP</a>, <a href="/arc-raiders-aimbot/">Arc Raiders Aimbot</a>, <a href="/arc-raiders-esp/">wallhack</a>, <a href="/arc-raiders-radar-hack/">radar hack</a>, and <a href="/arc-raiders-aimbot/">soft aim</a>.',
				'Blog guides expand Easy Anti-Cheat keyword: <a href="/blog/arc-raiders-cheats-complete-guide-2026/">hacks complete guide</a>, <a href="/blog/arc-raiders-cheats-buyers-guide/">cheats buyers guide</a>, and <a href="/blog/undetected-arc-raiders-cheats-eac/">undetected Easy Anti-Cheat notes</a>.',
			),
			section(
				'Arc Raiders cheats vs single-feature tools',
				'Standalone hacks often cover only wallhack or only aim assist. Arc Raiders Cheats maps the full raid loop: read enemy squads, track bosses and containers, spot flanks on radar, and tune Aimbot per weapon class.',
				`Compare the <a href="/arc-raiders-esp/">ESP</a>, <a href="/arc-raiders-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review ${CHECKOUT_STORE} for monthly and lifetime licenses.`,
				'Related landings: <a href="/setup/">cheat download</a>, <a href="/arc-raiders-cheats/">mod menu</a>, <a href="/arc-raiders-aimbot/">aimbot</a>, <a href="/arc-raiders-esp/">ESP</a>.',
			),
			section(
				'Undetected Arc Raiders cheats with Easy Anti-Cheat maintenance',
				'Undetected Arc Raiders cheats require rebuilds after Easy Anti-Cheat and major Arc Raiders patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${TOPIC.buyersGuide} before you compare shops, then pair with ${TOPIC.undetected} and ${TOPIC.status} for the workflow buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'Arc Raiders Hack Download 2026 | Instant Access',
		description:
			'Arc Raiders cheat download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.',
		h1: 'Arc Raiders Hack Download — Instant License Delivery',
		intro:
			'How Arc Raiders cheat download works for Arc Raiders — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.',
		imageAlt: "Arc Raiders Cheats download and install delivery flow",
		galleryTitle: 'Arc Raiders cheat download visuals',
		ctaPrimary: 'Buy Arc Raiders Cheats',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How Arc Raiders cheat download delivery works',
				'After checkout confirms payment, Arc Raiders Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Embark Studios services are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every Arc Raiders cheat download includes player ESP wallhack, loot and container markers, 2D radar overlays, Aimbot profiles, and in-client toggles for surface raids and extraction-runs.',
				`Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the ${CHECKOUT_STORE}.`,
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/arc-raiders-esp/">ESP</a>, <a href="/arc-raiders-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Arc Raiders or Easy Anti-Cheat patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/arc-raiders-cheats/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'Arc Raiders Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'Arc Raiders mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected arc raiders cheats package.',
		h1: 'Arc Raiders Mod Menu — In-Client Control Panel',
		intro:
			'Arc Raiders mod menu controls for Arc Raiders — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your Arc Raiders session on Windows PC.',
		imageAlt: "Arc Raiders Cheats in-game menu controls",
		galleryTitle: 'Arc Raiders mod menu gallery',
		ctaPrimary: 'Buy Arc Raiders Cheats',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a Arc Raiders mod menu controls',
				'A Arc Raiders mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. Arc Raiders Cheats keeps those toggles accessible with hotkeys.',
				'Toggle player outlines, loot markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of Arc Raiders.',
				'Control deep-dives: <a href="/arc-raiders-esp/">ESP</a>, <a href="/arc-raiders-aimbot/">Aimbot</a>, <a href="/arc-raiders-radar-hack/">radar</a>.',
			),
			section(
				'Mod menu categories for surface raids and extraction-runs',
				'Separate ESP wallhack categories for players, loot, containers, and bosses let you reduce overlay noise during rotations and extract holds.',
				'Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ' + EXT.game + ' seasons change fight distances and mobility.',
				'Soft tracking players should start with <a href="/arc-raiders-aimbot/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after Easy Anti-Cheat patches',
				'Arc Raiders mod menu behavior is rebuilt when Easy Anti-Cheat or major Arc Raiders updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Easy Anti-Cheat bypass guide</a> before queueing on patch days.',
				`Checkout with instant digital delivery for monthly and lifetime licenses — see ${CHECKOUT_STORE}.`,
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'Arc Raiders Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'Arc Raiders soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our arc raiders cheats with ESP boxes.',
		h1: 'Arc Raiders Soft Aim — Smooth Aimbot Controls',
		intro:
			'Arc Raiders soft aim settings for Arc Raiders — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Arc Raiders soft aim FOV and smoothness settings",
		galleryTitle: 'Arc Raiders soft aim gallery',
		ctaPrimary: 'Buy Arc Raiders Cheats',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/arc-raiders-aimbot/',
		sections: [
			section(
				'What Arc Raiders soft aim means',
				'Arc Raiders soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Arc Raiders Cheats exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.',
				'Full Aimbot documentation: <a href="/arc-raiders-aimbot/">Arc Raiders Aimbot</a>. Alternate wording: <a href="/arc-raiders-aimbot/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per weapon class',
				'Save separate soft aim profiles for ARs, SMGs, and bolt-actions. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.',
				`Weapon TTKs shift with ${EXT.game} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/arc-raiders-esp/">ESP wallhack</a> and <a href="/arc-raiders-radar-hack/">2D radar</a> overlays.',
			),
			section(
				'Undetected soft aim with Easy Anti-Cheat maintenance',
				'Aimbot modules rebuild after Easy Anti-Cheat patches. Check the <a href="/updates/">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.',
				`Monthly and lifetime licenses checkout with digital delivery on Windows PC — ${CHECKOUT_STORE}.`,
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best Arc Raiders Cheats 2026 | Buyer Guide',
		description:
			'Best arc raiders cheats for 2026: ESP boxes, soft aim, and Easy Anti-Cheat maintenance on Windows PC. Use this checklist before checkout.',
		h1: 'Best Arc Raiders Cheats — 2026 Buyer Guide',
		intro:
			'Compare the Arc Raiders cheats for Arc Raiders in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Easy Anti-Cheat rebuilds and instant delivery.',
		imageAlt: "Arc Raiders Cheats overview for ARC Raiders on PC",
		galleryTitle: 'Best Arc Raiders cheats gallery',
		ctaPrimary: 'Buy Arc Raiders Cheats',
		ctaSecondary: 'Get Access',
		ctaSecondaryHref: CHECKOUT_URL,
		sections: [
			section(
				'What makes the Arc Raiders cheats in 2026',
				'The Arc Raiders cheats combine active Easy Anti-Cheat maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'Arc Raiders Cheats covers raid and extraction-run with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best Arc Raiders cheats feature checklist',
				'Look for player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Arc Raiders patches.',
				'Review <a href="/features/">Features</a>, <a href="/arc-raiders-cheats/">undetected status</a>, and <a href="/arc-raiders-cheats/">Arc Raiders cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/arc-raiders-esp/">ESP</a>, <a href="/arc-raiders-aimbot/">Aimbot</a>, <a href="/arc-raiders-cheats/">hacks</a>.',
			),
			section(
				'Buying the Arc Raiders cheats safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate Embark Studios terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'Arc Raiders Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'Arc Raiders aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our arc raiders cheats package.',
		h1: 'Arc Raiders Aimbot Hack — Soft Aim Assist',
		intro:
			'Arc Raiders aimbot hack tools for Arc Raiders — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Arc Raiders aimbot hack controls and bone priority",
		galleryTitle: 'Arc Raiders aimbot hack gallery',
		ctaPrimary: 'Buy Arc Raiders Cheats',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/arc-raiders-aimbot/',
		sections: [
			section(
				'Arc Raiders aimbot hack vs visibility tools',
				'A Arc Raiders aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Arc Raiders Cheats bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and sensitivity controls tune assist for Arc Raiders combat pace across surface raids and extraction-runs.',
				'Prefer softer tracking language? See <a href="/arc-raiders-aimbot/">soft aim</a>. Full settings: <a href="/arc-raiders-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-raid extracts.',
				'Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.',
				`Balance patches from ${EXT.game} can change ideal FOV — retune after major weapon updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after Easy Anti-Cheat updates. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Easy Anti-Cheat bypass guide</a> before queueing after patch days.',
				`Checkout with instant digital delivery for Windows 10 and 11 — ${CHECKOUT_STORE}.`,
				'Pair with <a href="/arc-raiders-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'Arc Raiders ESP Hack 2026 | Player Boxes & Loot',
		description:
			'Arc Raiders ESP hack with player boxes and loot markers for Windows PC. Undetected arc raiders cheats with — see overlays and buy.',
		h1: 'Arc Raiders ESP Hack — Player Boxes Guide',
		intro:
			'Arc Raiders ESP hack overlays for Arc Raiders — player outlines, boss threat cues, loot and container markers with distance readouts across raid and extraction-run.',
		imageAlt: "Arc Raiders ESP hack boxes and loot markers",
		galleryTitle: 'Arc Raiders ESP hack gallery',
		ctaPrimary: 'Buy Arc Raiders Cheats',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/arc-raiders-esp/',
		sections: [
			section(
				'What a Arc Raiders ESP hack shows',
				'A Arc Raiders ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.',
				'Canonical visibility guide: <a href="/arc-raiders-esp/">Arc Raiders ESP</a>. Wallhack wording: <a href="/arc-raiders-esp/">wallhack</a>.',
			),
			section(
				'ESP hack categories for raids',
				'Toggle player ESP hack, loot markers, chest pins, and vehicle cues independently so only raid-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports surface raids and extraction-runs.',
				`POI and loot changes publish through ${EXT.game} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with Easy Anti-Cheat maintenance',
				'ESP hack modules rebuild after Easy Anti-Cheat and Arc Raiders patches. Check the <a href="/updates/">Updates page</a> before queueing — pair ESP hack awareness with <a href="/arc-raiders-radar-hack/">radar hack</a> for flank reads.',
				`Licenses deliver digitally after checkout on Windows PC — see ${CHECKOUT_STORE}.`,
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/arc-raiders-cheats/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'Arc Raiders Unlock All 2026 | What It Really Means',
		description:
			'Arc Raiders unlock all explained vs real arc raiders cheats — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.',
		h1: 'Arc Raiders Unlock All — What Players Search For',
		intro:
			'Arc Raiders unlock all is a common search term for Arc Raiders — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools Arc Raiders Cheats actually provides on Windows PC.',
		imageAlt: "Arc Raiders Cheats license features overview",
		galleryTitle: 'Arc Raiders unlock all guide visuals',
		ctaPrimary: 'Buy Arc Raiders Cheats',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What Arc Raiders unlock all usually means',
				'Arc Raiders unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'Arc Raiders Cheats focuses on in-match awareness — player ESP, loot markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and season progression items are sold through ${EXT.game}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot enemy squads, bosses, and high-value loot during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, loot and container markers speed map rotations — see the <a href="/arc-raiders-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/arc-raiders-cheats/">Arc Raiders cheats</a> and <a href="/arc-raiders-cheats/">Arc Raiders cheats</a>.',
			),
			section(
				'Buying Arc Raiders Cheats for the right reasons',
				`If you need undetected ESP wallhack, radar hack, and Aimbot for Arc Raiders on Windows PC, compare ${CHECKOUT_STORE} and read the <a href="/setup/">Setup guide</a> before checkout.`,
				'Check the <a href="/updates/">Updates page</a> after Easy Anti-Cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | Arc Raiders Cheats',
		description:
			'Privacy policy for Arc Raiders Cheats. How we handle support emails, order data, and checkout for arc raiders cheats licenses on arcraiderscheats.org.',
		h1: 'Privacy Policy',
		intro: 'How Arc Raiders Cheats handles information when you browse arcraiderscheats.org or contact support about a Arc Raiders license.',
		imageAlt: "Arc Raiders Cheats privacy policy page",
		galleryTitle: 'Arc Raiders Cheats legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual Arc Raiders Cheats customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@arcraiderscheats.org with your request details.',
				'Policy updates publish on this page. Continued use of arcraiderscheats.org after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | Arc Raiders Cheats',
		description:
			'Refund policy for Arc Raiders Cheats. Digital delivery terms and eligibility for arc raiders cheats packages with ESP, soft aim, and radar.',
		h1: 'Refund Policy',
		intro:
			'Refund terms for Arc Raiders Cheats licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Arc Raiders.',
		imageAlt: "Arc Raiders Cheats refund policy page",
		galleryTitle: 'Arc Raiders Cheats billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'Arc Raiders Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				`${EXT.game} is a separate product from our cheat license. Refund requests should reference our digital license, not Embark Studios account issues.`,
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@arcraiderscheats.org with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				`Approved refunds process back to the original payment method when possible. Pricing details live on ${CHECKOUT_STORE}.`,
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | Arc Raiders Cheats Rules',
		description:
			'Terms of use for arcraiderscheats.org and Arc Raiders Cheats licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.',
		h1: 'Terms of Use',
		intro: 'Terms governing use of arcraiderscheats.org and Arc Raiders Cheats licenses for Arc Raiders on Windows PC.',
		imageAlt: "Arc Raiders Cheats terms of use page",
		galleryTitle: 'Arc Raiders Cheats legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using Arc Raiders Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Arc Raiders on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in Arc Raiders may violate Embark Studios terms (${EXT.game}) and result in account penalties. Arc Raiders Cheats provides maintenance but does not guarantee undetected status or account safety.`,
				`Read ${TOPIC.undetected} for honest risk expectations. You assume all risk. We are not liable for bans, data loss, or damages arising from product use.`,
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@arcraiderscheats.org for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripZadeyoFromMeta(page.title)),
		description: clampDesc(stripZadeyoFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
