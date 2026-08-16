import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'arc raiders cheats',
		title: 'arc raiders cheats gallery',
		subtitle: 'Simple arc raiders cheats visuals — ESP, wallhack, aimbot, and radar for ARC Raiders on PC.',
		lead: 'Arc Raiders Cheats helps you spot Raiders, ARC drones, loot, and extracts with ESP, aimbot, and radar in one license.',
		highlights: [
			{ title: 'arc raiders cheats esp', copy: 'See players through walls with arc raiders cheats esp and wallhack overlays.' },
			{ title: 'arc raiders cheats radar', copy: 'Track nearby threats with arc raiders cheats radar before you push or extract.' },
			{ title: 'arc raiders cheats aimbot', copy: 'Use soft aim and aimbot controls tuned for Arc Raiders raids on Windows PC.' },
		],
		updatesLabel: 'arc raiders cheats updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'Arc Raiders Cheats',
		title: 'Galería ARC Raiders',
		subtitle: 'Visuales de ARC Raiders con loadouts, peleas de escuadrón y combate raid — junto a herramientas ESP, radar y Aimbot.',
		lead: 'Arc Raiders Cheats está pensado para el loop BR de ARC Raiders: leer el mapa, rastrear escuadrones enemigos, lootear y sobrevivir al extract.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de escuadrón en Speranza y extraction-run para elegir peleas con mejor información.' },
			{ title: 'Marcadores de loot y cofres', copy: 'Resalta loadouts, cofres y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot ARC Raiders', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones Arc Raiders Cheats',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'Arc Raiders Cheats',
		title: 'Galerie ARC Raiders',
		subtitle: 'Visuels ARC Raiders — loadouts, combats d\'escouade et raid — avec ESP, radar et Aimbot.',
		lead: 'Arc Raiders Cheats suit la boucle BR de ARC Raiders : lire la carte, suivre les escouades, loot et survivre au extract.',
		highlights: [
			{ title: 'ESP players & escouades', copy: 'Repérez les players ennemis sur Speranza et extraction-run pour choisir vos engagements.' },
			{ title: 'Marqueurs loot & coffres', copy: 'Mettez en évidence loadouts, coffres et loot haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot ARC Raiders', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour Arc Raiders Cheats',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'Arc Raiders Cheats',
		title: 'ARC Raiders Galerie',
		subtitle: 'ARC Raiders-Bilder zu Loadouts, Squad-Kämpfen und raid — mit ESP, Radar und Aimbot.',
		lead: 'Arc Raiders Cheats passt zur Raid-Schleife von ARC Raiders: Karte lesen, Gegner-Trupps tracken, looten und Extract überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Speranza und extraction-run für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'ARC Raiders Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'Arc Raiders Cheats Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'Arc Raiders Cheats',
		title: 'Galeria ARC Raiders',
		subtitle: 'Visuais de ARC Raiders com loadouts, combates de esquadrão e raid — com ESP, radar e Aimbot.',
		lead: 'Arc Raiders Cheats segue o loop BR do ARC Raiders: ler o mapa, rastrear esquadrões, lootar e sobreviver ao extract.',
		highlights: [
			{ title: 'ESP de players e esquadrões', copy: 'Detecte players inimigos em Speranza e extraction-run para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e cofres', copy: 'Destaque loadouts, cofres e loot de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot ARC Raiders', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações Arc Raiders Cheats',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'Arc Raiders Cheats',
		title: 'Galleria ARC Raiders',
		subtitle: 'Immagini ARC Raiders — loadout, scontri di squadra e raid — con ESP, radar e Aimbot.',
		lead: 'Arc Raiders Cheats è pensato per il loop BR di ARC Raiders: leggere la mappa, tracciare squadre nemiche, loot e sopravvivere al extract.',
		highlights: [
			{ title: 'ESP playeri e squadre', copy: 'Individua playeri nemici su Speranza e extraction-run per scegliere i fight con più intel.' },
			{ title: 'Marker loot e coffreti', copy: 'Evidenzia loadout, coffreti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot ARC Raiders', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti Arc Raiders Cheats',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'Arc Raiders Cheats',
		title: 'ARC Raiders galerij',
		subtitle: 'ARC Raiders-beelden van loadouts, squadgevechten en raid — met ESP, radar en Aimbot.',
		lead: 'Arc Raiders Cheats volgt de raid-loop van ARC Raiders: kaart lezen, vijandelijke squads volgen, looten en de extract overleven.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spot vijandelijke players op Speranza en extraction-run voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'ARC Raiders Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'Arc Raiders Cheats updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'Arc Raiders Cheats',
		title: 'Galeria ARC Raiders',
		subtitle: 'Grafiki ARC Raiders — loadouty, walki drużynowe i raid — z ESP, radar i Aimbot.',
		lead: 'Arc Raiders Cheats pasuje do pętli BR ARC Raiders: czytaj mapę, śledź wrogie drużyny, lootuj i przeżyj extract.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na Speranza i extraction-run dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy loot bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot ARC Raiders', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje Arc Raiders Cheats',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'Arc Raiders Cheats',
		title: 'Галерея ARC Raiders',
		subtitle: 'Визуалы ARC Raiders — лоадауты, бои отрядов и raid — с ESP, радаром и Aimbot.',
		lead: 'Arc Raiders Cheats создан для рейд-циклу ARC Raiders: читать карту, отслеживать вражеские отряды, лут и выживать в extract.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на Speranza и extraction-run для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot ARC Raiders', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления Arc Raiders Cheats',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'Arc Raiders Cheats',
		title: 'ARC Raiders galerisi',
		subtitle: 'Loadout, takım savaşları ve raid görselleri — ESP, radar ve Aimbot ile.',
		lead: 'Arc Raiders Cheats, ARC Raiders BR döngüsü için: haritayı oku, düşman takımları izle, loot al ve extract\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'Speranza ve extraction-run\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye loot\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'ARC Raiders Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'Arc Raiders Cheats güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'Arc Raiders Cheats',
		title: 'معرض ARC Raiders',
		subtitle: 'صور ARC Raiders — loadouts ومعارك الفرق وraid — مع ESP ورادار وAimbot.',
		lead: 'Arc Raiders Cheats مبني لحلقة BR في ARC Raiders: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في extract.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على Speranza وextraction-run لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot ARC Raiders', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات Arc Raiders Cheats',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'Arc Raiders Cheats',
		title: 'ARC Raiders ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのARC Raidersビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'Arc Raiders CheatsはARC RaidersのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてextractを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'Speranzaとextraction-runで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'ARC Raidersエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'Arc Raiders Cheats更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'Arc Raiders Cheats',
		title: 'ARC Raiders 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 ARC Raiders 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'Arc Raiders Cheats는 ARC Raiders BR 루프용: 맵 읽기, 적 스쿼드 추적, 루트 수집, extract 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: 'Speranza와 extraction-run에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'ARC Raiders 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'Arc Raiders Cheats 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'Arc Raiders Cheats',
		title: 'ARC Raiders 图库',
		subtitle: 'ARC Raiders 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'Arc Raiders Cheats 为 ARC Raiders BR 循环设计：读图、追踪敌方小队、搜刮并在 extract 存活。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 Speranza 和 extraction-run 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'ARC Raiders 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'Arc Raiders Cheats 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'Arc Raiders Cheats',
		title: 'ARC Raiders गैलरी',
		subtitle: 'Loadout, squad fights और raid visuals — ESP, radar और Aimbot के साथ।',
		lead: 'Arc Raiders Cheats ARC Raiders BR loop के लिए: map पढ़ें, enemy squads track करें, loot करें और extract survive करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Speranza और extraction-run पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier loot highlight करें screen clutter के बिना।' },
			{ title: 'ARC Raiders Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'Arc Raiders Cheats updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'Arc Raiders Cheats',
		title: 'Galeri ARC Raiders',
		subtitle: 'Visual ARC Raiders — loadout, pertempuran squad, dan raid — dengan ESP, radar, dan Aimbot.',
		lead: 'Arc Raiders Cheats untuk loop BR ARC Raiders: baca peta, lacak squad musuh, loot, dan selamat di extract.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Deteksi player musuh di Speranza dan extraction-run untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & peti', copy: 'Sorot loadout, peti, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot ARC Raiders', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update Arc Raiders Cheats',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'Arc Raiders Cheats',
		title: 'แกลเลอรี ARC Raiders',
		subtitle: 'ภาพ ARC Raiders — loadout การต่อสู้ทีม และ raid — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'Arc Raiders Cheats สำหรับลูป BR ของ ARC Raiders: อ่านแผนที่ ติดตามทีมศัตรู เก็บ loot และรอด extract',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน Speranza และ extraction-run เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ loot และหีบ', copy: 'เน้น loadout หีบและ loot ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot ARC Raiders', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต Arc Raiders Cheats',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'Arc Raiders Cheats',
		title: 'Thư viện ARC Raiders',
		subtitle: 'Hình ảnh ARC Raiders — loadout, chiến đấu squad và raid — với ESP, radar và Aimbot.',
		lead: 'Arc Raiders Cheats cho vòng BR ARC Raiders: đọc bản đồ, theo dõi squad địch, loot và sống sót extract.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Phát hiện player địch trên Speranza và extraction-run để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu loot & rương', copy: 'Làm nổi bật loadout, rương và loot cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot ARC Raiders', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật Arc Raiders Cheats',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'Arc Raiders Cheats',
		title: 'Галерея ARC Raiders',
		subtitle: 'Візуали ARC Raiders — loadout, бої загонів і raid — з ESP, радаром і Aimbot.',
		lead: 'Arc Raiders Cheats для рейд-циклу ARC Raiders: читати карту, відстежувати ворожі загони, лут і виживати в extract.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Speranza і extraction-run для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot ARC Raiders', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення Arc Raiders Cheats',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'Arc Raiders Cheats',
		title: 'Galerie ARC Raiders',
		subtitle: 'ARC Raiders vizuály — loadouty, squad souboje a raid — s ESP, radarem a Aimbot.',
		lead: 'Arc Raiders Cheats pro BR smyčku ARC Raiders: číst mapu, sledovat nepřátelské squady, loot a přežít extract.',
		highlights: [
			{ title: 'ESP players a squadů', copy: 'Spozorujte nepřátelské operátory na Speranza a extraction-run pro lepší rotační rozhodnutí.' },
			{ title: 'Markery lootu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier loot bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot ARC Raiders', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace Arc Raiders Cheats',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'Arc Raiders Cheats',
		title: 'Galerie ARC Raiders',
		subtitle: 'Vizualuri ARC Raiders — loadout, lupte de squad și raid — cu ESP, radar și Aimbot.',
		lead: 'Arc Raiders Cheats pentru bucla BR ARC Raiders: citește harta, urmărește squad-uri inamice, loot și supraviețuiește extract.',
		highlights: [
			{ title: 'ESP playeri și squad-uri', copy: 'Detectează playeri inamici pe Speranza și extraction-run pentru decizii de rotație mai bune.' },
			{ title: 'Markere loot și cheste', copy: 'Evidențiază loadout-uri, cheste și loot de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot ARC Raiders', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări Arc Raiders Cheats',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'Arc Raiders Cheats',
		title: 'ARC Raiders galleri',
		subtitle: 'ARC Raiders-bilder — loadouts, squadstrider och raid — med ESP, radar och Aimbot.',
		lead: 'Arc Raiders Cheats för ARC Raiders:s raid-loop: läs kartan, spåra fiendesquads, loota och överlev extract.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spotta fiendeplayerer på Speranza och extraction-run för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier loot utan skärmklutter.' },
			{ title: 'ARC Raiders Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'Arc Raiders Cheats uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
