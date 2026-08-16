"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun, Mail, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import { getDictionary } from "@/lib/data";
import { withLocale, type Locale } from "@/lib/i18n";
import { LinkedinIcon, GitlabIcon, GithubIcon } from "@/components/icons";

const socialIconMap = {
  linkedin: LinkedinIcon,
  gitlab: GitlabIcon,
  github: GithubIcon,
  globe: Globe,
  mail: Mail,
};

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
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col overflow-hidden"
            style={{ background: "rgba(10,10,11,0.97)" }}
          >
            {/* subtle grid texture */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* top bar */}
            <div className="relative z-10 mx-auto flex w-full max-w-[680px] items-center justify-between px-6 py-4 sm:px-8">
              <div className="group h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/20 transition-all duration-300 hover:ring-2 hover:ring-accent">
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
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-white/30 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* nav links */}
            <nav className="relative z-10 mx-auto flex w-full max-w-[680px] flex-1 flex-col justify-center gap-1 px-6 sm:px-8">
              {t.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={withLocale(locale, item.href)}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 py-3 transition-colors"
                  >
                    <span className="w-6 text-right text-xs tabular-nums text-white/20 transition-colors group-hover:text-accent/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[2.25rem] font-semibold leading-none tracking-tight text-white/80 transition-colors group-hover:text-white">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* bottom bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="relative z-10 mx-auto w-full max-w-[680px] border-t border-white/10 px-6 py-5 sm:px-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {t.socials.map((social) => {
                    const Icon = socialIconMap[social.icon];
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.label}
                        className="text-white/30 transition-colors hover:text-white"
                      >
                        <Icon width={17} height={17} />
                      </a>
                    );
                  })}
                </div>
                <p className="text-xs text-white/20">{t.site.location}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
