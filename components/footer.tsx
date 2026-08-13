"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/lib/data";
import { locales, withLocale, type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? "/";
  const t = getDictionary(locale);

  const rest = pathname.replace(new RegExp(`^/${locale}`), "") || "/";

  return (
    <footer className="mt-20 border-t border-border">
      <div className="mx-auto flex max-w-[680px] flex-col gap-4 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-5">
          {t.footer.links.map((link) => (
            <Link
              key={link.href}
              href={withLocale(locale, link.href)}
              className="text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 sm:justify-end">
          <p className="text-muted">{t.footer.copyright}</p>
          <div className="flex items-center gap-0.5 rounded-full border border-border p-0.5">
            {locales.map((loc) => (
              <Link
                key={loc}
                href={loc === locale ? pathname : withLocale(loc, rest)}
                aria-current={loc === locale ? "true" : undefined}
                className={`rounded-full px-2.5 py-1 text-xs font-medium uppercase transition-colors ${
                  loc === locale
                    ? "bg-foreground text-background"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {loc}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
