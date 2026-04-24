import type { ProjectEntry } from './project-entry.schema';

export type ProjectCardPayload = ProjectEntry & {
	readonly id: string;
};
