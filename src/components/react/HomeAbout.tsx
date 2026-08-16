import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type Props = {
	locale: string;
};

function HomeAboutInner() {
	const { t } = useTranslation();

	return (
		<section className="shell home-about" aria-labelledby="home-about-title">
			<div className="home-about__panel corner-highlight">
				<h1 id="home-about-title">{t('home.aboutTitle')}</h1>
				<p className="home-about__lead">{t('home.aboutP1')}</p>
				<p className="home-about__links">
					{t('home.aboutP2Before')}{' '}
					<a href="/arc-raiders-cheats/">{t('home.aboutPillar')}</a>
					{t('home.aboutP2Mid')}
					<a href="/arc-raiders-esp/">{t('home.aboutEsp')}</a>
					{t('home.aboutP2Mid')}
					<a href="/arc-raiders-aimbot/">{t('home.aboutAimbot')}</a>
					{t('home.aboutP2Or')}
					<a href="/updates/">{t('home.aboutUndetected')}</a>
					{t('home.aboutP2After')}
				</p>
			</div>
		</section>
	);
}

export default function HomeAboutApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeAboutInner />
		</I18nProvider>
	);
}
