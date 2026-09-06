"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { getDictionary } from "@/lib/data";
import { FadeIn } from "@/components/fade-in";
import type { Locale } from "@/lib/i18n";

export function ProjectsClient({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const projects = t.projects;

  const allStacks = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.stack.forEach((s) => set.add(s)));
    return Array.from(set).sort();
  }, [projects]);

  const [filter, setFilter] = useState<string | null>(null);

  const filtered = filter ? projects.filter((p) => p.stack.includes(filter)) : projects;

  return (
    <>
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
            {t.projectsPage.filterAll}
          </button>
          {allStacks.map((stack) => (
            <button
              key={stack}
              type="button"
              onClick={() => setFilter(stack)}
              className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                filter === stack
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted hover:border-foreground/30 hover:text-foreground"
              }`}
            >
              {stack}
            </button>
          ))}
        </div>
      </FadeIn>

      <div className="mt-10 flex flex-col gap-10">
        {filtered.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.05}>
            <article id={project.slug} className="scroll-mt-24 border-b border-border pb-10 last:border-b-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h2 className="text-base font-medium text-foreground">{project.title}</h2>
                <span className="text-xs text-muted tabular-nums">{project.period}</span>
              </div>
              {project.visibility === "private" && (
                <span className="mt-2 inline-block rounded-full border border-border px-2.5 py-1 text-xs text-muted">
                  {project.achievements?.length
                    ? t.projectsPage.privateBadgeDetailed
                    : t.projectsPage.privateBadge}
                </span>
              )}
              <p className="mt-3 text-sm leading-relaxed text-muted">{project.longDescription}</p>
              {project.achievements && project.achievements.length > 0 && (
                <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted">
                  {project.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              )}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  >
                    {t.projectsPage.visitSite}
                    <ArrowUpRight size={14} />
                  </a>
                )}
                {project.visibility === "public" && project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  >
                    {t.projectsPage.viewCode}
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </article>
          </FadeIn>
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-muted">{t.projectsPage.noResults}</p>
        )}
      </div>
    </>
  );
}
