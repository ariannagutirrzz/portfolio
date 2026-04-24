import { navigate } from 'astro:transitions/client';

import type { Locale } from '../../i18n/schemas/ui-messages';
import { preferredLocaleStorageKey } from '../../i18n/locale-storage';

type Props = {
	readonly currentLocale: Locale;
	readonly pathname: string;
	readonly copy: {
		readonly label: string;
		readonly en: string;
		readonly es: string;
	};
};

function buildPathForLocale(pathname: string, target: Locale): string {
	const trimmed: string = pathname.replace(/\/+$/, '') || '';
	const parts: string[] = trimmed.split('/').filter((p: string) => p.length > 0);
	if (parts.length > 0 && (parts[0] === 'en' || parts[0] === 'es')) {
		parts[0] = target;
	} else {
		parts.unshift(target);
	}
	return `/${parts.join('/')}/`;
}

export function LanguageSwitcher({ currentLocale, pathname, copy }: Props) {
	const navigateTo = (target: Locale): void => {
		if (target === currentLocale) {
			return;
		}
		try {
			window.localStorage.setItem(preferredLocaleStorageKey, target);
		} catch {
			/* ignore */
		}
		const nextPath: string = buildPathForLocale(pathname, target);
		void navigate(nextPath);
	};
	return (
		<div
			className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-0.5"
			role="navigation"
			aria-label={copy.label}
		>
			<button
				type="button"
				className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide transition ${
					currentLocale === 'en' ? 'bg-accent/20 text-accent' : 'text-mist hover:text-pearl'
				}`}
				onClick={() => {
					navigateTo('en');
				}}
				aria-current={currentLocale === 'en' ? 'true' : undefined}
			>
				{copy.en}
			</button>
			<button
				type="button"
				className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide transition ${
					currentLocale === 'es' ? 'bg-accent/20 text-accent' : 'text-mist hover:text-pearl'
				}`}
				onClick={() => {
					navigateTo('es');
				}}
				aria-current={currentLocale === 'es' ? 'true' : undefined}
			>
				{copy.es}
			</button>
		</div>
	);
}
