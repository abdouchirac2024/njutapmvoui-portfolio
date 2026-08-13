import type { Metadata } from "next";
import { Mail, Globe } from "lucide-react";
import { getDictionary } from "@/lib/data";
import { LinkedinIcon, GitlabIcon } from "@/components/icons";
import { FadeIn } from "@/components/fade-in";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

const iconMap = {
  linkedin: LinkedinIcon,
  gitlab: GitlabIcon,
  globe: Globe,
  mail: Mail,
};

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
    path: "/contact",
    title: t.meta.contact.title,
    description: t.meta.contact.description,
    siteName: t.site.name,
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "fr";
  const t = getDictionary(l);

  return (
    <main className="mx-auto w-full max-w-[680px] px-6 pb-16 pt-10 sm:px-8 sm:pt-16">
      <FadeIn>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">{t.contactPage.heading}</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{t.contactPage.intro}</p>
      </FadeIn>

      <FadeIn delay={0.06}>
        <a
          href={`mailto:${t.site.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          <Mail size={16} />
          {t.site.email}
        </a>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-10 flex flex-col gap-3">
          {t.socials.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border px-4 py-3 text-sm text-foreground transition-colors hover:border-foreground/30 hover:text-accent"
              >
                <Icon size={18} className="text-muted" />
                {social.label}
              </a>
            );
          })}
        </div>
      </FadeIn>
    </main>
  );
}
