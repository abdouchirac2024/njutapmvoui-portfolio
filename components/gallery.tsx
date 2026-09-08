import Image from "next/image";
import { getDictionary } from "@/lib/data";
import { FadeIn } from "@/components/fade-in";
import type { Locale } from "@/lib/i18n";

const rotations = ["-rotate-2", "rotate-2", "-rotate-1", "rotate-1", "-rotate-2"];

export function Gallery({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  if (t.gallery.length === 0) return null;

  return (
    <section className="mt-8 sm:mt-10">
      <div className="flex gap-4 sm:gap-5">
        {t.gallery.map((photo, i) => (
          <FadeIn key={photo.src} delay={0.05 * i} className="min-w-0 flex-1">
            <div
              className={`group relative aspect-[3/4] max-h-[420px] w-full overflow-hidden rounded-2xl border border-border shadow-sm transition-all duration-300 ease-out hover:z-10 hover:rotate-0 hover:scale-[1.03] ${rotations[i % rotations.length]}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 45vw, 320px"
                className="object-cover"
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
