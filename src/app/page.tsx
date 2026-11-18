import Link from "next/link";
import Image from "next/image";
import { getProjectsData } from "@/data/projectsData";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { ContactSection } from "@/components/ContactSection";

export default async function Home() {
  const projects = await getProjectsData();

  return (
    <main className="min-h-screen text-slate-100">
      <Section id="home" className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.15fr_.85fr]">
        <div className="relative max-w-3xl">
          <div className="absolute -left-12 top-0 h-32 w-32 rounded-full bg-sky-500/10 blur-3xl" />
          <p className="mb-5 font-mono text-sm uppercase tracking-[0.32em] text-sky-400">
            Argh Tech <span className="text-slate-500">/ Orko / অর্ঘ্য সুতার</span>
          </p>
          <h1 className="text-[2.75rem] font-black leading-none tracking-[0.06em] sm:text-7xl sm:tracking-[0.1em] lg:text-8xl">
            <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-amber-300 bg-clip-text text-transparent">
              INNOVATE
            </span>
          </h1>
          <p className="mt-3 font-mono text-xl font-semibold tracking-[0.55em] text-amber-300 sm:text-3xl">
            &amp; EMPOWER
          </p>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
            Modern web experiences, high-performance landing pages, and digital growth solutions for small and medium businesses.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="#work"><Button>View My Work</Button></Link>
            <Link href="#contact"><Button variant="secondary">Get a Quote</Button></Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-12 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="relative aspect-square rounded-[2rem] border border-sky-400/20 bg-slate-950/60 p-6 shadow-[0_0_80px_rgba(56,189,248,.12)]">
            <div className="absolute left-5 top-5 h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_16px_rgba(251,191,36,.8)]" />
            <Image
              src="/assets/images/at-circuit-logo.svg"
              alt="Argh Tech AT circuit logo"
              fill
              priority
              className="object-contain p-5"
            />
          </div>
        </div>
      </Section>

      <Section id="about" className="pb-20 pt-8">
        <Card className="grid gap-8 overflow-hidden p-6 sm:p-10 lg:grid-cols-[.7fr_1.3fr]">
          <div className="flex flex-col justify-between border-b border-white/[0.08] pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-sky-400">About Argh Tech</p>
            <div className="mt-10">
              <p className="text-6xl font-black text-amber-300">1+</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Year of experience</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Digital growth for small and medium businesses.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              With one year of web development experience, I help SMEs grow digitally through modern landing pages,
              high-performance frontend solutions, and strong web presences built to increase online sales.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Modern landing pages", "Frontend solutions", "Digital growth"].map((item) => (
                <div key={item} className="rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-sm font-medium text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Section>

      <ServicesSection />

      <ProjectShowcase projects={projects} />

      <ContactSection />
    </main>
  );
}
