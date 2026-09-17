import type { Metadata } from "next";
import type { ComponentProps } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getDictionary } from "@/lib/data";
import { getAllSlugs, getArticleBySlug } from "@/lib/articles";
import { FadeIn } from "@/components/fade-in";
import { isLocale, locales, withLocale, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

const mdxComponents = {
  h2: (props: ComponentProps<"h2">) => (
    <h2 className="mt-10 text-lg font-semibold text-foreground" {...props} />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3 className="mt-8 text-base font-semibold text-foreground" {...props} />
  ),
  p: (props: ComponentProps<"p">) => (
    <p className="mt-4 text-[15px] leading-relaxed text-muted" {...props} />
  ),
  a: (props: ComponentProps<"a">) => (
    <a
      className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
      {...props}
    />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul className="mt-4 list-disc space-y-1.5 pl-4 text-[15px] leading-relaxed text-muted" {...props} />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol className="mt-4 list-decimal space-y-1.5 pl-4 text-[15px] leading-relaxed text-muted" {...props} />
  ),
  strong: (props: ComponentProps<"strong">) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  code: (props: ComponentProps<"code">) => (
    <code className="rounded bg-foreground/[0.06] px-1.5 py-0.5 text-[13px] text-foreground" {...props} />
  ),
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote className="mt-4 border-l-2 border-border pl-4 text-[15px] italic leading-relaxed text-muted" {...props} />
  ),
};

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

      <FadeIn delay={0.08}>
        <article className="mt-8">
          <MDXRemote source={article.content} components={mdxComponents} />
        </article>
      </FadeIn>
    </main>
  );
}
