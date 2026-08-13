import Link from "next/link";
import { getDictionary } from "@/lib/data";
import { FadeIn } from "@/components/fade-in";
import { withLocale, type Locale } from "@/lib/i18n";

export function LatestProjects({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const latest = t.projects.slice(0, 3);

  return (
    <section className="mt-16">
      <FadeIn>
        <h2 className="text-lg font-semibold text-foreground">{t.latestProjects.heading}</h2>
      </FadeIn>

      <div className="mt-6 flex flex-col gap-8">
        {latest.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.06}>
            <article>
              <h3 className="text-base font-medium text-foreground">
                <Link
                  href={withLocale(locale, `/projects#${project.slug}`)}
                  className="underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {project.title}
                </Link>
              </h3>
              <p className="mt-1 text-xs text-muted">{project.period}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
              <Link
                href={withLocale(locale, `/projects#${project.slug}`)}
                className="mt-2 inline-block text-sm text-foreground/80 underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                {t.latestProjects.viewProject}
              </Link>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2}>
        <Link
          href={withLocale(locale, "/projects")}
          className="mt-8 inline-block text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          {t.latestProjects.viewAll(t.projects.length)}
        </Link>
      </FadeIn>
    </section>
  );
}
