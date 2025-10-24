import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { createMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) {
    return createMetadata({
      title: "Post not found",
      description: "The requested blog post could not be located."
    });
  }

  return createMetadata({
    title: `${post.title} - Corallo Digital`,
    description: post.excerpt,
    url: `https://corallo-digital.example.com/blog/${post.slug}`,
    image: post.coverImage
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) return notFound();

  return (
    <article className="container mx-auto px-6 py-24 lg:px-8">
      <Reveal>
        <SectionHeader
          eyebrow="Insights"
          title={post.title}
          description={post.excerpt}
        />
      </Reveal>
      <Reveal className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-300">
        <span>{post.author}</span>
        <span aria-hidden>-</span>
        <span>{formatDate(post.date)}</span>
        <span aria-hidden>-</span>
        <span>{post.readTime}</span>
      </Reveal>
      <Reveal className="relative mt-10 h-96 overflow-hidden rounded-3xl">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 70vw"
        />
      </Reveal>
      <Reveal className="prose prose-slate mx-auto mt-12 max-w-3xl text-slate-700 dark:prose-invert dark:text-slate-100">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </Reveal>
      <Reveal className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-300">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              {tag}
            </span>
          ))}
        </div>
        <Link href="/blog" className="font-semibold text-accent">
          Back to Insights
        </Link>
      </Reveal>
    </article>
  );
}
