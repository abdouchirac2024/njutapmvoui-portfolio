"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { getDictionary } from "@/lib/data";
import { withLocale, type Locale } from "@/lib/i18n";

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const t = getDictionary(locale);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- required to avoid hydration mismatch on theme icon (next-themes recommended pattern)
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-transparent bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[680px] items-center justify-between px-6 py-4 sm:px-8">
          <Link
            href={withLocale(locale, "/")}
            aria-label={t.header.home}
            onClick={() => setOpen(false)}
            className="group block h-10 w-10 overflow-hidden rounded-full ring-1 ring-border transition-all duration-300 hover:ring-2 hover:ring-accent"
          >
            <Image
              src="/avatar.jpg"
              alt={t.site.name}
              width={80}
              height={80}
              className="h-10 w-10 object-cover transition-transform duration-300 ease-out group-hover:scale-150"
              priority
            />
          </Link>

          <div className="flex items-center gap-4">
            {mounted && (
              <button
                type="button"
                aria-label={t.header.toggleTheme}
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="text-muted transition-colors hover:text-foreground"
              >
                {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              {t.header.menu}
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col bg-background"
          >
            <div className="mx-auto flex w-full max-w-[680px] items-center justify-between px-6 py-4 sm:px-8">
              <div className="group h-10 w-10 overflow-hidden rounded-full ring-1 ring-border transition-all duration-300 hover:ring-2 hover:ring-accent">
                <Image
                  src="/avatar.jpg"
                  alt={t.site.name}
                  width={80}
                  height={80}
                  className="h-10 w-10 object-cover transition-transform duration-300 ease-out group-hover:scale-150"
                />
              </div>
              <button
                type="button"
                aria-label={t.header.closeMenu}
                onClick={() => setOpen(false)}
                className="text-foreground/80 transition-colors hover:text-foreground"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="mx-auto flex w-full max-w-[680px] flex-1 flex-col justify-center gap-2 px-6 sm:px-8">
              {t.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Link
                    href={withLocale(locale, item.href)}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-4xl font-medium tracking-tight text-foreground/90 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
