import type { CollectionEntry } from 'astro:content';

type ProjectCollectionEntry = CollectionEntry<'projects'>;

export function sortProjectEntries(entries: ProjectCollectionEntry[]): ProjectCollectionEntry[] {
	return [...entries].sort((a, b) => {
		if (a.data.order !== b.data.order) {
			return a.data.order - b.data.order;
		}
		return a.data.title.localeCompare(b.data.title);
	});
}
