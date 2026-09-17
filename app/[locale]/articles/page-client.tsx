"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { getDictionary } from "@/lib/data";
import type { ArticleSummary } from "@/lib/articles";
import { FadeIn } from "@/components/fade-in";
import { withLocale, type Locale } from "@/lib/i18n";

function formatDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export function ArticlesClient({ locale, articles }: { locale: Locale; articles: ArticleSummary[] }) {
  const t = getDictionary(locale);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    articles.forEach((a) => a.tags.forEach((tag) => set.add(tag)));
    return Array.from(set).sort();
  }, [articles]);

  const [filter, setFilter] = useState<string | null>(null);

  const filtered = filter ? articles.filter((a) => a.tags.includes(filter)) : articles;

  return (
    <>
      {allTags.length > 0 && (
        <FadeIn delay={0.06}>
          <div className="mt-8 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setFilter(null)}
              className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                filter === null
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted hover:border-foreground/30 hover:text-foreground"
              }`}
            >
              {t.articlesPage.filterAll}
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setFilter(tag)}
                className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                  filter === tag
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </FadeIn>
      )}

      <div className="mt-10 flex flex-col gap-10">
        {filtered.map((article, i) => (
          <FadeIn key={article.slug} delay={i * 0.05}>
            <article className="border-b border-border pb-10 last:border-b-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h2 className="text-base font-medium text-foreground">
                  <Link
                    href={withLocale(locale, `/articles/${article.slug}`)}
                    className="underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  >
                    {article.title}
                  </Link>
                </h2>
                <span className="text-xs text-muted tabular-nums">{formatDate(article.date, locale)}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{article.excerpt}</p>
              {article.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <Link
                href={withLocale(locale, `/articles/${article.slug}`)}
                className="mt-4 inline-block text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                {t.articlesPage.readMore}
              </Link>
            </article>
          </FadeIn>
        ))}
        {filtered.length === 0 && <p className="text-sm text-muted">{t.articlesPage.noResults}</p>}
      </div>
    </>
  );
}
