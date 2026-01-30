import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/services",
    "/work",
    "/about",
    "/contact"
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date()
  }));
  return staticRoutes;
}
