"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./ui";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/#process", label: "Process" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
      <div className="relative flex items-start justify-between">
        <Link href="/" aria-label="Zona Strings home" className="text-red mix-blend-normal">
          <Logo />
        </Link>

        <nav className="absolute left-1/2 top-0 hidden -translate-x-1/2 bg-white px-3 py-2.5 shadow-[0_1px_0_rgb(0_0_0/0.04)] md:flex md:gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="label text-[13px] text-ink transition-colors hover:text-red"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/commission"
            className="label flex items-center gap-2 bg-white px-3 py-2 text-[13px] text-ink transition-colors hover:bg-red hover:text-white"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red" />
            Commission
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Menu"
            className="label bg-ink px-3 py-2 text-[13px] text-white md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mt-3 flex flex-col bg-white p-5 md:hidden">
          {[...links, { href: "/commission", label: "Commission" }].map((l) => (
            <Link key={l.href} href={l.href} className="display py-1 text-6xl hover:text-red">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
