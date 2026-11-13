const items = [
  { word: "Ankara", swatch: "/work/fabric-diamond.jpg", pos: "40% 30%" },
  { word: "Wax print", swatch: "/work/fabric-leaf.jpg", pos: "50% 50%" },
  { word: "Scissors", swatch: "/work/tupac-face.jpg", pos: "30% 20%" },
  { word: "Portraits", swatch: "/work/tupac-eye.jpg", pos: "50% 60%" },
  { word: "Commissions", swatch: "/work/family-father.jpg", pos: "50% 80%" },
  { word: "Patterns", swatch: "/work/fabric-diamond.jpg", pos: "10% 80%" },
];

export default function Marquee({ dark = false }) {
  const row = [...items, ...items];
  return (
    <div
      className={`overflow-hidden py-6 ${dark ? "bg-ink text-white" : ""}`}
      aria-hidden
    >
      <div className="marquee-track flex w-max items-center gap-10">
        {row.map((it, i) => (
          <span key={i} className="flex items-center gap-10">
            <span
              className="h-12 w-20 rounded-full bg-cover md:h-14 md:w-24"
              style={{ backgroundImage: `url(${it.swatch})`, backgroundPosition: it.pos, backgroundSize: "260%" }}
            />
            <span className="display-serif text-5xl md:text-6xl">{it.word}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
