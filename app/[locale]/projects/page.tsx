import type { Metadata } from "next";
import { getDictionary } from "@/lib/data";
import { FadeIn } from "@/components/fade-in";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { ProjectsClient } from "./page-client";

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
  return buildMetadata({
    locale: l,
    path: "/projects",
    title: t.meta.projects.title,
    description: t.meta.projects.description,
    siteName: t.site.name,
  });
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "fr";
  const t = getDictionary(l);

  return (
    <main className="mx-auto w-full max-w-[680px] px-6 pb-16 pt-10 sm:px-8 sm:pt-16">
      <FadeIn>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">{t.projectsPage.heading}</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{t.projectsPage.intro}</p>
      </FadeIn>
      <ProjectsClient locale={l} />
    </main>
  );
}
