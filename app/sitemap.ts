import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://example.vercel.app";
  return ["", "/downloads", "/legal", "/collections", "/concept-art", "/finalized-art"].map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date() }));
}
