import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getDictionary } from "@/lib/data";
import { getAllCaseStudySlugs, getCaseStudyBySlug } from "@/lib/case-studies";
import { FadeIn } from "@/components/fade-in";
import { MdxContent } from "@/components/mdx-content";
import { isLocale, locales, withLocale, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
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
  const caseStudy = getCaseStudyBySlug(slug, l);
  const project = t.projects.find((p) => p.slug === slug);
  if (!caseStudy || !project) return {};

  return buildMetadata({
    locale: l,
    path: `/projects/${slug}`,
    title: `${caseStudy.title} — ${t.site.name}`,
    description: project.description,
    siteName: t.site.name,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "fr";
  const t = getDictionary(l);
  const caseStudy = getCaseStudyBySlug(slug, l);
  const project = t.projects.find((p) => p.slug === slug);

  if (!caseStudy || !project) notFound();

  return (
    <main className="mx-auto w-full max-w-[680px] px-6 pb-16 pt-10 sm:px-8 sm:pt-16">
      <FadeIn>
        <Link
          href={withLocale(l, "/projects")}
          className="text-sm text-muted underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          {t.projectsPage.heading}
        </Link>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">{caseStudy.title}</h1>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-xs text-muted tabular-nums">{project.period}</span>
          {project.visibility === "private" && (
            <span className="rounded-full border border-border px-2.5 py-1 text-xs text-muted">
              {t.projectsPage.privateBadge}
            </span>
          )}
        </div>
        <p className="mt-5 text-[15px] leading-relaxed text-muted">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted">
              {s}
            </span>
          ))}
        </div>
        {project.url && (
          <div className="mt-5">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {t.projectsPage.visitSite}
              <ArrowUpRight size={14} />
            </a>
          </div>
        )}
      </FadeIn>

      <FadeIn delay={0.08}>
        <article className="mt-6 border-t border-border pt-2">
          <MdxContent source={caseStudy.content} />
        </article>
      </FadeIn>
    </main>
  );
}
