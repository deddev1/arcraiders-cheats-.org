import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';
import { EXTERNAL_GUIDES } from '../../data/external-links';

type Props = {
	locale: string;
};

function HomeAboutInner() {
	const { t } = useTranslation();

	return (
		<section className="shell home__prose home__prose--en" aria-labelledby="home-about-title">
			<div className="home__prose-highlight">
				<h2 id="home-about-title">{t('home.aboutTitle')}</h2>
				<p>{t('home.aboutP1')}</p>
				<p>
					{t('home.aboutSourcesBefore')}{' '}
					<a href={EXTERNAL_GUIDES.arcRaiders.href} target="_blank" rel="noopener noreferrer">
						{EXTERNAL_GUIDES.arcRaiders.label}
					</a>
					{t('home.aboutSourcesMid')}{' '}
					<a href={EXTERNAL_GUIDES.eac.href} target="_blank" rel="noopener noreferrer">
						{EXTERNAL_GUIDES.eac.label}
					</a>
					{t('home.aboutSourcesAfter')}
				</p>
				<p>
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
