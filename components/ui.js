import Link from "next/link";

export function Logo({ className = "" }) {
  return (
    <span
      className={`font-script text-[2.1rem] leading-none tracking-tight -rotate-6 inline-block ${className}`}
    >
      Zona Strings
    </span>
  );
}

export function Arrow({ dir = "right", className = "" }) {
  const rot = { right: 0, down: 90, left: 180, up: -90 }[dir];
  return (
    <svg
      viewBox="0 0 16 16"
      className={`h-3.5 w-3.5 ${className}`}
      style={{ transform: `rotate(${rot}deg)` }}
      aria-hidden
    >
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

// Square arrow + label block button, like the reference's "BEKIJK ONS WERK".
export function BlockButton({ href, children, color = "#ec5fa0", text = "#111010", external }) {
  const props = external ? { target: "_blank", rel: "noreferrer" } : {};
  return (
    <Link href={href} {...props} className="group inline-flex items-stretch gap-[3px]">
      <span
        className="grid w-9 place-items-center transition-transform duration-300 group-hover:translate-x-1"
        style={{ background: color, color: text }}
      >
        <Arrow />
      </span>
      <span
        className="label flex items-center px-3 py-2.5 text-[15px]"
        style={{ background: color, color: text }}
      >
        {children}
      </span>
    </Link>
  );
}

// Serif link with a hand-drawn underline, like "Ontdek meer".
export function ScribbleLink({ href, children, color = "#e4232f" }) {
  return (
    <Link href={href} className="group relative inline-flex items-center gap-2">
      <span className="lede text-2xl">{children}</span>
      <span
        className="grid h-5 w-5 place-items-center text-white transition-transform group-hover:translate-y-0.5"
        style={{ background: color }}
      >
        <Arrow dir="down" className="h-3 w-3" />
      </span>
      <svg
        viewBox="0 0 100 12"
        className="scribble absolute -bottom-3 left-0 h-3 w-[80%]"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M2 9c18-3 40-4 58-4M8 5c-6 2-4 5 12 4 22-1 44-4 78-5"
          fill="none"
          stroke={color}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    </Link>
  );
}

// Heading that mixes bold condensed sans with condensed serif, per line.
// lines: [[["BOLD", "sans"], ["SERIF", "serif"]], ...]
export function Mixed({ lines, className = "", as: Tag = "h2" }) {
  return (
    <Tag className={`leading-[0.86] ${className}`}>
      {lines.map((line, i) => (
        <span key={i} className="block">
          {line.map(([word, kind], j) => (
            <span key={j} className={kind === "serif" ? "display-serif" : "display"}>
              {j > 0 ? " " : ""}
              {word}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}

export function Kicker({ children, className = "" }) {
  return <p className={`lede text-2xl md:text-[2rem] ${className}`}>{children}</p>;
}
