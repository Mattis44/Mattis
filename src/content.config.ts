import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const jobs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/jobs" }),
  schema: z.object({
    company: z.string(),
    logo: z.string(),
    position: z.string(),
    startDate: z.string(),
    endDate: z.string().nullable(),
    href: z.string(),
  })
});

const educations = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/educations" }),
  schema: z.object({
    school: z.string(),
    location: z.string(),
    logo: z.string(),
    degree: z.string(),
    fieldOfStudy: z.string(),
    startDate: z.string(),
    endDate: z.string().nullable(),
    href: z.string(),
  })
});

export const collections = { jobs, educations };