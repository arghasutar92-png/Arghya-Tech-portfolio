import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const services = [
  {
    title: "Landing Page Design & Development",
    description:
      "Clean, high-converting single-page landing pages for businesses and startups.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M7 6.5h.01M10 6.5h.01M8 13h8M8 17h5" />
      </svg>
    ),
  },
  {
    title: "E-commerce & Digital Store Setup",
    description:
      "Digital shop setup with product catalogs and custom domain integration.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M3 5h2l2.4 9.2a2 2 0 0 0 2 1.5h7.8a2 2 0 0 0 2-1.6L20.5 8H7" />
        <circle cx="10" cy="19" r="1" />
        <circle cx="18" cy="19" r="1" />
      </svg>
    ),
  },
  {
    title: "WhatsApp Order Integration",
    description:
      "Direct WhatsApp ordering and contact buttons for seamless customer communication.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.7Z" />
        <path d="M9 8.5c.3 3.5 3 6.2 6.5 6.5l-1.4-2.2 2.4-1.1-4.7-4.1Z" />
      </svg>
    ),
  },
  {
    title: "Digital Business Cards",
    description:
      "Minimal and modern digital visiting card websites for professionals.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="8.5" cy="10" r="2" />
        <path d="M5.5 16c.7-1.7 1.7-2.5 3-2.5s2.3.8 3 2.5M14 9h4M14 12h4M14 15h2.5" />
      </svg>
    ),
  },
  {
    title: "Search Optimization",
    description:
      "Basic on-page setup for Google indexing and visibility.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m15.2 15.2 5.3 5.3M7.5 11.5l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "E-commerce Landing Page, Frontend Pages & Digital Product Pages Setup",
    description:
      "Conversion-focused commerce layouts, polished frontend pages, and digital product setups.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 4h16v16H4zM4 9h16M9 9v11M12 13h5M12 16h3" />
        <path d="m5 7 1-1 1 1" />
      </svg>
    ),
  },
];

export function ServicesSection() {
  return (
    <Section id="services" className="pb-24 pt-8">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
          What I build
        </p>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Digital services for <span className="text-amber-300">business growth</span>
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-400">
          Practical web solutions designed to improve visibility, customer trust, and online sales.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card
            key={service.title}
            className="group flex min-h-[340px] flex-col p-6 hover:-translate-y-2 hover:border-cyan-400/35"
          >
            <div className="mb-8 flex items-start justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-300 transition duration-300 group-hover:border-amber-400/30 group-hover:bg-amber-400/[0.08] group-hover:text-amber-300 group-hover:shadow-[0_0_24px_rgba(245,158,11,.12)]">
                {service.icon}
              </div>
              <span className="font-mono text-xs text-slate-600">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="text-xl font-bold leading-snug text-white">
              {service.title}
            </h3>
            <p className="mt-4 flex-1 leading-7 text-slate-400">
              {service.description}
            </p>

            <Link href="#contact" className="mt-7">
              <Button
                variant="ghost"
                className="w-full justify-between group-hover:border-cyan-400/40"
              >
                Request This Service
                <span aria-hidden="true" className="text-cyan-300">→</span>
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
