import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/seo";
import { getAllSlugs } from "@/lib/articles";

const paths = ["/", "/about", "/projects", "/articles", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const articlePaths = getAllSlugs().map((slug) => `/articles/${slug}`);
  const allPaths = [...paths, ...articlePaths];

  return locales.flatMap((locale) =>
    allPaths.map((path) => ({
      url: `${siteUrl}/${locale}${path === "/" ? "" : path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${siteUrl}/${l}${path === "/" ? "" : path}`]),
        ),
      },
    })),
  );
}
