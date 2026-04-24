import { z } from 'astro/zod';

export const bentoSpanSchema = z.enum(['narrow', 'wide', 'hero']);

export const projectEntrySchema = z.object({
	title: z.string(),
	summary: z.string(),
	problemSolved: z.string(),
	architectureUsed: z.string(),
	techStack: z.array(z.string()),
	year: z.string(),
	link: z.string().optional(),
	repository: z.string().optional(),
	bentoSpan: bentoSpanSchema.default('narrow'),
	order: z.number().default(0),
});

export type ProjectEntry = z.infer<typeof projectEntrySchema>;
