import { Pagination } from "@/components/pagination";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { BlogCard } from "@/components/blog-card";
import { createMetadata } from "@/lib/seo";
import { getAllBlogPosts } from "@/lib/content";

export const metadata = createMetadata({
  title: "Blog - Corallo Digital",
  description: "Insights, playbooks, and benchmarks from Corallo Digital''s growth lab."
});

interface BlogPageProps {
  searchParams?: { page?: string };
}

const POSTS_PER_PAGE = 6;

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const page = Number(searchParams?.page ?? 1);
  const posts = await getAllBlogPosts();
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE) || 1;
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="container mx-auto px-6 py-24 lg:px-8">
      <Reveal>
        <SectionHeader
          eyebrow="Insights"
          title="Perspectives from the growth lab"
          description="Tactical guidance and strategic frameworks to help you ship smarter marketing."
          align="center"
        />
      </Reveal>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {paginatedPosts.map((post) => (
          <Reveal key={post.slug}>
            <BlogCard post={post} />
          </Reveal>
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
