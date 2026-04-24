import type { CollectionEntry } from 'astro:content';

type ProjectCollectionEntry = CollectionEntry<'projects'>;

export function filterFeaturedProjects(entries: ProjectCollectionEntry[]): ProjectCollectionEntry[] {
	return entries.filter((entry: ProjectCollectionEntry) => entry.data.featured !== false);
}
