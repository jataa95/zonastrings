"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScribbleLink } from "./ui";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .from(".hero-line", { yPercent: 110, duration: 1.1, stagger: 0.09 })
          .from(".hero-kicker", { y: 20, opacity: 0, duration: 0.8 }, 0.1)
          .from(
            ".hero-card",
            { y: 80, rotate: 0, opacity: 0, duration: 1.2, stagger: 0.12 },
            0.35
          )
          .from(".hero-cta", { opacity: 0, y: 10, duration: 0.6 }, 0.8);
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pb-32 pt-28 text-center"
    >
      {/* floating cards */}
      <figure className="hero-card absolute left-[4%] top-[22%] hidden w-[15vw] max-w-[220px] -rotate-[8deg] bg-white p-2 pb-8 shadow-xl lg:block">
        <div className="relative aspect-[3/4]">
          <Image src="/work/tupac.jpg" alt="Pac, fabric portrait" fill sizes="220px" className="object-cover" />
        </div>
        <figcaption className="font-script absolute bottom-1 left-3 text-lg text-ink/70">Pac</figcaption>
      </figure>
      <figure className="hero-card absolute bottom-[14%] right-[5%] hidden w-[14vw] max-w-[200px] rotate-[7deg] bg-white p-2 pb-8 shadow-xl lg:block">
        <div className="relative aspect-[3/4]">
          <Image src="/work/family-mother.jpg" alt="Detail from The Family" fill sizes="200px" className="object-cover" />
        </div>
        <figcaption className="font-script absolute bottom-1 left-3 text-lg text-ink/70">The Family</figcaption>
      </figure>
      <span className="hero-card absolute right-[9%] top-[20%] hidden h-24 w-24 rotate-12 place-items-center rounded-full bg-red text-center text-white lg:grid">
        <span className="label text-[13px] leading-tight">
          100%
          <br />
          Ankara
          <br />
          fabric
        </span>
      </span>

      <p className="hero-kicker lede text-[1.6rem] md:text-[2.4rem]">
        Hand-cut Ankara,
        <br />
        one face at a time
      </p>

      <h1 className="mt-4 leading-[0.86] text-[22vw] sm:text-[17vw] md:text-[10.5rem] lg:text-[12.5rem]">
        <span className="block overflow-hidden">
          <span className="hero-line block">
            <span className="display">Portraits</span>
          </span>
        </span>
        <span className="block overflow-hidden pb-[0.04em]">
          <span className="hero-line block">
            <span className="display">in</span> <span className="display-serif">fabric</span>
          </span>
        </span>
      </h1>

      <div className="hero-cta mt-8">
        <ScribbleLink href="#work">See the work</ScribbleLink>
      </div>
    </section>
  );
}
