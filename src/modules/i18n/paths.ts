import type { Locale } from './schemas/ui-messages';

/**
 * Builds a localized path. `path` must start with `/` and must not include the locale prefix.
 * Example: blogIndexPath('es') → `/es/blog/`
 */
export function withLocale(locale: Locale, path: string): string {
	const normalized: string = path.startsWith('/') ? path : `/${path}`;
	const withoutDup: string = normalized.replace(/\/+/g, '/');
	return `/${locale}${withoutDup === '/' ? '/' : withoutDup}`;
}

export function blogIndexPath(locale: Locale): string {
	return withLocale(locale, '/blog/');
}
