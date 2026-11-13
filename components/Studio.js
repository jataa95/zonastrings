import Image from "next/image";
import { stats } from "@/data/site";
import { Mixed, ScribbleLink } from "./ui";
import Parallax from "./Parallax";

const scattered = [
  { src: "/work/family-artist.jpg", alt: "Zona with the finished family portrait", cls: "left-[3%] top-[4%] w-[30vw] md:w-[17vw] -rotate-6", speed: 0.15, ratio: "aspect-[9/16]" },
  { src: "/work/fabric-diamond.jpg", alt: "Teal and orange diamond Ankara print", cls: "right-[4%] top-[2%] w-[32vw] md:w-[15vw] rotate-6", speed: 0.3, ratio: "aspect-square" },
  { src: "/work/process-tupac-2.jpg", alt: "Cutting fabric for the Pac portrait", cls: "left-[8%] bottom-[2%] w-[30vw] md:w-[15vw] rotate-3", speed: 0.25, ratio: "aspect-[3/4]" },
  { src: "/work/tupac-face.jpg", alt: "Close-up of fabric pieces forming a face", cls: "right-[6%] bottom-[6%] w-[34vw] md:w-[18vw] -rotate-3", speed: 0.1, ratio: "aspect-[3/4]" },
  { src: "/work/process-family-2.jpg", alt: "Faces of the family portrait taking shape", cls: "hidden md:block left-[24%] top-[-2%] w-[11vw] rotate-[8deg]", speed: 0.4, ratio: "aspect-[9/16]" },
  { src: "/work/fabric-leaf.jpg", alt: "Green and rust leaf Ankara print", cls: "hidden md:block right-[24%] bottom-[-4%] w-[10vw] -rotate-[10deg]", speed: 0.35, ratio: "aspect-square" },
];

export default function Studio() {
  return (
    <section className="overflow-hidden">
      <div className="relative flex min-h-[115svh] items-center justify-center px-5 py-40">
        {scattered.map((s) => (
          <Parallax key={s.src} speed={s.speed} className={`absolute ${s.cls}`}>
            <div className="bg-white p-1.5 shadow-xl md:p-2">
              <div className={`relative ${s.ratio} overflow-hidden`}>
                <Image src={s.src} alt={s.alt} fill sizes="(min-width: 768px) 18vw, 34vw" className="object-cover" />
              </div>
            </div>
          </Parallax>
        ))}

        <div className="relative z-10 text-center">
          <span className="font-script inline-block -rotate-6 text-5xl text-red md:text-6xl">the studio</span>
          <p className="lede mt-2 text-2xl md:text-3xl">Scraps everywhere, scissors in hand</p>
          <Mixed
            className="mt-2 text-[14vw] md:text-[7.5rem]"
            lines={[[["The man in", "serif"]], [["the red shirt", "sans"]]]}
          />
          <div className="mt-8 flex justify-center">
            <ScribbleLink href="/about">Meet Zona</ScribbleLink>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-px border-y border-ink/10 bg-ink/10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-paper px-5 py-10 text-center">
            <p className="display text-7xl md:text-8xl">{s.value}</p>
            <p className="lede mt-2 text-lg">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
