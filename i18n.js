import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './src/locales/en/translation.json';
import es from './src/locales/es/translation.json';
import fr from './src/locales/fr/translation.json';
import de from './src/locales/de/translation.json';
import pt from './src/locales/pt/translation.json';
import it from './src/locales/it/translation.json';
import nl from './src/locales/nl/translation.json';
import pl from './src/locales/pl/translation.json';
import ru from './src/locales/ru/translation.json';
import tr from './src/locales/tr/translation.json';
import ar from './src/locales/ar/translation.json';
import ja from './src/locales/ja/translation.json';
import ko from './src/locales/ko/translation.json';
import zh from './src/locales/zh/translation.json';
import hi from './src/locales/hi/translation.json';
import id from './src/locales/id/translation.json';
import th from './src/locales/th/translation.json';
import vi from './src/locales/vi/translation.json';
import uk from './src/locales/uk/translation.json';
import cs from './src/locales/cs/translation.json';
import ro from './src/locales/ro/translation.json';
import sv from './src/locales/sv/translation.json';

export const supportedLngs = [
	'en',
	'es',
	'fr',
	'de',
	'pt',
	'it',
	'nl',
	'pl',
	'ru',
	'tr',
	'ar',
	'ja',
	'ko',
	'zh',
	'hi',
	'id',
	'th',
	'vi',
	'uk',
	'cs',
	'ro',
	'sv',
];

const resources = {
	en: { translation: en },
	es: { translation: es },
	fr: { translation: fr },
	de: { translation: de },
	pt: { translation: pt },
	it: { translation: it },
	nl: { translation: nl },
	pl: { translation: pl },
	ru: { translation: ru },
	tr: { translation: tr },
	ar: { translation: ar },
	ja: { translation: ja },
	ko: { translation: ko },
	zh: { translation: zh },
	hi: { translation: hi },
	id: { translation: id },
	th: { translation: th },
	vi: { translation: vi },
	uk: { translation: uk },
	cs: { translation: cs },
	ro: { translation: ro },
	sv: { translation: sv },
};

if (!i18n.isInitialized) {
	i18n
		.use(LanguageDetector)
		.use(initReactI18next)
		.init({
			resources,
			fallbackLng: 'en',
			supportedLngs,
			nonExplicitSupportedLngs: true,
			load: 'languageOnly',
			interpolation: {
				escapeValue: false,
			},
			detection: {
				order: ['cookie', 'navigator', 'htmlTag'],
				lookupCookie: 'fc_locale',
				caches: ['cookie'],
				cookieMinutes: 525600,
				cookieOptions: { path: '/', sameSite: 'lax' },
			},
			react: {
				useSuspense: false,
			},
		});
}

export default i18n;
