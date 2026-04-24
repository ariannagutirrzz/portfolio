import { z } from 'astro/zod';

export const bentoSpanSchema = z.enum(['narrow', 'wide', 'hero']);

export const projectEntrySchema = z.object({
	title: z.string(),
	summary: z.string(),
	problemSolved: z.string(),
	architectureUsed: z.string(),
	/** Spanish copy for `locale === 'es'`; falls back to English fields when omitted. */
	titleEs: z.string().optional(),
	summaryEs: z.string().optional(),
	problemSolvedEs: z.string().optional(),
	architectureUsedEs: z.string().optional(),
	techStack: z.array(z.string()),
	year: z.string(),
	link: z.string().optional(),
	repository: z.string().optional(),
	bentoSpan: bentoSpanSchema.default('narrow'),
	order: z.number().default(0),
	/** When false, the card appears only on the full project archive page. */
	featured: z.boolean().default(true),
});

export type ProjectEntry = z.infer<typeof projectEntrySchema>;
