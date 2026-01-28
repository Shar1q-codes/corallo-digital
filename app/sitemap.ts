import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://corallo-digital.example.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/services",
    "/work",
    "/about",
    "/contact"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));
  return staticRoutes;
}
