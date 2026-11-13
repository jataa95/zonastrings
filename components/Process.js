"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { process } from "@/data/site";
import { Mixed } from "./ui";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const colors = ["#e4232f", "#1e9e8f", "#f29a2e", "#2c3fd1"];

export default function Process() {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const track = root.current.querySelector(".process-track");
        gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: ".process-pin",
            start: "top top",
            end: () => `+=${track.scrollWidth - window.innerWidth}`,
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
      });
    },
    { scope: root }
  );

  return (
    <section id="process" ref={root} className="bg-red text-white">
      <div className="process-pin flex min-h-[100svh] flex-col justify-center overflow-hidden py-24">
        <div className="process-track flex flex-col gap-16 px-5 lg:w-max lg:flex-row lg:items-center lg:gap-20 lg:px-16">
          <div className="shrink-0 text-center lg:w-[34rem] lg:text-left">
            <p className="lede text-2xl md:text-3xl">How a piece comes together</p>
            <Mixed
              className="mt-2 text-[15vw] md:text-[8rem]"
              lines={[[["From", "sans"], ["cloth", "serif"]], [["to", "serif"], ["face", "sans"]]]}
            />
            <p className="lede mx-auto mt-6 max-w-sm text-xl text-white/85 lg:mx-0">
              Weeks of tracing, sorting and cutting, compressed into four steps.
            </p>
          </div>

          {process.map((p, i) => (
            <article
              key={p.n}
              className={`mx-auto w-full max-w-sm shrink-0 lg:w-[22rem] ${i % 2 ? "lg:translate-y-14" : "lg:-translate-y-10"}`}
            >
              <div className={`p-3 shadow-2xl ${i % 2 ? "rotate-2" : "-rotate-2"}`} style={{ background: colors[(i + 1) % 4] }}>
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <Image src={p.image} alt={`${p.title}: ${p.text}`} fill sizes="352px" className="object-cover" />
                  <span className="display absolute left-3 top-2 text-6xl text-white drop-shadow">{p.n}</span>
                </div>
              </div>
              <h3 className="display mt-6 text-7xl">{p.title}</h3>
              <p className="lede mt-2 text-xl text-white/90">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
