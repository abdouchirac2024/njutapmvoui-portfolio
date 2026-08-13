export type Locale = "fr" | "en";

export const locales: Locale[] = ["fr", "en"];
export const defaultLocale: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}

export function withLocale(locale: Locale, path: string): string {
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
}
