import type { MetadataRoute } from "next";

import { getAllBlogPosts, getAllCaseStudies, getAllServices } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://corallo-digital.example.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/services",
    "/work",
    "/about",
    "/contact",
    "/blog"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));

  const [services, studies, posts] = await Promise.all([
    getAllServices(),
    getAllCaseStudies(),
    getAllBlogPosts()
  ]);

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date()
  }));

  const studyRoutes = studies.map((study) => ({
    url: `${baseUrl}/work#${study.slug}`,
    lastModified: new Date()
  }));

  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date)
  }));

  return [...staticRoutes, ...serviceRoutes, ...studyRoutes, ...blogRoutes];
}
