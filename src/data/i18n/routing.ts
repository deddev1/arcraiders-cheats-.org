import { siteConfig } from '../site';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';
import { getCannibalTargetId, isCannibalPageId } from '../seo-cannibal-map';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'arc-raiders-esp'
	| 'arc-raiders-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'eac'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'arc-raiders-esp': '/arc-raiders-esp/',
	'arc-raiders-aimbot': '/arc-raiders-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected-arc-raiders-cheats/',
	wallhack: '/arc-raiders-wallhack/',
	radar: '/arc-raiders-radar-hack/',
	'eac': '/eac-bypass/',
	'cheats-2026': '/arc-raiders-cheats-2026/',
	hacks: '/arc-raiders-cheats/',
	'cheat-download': '/arc-raiders-cheat-download/',
	'mod-menu': '/arc-raiders-mod-menu/',
	'soft-aim': '/arc-raiders-soft-aim/',
	'best-cheats': '/best-arc-raiders-cheats/',
	'aimbot-hack': '/arc-raiders-aimbot-hack/',
	'esp-hack': '/arc-raiders-esp-hack/',
	'unlock-all': '/arc-raiders-unlock-all/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'arc-raiders-esp': {
		en: 'arc-raiders-esp',
		es: 'trucos-arc-raiders-esp',
		fr: 'triche-arc-raiders-esp',
		de: 'arc-raiders-esp-wallhack',
		pt: 'cheats-arc-raiders-esp',
		it: 'trucchi-arc-raiders-esp',
		nl: 'arc-raiders-esp-wallhack',
		pl: 'cheaty-arc-raiders-esp',
		ru: 'arc-raiders-esp-chity',
		tr: 'arc-raiders-esp-hile',
		ar: 'arc-raiders-esp-wallhack',
		ja: 'arc-raiders-esp-wallhack',
		ko: 'arc-raiders-esp-wallhack',
		zh: 'arc-raiders-esp-wallhack',
		hi: 'arc-raiders-esp-wallhack',
		id: 'arc-raiders-esp-wallhack',
		th: 'arc-raiders-esp-wallhack',
		vi: 'arc-raiders-esp-wallhack',
		uk: 'arc-raiders-esp-chity',
		cs: 'arc-raiders-esp-wallhack',
		ro: 'arc-raiders-esp-wallhack',
		sv: 'arc-raiders-esp-wallhack',
	},
	'arc-raiders-aimbot': {
		en: 'arc-raiders-aimbot',
		es: 'trucos-arc-raiders-aimbot',
		fr: 'triche-arc-raiders-aimbot',
		de: 'arc-raiders-aimbot',
		pt: 'cheats-arc-raiders-aimbot',
		it: 'trucchi-arc-raiders-aimbot',
		nl: 'arc-raiders-aimbot',
		pl: 'cheaty-arc-raiders-aimbot',
		ru: 'arc-raiders-aimbot-chity',
		tr: 'arc-raiders-aimbot-hile',
		ar: 'arc-raiders-aimbot',
		ja: 'arc-raiders-aimbot',
		ko: 'arc-raiders-aimbot',
		zh: 'arc-raiders-aimbot',
		hi: 'arc-raiders-aimbot',
		id: 'arc-raiders-aimbot',
		th: 'arc-raiders-aimbot',
		vi: 'arc-raiders-aimbot',
		uk: 'arc-raiders-aimbot-chity',
		cs: 'arc-raiders-aimbot',
		ro: 'arc-raiders-aimbot',
		sv: 'arc-raiders-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-arc-raiders',
		fr: 'fonctionnalites-triche-arc-raiders',
		de: 'escape-from-arc-raiders-cheats-funktionen',
		pt: 'recursos-cheats-arc-raiders',
		it: 'funzioni-trucchi-arc-raiders',
		nl: 'escape-from-arc-raiders-cheats-functies',
		pl: 'funkcje-cheatow-arc-raiders',
		ru: 'funkcii-chitov-arc-raiders',
		tr: 'arc-raiders-hile-ozellikleri',
		ar: 'escape-from-arc-raiders-cheats-features',
		ja: 'escape-from-arc-raiders-cheats-features',
		ko: 'escape-from-arc-raiders-cheats-features',
		zh: 'escape-from-arc-raiders-cheats-features',
		hi: 'escape-from-arc-raiders-cheats-features',
		id: 'escape-from-arc-raiders-cheats-features',
		th: 'escape-from-arc-raiders-cheats-features',
		vi: 'escape-from-arc-raiders-cheats-features',
		uk: 'funkcii-chitiv-arc-raiders',
		cs: 'escape-from-arc-raiders-cheats-funkce',
		ro: 'functii-cheats-arc-raiders',
		sv: 'escape-from-arc-raiders-cheats-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-arc-raiders',
		fr: 'prix-triche-arc-raiders',
		de: 'escape-from-arc-raiders-cheats-preise',
		pt: 'precos-cheats-arc-raiders',
		it: 'prezzi-trucchi-arc-raiders',
		nl: 'escape-from-arc-raiders-cheats-prijzen',
		pl: 'ceny-cheatow-arc-raiders',
		ru: 'ceny-chitov-arc-raiders',
		tr: 'arc-raiders-hile-fiyatlari',
		ar: 'escape-from-arc-raiders-cheats-pricing',
		ja: 'escape-from-arc-raiders-cheats-pricing',
		ko: 'escape-from-arc-raiders-cheats-pricing',
		zh: 'escape-from-arc-raiders-cheats-pricing',
		hi: 'escape-from-arc-raiders-cheats-pricing',
		id: 'escape-from-arc-raiders-cheats-pricing',
		th: 'escape-from-arc-raiders-cheats-pricing',
		vi: 'escape-from-arc-raiders-cheats-pricing',
		uk: 'ciny-chitiv-arc-raiders',
		cs: 'escape-from-arc-raiders-cheats-ceny',
		ro: 'preturi-cheats-arc-raiders',
		sv: 'escape-from-arc-raiders-cheats-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-arc-raiders',
		fr: 'installation-triche-arc-raiders',
		de: 'escape-from-arc-raiders-cheats-installation',
		pt: 'instalacao-cheats-arc-raiders',
		it: 'installazione-trucchi-arc-raiders',
		nl: 'escape-from-arc-raiders-cheats-installatie',
		pl: 'instalacja-cheatow-arc-raiders',
		ru: 'ustanovka-chitov-arc-raiders',
		tr: 'arc-raiders-hile-kurulum',
		ar: 'escape-from-arc-raiders-cheats-setup',
		ja: 'escape-from-arc-raiders-cheats-setup',
		ko: 'escape-from-arc-raiders-cheats-setup',
		zh: 'escape-from-arc-raiders-cheats-setup',
		hi: 'escape-from-arc-raiders-cheats-setup',
		id: 'escape-from-arc-raiders-cheats-setup',
		th: 'escape-from-arc-raiders-cheats-setup',
		vi: 'escape-from-arc-raiders-cheats-setup',
		uk: 'vstanovka-chitiv-arc-raiders',
		cs: 'escape-from-arc-raiders-cheats-instalace',
		ro: 'instalare-cheats-arc-raiders',
		sv: 'escape-from-arc-raiders-cheats-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-arc-raiders',
		fr: 'mises-a-jour-triche-arc-raiders',
		de: 'escape-from-arc-raiders-cheats-updates',
		pt: 'atualizacoes-cheats-arc-raiders',
		it: 'aggiornamenti-trucchi-arc-raiders',
		nl: 'escape-from-arc-raiders-cheats-updates',
		pl: 'aktualizacje-cheatow-arc-raiders',
		ru: 'obnovleniya-chitov-arc-raiders',
		tr: 'arc-raiders-hile-guncellemeleri',
		ar: 'escape-from-arc-raiders-cheats-updates',
		ja: 'escape-from-arc-raiders-cheats-updates',
		ko: 'escape-from-arc-raiders-cheats-updates',
		zh: 'escape-from-arc-raiders-cheats-updates',
		hi: 'escape-from-arc-raiders-cheats-updates',
		id: 'escape-from-arc-raiders-cheats-updates',
		th: 'escape-from-arc-raiders-cheats-updates',
		vi: 'escape-from-arc-raiders-cheats-updates',
		uk: 'onovlennya-chitiv-arc-raiders',
		cs: 'escape-from-arc-raiders-cheats-aktualizace',
		ro: 'actualizari-cheats-arc-raiders',
		sv: 'escape-from-arc-raiders-cheats-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-arc-raiders',
		fr: 'faq-triche-arc-raiders',
		de: 'escape-from-arc-raiders-cheats-faq',
		pt: 'faq-cheats-arc-raiders',
		it: 'faq-trucchi-arc-raiders',
		nl: 'escape-from-arc-raiders-cheats-faq',
		pl: 'faq-cheatow-arc-raiders',
		ru: 'faq-chitov-arc-raiders',
		tr: 'arc-raiders-hile-sss',
		ar: 'escape-from-arc-raiders-cheats-faq',
		ja: 'escape-from-arc-raiders-cheats-faq',
		ko: 'escape-from-arc-raiders-cheats-faq',
		zh: 'escape-from-arc-raiders-cheats-faq',
		hi: 'escape-from-arc-raiders-cheats-faq',
		id: 'escape-from-arc-raiders-cheats-faq',
		th: 'escape-from-arc-raiders-cheats-faq',
		vi: 'escape-from-arc-raiders-cheats-faq',
		uk: 'faq-chitiv-arc-raiders',
		cs: 'escape-from-arc-raiders-cheats-faq',
		ro: 'faq-cheats-arc-raiders',
		sv: 'escape-from-arc-raiders-cheats-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-arc-raiders',
		fr: 'support-triche-arc-raiders',
		de: 'escape-from-arc-raiders-cheats-support',
		pt: 'suporte-cheats-arc-raiders',
		it: 'supporto-trucchi-arc-raiders',
		nl: 'escape-from-arc-raiders-cheats-support',
		pl: 'wsparcie-cheatow-arc-raiders',
		ru: 'podderzhka-chitov-arc-raiders',
		tr: 'arc-raiders-hile-destek',
		ar: 'escape-from-arc-raiders-cheats-support',
		ja: 'escape-from-arc-raiders-cheats-support',
		ko: 'escape-from-arc-raiders-cheats-support',
		zh: 'escape-from-arc-raiders-cheats-support',
		hi: 'escape-from-arc-raiders-cheats-support',
		id: 'escape-from-arc-raiders-cheats-support',
		th: 'escape-from-arc-raiders-cheats-support',
		vi: 'escape-from-arc-raiders-cheats-support',
		uk: 'pidtrymka-chitiv-arc-raiders',
		cs: 'escape-from-arc-raiders-cheats-podpora',
		ro: 'suport-cheats-arc-raiders',
		sv: 'escape-from-arc-raiders-cheats-support',
	},
	undetected: {
		en: 'undetected-arc-raiders-cheats',
		es: 'trucos-arc-raiders-indetectables',
		fr: 'triche-arc-raiders-indetectable',
		de: 'unentdeckte-escape-from-arc-raiders-cheats',
		pt: 'cheats-arc-raiders-indetectaveis',
		it: 'trucchi-arc-raiders-indetectabili',
		nl: 'undetected-arc-raiders-cheats',
		pl: 'niewykrywalne-cheats-arc-raiders',
		ru: 'nedecektiruemye-chity-arc-raiders',
		tr: 'tespit-edilemeyen-arc-raiders-hileleri',
		ar: 'undetected-arc-raiders-cheats',
		ja: 'undetected-arc-raiders-cheats',
		ko: 'undetected-arc-raiders-cheats',
		zh: 'undetected-arc-raiders-cheats',
		hi: 'undetected-arc-raiders-cheats',
		id: 'undetected-arc-raiders-cheats',
		th: 'undetected-arc-raiders-cheats',
		vi: 'undetected-arc-raiders-cheats',
		uk: 'nedecektovani-chity-arc-raiders',
		cs: 'undetected-arc-raiders-cheats',
		ro: 'cheats-arc-raiders-nedetectabile',
		sv: 'undetected-arc-raiders-cheats',
	},
	wallhack: {
		en: 'arc-raiders-wallhack',
		es: 'wallhack-trucos-arc-raiders',
		fr: 'wallhack-triche-arc-raiders',
		de: 'arc-raiders-wallhack',
		pt: 'wallhack-cheats-arc-raiders',
		it: 'wallhack-trucchi-arc-raiders',
		nl: 'arc-raiders-wallhack',
		pl: 'wallhack-cheatow-arc-raiders',
		ru: 'wallhack-chity-arc-raiders',
		tr: 'arc-raiders-wallhack-hile',
		ar: 'arc-raiders-wallhack',
		ja: 'arc-raiders-wallhack',
		ko: 'arc-raiders-wallhack',
		zh: 'arc-raiders-wallhack',
		hi: 'arc-raiders-wallhack',
		id: 'arc-raiders-wallhack',
		th: 'arc-raiders-wallhack',
		vi: 'arc-raiders-wallhack',
		uk: 'wallhack-chity-arc-raiders',
		cs: 'arc-raiders-wallhack',
		ro: 'wallhack-cheats-arc-raiders',
		sv: 'arc-raiders-wallhack',
	},
	radar: {
		en: 'arc-raiders-radar-hack',
		es: 'radar-hack-trucos-arc-raiders',
		fr: 'radar-hack-triche-arc-raiders',
		de: 'arc-raiders-radar-hack',
		pt: 'radar-hack-cheats-arc-raiders',
		it: 'radar-hack-trucchi-arc-raiders',
		nl: 'arc-raiders-radar-hack',
		pl: 'radar-hack-cheatow-arc-raiders',
		ru: 'radar-hack-chity-arc-raiders',
		tr: 'arc-raiders-radar-hack',
		ar: 'arc-raiders-radar-hack',
		ja: 'arc-raiders-radar-hack',
		ko: 'arc-raiders-radar-hack',
		zh: 'arc-raiders-radar-hack',
		hi: 'arc-raiders-radar-hack',
		id: 'arc-raiders-radar-hack',
		th: 'arc-raiders-radar-hack',
		vi: 'arc-raiders-radar-hack',
		uk: 'radar-hack-chity-arc-raiders',
		cs: 'arc-raiders-radar-hack',
		ro: 'radar-hack-cheats-arc-raiders',
		sv: 'arc-raiders-radar-hack',
	},
	'eac': {
		en: 'eac-bypass',
		es: 'eac-bypass-trucos',
		fr: 'eac-bypass-triche',
		de: 'eac-bypass',
		pt: 'eac-bypass-cheats',
		it: 'eac-bypass-trucchi',
		nl: 'eac-bypass',
		pl: 'eac-bypass-cheatow',
		ru: 'eac-bypass-chity',
		tr: 'eac-bypass',
		ar: 'eac-bypass',
		ja: 'eac-bypass',
		ko: 'eac-bypass',
		zh: 'eac-bypass',
		hi: 'eac-bypass',
		id: 'eac-bypass',
		th: 'eac-bypass',
		vi: 'eac-bypass',
		uk: 'eac-bypass-chity',
		cs: 'eac-bypass',
		ro: 'eac-bypass-cheats',
		sv: 'eac-bypass',
	},
	'cheats-2026': {
		en: 'arc-raiders-cheats-2026',
		es: 'trucos-arc-raiders-2026',
		fr: 'triche-arc-raiders-2026',
		de: 'arc-raiders-cheats-2026',
		pt: 'cheats-arc-raiders-2026',
		it: 'trucchi-arc-raiders-2026',
		nl: 'arc-raiders-cheats-2026',
		pl: 'cheaty-arc-raiders-2026',
		ru: 'chity-arc-raiders-2026',
		tr: 'arc-raiders-hileleri-2026',
		ar: 'arc-raiders-cheats-2026',
		ja: 'arc-raiders-cheats-2026',
		ko: 'arc-raiders-cheats-2026',
		zh: 'arc-raiders-cheats-2026',
		hi: 'arc-raiders-cheats-2026',
		id: 'arc-raiders-cheats-2026',
		th: 'arc-raiders-cheats-2026',
		vi: 'arc-raiders-cheats-2026',
		uk: 'chity-arc-raiders-2026',
		cs: 'arc-raiders-cheats-2026',
		ro: 'cheats-arc-raiders-2026',
		sv: 'arc-raiders-cheats-2026',
	},
	hacks: {
		en: 'arc-raiders-cheats',
		es: 'hacks-trucos-arc-raiders',
		fr: 'hacks-triche-arc-raiders',
		de: 'arc-raiders-cheats',
		pt: 'hacks-cheats-arc-raiders',
		it: 'hacks-trucchi-arc-raiders',
		nl: 'arc-raiders-cheats',
		pl: 'hacks-cheatow-arc-raiders',
		ru: 'haksy-chity-arc-raiders',
		tr: 'arc-raiders-hile-hacks',
		ar: 'arc-raiders-cheats',
		ja: 'arc-raiders-cheats',
		ko: 'arc-raiders-cheats',
		zh: 'arc-raiders-cheats',
		hi: 'arc-raiders-cheats',
		id: 'arc-raiders-cheats',
		th: 'arc-raiders-cheats',
		vi: 'arc-raiders-cheats',
		uk: 'haksy-chity-arc-raiders',
		cs: 'arc-raiders-cheats',
		ro: 'hacks-cheats-arc-raiders',
		sv: 'arc-raiders-cheats',
	},
	'cheat-download': {
		en: 'arc-raiders-cheat-download',
		es: 'descarga-trucos-arc-raiders',
		fr: 'telechargement-triche-arc-raiders',
		de: 'arc-raiders-cheat-download',
		pt: 'download-cheats-arc-raiders',
		it: 'download-trucchi-arc-raiders',
		nl: 'arc-raiders-cheat-download',
		pl: 'pobieranie-cheatow-arc-raiders',
		ru: 'skachat-chity-arc-raiders',
		tr: 'arc-raiders-hile-indir',
		ar: 'arc-raiders-cheat-download',
		ja: 'arc-raiders-cheat-download',
		ko: 'arc-raiders-cheat-download',
		zh: 'arc-raiders-cheat-download',
		hi: 'arc-raiders-cheat-download',
		id: 'arc-raiders-cheat-download',
		th: 'arc-raiders-cheat-download',
		vi: 'arc-raiders-cheat-download',
		uk: 'zavantazhennya-chitiv-arc-raiders',
		cs: 'arc-raiders-cheat-download',
		ro: 'descarcare-cheats-arc-raiders',
		sv: 'arc-raiders-cheat-download',
	},
	'mod-menu': {
		en: 'arc-raiders-mod-menu',
		es: 'menu-mod-trucos-arc-raiders',
		fr: 'menu-mod-triche-arc-raiders',
		de: 'arc-raiders-mod-menu',
		pt: 'menu-mod-cheats-arc-raiders',
		it: 'menu-mod-trucchi-arc-raiders',
		nl: 'arc-raiders-mod-menu',
		pl: 'menu-mod-cheatow-arc-raiders',
		ru: 'mod-menu-chity-arc-raiders',
		tr: 'arc-raiders-mod-menu',
		ar: 'arc-raiders-mod-menu',
		ja: 'arc-raiders-mod-menu',
		ko: 'arc-raiders-mod-menu',
		zh: 'arc-raiders-mod-menu',
		hi: 'arc-raiders-mod-menu',
		id: 'arc-raiders-mod-menu',
		th: 'arc-raiders-mod-menu',
		vi: 'arc-raiders-mod-menu',
		uk: 'mod-menu-chity-arc-raiders',
		cs: 'arc-raiders-mod-menu',
		ro: 'meniu-mod-cheats-arc-raiders',
		sv: 'arc-raiders-mod-menu',
	},
	'soft-aim': {
		en: 'arc-raiders-soft-aim',
		es: 'soft-aim-trucos-arc-raiders',
		fr: 'soft-aim-triche-arc-raiders',
		de: 'arc-raiders-soft-aim',
		pt: 'soft-aim-cheats-arc-raiders',
		it: 'soft-aim-trucchi-arc-raiders',
		nl: 'arc-raiders-soft-aim',
		pl: 'soft-aim-cheatow-arc-raiders',
		ru: 'soft-aim-chity-arc-raiders',
		tr: 'arc-raiders-soft-aim',
		ar: 'arc-raiders-soft-aim',
		ja: 'arc-raiders-soft-aim',
		ko: 'arc-raiders-soft-aim',
		zh: 'arc-raiders-soft-aim',
		hi: 'arc-raiders-soft-aim',
		id: 'arc-raiders-soft-aim',
		th: 'arc-raiders-soft-aim',
		vi: 'arc-raiders-soft-aim',
		uk: 'soft-aim-chity-arc-raiders',
		cs: 'arc-raiders-soft-aim',
		ro: 'soft-aim-cheats-arc-raiders',
		sv: 'arc-raiders-soft-aim',
	},
	'best-cheats': {
		en: 'best-arc-raiders-cheats',
		es: 'mejores-trucos-arc-raiders',
		fr: 'meilleures-triches-arc-raiders',
		de: 'beste-escape-from-arc-raiders-cheats',
		pt: 'melhores-cheats-arc-raiders',
		it: 'migliori-trucchi-arc-raiders',
		nl: 'beste-escape-from-arc-raiders-cheats',
		pl: 'najlepsze-cheats-arc-raiders',
		ru: 'luchshie-chity-arc-raiders',
		tr: 'en-iyi-arc-raiders-hileleri',
		ar: 'best-arc-raiders-cheats',
		ja: 'best-arc-raiders-cheats',
		ko: 'best-arc-raiders-cheats',
		zh: 'best-arc-raiders-cheats',
		hi: 'best-arc-raiders-cheats',
		id: 'best-arc-raiders-cheats',
		th: 'best-arc-raiders-cheats',
		vi: 'best-arc-raiders-cheats',
		uk: 'naykrashchi-chity-arc-raiders',
		cs: 'nejlepsi-escape-from-arc-raiders-cheats',
		ro: 'cele-mai-bune-cheats-arc-raiders',
		sv: 'basta-escape-from-arc-raiders-cheats',
	},
	'aimbot-hack': {
		en: 'arc-raiders-aimbot-hack',
		es: 'aimbot-hack-trucos-arc-raiders',
		fr: 'aimbot-hack-triche-arc-raiders',
		de: 'arc-raiders-aimbot-hack',
		pt: 'aimbot-hack-cheats-arc-raiders',
		it: 'aimbot-hack-trucchi-arc-raiders',
		nl: 'arc-raiders-aimbot-hack',
		pl: 'aimbot-hack-cheatow-arc-raiders',
		ru: 'aimbot-hack-chity-arc-raiders',
		tr: 'arc-raiders-aimbot-hack',
		ar: 'arc-raiders-aimbot-hack',
		ja: 'arc-raiders-aimbot-hack',
		ko: 'arc-raiders-aimbot-hack',
		zh: 'arc-raiders-aimbot-hack',
		hi: 'arc-raiders-aimbot-hack',
		id: 'arc-raiders-aimbot-hack',
		th: 'arc-raiders-aimbot-hack',
		vi: 'arc-raiders-aimbot-hack',
		uk: 'aimbot-hack-chity-arc-raiders',
		cs: 'arc-raiders-aimbot-hack',
		ro: 'aimbot-hack-cheats-arc-raiders',
		sv: 'arc-raiders-aimbot-hack',
	},
	'esp-hack': {
		en: 'arc-raiders-esp-hack',
		es: 'esp-hack-trucos-arc-raiders',
		fr: 'esp-hack-triche-arc-raiders',
		de: 'arc-raiders-esp-hack',
		pt: 'esp-hack-cheats-arc-raiders',
		it: 'esp-hack-trucchi-arc-raiders',
		nl: 'arc-raiders-esp-hack',
		pl: 'esp-hack-cheatow-arc-raiders',
		ru: 'esp-hack-chity-arc-raiders',
		tr: 'arc-raiders-esp-hack',
		ar: 'arc-raiders-esp-hack',
		ja: 'arc-raiders-esp-hack',
		ko: 'arc-raiders-esp-hack',
		zh: 'arc-raiders-esp-hack',
		hi: 'arc-raiders-esp-hack',
		id: 'arc-raiders-esp-hack',
		th: 'arc-raiders-esp-hack',
		vi: 'arc-raiders-esp-hack',
		uk: 'esp-hack-chity-arc-raiders',
		cs: 'arc-raiders-esp-hack',
		ro: 'esp-hack-cheats-arc-raiders',
		sv: 'arc-raiders-esp-hack',
	},
	'unlock-all': {
		en: 'arc-raiders-unlock-all',
		es: 'unlock-all-trucos-arc-raiders',
		fr: 'unlock-all-triche-arc-raiders',
		de: 'arc-raiders-unlock-all',
		pt: 'unlock-all-cheats-arc-raiders',
		it: 'unlock-all-trucchi-arc-raiders',
		nl: 'arc-raiders-unlock-all',
		pl: 'unlock-all-cheatow-arc-raiders',
		ru: 'unlock-all-chity-arc-raiders',
		tr: 'arc-raiders-unlock-all',
		ar: 'arc-raiders-unlock-all',
		ja: 'arc-raiders-unlock-all',
		ko: 'arc-raiders-unlock-all',
		zh: 'arc-raiders-unlock-all',
		hi: 'arc-raiders-unlock-all',
		id: 'arc-raiders-unlock-all',
		th: 'arc-raiders-unlock-all',
		vi: 'arc-raiders-unlock-all',
		uk: 'unlock-all-chity-arc-raiders',
		cs: 'arc-raiders-unlock-all',
		ro: 'unlock-all-cheats-arc-raiders',
		sv: 'arc-raiders-unlock-all',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			const targetId = getCannibalTargetId(pageId) as PageId;
			return getLocalizedPath(targetId, locale);
		}
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getSelfHreflangAlternates(
	path: string,
	locale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: localeMap[locale].hreflang, href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, currentLocale: LocaleCode = defaultLocale) {
	const resolvedId = (isCannibalPageId(pageId) ? getCannibalTargetId(pageId) : pageId) as PageId;
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteLocalizedUrl(resolvedId, code),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: absoluteLocalizedUrl(resolvedId, defaultLocale),
	};
	// Self-referential hreflang first — required by Google/Seobility for the active locale.
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isBlogIndex?: boolean;
	blogSlug?: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'blog') {
		if (rest.length === 1) {
			return { locale, isBlogIndex: true };
		}
		return { locale, blogSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
	{ label: labels.hacks ?? 'Hacks', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.aimbot, href: getLocalizedPath('arc-raiders-aimbot', locale), pageId: 'arc-raiders-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('arc-raiders-esp', locale), pageId: 'arc-raiders-esp' },
		{ label: 'Blog', href: locale === defaultLocale ? '/blog/' : `/${locale}/blog/` },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
