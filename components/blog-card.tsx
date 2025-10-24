import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/badge";
import type { BlogPostSummary } from "@/lib/content";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPostSummary;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <Link href={`/blog/${post.slug}`} className="relative block aspect-[4/3]">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      </Link>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="bg-accent/10 text-accent">{post.tags[0] ?? "Marketing"}</Badge>
          <span className="text-xs text-slate-500 dark:text-slate-400">{formatDate(post.date)}</span>
        </div>
        <h3 className="text-lg font-semibold text-primary dark:text-white">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>{post.author}</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </article>
  );
}
