import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';
import { PAGE_IMAGE_ALTS } from './image-alts.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Arc Raiders Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos ARC Raiders indetectables para ARC Raiders en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Easy Anti-Cheat. Entrega digital instantánea.', h1: 'Arc Raiders Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para ARC Raiders en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Easy Anti-Cheat tras cada parche.', imageAlt: 'Arc Raiders ESP player tags hack', gallery: 'Galería Arc Raiders Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Arc Raiders Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y extraction runs.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Arc Raiders Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches ARC Raiders indétectables pour ARC Raiders sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Easy Anti-Cheat. Livraison numérique instantanée.', h1: 'Arc Raiders Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour ARC Raiders sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Easy Anti-Cheat après chaque patch.', imageAlt: 'Arc Raiders ESP player tags hack', gallery: 'Galerie Arc Raiders Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Arc Raiders Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en BR et extraction runs.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Arc Raiders Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Arc Raiders Cheats für ARC Raiders auf PC. ESP Wallhack, Radar Hack und Aimbot mit Easy Anti-Cheat-Wartung. Sofortige digitale Lieferung.', h1: 'Arc Raiders Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für ARC Raiders: ESP Wallhack, Radar und Aimbot mit Easy Anti-Cheat-Wartung nach jedem Patch.', imageAlt: 'Arc Raiders ESP player tags hack', gallery: 'Arc Raiders Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Arc Raiders Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und extraction runs zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Arc Raiders Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats ARC Raiders indetectáveis para ARC Raiders no PC. ESP wallhack, radar hack e Aimbot com manutenção Easy Anti-Cheat. Entrega digital instantánea.', h1: 'Arc Raiders Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para ARC Raiders no Windows PC: ESP wallhack, radar e Aimbot com manutenção Easy Anti-Cheat após cada patch.', imageAlt: 'Arc Raiders ESP player tags hack', gallery: 'Galeria Arc Raiders Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Arc Raiders Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em BR e extraction runs.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Arc Raiders Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat ARC Raiders indetectable per ARC Raiders su PC. ESP wallhack, radar hack e Aimbot con manutenzione Easy Anti-Cheat. Consegna digitale istantanea.', h1: 'Arc Raiders Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per ARC Raiders su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Easy Anti-Cheat dopo ogni patch.', imageAlt: 'Arc Raiders ESP player tags hack', gallery: 'Galleria Arc Raiders Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Arc Raiders Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in BR e extraction runs.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Arc Raiders Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Arc Raiders cheats voor ARC Raiders op PC. ESP wallhack, radar hack en Aimbot met Easy Anti-Cheat-onderhoud. Directe digitale levering.', h1: 'Arc Raiders Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor ARC Raiders: ESP wallhack, radar en Aimbot met Easy Anti-Cheat-onderhoud na elke patch.', imageAlt: 'Arc Raiders ESP player tags hack', gallery: 'Arc Raiders Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Arc Raiders Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in BR en extraction runs.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Arc Raiders Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty ARC Raiders dla ARC Raiders na PC. ESP wallhack, radar hack i Aimbot z konserwacją Easy Anti-Cheat. Natychmiastowa dostawa cyfrowa.', h1: 'Arc Raiders Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla ARC Raiders na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Easy Anti-Cheat po każdym patchu.', imageAlt: 'Arc Raiders ESP player tags hack', gallery: 'Galeria Arc Raiders Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Arc Raiders Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i extraction runs.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Arc Raiders Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы ARC Raiders для ARC Raiders на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'Arc Raiders Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для ARC Raiders на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Easy Anti-Cheat после патчей.', imageAlt: 'Arc Raiders ESP player tags hack', gallery: 'Галерея Arc Raiders Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Arc Raiders Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и extraction runs.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Arc Raiders Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'ARC Raiders için undetected hileler. ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat bakımı. Anında dijital teslimat.', h1: 'Arc Raiders Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'ARC Raiders Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Easy Anti-Cheat bakımı dahil.', imageAlt: 'Arc Raiders ESP player tags hack', gallery: 'Arc Raiders Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Arc Raiders Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve extraction runs\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Arc Raiders Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش ARC Raiders undetected لـ ARC Raiders على PC. ESP wallhack ورadar hack وAimbot مع صيانة Easy Anti-Cheat. تسليم رقمي فوري.', h1: 'Arc Raiders Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ ARC Raiders على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Easy Anti-Cheat.', imageAlt: 'Arc Raiders ESP player tags hack', gallery: 'معرض Arc Raiders Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Arc Raiders Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وextraction runs.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Arc Raiders Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'ARC Raiders向けundetectedチート。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheatメンテナンス。即時デジタル配信。', h1: 'Arc Raiders Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'ARC Raiders Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Easy Anti-Cheatメンテナンス付き。', imageAlt: 'Arc Raiders cheats hero ESP aimbot wallhack', gallery: 'Arc Raiders Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にArc Raiders Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとextraction runsで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Arc Raiders Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'ARC Raiders undetected 치트. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat 유지보수. 즉시 디지털 배송.', h1: 'Arc Raiders Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'ARC Raiders Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Easy Anti-Cheat 유지보수 포함.', imageAlt: 'Arc Raiders cheats hero ESP aimbot wallhack', gallery: 'Arc Raiders Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Arc Raiders Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 extraction runs에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Arc Raiders Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'ARC Raiders undetected作弊。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheat维护。即时数字交付。', h1: 'Arc Raiders Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'ARC Raiders Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Easy Anti-Cheat维护。', imageAlt: 'Arc Raiders cheats hero ESP aimbot wallhack', gallery: 'Arc Raiders Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Arc Raiders Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和extraction runs中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Arc Raiders Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'ARC Raiders undetected cheats. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. Instant digital delivery.', h1: 'Arc Raiders Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'ARC Raiders Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, Easy Anti-Cheat maintenance सहित.', imageAlt: 'Arc Raiders cheats hero ESP aimbot wallhack', gallery: 'Arc Raiders Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Arc Raiders Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और extraction runs में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Arc Raiders Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat ARC Raiders undetected untuk ARC Raiders di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Easy Anti-Cheat. Pengiriman digital instan.', h1: 'Arc Raiders Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected ARC Raiders di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Easy Anti-Cheat.', imageAlt: 'Arc Raiders ESP player tags hack', gallery: 'Galeri Arc Raiders Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Arc Raiders Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan extraction runs.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Arc Raiders Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat ARC Raiders undetected สำหรับ ARC Raiders บน PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. จัดส่งดิจิทัลทันที.', h1: 'Arc Raiders Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ ARC Raiders บน Windows PC: ESP wallhack, radar, Aimbot พร้อม Easy Anti-Cheat maintenance', imageAlt: 'Arc Raiders ESP player tags hack', gallery: 'แกลเลอรี Arc Raiders Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Arc Raiders Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ extraction runs', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Arc Raiders Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat ARC Raiders undetected cho ARC Raiders trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Easy Anti-Cheat. Giao hàng kỹ thuật số tức thì.', h1: 'Arc Raiders Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected ARC Raiders trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Easy Anti-Cheat.', imageAlt: 'Arc Raiders ESP player tags hack', gallery: 'Thư viện Arc Raiders Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Arc Raiders Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và extraction runs.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Arc Raiders Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти ARC Raiders для ARC Raiders на PC. ESP wallhack, radar hack, Aimbot, обслуговування Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'Arc Raiders Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для ARC Raiders на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Easy Anti-Cheat.', imageAlt: 'Arc Raiders ESP player tags hack', gallery: 'Галерея Arc Raiders Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Arc Raiders Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і extraction runs.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Arc Raiders Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected Arc Raiders cheaty pro ARC Raiders na PC. ESP wallhack, radar hack, Aimbot, údržba Easy Anti-Cheat. Okamžité digitální doručení.', h1: 'Arc Raiders Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro ARC Raiders na Windows PC: ESP wallhack, radar, Aimbot s údržbou Easy Anti-Cheat.', imageAlt: 'Arc Raiders ESP player tags hack', gallery: 'Galerie Arc Raiders Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Arc Raiders Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a extraction runs.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Arc Raiders Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats ARC Raiders undetected pentru ARC Raiders pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Easy Anti-Cheat. Livrare digitală instantă.', h1: 'Arc Raiders Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected ARC Raiders pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Easy Anti-Cheat.', imageAlt: 'Arc Raiders ESP player tags hack', gallery: 'Galerie Arc Raiders Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Arc Raiders Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și extraction runs.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Arc Raiders Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Arc Raiders cheats för ARC Raiders på PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat-underhåll. Omedelbar digital leverans.', h1: 'Arc Raiders Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för ARC Raiders på Windows PC: ESP wallhack, radar, Aimbot med Easy Anti-Cheat-underhåll.', imageAlt: 'Arc Raiders ESP player tags hack', gallery: 'Arc Raiders Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Arc Raiders Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och extraction runs.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique title/desc tails per page — English base + locale overrides for hero H1/subtitle. */
const PAGE_META_TAILS = {
	'arc-raiders-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, loot markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'arc-raiders-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'Easy Anti-Cheat Maintenance Log', focus: 'Easy Anti-Cheat patch status and rebuild notes', altKeyword: 'updates Easy Anti-Cheat maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and Easy Anti-Cheat questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'Easy Anti-Cheat Safe Status', focus: 'undetected maintenance after Easy Anti-Cheat patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations', altKeyword: 'radar hack overlay' },
	eac: { suffix: 'Patch Maintenance', focus: 'how Easy Anti-Cheat updates are handled for ARC Raiders hacks', altKeyword: 'Easy Anti-Cheat bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 Arc Raiders cheats checklist before checkout', altKeyword: 'cheats 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the ARC Raiders hacks pillar for ESP and Aimbot', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles', altKeyword: 'mod menu ESP aimbot' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for Windows PC', altKeyword: 'soft aim aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying Arc Raiders cheats', altKeyword: 'best cheats ESP aimbot' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for ARC Raiders', altKeyword: 'aimbot hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance', altKeyword: 'ESP hack wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all ESP aimbot' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
const SUFFIX_I18N = {
	es: {
		'arc-raiders-esp': 'Cajas de jugador y wallhack',
		'arc-raiders-aimbot': 'Controles soft aim',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		radar: 'Radar 2D de amenazas',
		eac: 'Mantenimiento de parches',
		'cheats-2026': 'Guía del comprador',
		hacks: 'Guía ESP y Aimbot',
		'cheat-download': 'Acceso instantáneo',
		'mod-menu': 'Controles en partida',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Lista de compra',
		'aimbot-hack': 'Asistencia soft aim',
		'esp-hack': 'Cajas y loot',
		'unlock-all': 'Qué significa',
	},
	fr: {
		'arc-raiders-esp': 'Boîtes joueur et wallhack',
		'arc-raiders-aimbot': 'Contrôles soft aim',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'Guide d\'installation PC',
		updates: 'Journal Easy Anti-Cheat',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		radar: 'Radar 2D des menaces',
		eac: 'Maintenance des patchs',
		'cheats-2026': 'Guide acheteur',
		hacks: 'Guide ESP et Aimbot',
		'cheat-download': 'Accès instantané',
		'mod-menu': 'Contrôles en jeu',
		'soft-aim': 'Réglages soft aim',
		'best-cheats': 'Checklist acheteur',
		'aimbot-hack': 'Assistance soft aim',
		'esp-hack': 'Boîtes et loot',
		'unlock-all': 'Ce que ça signifie',
	},
	de: {
		'arc-raiders-esp': 'Spielerboxen & Wallhack',
		'arc-raiders-aimbot': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'Easy Anti-Cheat Wartungslog',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: 'Undetected Status',
		wallhack: 'ESP Sichtbarkeit',
		radar: '2D Bedrohungsradar',
		eac: 'Patch-Wartung',
		'cheats-2026': 'Käuferleitfaden',
		hacks: 'ESP Aimbot Guide',
		'cheat-download': 'Sofortzugang',
		'mod-menu': 'In-Game Toggles',
		'soft-aim': 'Soft-Aim Einstellungen',
		'best-cheats': 'Käufer-Checkliste',
		'aimbot-hack': 'Soft-Aim Assist',
		'esp-hack': 'Boxen & Loot',
		'unlock-all': 'Was es bedeutet',
	},
	pt: {
		'arc-raiders-esp': 'Caixas de jogador e wallhack',
		'arc-raiders-aimbot': 'Controles soft aim',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		radar: 'Radar 2D de ameaças',
		eac: 'Manutenção de patches',
		'cheats-2026': 'Guia do comprador',
		hacks: 'Guia ESP e Aimbot',
		'cheat-download': 'Acesso instantâneo',
		'mod-menu': 'Controles in-game',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Checklist do comprador',
		'aimbot-hack': 'Assistência soft aim',
		'esp-hack': 'Caixas e loot',
		'unlock-all': 'O que significa',
	},
	it: {
		'arc-raiders-esp': 'Box giocatore e wallhack',
		'arc-raiders-aimbot': 'Controlli soft aim',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione Easy Anti-Cheat',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		radar: 'Radar 2D minacce',
		eac: 'Manutenzione patch',
		'cheats-2026': 'Guida acquirente',
		hacks: 'Guida ESP e Aimbot',
		'cheat-download': 'Accesso istantaneo',
		'mod-menu': 'Toggle in-game',
		'soft-aim': 'Impostazioni soft aim',
		'best-cheats': 'Checklist acquirente',
		'aimbot-hack': 'Assist soft aim',
		'esp-hack': 'Box e loot',
		'unlock-all': 'Cosa significa',
	},
	ru: {
		'arc-raiders-esp': 'Боксы игроков и wallhack',
		'arc-raiders-aimbot': 'Управление soft aim',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал Easy Anti-Cheat',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус undetected',
		wallhack: 'Видимость ESP',
		radar: '2D радар угроз',
		eac: 'Обслуживание патчей',
		'cheats-2026': 'Гайд покупателя',
		hacks: 'Гайд ESP и Aimbot',
		'cheat-download': 'Мгновенный доступ',
		'mod-menu': 'Игровые переключатели',
		'soft-aim': 'Настройки soft aim',
		'best-cheats': 'Чеклист покупателя',
		'aimbot-hack': 'Soft aim ассист',
		'esp-hack': 'Боксы и лут',
		'unlock-all': 'Что это значит',
	},
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Arc Raiders Cheats', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? meta.suffix;
	const titleBase = `${topicName} | ${suffix}`;
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(`${topicName}: ${meta.focus}. ${p.delivery}. ${p.undetected} — ${p.win}.`),
		),
		h1: topicName,
		intro: p.s1(`${topicName}.`),
		imageAlt: PAGE_IMAGE_ALTS[pageKey] || `${topicName} — Arc Raiders Cheats screenshot`,
		galleryTitle: topicName,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(topicName, p.s1(`${meta.focus}.`), p.s2()),
			section(`${p.undetected}`, p.s3(), p.s2()),
			section(p.delivery, p.s2(), p.legal()),
		],
	};
}

