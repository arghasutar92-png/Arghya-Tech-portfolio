import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <main className="min-h-screen py-16 text-zinc-50">
      <Section>
        <Link href="/" className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300">← Back home</Link>
        <h1 className="mb-6 mt-4 text-5xl font-bold">About</h1>
        <Card className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="text-6xl font-black text-amber-300">1+</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Year of experience</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Helping SMEs grow digitally</h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              Argh Tech creates modern landing pages and frontend solutions that help small and medium businesses
              establish a strong web presence, increase online sales, and build lasting digital growth.
            </p>
            <Link href="/contact" className="mt-8 inline-block"><Button variant="secondary">Get a Quote</Button></Link>
          </div>
        </Card>
      </Section>
    </main>
  );
}
