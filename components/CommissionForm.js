"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { Arrow } from "./ui";

const types = ["Personal", "Couple", "Family", "Tribute", "Gift", "Brand / event"];
const sizes = ["Small (up to 60 cm)", "Medium (60–100 cm)", "Large (100 cm +)", "Not sure yet"];

export default function CommissionForm() {
  const [type, setType] = useState("Personal");
  const [size, setSize] = useState(sizes[1]);

  function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Name: ${f.get("name")}`,
      `Email: ${f.get("email")}`,
      `Phone / WhatsApp: ${f.get("phone") || "-"}`,
      `Portrait type: ${type}`,
      `People in the piece: ${f.get("people") || "-"}`,
      `Size: ${size}`,
      `Needed by: ${f.get("date") || "Flexible"}`,
      `Location (for delivery): ${f.get("location") || "-"}`,
      "",
      f.get("message"),
      "",
      "(Reference photos attached)",
    ].join("\n");
    const subject = `Commission: ${type} portrait for ${f.get("name")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const input =
    "w-full border-0 border-b border-white/25 bg-transparent px-0 py-3 text-xl lede text-white placeholder:text-white/35 focus:border-red focus:outline-none focus:ring-0";

  return (
    <form onSubmit={onSubmit} className="mt-14 space-y-10">
      <Group label="What kind of portrait?">
        <Chips options={types} value={type} onChange={setType} />
      </Group>

      <div className="grid gap-8 md:grid-cols-2">
        <Field label="Your name">
          <input name="name" required className={input} placeholder="Full name" autoComplete="name" />
        </Field>
        <Field label="Email">
          <input name="email" type="email" required className={input} placeholder="you@example.com" autoComplete="email" />
        </Field>
        <Field label="Phone / WhatsApp">
          <input name="phone" className={input} placeholder="Optional" autoComplete="tel" />
        </Field>
        <Field label="How many people?">
          <input name="people" type="number" min="1" className={input} placeholder="1" />
        </Field>
        <Field label="Needed by">
          <input name="date" type="date" className={`${input} [color-scheme:dark]`} />
        </Field>
        <Field label="Your city / country">
          <input name="location" className={input} placeholder="For delivery" autoComplete="country-name" />
        </Field>
      </div>

      <Group label="Size">
        <Chips options={sizes} value={size} onChange={setSize} />
      </Group>

      <Field label="Tell the story">
        <textarea
          name="message"
          required
          rows={4}
          className={input}
          placeholder="Who is it for, what's the occasion, anything Zona should know?"
        />
      </Field>

      <button type="submit" className="group inline-flex items-stretch gap-[3px]">
        <span className="grid w-11 place-items-center bg-red text-white transition-transform group-hover:translate-x-1">
          <Arrow />
        </span>
        <span className="label bg-red px-4 py-3 text-lg text-white">Send the brief</span>
      </button>
      <p className="text-sm text-white/50">
        Prefer a DM?{" "}
        <a className="underline hover:text-red" href={site.instagram} target="_blank" rel="noreferrer">
          Message {site.handle} on Instagram
        </a>
        .
      </p>
    </form>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="label text-xs text-white/50">{label}</span>
      {children}
    </label>
  );
}

function Group({ label, children }) {
  return (
    <fieldset>
      <legend className="label mb-4 text-xs text-white/50">{label}</legend>
      {children}
    </fieldset>
  );
}

function Chips({ options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          aria-pressed={value === o}
          className={`label px-4 py-2.5 text-sm transition-colors ${
            value === o ? "bg-red text-white" : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
