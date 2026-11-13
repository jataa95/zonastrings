import { services } from "@/data/site";
import { Mixed, ScribbleLink } from "./ui";
import LoopVideo from "./LoopVideo";

const tilt = ["-rotate-[5deg] md:translate-y-6", "rotate-[1deg] md:-translate-y-2", "rotate-[5deg] md:translate-y-8"];
const tagTilt = ["-rotate-3", "rotate-2", "-rotate-2"];

export default function Services() {
  return (
    <section className="overflow-hidden px-5 py-24 md:py-36">
      <div className="text-center">
        <p className="lede text-2xl md:text-3xl">What Zona makes</p>
        <Mixed
          className="mt-2 text-[15vw] md:text-[7.5rem]"
          lines={[[["Made to", "sans"], ["order", "serif"]]]}
        />
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-14 sm:grid-cols-2 md:mt-24 md:grid-cols-3 md:gap-6">
        {services.map((s, i) => (
          <article key={s.title} className={`group relative transition-transform duration-500 hover:rotate-0 ${tilt[i]}`}>
            <span
              className={`label absolute -top-6 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap px-3 py-2 text-[13px] text-white ${tagTilt[i]}`}
              style={{ background: s.frame }}
            >
              {s.tag}
            </span>
            <div className="p-3" style={{ background: s.frame }}>
              <div className="relative aspect-[3/4] overflow-hidden bg-black">
                <LoopVideo
                  src={s.video}
                  poster={s.poster}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <h3 className="display absolute inset-x-0 bottom-3 text-center text-7xl text-white drop-shadow-[0_2px_12px_rgb(0_0_0/0.5)]">
                  {s.title}
                </h3>
              </div>
            </div>
            <p className="lede mx-auto mt-5 max-w-xs text-center text-lg">{s.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <ScribbleLink href="/commission" color="#2c3fd1">
          How commissions work
        </ScribbleLink>
      </div>
    </section>
  );
}
