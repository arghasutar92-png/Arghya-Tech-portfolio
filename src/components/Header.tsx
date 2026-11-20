"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandMark } from "@/components/BrandMark";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#090D16]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" onClick={() => setOpen(false)} aria-label="Argh Tech home" className="flex items-center gap-3">
          <BrandMark showWordmark />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition hover:bg-cyan-400/[0.06] hover:text-cyan-300">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-200 md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative h-5 w-5">
            <span className={`absolute left-1 top-2 h-0.5 w-4 bg-current transition ${open ? "rotate-45" : ""}`} />
            <span className={`absolute left-1 top-3 h-0.5 w-4 bg-current transition ${open ? "-rotate-45" : ""}`} />
            <span className={`absolute left-1 top-4 h-0.5 w-4 bg-current transition ${open ? "hidden" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/[0.07] bg-[#090D16]/95 px-5 py-4 backdrop-blur-md md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-6xl flex-col">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.05] hover:text-cyan-300">
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
