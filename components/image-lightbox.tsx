"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function ImageLightbox({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setZoomed(false);
          setOpen(true);
        }}
        aria-label={alt}
        className="group relative block aspect-[16/9] w-full cursor-zoom-in overflow-hidden rounded-2xl border border-border"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="680px"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          priority
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setOpen(false)}
          >
            <div className="absolute right-4 top-4 z-10 flex items-center gap-2">
              <button
                type="button"
                aria-label={zoomed ? "Dézoomer" : "Zoomer"}
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomed((z) => !z);
                }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white/40 hover:text-white"
              >
                {zoomed ? <ZoomOut size={17} /> : <ZoomIn size={17} />}
              </button>
              <button
                type="button"
                aria-label="Fermer"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white/40 hover:text-white"
              >
                <X size={17} />
              </button>
            </div>

            <div
              className={`relative h-[85vh] w-[92vw] max-w-5xl rounded-xl bg-black/40 ${zoomed ? "overflow-auto" : "overflow-hidden"}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label={zoomed ? "Dézoomer" : "Zoomer"}
                onClick={() => setZoomed((z) => !z)}
                className={`relative block ${
                  zoomed ? "h-[170vh] w-[184vw] cursor-zoom-out" : "h-full w-full cursor-zoom-in"
                }`}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes={zoomed ? "190vw" : "92vw"}
                  className="object-contain"
                />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
