import Link from "next/link";
import { site } from "@/data/site";
import { BlockButton, Logo, Mixed } from "./ui";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-28 text-center md:pt-36">
        <p className="lede mb-4 text-2xl text-white/80 md:text-3xl">
          Someone you&apos;d love to see in cloth?
        </p>
        <Mixed
          className="text-[19vw] md:text-[10.5rem]"
          lines={[
            [["Put your people", "sans"]],
            [["in", "sans"], ["fabric", "serif"]],
          ]}
        />
        <p className="lede mx-auto mt-6 max-w-md text-xl text-white/70">
          Tell Zona who, how big and when. He takes it from there.
        </p>
        <div className="mt-8 flex justify-center">
          <BlockButton href="/commission" color="#e4232f" text="#fff">
            Start a commission
          </BlockButton>
        </div>
      </section>

      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
          <div>
            <Logo className="text-white" />
            <p className="mt-6 max-w-[16rem] text-sm text-white/60">
              Hand-cut Ankara fabric portraits by {site.artist}.
            </p>
          </div>
          <FooterCol title="Navigate">
            <Link href="/work">Work</Link>
            <Link href="/about">About</Link>
            <Link href="/#process">Process</Link>
            <Link href="/commission">Commission</Link>
          </FooterCol>
          <FooterCol title="Contact">
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </FooterCol>
          <FooterCol title="Socials">
            <a href={site.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </FooterCol>
        </div>
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 px-5 pb-8 text-xs text-white/40 md:px-8">
          <span>© {new Date().getFullYear()} Zona Strings</span>
          <span>All portraits are original works. Please don&apos;t reproduce without permission.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h3 className="label mb-4 text-sm text-white/40">{title}</h3>
      <div className="flex flex-col gap-1.5 text-[15px] [&_a:hover]:text-red">{children}</div>
    </div>
  );
}
