import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getDictionary } from "@/lib/data";
import { FadeIn } from "@/components/fade-in";
import { withLocale, type Locale } from "@/lib/i18n";

export function FeaturedProject({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const featuredProject = t.featuredProject;

  return (
    <FadeIn>
      <section className="mt-14 rounded-2xl border border-border bg-foreground/[0.02] p-6 shadow-sm sm:p-7">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-base font-semibold text-white">
            HD
          </div>
          <div className="min-w-0">
            <h2 className="text-[15px] font-medium text-foreground sm:text-base">
              {featuredProject.cardTitle}
            </h2>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex -space-x-2">
                {["#93c5fd", "#a5b4fc", "#fbcfe8", "#bbf7d0"].map((color, i) => (
                  <span
                    key={i}
                    className="h-6 w-6 rounded-full border-2 border-background"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <span className="text-xs text-muted">{featuredProject.trustedBy}</span>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={featuredProject.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            {featuredProject.visitSite}
            <ArrowUpRight size={15} />
          </a>
          <Link
            href={withLocale(locale, "/projects")}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground/30"
          >
            {featuredProject.viewProject}
          </Link>
        </div>
      </section>
    </FadeIn>
  );
}
