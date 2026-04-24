import type { ProjectEntry } from './project-entry.schema';

type ProjectLocaleFields = 'titleEs' | 'summaryEs' | 'problemSolvedEs' | 'architectureUsedEs';

/** Card copy after locale resolution (no `*Es` source fields). */
export type ProjectCardPayload = Omit<ProjectEntry, ProjectLocaleFields> & {
	readonly id: string;
};
