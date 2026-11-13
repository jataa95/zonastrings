import Image from "next/image";
import { BlockButton, Mixed } from "./ui";
import Parallax from "./Parallax";

export default function AboutTeaser() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 md:grid-cols-2 md:px-8 md:py-36">
      <div className="relative mx-auto w-full max-w-md">
        <Parallax speed={-0.08}>
          <figure className="relative -rotate-3 bg-white p-3 pb-14 shadow-2xl">
            <div className="relative aspect-[9/14] overflow-hidden">
              <Image
                src="/work/process-agbada.jpg"
                alt="Echezona Ogudu placing fabric on a portrait in his studio"
                fill
                sizes="(min-width: 768px) 420px, 90vw"
                className="object-cover"
              />
            </div>
            <figcaption className="font-script absolute bottom-3 left-5 text-2xl text-ink/75">
              in the red shirt, as always
            </figcaption>
          </figure>
        </Parallax>
        <Parallax speed={0.12} className="absolute -right-6 -top-6 md:-right-14">
          <span className="label grid h-28 w-28 rotate-12 place-items-center rounded-full bg-gold text-center text-[15px] leading-tight">
            Award
            <br />
            winning
            <br />
            artist
          </span>
        </Parallax>
        <Parallax speed={0.2} className="absolute -bottom-10 -left-4 w-32 md:-left-16 md:w-40">
          <div className="relative aspect-square rotate-6 border-[6px] border-teal bg-white shadow-xl">
            <Image src="/work/fabric-leaf.jpg" alt="" fill sizes="160px" className="object-cover" />
          </div>
        </Parallax>
      </div>

      <div className="text-center md:text-left">
        <p className="lede mb-3 text-2xl md:text-3xl">Who&apos;s behind it</p>
        <Mixed
          className="text-[16vw] md:text-[6.5rem] lg:text-[7.5rem]"
          lines={[
            [["Echezona", "sans"]],
            [["Ogudu", "serif"]],
          ]}
        />
        <p className="lede mx-auto mt-6 max-w-md text-xl md:mx-0 md:text-2xl">
          No paint, no brushes. Zona builds every face from cloth: hundreds of hand-cut pieces
          of Ankara, laid edge to edge until the pattern turns into skin, light and expression.
        </p>
        <div className="mt-8 flex justify-center md:justify-start">
          <BlockButton href="/about" color="#2c3fd1" text="#fff">
            More about Zona
          </BlockButton>
        </div>
      </div>
    </section>
  );
}
