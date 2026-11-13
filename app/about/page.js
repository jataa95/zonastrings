import Image from "next/image";
import { site, stats } from "@/data/site";
import { BlockButton, Mixed } from "@/components/ui";
import Marquee from "@/components/Marquee";
import LoopVideo from "@/components/LoopVideo";

export const metadata = {
  title: "About",
  description: "Meet Echezona Ogudu, the award-winning artist behind Zona Strings.",
};

export default function AboutPage() {
  return (
    <>
      <section className="px-5 pb-20 pt-36 text-center md:pt-44">
        <p className="lede text-2xl md:text-3xl">The artist behind Zona Strings</p>
        <Mixed
          as="h1"
          className="mt-2 text-[17vw] md:text-[10rem]"
          lines={[[["Echezona", "sans"]], [["Ogudu", "serif"]]]}
        />
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-16 px-5 pb-28 md:grid-cols-2 md:px-8">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="-rotate-3 bg-red p-3 shadow-2xl">
            <div className="relative aspect-[9/16] overflow-hidden bg-black">
              <LoopVideo src="/video/studio.mp4" poster="/work/process-tupac-1.jpg" className="h-full w-full object-cover" />
            </div>
          </div>
          <span className="font-script absolute -bottom-8 -right-4 rotate-[-8deg] text-4xl text-red">
            scissors &amp; patience
          </span>
        </div>

        <div className="lede space-y-5 text-xl md:text-2xl">
          <p>
            Echezona Ogudu, known online as <strong className="font-normal italic">Zona Strings</strong>,
            is an award-winning artist who makes portraits without a single drop of paint.
          </p>
          <p>
            His medium is Ankara: the bold wax-print cloth worn at weddings, owambes and Sunday services.
            He cuts it by hand into hundreds of small pieces and lays them edge to edge, letting each print
            do the work of a brushstroke. Florals become cheekbones. Geometric prints become shadow.
          </p>
          <p>
            The result reads as a photograph from across the room and as pure pattern up close. Two ways of
            looking at one face.
          </p>
          <p>
            You&apos;ll usually find him in the studio in a red shirt, buried in fabric, sharing the whole
            process with more than 150,000 people following along on Instagram.
          </p>
          <div className="flex flex-wrap gap-3 pt-3">
            <BlockButton href="/commission" color="#e4232f" text="#fff">
              Commission a piece
            </BlockButton>
            <BlockButton href={site.instagram} external color="#111010" text="#fff">
              Follow {site.handle}
            </BlockButton>
          </div>
        </div>
      </section>

      <Marquee dark />

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-28 md:grid-cols-3 md:px-8">
        {[
          { src: "/work/tupac-eye.jpg", alt: "Close-up of an eye built from fabric", frame: "#2c3fd1", rot: "-rotate-2" },
          { src: "/work/family-father.jpg", alt: "Father and son, detail from The Family", frame: "#f4c64e", rot: "rotate-1 md:translate-y-10" },
          { src: "/work/fabric-diamond.jpg", alt: "Diamond Ankara print used as a background", frame: "#1e9e8f", rot: "rotate-2" },
        ].map((p) => (
          <div key={p.src} className={`p-3 ${p.rot}`} style={{ background: p.frame }}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 30vw, 90vw" className="object-cover" />
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-px border-y border-ink/10 bg-ink/10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-paper px-5 py-10 text-center">
            <p className="display text-7xl md:text-8xl">{s.value}</p>
            <p className="lede mt-2 text-lg">{s.label}</p>
          </div>
        ))}
      </section>
      <div className="h-24" />
    </>
  );
}
