"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, X } from "lucide-react";
import { getDictionary } from "@/lib/data";
import type { Locale } from "@/lib/i18n";

export function CvPreview({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const t = getDictionary(locale);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground/30"
      >
        {t.experienceSection.previewCV}
        <Eye size={15} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-8"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
              transition={{ duration: 0.2 }}
              className="flex h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <span className="text-sm font-medium text-foreground">{t.experienceSection.previewCV}</span>
                <button
                  type="button"
                  aria-label={t.experienceSection.closePreview}
                  onClick={() => setOpen(false)}
                  className="text-muted transition-colors hover:text-foreground"
                >
                  <X size={18} />
                </button>
              </div>
              <iframe src="/CV_NJUTAPMVOUI_Chirac.pdf" title={t.experienceSection.previewCV} className="flex-1" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
