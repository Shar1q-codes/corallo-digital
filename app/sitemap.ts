import type { MetadataRoute } from "next";

import { getAllBlogPosts, getAllServices } from "@/lib/content";

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

  const [services, posts] = await Promise.all([
    getAllServices(),
    getAllBlogPosts()
  ]);

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date()
  }));

  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date)
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
