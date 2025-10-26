import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { cache } from "react";
import { remark } from "remark";
import html from "remark-html";

export interface ServiceSummary {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  order: number;
}

export interface ServiceDetail extends ServiceSummary {
  bullets: string[];
  faq: { question: string; answer: string }[];
  content: string;
}

export interface CaseStudySummary {
  slug: string;
  client: string;
  title: string;
  summary: string;
  metrics: { label: string; value: string }[];
  coverImage: string;
}

export interface CaseStudyDetail extends CaseStudySummary {
  challenge: string;
  solution: string;
  results: string;
  content: string;
}

const CONTENT_ROOT = path.join(process.cwd(), "content");

async function parseMarkdown(filePath: string) {
  const file = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(file);
  const processed = await remark().use(html).process(content);
  return {
    data,
    content: processed.toString()
  };
}

export const getAllServices = cache(async (): Promise<ServiceSummary[]> => {
  const dir = path.join(CONTENT_ROOT, "services");
  const files = await fs.readdir(dir);
  const services = await Promise.all(
    files.filter((file) => file.endsWith(".md")).map(async (file) => {
      const slug = file.replace(/\.md$/, "");
      const { data } = await parseMarkdown(path.join(dir, file));
      return {
        slug,
        title: data.title as string,
        summary: data.summary as string,
        icon: (data.icon as string) ?? "SparklesIcon",
        order: Number(data.order ?? 0)
      } satisfies ServiceSummary;
    })
  );

  return services.sort((a, b) => a.order - b.order);
});

export const getServiceBySlug = cache(async (slug: string): Promise<ServiceDetail | null> => {
  const filePath = path.join(CONTENT_ROOT, "services", `${slug}.md`);
  try {
    const { data, content } = await parseMarkdown(filePath);
    return {
      slug,
      title: data.title as string,
      summary: data.summary as string,
      icon: (data.icon as string) ?? "SparklesIcon",
      order: Number(data.order ?? 0),
      bullets: (data.bullets as string[]) ?? [],
      faq: (data.faq as { question: string; answer: string }[]) ?? [],
      content
    } satisfies ServiceDetail;
  } catch (error) {
    return null;
  }
});

export const getAllCaseStudies = cache(async (): Promise<CaseStudySummary[]> => {
  const dir = path.join(CONTENT_ROOT, "work");
  const files = await fs.readdir(dir);
  const studies = await Promise.all(
    files.filter((file) => file.endsWith(".md")).map(async (file) => {
      const slug = file.replace(/\.md$/, "");
      const { data } = await parseMarkdown(path.join(dir, file));
      return {
        slug,
        client: data.client as string,
        title: data.title as string,
        summary: data.summary as string,
        metrics: (data.metrics as { label: string; value: string }[]) ?? [],
        coverImage: (data.coverImage as string) ?? "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
      } satisfies CaseStudySummary;
    })
  );

  return studies.sort((a, b) => a.client.localeCompare(b.client));
});

export const getCaseStudyBySlug = cache(async (slug: string): Promise<CaseStudyDetail | null> => {
  const filePath = path.join(CONTENT_ROOT, "work", `${slug}.md`);
  try {
    const { data, content } = await parseMarkdown(filePath);
    return {
      slug,
      client: data.client as string,
      title: data.title as string,
      summary: data.summary as string,
      metrics: (data.metrics as { label: string; value: string }[]) ?? [],
      challenge: (data.challenge as string) ?? "",
      solution: (data.solution as string) ?? "",
      results: (data.results as string) ?? "",
      coverImage: (data.coverImage as string) ?? "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      content
    } satisfies CaseStudyDetail;
  } catch (error) {
    return null;
  }
});
