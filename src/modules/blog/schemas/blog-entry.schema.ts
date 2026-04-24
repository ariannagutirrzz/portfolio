import { z } from 'astro/zod';

export const blogEntrySchema = z.object({
	title: z.string(),
	description: z.string(),
	pubDate: z.coerce.date(),
	tags: z.array(z.string()).default([]),
	draft: z.boolean().default(false),
});

export type BlogEntry = z.infer<typeof blogEntrySchema>;
