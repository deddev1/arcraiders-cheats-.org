export type LocaleCode =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'pt'
	| 'it'
	| 'nl'
	| 'pl'
	| 'ru'
	| 'tr'
	| 'ar'
	| 'ja'
	| 'ko'
	| 'zh'
	| 'hi'
	| 'id'
	| 'th'
	| 'vi'
	| 'uk'
	| 'cs'
	| 'ro'
	| 'sv';

export type LocaleMeta = {
	code: LocaleCode;
	name: string;
	nativeName: string;
	hreflang: string;
	ogLocale: string;
	dir: 'ltr' | 'rtl';
	region: string;
};

/** 22 locales for global Arc Raiders Cheats blog SEO coverage. */
export const locales: LocaleMeta[] = [
	{ code: 'en', name: 'English', nativeName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr', region: 'Worldwide' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr', region: 'Worldwide' },
	{ code: 'fr', name: 'French', nativeName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', hreflang: 'pt', ogLocale: 'pt_BR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr', region: 'Worldwide' },
	{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr', region: 'Worldwide' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', hreflang: 'ar', ogLocale: 'ar_SA', dir: 'rtl', region: 'Worldwide' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', hreflang: 'zh', ogLocale: 'zh_CN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr', region: 'Worldwide' },
	{ code: 'th', name: 'Thai', nativeName: 'ไทย', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr', region: 'Worldwide' },
	{ code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'uk', name: 'Ukrainian', nativeName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr', region: 'Worldwide' },
	{ code: 'cs', name: 'Czech', nativeName: 'Čeština', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ro', name: 'Romanian', nativeName: 'Română', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', region: 'Worldwide' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr', region: 'Worldwide' },
];

export const defaultLocale: LocaleCode = 'en';

export const localeCodes = locales.map((l) => l.code);

export const localeMap = Object.fromEntries(locales.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleMeta
>;

export function isLocaleCode(value: string): value is LocaleCode {
	return localeCodes.includes(value as LocaleCode);
}

export function getLocale(code: string): LocaleMeta | undefined {
	return isLocaleCode(code) ? localeMap[code] : undefined;
}

/** UI strings for blog index pages per locale. */
export const blogUi: Record<
	LocaleCode,
	{
		blogTitle: string;
		blogDescription: string;
		blogH1: string;
		blogIntro: string;
		readMore: string;
		published: string;
		updated: string;
		relatedPosts: string;
		allPosts: string;
		home: string;
		language: string;
	}
> = {
	en: {
		blogTitle: 'Arc Raiders Cheats Blog | Raid Guides',
		blogDescription:
			'ARC Raiders guides — raid tips, ESP, aimbot notes, loot routes, and Easy Anti-Cheat update coverage. English blog at arcraiderscheats.org/blog/.',
		blogH1: 'Arc Raiders Cheats Intel',
		blogIntro:
			'Short ARC Raiders guides for surface raids and extraction runs. Pair these tips with the Arc Raiders Cheats product pages when you need ESP, soft aim, or radar.',
		readMore: 'Read guide',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related guides',
		allPosts: 'All blog posts',
		home: 'Arc Raiders Cheats home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog Arc Raiders Cheats 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de Arc Raiders Cheats con guías de trucos indetectables, ESP wallhack, radar y Aimbot para ARC Raiders en PC Windows.',
		blogH1: 'Blog Arc Raiders Cheats — Guías globales',
		blogIntro:
			'Guías SEO de trucos ARC Raiders indetectables, ESP wallhack, radar hack, Aimbot y mantenimiento Easy Anti-Cheat en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías ARC Raiders relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio Arc Raiders Cheats',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog Arc Raiders Cheats 2026 | Guides en 22 langues',
		blogDescription:
			'Blog Arc Raiders Cheats : triches indétectables, ESP wallhack, radar et Aimbot pour ARC Raiders sur PC Windows.',
		blogH1: 'Blog Arc Raiders Cheats — Guides mondiaux',
		blogIntro:
			'Guides SEO triches ARC Raiders indétectables, ESP wallhack, radar hack, Aimbot et Easy Anti-Cheat en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides ARC Raiders associés',
		allPosts: 'Tous les articles',
		home: 'Accueil Arc Raiders Cheats',
		language: 'Langue',
	},
	de: {
		blogTitle: 'Arc Raiders Cheats Blog 2026 | Guides in 22 Sprachen',
		blogDescription:
			'Arc Raiders Cheats Blog mit undetected ESP, Wallhack, Radar und Aimbot Guides für ARC Raiders auf Windows PC.',
		blogH1: 'Arc Raiders Cheats Blog — Globale Guides',
		blogIntro:
			'SEO-Guides für undetected Arc Raiders Cheats, ESP Wallhack, Radar Hack, Aimbot und Easy Anti-Cheat in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte ARC Raiders Guides',
		allPosts: 'Alle Beiträge',
		home: 'Arc Raiders Cheats Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog Arc Raiders Cheats 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog Arc Raiders Cheats com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot para ARC Raiders no PC.',
		blogH1: 'Blog Arc Raiders Cheats — Guias globais',
		blogIntro:
			'Guias SEO de cheats ARC Raiders indetectáveis, ESP wallhack, radar hack, Aimbot e Easy Anti-Cheat em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias ARC Raiders relacionados',
		allPosts: 'Todos os posts',
		home: 'Início Arc Raiders Cheats',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog Arc Raiders Cheats 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog Arc Raiders Cheats con guide cheat indetectable, ESP wallhack, radar e Aimbot per ARC Raiders su PC Windows.',
		blogH1: 'Blog Arc Raiders Cheats — Guide globali',
		blogIntro:
			'Guide SEO cheat ARC Raiders indetectable, ESP wallhack, radar hack, Aimbot e Easy Anti-Cheat in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide ARC Raiders correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home Arc Raiders Cheats',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'Arc Raiders Cheats Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'Arc Raiders Cheats blog met undetected ESP, wallhack, radar en Aimbot gidsen voor ARC Raiders op Windows PC.',
		blogH1: 'Arc Raiders Cheats Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor undetected Arc Raiders cheats, ESP wallhack, radar hack, Aimbot en Easy Anti-Cheat in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde ARC Raiders gidsen',
		allPosts: 'Alle posts',
		home: 'Arc Raiders Cheats home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog Arc Raiders Cheats 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog Arc Raiders Cheats z poradnikami undetected ESP, wallhack, radar i Aimbot dla ARC Raiders na PC.',
		blogH1: 'Blog Arc Raiders Cheats — Globalne poradniki',
		blogIntro:
			'Poradniki SEO undetected cheatów ARC Raiders, ESP wallhack, radar hack, Aimbot i Easy Anti-Cheat w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki ARC Raiders',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna Arc Raiders Cheats',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог Arc Raiders Cheats 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог Arc Raiders Cheats: undetected ESP, wallhack, radar и Aimbot для ARC Raiders на Windows PC.',
		blogH1: 'Блог Arc Raiders Cheats — Глобальные гайды',
		blogIntro:
			'SEO-гайды по undetected читам ARC Raiders, ESP wallhack, radar hack, Aimbot и Easy Anti-Cheat на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды ARC Raiders',
		allPosts: 'Все статьи',
		home: 'Главная Arc Raiders Cheats',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'Arc Raiders Cheats Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'Arc Raiders Cheats blog: undetected ESP, wallhack, radar ve Aimbot rehberleri ARC Raiders Windows PC.',
		blogH1: 'Arc Raiders Cheats Blog — Küresel rehberler',
		blogIntro:
			'Undetected ARC Raiders hileleri, ESP wallhack, radar hack, Aimbot ve Easy Anti-Cheat SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili ARC Raiders rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'Arc Raiders Cheats ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة Arc Raiders Cheats 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة Arc Raiders Cheats: غش undetected وESP wallhack ورadar وAimbot لـ ARC Raiders على Windows PC.',
		blogH1: 'مدونة Arc Raiders Cheats — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش ARC Raiders undetected وESP wallhack ورadar hack وAimbot وEasy Anti-Cheat بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة ARC Raiders ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية Arc Raiders Cheats',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'Arc Raiders Cheats ブログ 2026 | 22言語ガイド',
		blogDescription:
			'Arc Raiders Cheatsブログ：undetected ESP、wallhack、radar、Aimbotガイド。ARC Raiders Windows PC向け。',
		blogH1: 'Arc Raiders Cheats ブログ — グローバルガイド',
		blogIntro:
			'undetected ARC Raidersチート、ESP wallhack、radar hack、Aimbot、Easy Anti-CheatのSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連ARC Raidersガイド',
		allPosts: 'すべての記事',
		home: 'Arc Raiders Cheats ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'Arc Raiders Cheats 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'Arc Raiders Cheats 블로그: undetected ESP, wallhack, radar, Aimbot 가이드. ARC Raiders Windows PC.',
		blogH1: 'Arc Raiders Cheats 블로그 — 글로벌 가이드',
		blogIntro:
			'undetected ARC Raiders 치트, ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 ARC Raiders 가이드',
		allPosts: '모든 게시물',
		home: 'Arc Raiders Cheats 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'Arc Raiders Cheats 博客 2026 | 22种语言指南',
		blogDescription:
			'Arc Raiders Cheats博客：undetected ESP、wallhack、radar和Aimbot指南，适用于ARC Raiders Windows PC。',
		blogH1: 'Arc Raiders Cheats 博客 — 全球指南',
		blogIntro:
			'undetected ARC Raiders作弊、ESP wallhack、radar hack、Aimbot和Easy Anti-Cheat的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关ARC Raiders指南',
		allPosts: '所有文章',
		home: 'Arc Raiders Cheats 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'Arc Raiders Cheats ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'Arc Raiders Cheats ब्लॉग: undetected ESP, wallhack, radar और Aimbot गाइड ARC Raiders Windows PC के लिए।',
		blogH1: 'Arc Raiders Cheats ब्लॉग — वैश्विक गाइड',
		blogIntro:
			'undetected Arc Raiders cheats, ESP wallhack, radar hack, Aimbot और Easy Anti-Cheat SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित ARC Raiders गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'Arc Raiders Cheats होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog Arc Raiders Cheats 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog Arc Raiders Cheats: panduan undetected ESP, wallhack, radar dan Aimbot untuk ARC Raiders di PC Windows.',
		blogH1: 'Blog Arc Raiders Cheats — Panduan global',
		blogIntro:
			'Panduan SEO cheat ARC Raiders undetected, ESP wallhack, radar hack, Aimbot dan Easy Anti-Cheat dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Panduan ARC Raiders terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda Arc Raiders Cheats',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก Arc Raiders Cheats 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก Arc Raiders Cheats: คู่มือ undetected ESP, wallhack, radar และ Aimbot สำหรับ ARC Raiders บน PC',
		blogH1: 'บล็อก Arc Raiders Cheats — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat ARC Raiders undetected, ESP wallhack, radar hack, Aimbot และ Easy Anti-Cheat 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ ARC Raiders ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก Arc Raiders Cheats',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog Arc Raiders Cheats 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog Arc Raiders Cheats: hướng dẫn undetected ESP, wallhack, radar và Aimbot cho ARC Raiders trên PC.',
		blogH1: 'Blog Arc Raiders Cheats — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat ARC Raiders undetected, ESP wallhack, radar hack, Aimbot và Easy Anti-Cheat bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn ARC Raiders liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ Arc Raiders Cheats',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог Arc Raiders Cheats 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог Arc Raiders Cheats: undetected ESP, wallhack, radar та Aimbot для ARC Raiders на Windows PC.',
		blogH1: 'Блог Arc Raiders Cheats — Глобальні гайди',
		blogIntro:
			'SEO-гайди з undetected читів ARC Raiders, ESP wallhack, radar hack, Aimbot та Easy Anti-Cheat 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди ARC Raiders",
		allPosts: 'Усі статті',
		home: 'Головна Arc Raiders Cheats',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog Arc Raiders Cheats 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog Arc Raiders Cheats: undetected ESP, wallhack, radar a Aimbot pro ARC Raiders na Windows PC.',
		blogH1: 'Blog Arc Raiders Cheats — Globální průvodce',
		blogIntro:
			'SEO průvodce undetected Arc Raiders cheaty, ESP wallhack, radar hack, Aimbot a Easy Anti-Cheat ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související ARC Raiders průvodce',
		allPosts: 'Všechny články',
		home: 'Domů Arc Raiders Cheats',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog Arc Raiders Cheats 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog Arc Raiders Cheats: ghiduri undetected ESP, wallhack, radar și Aimbot pentru ARC Raiders pe PC.',
		blogH1: 'Blog Arc Raiders Cheats — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri ARC Raiders undetected, ESP wallhack, radar hack, Aimbot și Easy Anti-Cheat în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri ARC Raiders related',
		allPosts: 'Toate articolele',
		home: 'Acasă Arc Raiders Cheats',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'Arc Raiders Cheats Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'Arc Raiders Cheats blogg med undetected ESP, wallhack, radar och Aimbot guider för ARC Raiders på PC.',
		blogH1: 'Arc Raiders Cheats Blogg — Globala guider',
		blogIntro:
			'SEO-guider för undetected Arc Raiders cheats, ESP wallhack, radar hack, Aimbot och Easy Anti-Cheat på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade ARC Raiders guider',
		allPosts: 'Alla inlägg',
		home: 'Arc Raiders Cheats hem',
		language: 'Språk',
	},
};
