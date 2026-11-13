"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { works } from "@/data/site";
import { BlockButton, Mixed } from "./ui";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const stack = works.slice(0, 4);

export default function WorkStack() {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray(".stack-card");
        gsap.set(cards.slice(1), { yPercent: 130, rotate: (i) => (i % 2 ? -4 : 4) });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".stack-pin",
            start: "top top",
            end: () => `+=${window.innerHeight * (cards.length - 1) * 0.9}`,
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });

        cards.slice(1).forEach((card, i) => {
          const prev = cards.slice(0, i + 1);
          tl.to(card, { yPercent: 0, rotate: 0, ease: "power2.out", duration: 1 }, i)
            .to(
              prev,
              {
                y: (j) => -(i + 1 - j) * 22,
                scale: (j) => 1 - (i + 1 - j) * 0.04,
                ease: "power2.out",
                duration: 1,
              },
              i
            );
        });
      });
    },
    { scope: root }
  );

  return (
    <section id="work" ref={root} className="bg-ink text-white">
      <div className="stack-pin flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pb-10 pt-24">
        <p className="lede text-center text-xl text-white/85 md:text-2xl">
          Scroll-stopping, share-worthy.
          <br />A few pieces from the studio.
        </p>
        <Mixed
          className="mt-2 text-center text-[15vw] md:text-[7.5rem]"
          lines={[[["Recent", "sans"], ["work", "serif"]]]}
        />

        <div className="relative mt-8 aspect-[4/5] w-[min(76vw,38vh,400px)] md:mt-12">
          {stack.map((w, i) => (
            <article
              key={w.slug}
              className="stack-card absolute inset-0 origin-top p-3 shadow-2xl md:p-4"
              style={{ background: w.frame, zIndex: i + 1 }}
            >
              <div className="relative h-full w-full overflow-hidden bg-black">
                <Image
                  src={w.image}
                  alt={`${w.title}, ${w.kind.toLowerCase()} in Ankara fabric`}
                  fill
                  sizes="(min-width: 768px) 420px, 78vw"
                  className="object-cover"
                  quality={90}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-20 text-center">
                  <p className="label text-xs text-white/80">{w.kind}</p>
                  <h3 className="display text-6xl md:text-7xl">{w.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <BlockButton href="/work">See all work</BlockButton>
        </div>
      </div>
    </section>
  );
}
