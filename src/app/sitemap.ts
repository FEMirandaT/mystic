import type { MetadataRoute } from "next";
import { ARTICLES } from "./blogs/[blog]/articles";

const BASE_URL = "https://www.mysticparadise.top";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: new Date() },
    { url: `${BASE_URL}/blogs`, lastModified: new Date() },
  ];

  const posts = ARTICLES.map((a) => ({
    url: `${BASE_URL}/blogs/${a.slug}`,
    lastModified: a.hasOwnProperty("updatedAt") ? new Date((a as any).updatedAt) : undefined,
  }));

  return [...staticPages, ...posts];
}
