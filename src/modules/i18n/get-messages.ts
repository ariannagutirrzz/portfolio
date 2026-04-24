import type { Locale } from './schemas/ui-messages';
import type { UiMessages } from './schemas/ui-messages';
import { en } from './messages/en';
import { es } from './messages/es';

export function getMessages(locale: Locale): UiMessages {
	if (locale === 'es') {
		return es;
	}
	return en;
}

export function parseLocale(value: string | undefined): Locale {
	if (value === 'es' || value === 'en') {
		return value;
	}
	return 'en';
}
