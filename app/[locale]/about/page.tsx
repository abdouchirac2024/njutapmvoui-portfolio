import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { getDictionary } from "@/lib/data";
import { FadeIn } from "@/components/fade-in";
import { isLocale, locales, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "fr";
  const t = getDictionary(l);
  return { title: t.meta.about.title, description: t.meta.about.description };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "fr";
  const t = getDictionary(l);

  return (
    <main className="mx-auto w-full max-w-[680px] px-6 pb-16 pt-10 sm:px-8 sm:pt-16">
      <FadeIn>
        <div className="flex items-center gap-4">
          <div className="group h-16 w-16 shrink-0 overflow-hidden rounded-full ring-1 ring-border transition-all duration-300 hover:ring-2 hover:ring-accent">
            <Image
              src="/avatar.jpg"
              alt={t.site.name}
              width={128}
              height={128}
              className="h-16 w-16 object-cover transition-transform duration-300 ease-out group-hover:scale-150"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-foreground">{t.site.name}</h1>
            <p className="text-sm text-muted">{t.site.role}</p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-muted">
          <p>{t.aboutPage.intro1}</p>
          <p>{t.aboutPage.intro2}</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <section className="mt-14">
          <h2 className="text-lg font-semibold text-foreground">{t.aboutPage.sectionExperience}</h2>
          <div className="mt-6 flex flex-col gap-8">
            {t.experiences.map((exp) => (
              <div key={exp.company} className="border-l-2 border-border pl-4">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="text-sm font-medium text-foreground">
                    {exp.url ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-border underline-offset-4 hover:text-accent hover:decoration-accent"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                    <span className="font-normal text-muted"> — {exp.role}</span>
                  </h3>
                  <span className="text-xs text-muted tabular-nums">{exp.date}</span>
                </div>
                {exp.stack && (
                  <p className="mt-1 text-xs text-muted">{exp.stack.join(" · ")}</p>
                )}
                {exp.bullets && (
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-muted">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.12}>
        <section className="mt-14">
          <h2 className="text-lg font-semibold text-foreground">{t.aboutPage.sectionEducation}</h2>
          <div className="mt-6 flex flex-col gap-6">
            {t.education.map((edu) => (
              <div key={edu.degree} className="border-l-2 border-border pl-4">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="text-sm font-medium text-foreground">{edu.degree}</h3>
                  <span className="text-xs text-muted tabular-nums">{edu.date}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{edu.school}</p>
                {edu.mention && <p className="mt-1 text-xs text-muted">{edu.mention}</p>}
                {edu.detail && <p className="mt-1 text-xs text-muted">{edu.detail}</p>}
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.13}>
        <section id="certifications" className="mt-14 scroll-mt-24">
          <h2 className="text-lg font-semibold text-foreground">{t.aboutPage.sectionCertifications}</h2>
          <div className="mt-6 flex flex-col gap-4">
            {t.certifications.map((cert) => (
              <a
                key={cert.verifyUrl}
                href={cert.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 rounded-xl border border-border px-4 py-3 transition-colors hover:border-foreground/30"
              >
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-medium text-foreground group-hover:text-accent">
                    {cert.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted">
                    {cert.issuer} · {cert.platform} · {cert.date}
                  </p>
                </div>
                <ExternalLink
                  size={16}
                  className="shrink-0 text-muted transition-colors group-hover:text-accent"
                />
              </a>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.14}>
        <section className="mt-14">
          <h2 className="text-lg font-semibold text-foreground">{t.aboutPage.sectionSkills}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {t.skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-medium text-foreground">{group.category}</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