const TOPIC_NAMES = {
	'arc-raiders-esp': { en: 'Arc Raiders ESP', es: 'ESP Arc Raiders', fr: 'ESP Arc Raiders', de: 'Arc Raiders ESP', pt: 'ESP Arc Raiders', it: 'ESP Arc Raiders', nl: 'Arc Raiders ESP', pl: 'ESP Arc Raiders', ru: 'ESP Arc Raiders', tr: 'Arc Raiders ESP', ar: 'ESP Arc Raiders', ja: 'Arc Raiders ESP', ko: 'Arc Raiders ESP', zh: 'Arc Raiders ESP', hi: 'Arc Raiders ESP', id: 'ESP Arc Raiders', th: 'Arc Raiders ESP', vi: 'ESP Arc Raiders', uk: 'ESP Arc Raiders', cs: 'Arc Raiders ESP', ro: 'ESP Arc Raiders', sv: 'Arc Raiders ESP' },
	'arc-raiders-aimbot': { en: 'Arc Raiders Aimbot', es: 'Aimbot Arc Raiders', fr: 'Aimbot Arc Raiders', de: 'Arc Raiders Aimbot', pt: 'Aimbot Arc Raiders', it: 'Aimbot Arc Raiders', nl: 'Arc Raiders Aimbot', pl: 'Aimbot Arc Raiders', ru: 'Aimbot Arc Raiders', tr: 'Arc Raiders Aimbot', ar: 'Aimbot Arc Raiders', ja: 'Arc Raiders Aimbot', ko: 'Arc Raiders Aimbot', zh: 'Arc Raiders Aimbot', hi: 'Arc Raiders Aimbot', id: 'Aimbot Arc Raiders', th: 'Arc Raiders Aimbot', vi: 'Aimbot Arc Raiders', uk: 'Aimbot Arc Raiders', cs: 'Arc Raiders Aimbot', ro: 'Aimbot Arc Raiders', sv: 'Arc Raiders Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Arc Raiders Wallhack', es: 'Wallhack Arc Raiders', fr: 'Wallhack Arc Raiders', de: 'Arc Raiders Wallhack', pt: 'Wallhack Arc Raiders', it: 'Wallhack Arc Raiders', nl: 'Arc Raiders Wallhack', pl: 'Wallhack Arc Raiders', ru: 'Wallhack Arc Raiders', tr: 'Arc Raiders Wallhack', ar: 'Wallhack Arc Raiders', ja: 'Arc Raiders Wallhack', ko: 'Arc Raiders Wallhack', zh: 'Arc Raiders Wallhack', hi: 'Arc Raiders Wallhack', id: 'Wallhack Arc Raiders', th: 'Arc Raiders Wallhack', vi: 'Wallhack Arc Raiders', uk: 'Wallhack Arc Raiders', cs: 'Arc Raiders Wallhack', ro: 'Wallhack Arc Raiders', sv: 'Arc Raiders Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	eac: { en: 'Easy Anti-Cheat Bypass', es: 'Bypass Easy Anti-Cheat', fr: 'Bypass Easy Anti-Cheat', de: 'Easy Anti-Cheat Bypass', pt: 'Bypass Easy Anti-Cheat', it: 'Bypass Easy Anti-Cheat', nl: 'Easy Anti-Cheat Bypass', pl: 'Bypass Easy Anti-Cheat', ru: 'Bypass Easy Anti-Cheat', tr: 'Easy Anti-Cheat bypass', ar: 'Bypass Easy Anti-Cheat', ja: 'Easy Anti-Cheat Bypass', ko: 'Easy Anti-Cheat Bypass', zh: 'Easy Anti-Cheat Bypass', hi: 'Easy Anti-Cheat Bypass', id: 'Bypass Easy Anti-Cheat', th: 'Easy Anti-Cheat Bypass', vi: 'Bypass Easy Anti-Cheat', uk: 'Bypass Easy Anti-Cheat', cs: 'Easy Anti-Cheat Bypass', ro: 'Bypass Easy Anti-Cheat', sv: 'Easy Anti-Cheat Bypass' },
	'cheats-2026': { en: 'Arc Raiders Cheats 2026', es: 'Trucos Arc Raiders 2026', fr: 'Triches Arc Raiders 2026', de: 'Arc Raiders Cheats 2026', pt: 'Cheats Arc Raiders 2026', it: 'Cheat Arc Raiders 2026', nl: 'Arc Raiders Cheats 2026', pl: 'Cheaty Arc Raiders 2026', ru: 'Читы Arc Raiders 2026', tr: 'Arc Raiders Hileleri 2026', ar: 'غش Arc Raiders 2026', ja: 'Arc Raiders Cheats 2026', ko: 'Arc Raiders Cheats 2026', zh: 'Arc Raiders作弊 2026', hi: 'Arc Raiders Cheats 2026', id: 'Cheat Arc Raiders 2026', th: 'Arc Raiders Cheats 2026', vi: 'Cheat Arc Raiders 2026', uk: 'Чіти Arc Raiders 2026', cs: 'Arc Raiders cheaty 2026', ro: 'Cheats Arc Raiders 2026', sv: 'Arc Raiders Cheats 2026' },
	hacks: { en: 'Arc Raiders Cheats', es: 'Trucos Arc Raiders', fr: 'Triches Arc Raiders', de: 'Arc Raiders Cheats', pt: 'Cheats Arc Raiders', it: 'Cheat Arc Raiders', nl: 'Arc Raiders Cheats', pl: 'Cheaty Arc Raiders', ru: 'Читы Arc Raiders', tr: 'Arc Raiders Hileleri', ar: 'غش Arc Raiders', ja: 'Arc Raiders Cheats', ko: 'Arc Raiders Cheats', zh: 'Arc Raiders作弊', hi: 'Arc Raiders Cheats', id: 'Cheat Arc Raiders', th: 'Arc Raiders Cheats', vi: 'Cheat Arc Raiders', uk: 'Чіти Arc Raiders', cs: 'Arc Raiders cheaty', ro: 'Cheats Arc Raiders', sv: 'Arc Raiders Cheats' },
	'cheat-download': { en: 'Arc Raiders Cheat Download', es: 'Descarga Arc Raiders Cheats', fr: 'Téléchargement Arc Raiders Cheats', de: 'Arc Raiders Cheat Download', pt: 'Download Arc Raiders Cheats', it: 'Download Arc Raiders Cheats', nl: 'Arc Raiders Cheat Download', pl: 'Pobieranie Arc Raiders Cheats', ru: 'Скачать Arc Raiders Cheats', tr: 'Arc Raiders Hile İndir', ar: 'تحميل Arc Raiders Cheats', ja: 'Arc Raiders Cheat Download', ko: 'Arc Raiders Cheat Download', zh: 'Arc Raiders作弊下载', hi: 'Arc Raiders Cheat Download', id: 'Download Cheat Arc Raiders', th: 'ดาวน์โหลด Arc Raiders Cheats', vi: 'Tải Cheat Arc Raiders', uk: 'Завантаження Arc Raiders Cheats', cs: 'Stáhnout Arc Raiders Cheats', ro: 'Descărcare Arc Raiders Cheats', sv: 'Arc Raiders Cheat Download' },
	'mod-menu': { en: 'Arc Raiders Mod Menu', es: 'Menú mod Arc Raiders', fr: 'Menu mod Arc Raiders', de: 'Arc Raiders Mod-Menü', pt: 'Menu mod Arc Raiders', it: 'Mod menu Arc Raiders', nl: 'Arc Raiders Mod Menu', pl: 'Mod menu Arc Raiders', ru: 'Мод-меню Arc Raiders', tr: 'Arc Raiders Mod Menü', ar: 'قائمة مود Arc Raiders', ja: 'Arc Raiders Mod Menu', ko: 'Arc Raiders 모드 메뉴', zh: 'Arc Raiders修改菜单', hi: 'Arc Raiders Mod Menu', id: 'Menu mod Arc Raiders', th: 'เมนูมอด Arc Raiders', vi: 'Mod menu Arc Raiders', uk: 'Мод-меню Arc Raiders', cs: 'Arc Raiders mod menu', ro: 'Meniu mod Arc Raiders', sv: 'Arc Raiders Mod-meny' },
	'soft-aim': { en: 'Arc Raiders Soft Aim', es: 'Soft aim Arc Raiders', fr: 'Soft aim Arc Raiders', de: 'Arc Raiders Soft Aim', pt: 'Soft aim Arc Raiders', it: 'Soft aim Arc Raiders', nl: 'Arc Raiders Soft Aim', pl: 'Soft aim Arc Raiders', ru: 'Soft aim Arc Raiders', tr: 'Arc Raiders Soft Aim', ar: 'Soft aim Arc Raiders', ja: 'Arc Raiders Soft Aim', ko: 'Arc Raiders Soft Aim', zh: 'Arc Raiders Soft Aim', hi: 'Arc Raiders Soft Aim', id: 'Soft aim Arc Raiders', th: 'Arc Raiders Soft Aim', vi: 'Soft aim Arc Raiders', uk: 'Soft aim Arc Raiders', cs: 'Arc Raiders Soft Aim', ro: 'Soft aim Arc Raiders', sv: 'Arc Raiders Soft Aim' },
	'best-cheats': { en: 'Best Arc Raiders Cheats', es: 'Mejores trucos Arc Raiders', fr: 'Meilleures triches Arc Raiders', de: 'Beste Arc Raiders Cheats', pt: 'Melhores cheats Arc Raiders', it: 'Migliori cheat Arc Raiders', nl: 'Beste Arc Raiders Cheats', pl: 'Najlepsze cheaty Arc Raiders', ru: 'Лучшие читы Arc Raiders', tr: 'En İyi Arc Raiders Hileleri', ar: 'أفضل غش Arc Raiders', ja: '最強Arc Raidersチート', ko: '최고의 Arc Raiders 치트', zh: '最佳Arc Raiders作弊', hi: 'सर्वश्रेष्ठ Arc Raiders Cheats', id: 'Cheat Arc Raiders terbaik', th: 'Cheat Arc Raiders ที่ดีที่สุด', vi: 'Cheat Arc Raiders tốt nhất', uk: 'Найкращі чіти Arc Raiders', cs: 'Nejlepší Arc Raiders cheaty', ro: 'Cele mai bune cheats Arc Raiders', sv: 'Bästa Arc Raiders Cheats' },
	'aimbot-hack': { en: 'Arc Raiders Aimbot Hack', es: 'Hack aimbot Arc Raiders', fr: 'Hack aimbot Arc Raiders', de: 'Arc Raiders Aimbot Hack', pt: 'Hack aimbot Arc Raiders', it: 'Hack aimbot Arc Raiders', nl: 'Arc Raiders Aimbot Hack', pl: 'Hack aimbot Arc Raiders', ru: 'Хак aimbot Arc Raiders', tr: 'Arc Raiders Aimbot Hilesi', ar: 'هاك Aimbot Arc Raiders', ja: 'Arc Raiders Aimbot Hack', ko: 'Arc Raiders 에임봇 핵', zh: 'Arc Raiders自瞄外挂', hi: 'Arc Raiders Aimbot Hack', id: 'Hack aimbot Arc Raiders', th: 'Hack Aimbot Arc Raiders', vi: 'Hack aimbot Arc Raiders', uk: 'Хак aimbot Arc Raiders', cs: 'Arc Raiders aimbot hack', ro: 'Hack aimbot Arc Raiders', sv: 'Arc Raiders Aimbot Hack' },
	'esp-hack': { en: 'Arc Raiders ESP Hack', es: 'Hack ESP Arc Raiders', fr: 'Hack ESP Arc Raiders', de: 'Arc Raiders ESP Hack', pt: 'Hack ESP Arc Raiders', it: 'Hack ESP Arc Raiders', nl: 'Arc Raiders ESP Hack', pl: 'Hack ESP Arc Raiders', ru: 'Хак ESP Arc Raiders', tr: 'Arc Raiders ESP Hilesi', ar: 'هاك ESP Arc Raiders', ja: 'Arc Raiders ESP Hack', ko: 'Arc Raiders ESP 핵', zh: 'Arc Raiders ESP外挂', hi: 'Arc Raiders ESP Hack', id: 'Hack ESP Arc Raiders', th: 'Hack ESP Arc Raiders', vi: 'Hack ESP Arc Raiders', uk: 'Хак ESP Arc Raiders', cs: 'Arc Raiders ESP hack', ro: 'Hack ESP Arc Raiders', sv: 'Arc Raiders ESP Hack' },
	'unlock-all': { en: 'Arc Raiders Unlock All', es: 'Unlock all Arc Raiders', fr: 'Unlock all Arc Raiders', de: 'Arc Raiders Unlock All', pt: 'Unlock all Arc Raiders', it: 'Unlock all Arc Raiders', nl: 'Arc Raiders Unlock All', pl: 'Unlock all Arc Raiders', ru: 'Unlock all Arc Raiders', tr: 'Arc Raiders Unlock All', ar: 'Unlock all Arc Raiders', ja: 'Arc Raiders Unlock All', ko: 'Arc Raiders Unlock All', zh: 'Arc Raiders Unlock All', hi: 'Arc Raiders Unlock All', id: 'Unlock all Arc Raiders', th: 'Arc Raiders Unlock All', vi: 'Unlock all Arc Raiders', uk: 'Unlock all Arc Raiders', cs: 'Arc Raiders Unlock All', ro: 'Unlock all Arc Raiders', sv: 'Arc Raiders Unlock All' },
};

const CTA2_HREF = {
	'arc-raiders-esp': '/arc-raiders-cheats/',
	'arc-raiders-aimbot': '/arc-raiders-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/arc-raiders-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/arc-raiders-cheats/',
	wallhack: '/arc-raiders-esp/',
	radar: '/arc-raiders-esp/',
	eac: '/updates/',
	'cheats-2026': '/arc-raiders-cheats/',
	hacks: '/features/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/arc-raiders-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/arc-raiders-aimbot/',
	'esp-hack': '/arc-raiders-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Arc Raiders Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for Arc Raiders Cheats — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for arcraiderscheats.org and ARC Raiders licenses.`),
		imageAlt: 'arc raiders cheats',
		galleryTitle: 'arc raiders cheats',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed by Zadeyo checkout — not stored on arcraiderscheats.org.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Epic Games terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@arcraiderscheats.org',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
