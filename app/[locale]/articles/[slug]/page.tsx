import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDictionary } from "@/lib/data";
import { getAllSlugs, getArticleBySlug } from "@/lib/articles";
import { FadeIn } from "@/components/fade-in";
import { ImageLightbox } from "@/components/image-lightbox";
import { MdxContent } from "@/components/mdx-content";
import { isLocale, locales, withLocale, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

function formatDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export function generateStaticParams() {
  const slugs = getAllSlugs();
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "fr";
  const t = getDictionary(l);
  const article = getArticleBySlug(slug, l);
  if (!article) return {};

  return buildMetadata({
    locale: l,
    path: `/articles/${slug}`,
    title: `${article.title} — ${t.site.name}`,
    description: article.excerpt,
    siteName: t.site.name,
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "fr";
  const t = getDictionary(l);
  const article = getArticleBySlug(slug, l);

  if (!article) notFound();

  return (
    <main className="mx-auto w-full max-w-[680px] px-6 pb-16 pt-10 sm:px-8 sm:pt-16">
      <FadeIn>
        <Link
          href={withLocale(l, "/articles")}
          className="text-sm text-muted underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          {t.articlesPage.heading}
        </Link>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">{article.title}</h1>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <span className="text-xs text-muted tabular-nums">{formatDate(article.date, l)}</span>
          {article.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {article.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </FadeIn>

      {article.coverImage && (
        <FadeIn delay={0.06}>
          <div className="mt-6">
            <ImageLightbox src={article.coverImage} alt={article.title} />
          </div>
        </FadeIn>
      )}

      <FadeIn delay={0.08}>
        <article className="mt-8">
          <MdxContent source={article.content} />
        </article>
      </FadeIn>
    </main>
  );
}
