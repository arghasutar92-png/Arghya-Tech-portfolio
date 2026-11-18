import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/arghasutar92-png/Arghyatech-myportfolio" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/argha-sutar-685849449/" },
  { label: "Fiverr", href: "https://www.fiverr.com/arghasutar291" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07]">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="grid gap-8 border-b border-white/[0.07] pb-8 sm:grid-cols-2 lg:grid-cols-[1fr_auto]">
          <div>
            <Link href="/" aria-label="Argh Tech home">
              <BrandMark showWordmark className="[&>span:last-child]:text-2xl" />
            </Link>
            <p className="mt-3 font-mono text-xs tracking-[0.32em] text-sky-400">INNOVATE &amp; EMPOWER</p>
          </div>
          <nav aria-label="Social links" className="flex flex-wrap gap-3 lg:justify-end">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 text-sm font-medium text-slate-300 transition hover:border-sky-400/40 hover:text-sky-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Argh Tech. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.8)]" />
            Available for projects
          </p>
        </div>
      </div>
    </footer>
  );
}
