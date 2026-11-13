import { Mixed } from "@/components/ui";
import CommissionForm from "@/components/CommissionForm";

export const metadata = {
  title: "Commission",
  description: "Commission a hand-cut Ankara fabric portrait from Zona Strings.",
};

const steps = [
  { n: "01", title: "Send the brief", text: "Who's in it, how big you want it, and when you need it. Add your best reference photo." },
  { n: "02", title: "Get a quote", text: "Zona replies with size options, price and a timeline. A deposit books your slot." },
  { n: "03", title: "Watch it happen", text: "Progress shots as the piece comes together, from line drawing to the final layer." },
  { n: "04", title: "Unveil", text: "Your portrait is finished, framed and delivered or shipped." },
];

const colors = ["#e4232f", "#1e9e8f", "#f29a2e", "#2c3fd1"];

export default function CommissionPage() {
  return (
    <>
      <section className="px-5 pb-16 pt-36 text-center md:pt-44">
        <p className="lede text-2xl md:text-3xl">Someone you&apos;d love to see in cloth</p>
        <Mixed
          as="h1"
          className="mt-2 text-[17vw] md:text-[10rem]"
          lines={[[["Commission", "sans"]], [["a", "serif"], ["portrait", "serif"]]]}
        />
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-24 sm:grid-cols-2 lg:grid-cols-4 md:px-8">
        {steps.map((s, i) => (
          <div
            key={s.n}
            className={`p-6 text-white ${i % 2 ? "rotate-1" : "-rotate-1"}`}
            style={{ background: colors[i] }}
          >
            <p className="display text-7xl">{s.n}</p>
            <h2 className="display mt-6 text-5xl">{s.title}</h2>
            <p className="lede mt-3 text-lg text-white/90">{s.text}</p>
          </div>
        ))}
      </section>

      <section className="bg-ink px-5 py-24 text-white md:py-32">
        <div className="mx-auto max-w-3xl">
          <Mixed
            className="text-center text-[14vw] md:text-[7rem]"
            lines={[[["The", "serif"], ["brief", "sans"]]]}
          />
          <p className="lede mt-4 text-center text-xl text-white/70">
            This opens an email to Zona with everything filled in. Attach your reference photos there.
          </p>
          <CommissionForm />
        </div>
      </section>
    </>
  );
}
