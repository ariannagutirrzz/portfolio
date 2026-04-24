import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { blogEntrySchema } from './modules/blog/schemas/blog-entry.schema';
import { projectEntrySchema } from './modules/projects/schemas/project-entry.schema';

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
	schema: projectEntrySchema,
});

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
	schema: blogEntrySchema,
});

export const collections = { projects, blog };
