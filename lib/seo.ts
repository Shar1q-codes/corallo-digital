import type { Metadata } from "next";

interface SeoOptions {
  title: string;
  description: string;
  url?: string;
  image?: string;
}

export function createMetadata({ title, description, url, image }: SeoOptions): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: image ? [image] : undefined,
      type: "website"
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? [image] : undefined
    }
  } satisfies Metadata;
}
