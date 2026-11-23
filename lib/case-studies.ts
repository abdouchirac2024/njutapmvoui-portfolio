import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { defaultLocale, type Locale } from "@/lib/i18n";

const caseStudiesDirectory = path.join(process.cwd(), "content", "case-studies");

export type CaseStudyFrontmatter = {
  title: string;
};

export type CaseStudy = CaseStudyFrontmatter & {
  slug: string;
  locale: Locale;
  content: string;
};

export function getAllCaseStudySlugs(): string[] {
  if (!fs.existsSync(caseStudiesDirectory)) return [];
  return fs
    .readdirSync(caseStudiesDirectory)
    .filter((entry) => fs.statSync(path.join(caseStudiesDirectory, entry)).isDirectory());
}

export function getCaseStudyBySlug(slug: string, locale: Locale): CaseStudy | null {
  const fallbackLocale: Locale = locale === defaultLocale ? (locale === "fr" ? "en" : "fr") : defaultLocale;
  const primaryPath = path.join(caseStudiesDirectory, slug, `${locale}.mdx`);
  const fallbackPath = path.join(caseStudiesDirectory, slug, `${fallbackLocale}.mdx`);

  const resolved = fs.existsSync(primaryPath)
    ? { filePath: primaryPath, resolvedLocale: locale }
    : fs.existsSync(fallbackPath)
      ? { filePath: fallbackPath, resolvedLocale: fallbackLocale }
      : null;

  if (!resolved) return null;

  const raw = fs.readFileSync(resolved.filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    locale: resolved.resolvedLocale,
    ...(data as CaseStudyFrontmatter),
    content,
  };
}
