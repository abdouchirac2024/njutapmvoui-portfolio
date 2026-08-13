import type { Metadata } from "next";
import { withLocale, type Locale } from "@/lib/i18n";

export const siteUrl = "https://www.njutapmvoui.dev";

export function buildMetadata({
  locale,
  path,
  title,
  description,
  siteName,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  siteName: string;
}): Metadata {
  const canonicalPath = withLocale(locale, path);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        fr: withLocale("fr", path),
        en: withLocale("en", path),
        "x-default": withLocale("fr", path),
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      siteName,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
