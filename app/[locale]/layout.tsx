import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getDictionary } from "@/lib/data";
import { isLocale, locales, withLocale, type Locale } from "@/lib/i18n";
import { buildMetadata, siteUrl } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  return {
    metadataBase: new URL(siteUrl),
    robots: { index: true, follow: true },
    ...buildMetadata({
      locale: l,
      path: "/",
      title: t.meta.home.title,
      description: t.meta.home.description,
      siteName: t.site.name,
    }),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: t.site.name,
    jobTitle: t.site.role,
    url: `${siteUrl}${withLocale(locale, "/")}`,
    image: `${siteUrl}/avatar.jpg`,
    email: `mailto:${t.site.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Douala", addressCountry: "CM" },
    sameAs: t.socials.filter((s) => s.icon !== "mail").map((s) => s.href),
  };

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header locale={locale} />
          {children}
          <Footer locale={locale} />
        </ThemeProvider>
      </body>
    </html>
  );
}
