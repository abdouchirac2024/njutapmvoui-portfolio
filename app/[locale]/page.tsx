import { Hero } from "@/components/hero";
import { FeaturedProject } from "@/components/featured-project";
import { LatestProjects } from "@/components/latest-projects";
import { ExperienceList } from "@/components/experience-list";
import { isLocale, type Locale } from "@/lib/i18n";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "fr";

  return (
    <main className="mx-auto w-full max-w-[680px] px-6 pb-8 sm:px-8">
      <Hero locale={l} />
      <FeaturedProject locale={l} />
      <LatestProjects locale={l} />
      <ExperienceList locale={l} />
    </main>
  );
}
