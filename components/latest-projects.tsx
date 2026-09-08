import Link from "next/link";
import { getDictionary } from "@/lib/data";
import { FadeIn } from "@/components/fade-in";
import { withLocale, type Locale } from "@/lib/i18n";

function initials(title: string) {
  const letters = title.match(/[A-Z]/g);
  return (letters ? letters.slice(0, 2).join("") : title.slice(0, 2).toUpperCase());
}

export function LatestProjects({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const latest = t.projects.slice(0, 3);

  return (
    <section className="mt-16">
      <FadeIn>
        <h2 className="text-lg font-semibold text-foreground">{t.latestProjects.heading}</h2>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border">
          {latest.map((project) => (
            <Link
              key={project.slug}
              href={withLocale(locale, `/projects#${project.slug}`)}
              className="group flex items-start gap-4 border-b border-border p-5 transition-colors last:border-b-0 hover:bg-foreground/[0.02] sm:p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-sm font-semibold text-accent">
                {initials(project.title)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                  <h3 className="text-[15px] font-medium text-foreground transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <span className="shrink-0 text-xs text-muted tabular-nums">{project.period}</span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.description}</p>
                <span className="mt-2 inline-block text-sm text-foreground/80 underline decoration-border underline-offset-4 transition-colors group-hover:text-accent group-hover:decoration-accent">
                  {t.latestProjects.viewProject}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <Link
          href={withLocale(locale, "/projects")}
          className="mt-6 inline-block text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          {t.latestProjects.viewAll(t.projects.length)}
        </Link>
      </FadeIn>
    </section>
  );
}
