import Image from "next/image";
import { works } from "@/data/site";
import { Mixed } from "@/components/ui";
import LoopVideo from "@/components/LoopVideo";

export const metadata = {
  title: "Work",
  description: "Portraits by Zona Strings, built entirely from hand-cut Ankara fabric.",
};

const tilts = ["-rotate-2", "rotate-1", "rotate-2", "-rotate-1", "rotate-[1.5deg]"];

export default function WorkPage() {
  return (
    <>
      <section className="px-5 pb-16 pt-36 text-center md:pt-44">
        <p className="lede text-2xl md:text-3xl">Every piece, start to finish, in cloth</p>
        <Mixed
          as="h1"
          className="mt-2 text-[19vw] md:text-[10rem]"
          lines={[[["All", "sans"], ["work", "serif"]]]}
        />
      </section>

      <section className="mx-auto max-w-7xl columns-1 gap-8 px-5 pb-32 sm:columns-2 lg:columns-3 md:px-8">
        {works.map((w, i) => (
          <article key={w.slug} className={`mb-14 break-inside-avoid ${tilts[i % tilts.length]} transition-transform duration-500 hover:rotate-0`}>
            <div className="p-3" style={{ background: w.frame }}>
              <div className="group relative overflow-hidden bg-black" style={{ aspectRatio: `${w.w}/${w.h}` }}>
                {w.video && <LoopVideo src={w.video} className="absolute inset-0 h-full w-full object-cover" />}
                <Image
                  src={w.image}
                  alt={`${w.title}, ${w.kind.toLowerCase()} in Ankara fabric`}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className={`object-cover transition-opacity duration-500 ${w.video ? "group-hover:opacity-0" : ""}`}
                  quality={90}
                />
                {w.video && (
                  <span className="label absolute bottom-3 right-3 bg-white px-2 py-1 text-[11px] transition-opacity group-hover:opacity-0">
                    Hover to watch
                  </span>
                )}
              </div>
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <h2 className="display text-6xl">{w.title}</h2>
              <span className="label text-xs text-ink/60">{w.kind}</span>
            </div>
            <p className="lede mt-2 text-lg text-ink/80">{w.note}</p>
          </article>
        ))}
      </section>
    </>
  );
}
