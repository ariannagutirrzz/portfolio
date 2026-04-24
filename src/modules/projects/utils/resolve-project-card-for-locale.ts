import type { CollectionEntry } from 'astro:content';

import type { Locale } from '../../i18n/schemas/ui-messages';
import type { ProjectCardPayload } from '../schemas/project-card-payload';

function pickLocalized(es: string | undefined, fallback: string): string {
	if (typeof es === 'string' && es.trim().length > 0) {
		return es;
	}
	return fallback;
}

/**
 * Picks Markdown frontmatter strings for the active UI locale.
 */
export function resolveProjectCardForLocale(
	entry: CollectionEntry<'projects'>,
	locale: Locale,
): ProjectCardPayload {
	const d = entry.data;
	if (locale !== 'es') {
		return {
			id: entry.id,
			title: d.title,
			summary: d.summary,
			problemSolved: d.problemSolved,
			architectureUsed: d.architectureUsed,
			techStack: d.techStack,
			year: d.year,
			link: d.link,
			repository: d.repository,
			bentoSpan: d.bentoSpan,
			order: d.order,
			featured: d.featured,
			coverImage: d.coverImage,
		};
	}
	return {
		id: entry.id,
		title: pickLocalized(d.titleEs, d.title),
		summary: pickLocalized(d.summaryEs, d.summary),
		problemSolved: pickLocalized(d.problemSolvedEs, d.problemSolved),
		architectureUsed: pickLocalized(d.architectureUsedEs, d.architectureUsed),
		techStack: d.techStack,
		year: d.year,
		link: d.link,
		repository: d.repository,
		bentoSpan: d.bentoSpan,
		order: d.order,
		featured: d.featured,
		coverImage: d.coverImage,
	};
}
