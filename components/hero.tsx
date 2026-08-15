import Link from "next/link";
import { Mail, Globe } from "lucide-react";
import { getDictionary } from "@/lib/data";
import { LinkedinIcon, GitlabIcon, GithubIcon } from "@/components/icons";
import { FadeIn } from "@/components/fade-in";
import { withLocale, type Locale } from "@/lib/i18n";

const iconMap = {
  linkedin: LinkedinIcon,
  gitlab: GitlabIcon,
  github: GithubIcon,
  globe: Globe,
  mail: Mail,
};

export function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section className="pt-10 pb-2 sm:pt-16">
      <FadeIn>
        <h1 className="text-3xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-4xl">
          {t.hero.greetingLines[0]}
          <br />
          {t.hero.greetingLines[1]}
        </h1>
      </FadeIn>

      <FadeIn delay={0.08}>
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-[17px]">
          {t.hero.paragraph.before}
          <Link
            href={withLocale(locale, t.hero.paragraph.linkHref)}
            className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            {t.hero.paragraph.linkText}
          </Link>
          {t.hero.paragraph.after}
        </p>
      </FadeIn>

      <FadeIn delay={0.14}>
        <div className="mt-6 flex items-center gap-5">
          {t.socials.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="text-muted transition-colors hover:text-accent"
              >
                <Icon size={19} />
              </a>
            );
          })}
        </div>
      </FadeIn>

      {t.hero.badges.length > 0 && (
        <FadeIn delay={0.2}>
          <div className="mt-5 flex flex-wrap gap-2">
            {t.hero.badges.map((badge) =>
              badge.href ? (
                <Link
                  key={badge.label}
                  href={withLocale(locale, badge.href)}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {badge.label}
                </Link>
              ) : (
                <span
                  key={badge.label}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                >
                  {badge.label}
                </span>
              ),
            )}
          </div>
        </FadeIn>
      )}
    </section>
  );
}
