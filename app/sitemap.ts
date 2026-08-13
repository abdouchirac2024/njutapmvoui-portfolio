import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/seo";

const paths = ["/", "/about", "/projects", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    paths.map((path) => ({
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
