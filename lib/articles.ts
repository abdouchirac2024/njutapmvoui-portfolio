import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { defaultLocale, type Locale } from "@/lib/i18n";

const articlesDirectory = path.join(process.cwd(), "content", "articles");

export type ArticleFrontmatter = {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  coverImage?: string;
};

export type ArticleSummary = ArticleFrontmatter & {
  slug: string;
  locale: Locale;
};

export type Article = ArticleSummary & {
  content: string;
};

function readArticleFile(slug: string, locale: Locale): { locale: Locale; frontmatter: ArticleFrontmatter; content: string } | null {
  const fallbackLocale: Locale = locale === defaultLocale ? (locale === "fr" ? "en" : "fr") : defaultLocale;
  const primaryPath = path.join(articlesDirectory, slug, `${locale}.mdx`);
  const fallbackPath = path.join(articlesDirectory, slug, `${fallbackLocale}.mdx`);

  const resolved = fs.existsSync(primaryPath)
    ? { filePath: primaryPath, resolvedLocale: locale }
    : fs.existsSync(fallbackPath)
      ? { filePath: fallbackPath, resolvedLocale: fallbackLocale }
      : null;

  if (!resolved) return null;

  const raw = fs.readFileSync(resolved.filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    locale: resolved.resolvedLocale,
    frontmatter: data as ArticleFrontmatter,
    content,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) return [];
  return fs
    .readdirSync(articlesDirectory)
    .filter((entry) => fs.statSync(path.join(articlesDirectory, entry)).isDirectory());
}

export function getAllArticles(locale: Locale): ArticleSummary[] {
  const articles = getAllSlugs()
    .map((slug) => {
      const article = readArticleFile(slug, locale);
      if (!article) return null;
      return { slug, locale: article.locale, ...article.frontmatter };
    })
    .filter((article): article is ArticleSummary => article !== null);

  return articles.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getArticleBySlug(slug: string, locale: Locale): Article | null {
  const article = readArticleFile(slug, locale);
  if (!article) return null;
  return { slug, locale: article.locale, ...article.frontmatter, content: article.content };
}
