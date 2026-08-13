import { Download } from "lucide-react";
import { getDictionary } from "@/lib/data";
import { FadeIn } from "@/components/fade-in";
import type { Locale } from "@/lib/i18n";

export function ExperienceList({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section className="mt-16">
      <FadeIn>
        <h2 className="text-lg font-semibold text-foreground">{t.experienceSection.heading}</h2>
      </FadeIn>

      <ol className="mt-6 flex flex-col">
        {t.experiences.map((exp, i) => {
          const rowClass =
            "group flex items-baseline gap-3 py-3.5 text-sm transition-colors sm:gap-4";
          const content = (
            <>
              <span className="w-4 shrink-0 text-muted tabular-nums">{i + 1}.</span>
              <span className="min-w-0 flex-1 truncate text-foreground/90 group-hover:text-accent">
                <span className="font-medium">{exp.company}</span>
                <span className="text-muted"> — {exp.role}</span>
              </span>
              <span className="shrink-0 whitespace-nowrap text-xs text-muted tabular-nums">
                {exp.date}
              </span>
            </>
          );
          return (
            <FadeIn key={exp.company} delay={i * 0.04}>
              <li className="border-b border-border last:border-b-0">
                {exp.url ? (
                  <a href={exp.url} target="_blank" rel="noreferrer" className={rowClass}>
                    {content}
                  </a>
                ) : (
                  <div className={rowClass}>{content}</div>
                )}
              </li>
            </FadeIn>
          );
        })}
      </ol>

      <FadeIn delay={0.2}>
        <a
          href="/CV_NJUTAPMVOUI_Chirac.pdf"
          download
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground/30"
        >
          {t.experienceSection.downloadCV}
          <Download size={15} />
        </a>
      </FadeIn>
    </section>
  );
}
