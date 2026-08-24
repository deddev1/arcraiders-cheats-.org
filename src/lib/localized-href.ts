import { getBlogBasePath } from '../data/blog/helpers';
import { localizeInternalHref } from '../data/i18n/routing';
import type { LocaleCode } from '../data/i18n/locales';

/** Map English internal paths to the correct locale URL in React islands. */
export function localizedHref(path: string, locale: LocaleCode): string {
	if (path.startsWith('/blog')) return getBlogBasePath(locale);
	return localizeInternalHref(path, locale);
}
