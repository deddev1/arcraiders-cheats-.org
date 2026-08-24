import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';
import { localizedHref } from '../../lib/localized-href';
import type { LocaleCode } from '../../data/i18n/locales';

type Props = {
	locale: string;
};

function HomeAboutInner({ locale }: { locale: LocaleCode }) {
	const { t } = useTranslation();

	return (
		<section className="shell home__prose home__prose--en" aria-labelledby="home-about-title">
			<div className="home__prose-highlight">
				<h2 id="home-about-title">{t('home.aboutTitle')}</h2>
				<p>{t('home.aboutP1')}</p>
				<p>
					{t('home.aboutP2Before')}{' '}
					<a href={localizedHref('/arc-raiders-cheats/', locale)}>{t('home.aboutPillar')}</a>
					{t('home.aboutP2Mid')}
					<a href={localizedHref('/arc-raiders-esp/', locale)}>{t('home.aboutEsp')}</a>
					{t('home.aboutP2Mid')}
					<a href={localizedHref('/arc-raiders-aimbot/', locale)}>{t('home.aboutAimbot')}</a>
					{t('home.aboutP2Or')}
					<a href={localizedHref('/updates/', locale)}>{t('home.aboutUndetected')}</a>
					{t('home.aboutP2After')}
				</p>
			</div>
		</section>
	);
}

export default function HomeAboutApp(props: Props) {
	const locale = props.locale as LocaleCode;
	return (
		<I18nProvider locale={props.locale}>
			<HomeAboutInner locale={locale} />
		</I18nProvider>
	);
}
