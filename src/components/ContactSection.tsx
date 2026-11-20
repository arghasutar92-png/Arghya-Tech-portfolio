"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const PHONE_DISPLAY = "+91 7063684875";
const PHONE_LINK = "917063684875";
const EMAIL = "arghasutar90@gmail.com";

export function ContactSection() {
  const [status, setStatus] = useState("");

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const service = String(form.get("service") || "");
    const message = String(form.get("message") || "");

    const text = [
      "Hello Argh Tech,",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Service: ${service}`,
      "",
      message,
    ].join("\n");

    setStatus("Opening WhatsApp...");
    window.open(
      `https://wa.me/${PHONE_LINK}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <Section id="contact" className="pb-24 pt-8">
      <div className="mb-10">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
          Start a conversation
        </p>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Let&apos;s build something <span className="text-amber-300">valuable.</span>
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[.78fr_1.22fr]">
        <Card className="flex flex-col p-6 sm:p-8">
          <div className="space-y-6">
            <ContactDetail label="Phone" value={PHONE_DISPLAY} href={`tel:+${PHONE_LINK}`} />
            <ContactDetail label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
            <ContactDetail
              label="Location"
              value="South 24 Parganas, WB, India"
              href="https://maps.google.com/?q=South+24+Parganas,+West+Bengal,+India"
            />
          </div>

          <a
            href={`https://wa.me/${PHONE_LINK}?text=${encodeURIComponent("Hello Argh Tech, I would like to discuss a project.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 text-sm font-bold text-slate-950 shadow-[0_0_24px_rgba(16,185,129,.15)] transition hover:bg-emerald-400"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.7Z" />
              <path d="M9 8.5c.3 3.5 3 6.2 6.5 6.5l-1.4-2.2 2.4-1.1-4.7-4.1Z" />
            </svg>
            Chat on WhatsApp
          </a>
        </Card>

        <Card className="p-6 sm:p-8">
          <form onSubmit={submitForm} className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-slate-300">
              Name
              <input
                name="name"
                required
                placeholder="Your name"
                className="h-12 rounded-lg border border-white/[0.08] bg-slate-950/70 px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-300">
              Email
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="h-12 rounded-lg border border-white/[0.08] bg-slate-950/70 px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-300 sm:col-span-2">
              Service
              <select
                name="service"
                required
                defaultValue=""
                className="h-12 rounded-lg border border-white/[0.08] bg-slate-950/70 px-4 text-white outline-none transition focus:border-cyan-400/50"
              >
                <option value="" disabled>Select a service</option>
                <option>Landing Page Design &amp; Development</option>
                <option>E-commerce &amp; Digital Store Setup</option>
                <option>WhatsApp Order Integration</option>
                <option>Digital Business Cards</option>
                <option>Search Optimization</option>
                <option>E-commerce Landing Page, Frontend Pages &amp; Digital Product Pages Setup</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-300 sm:col-span-2">
              Project details
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="resize-none rounded-lg border border-white/[0.08] bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50"
              />
            </label>
            <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
              <Button type="submit" variant="primary">Send Inquiry</Button>
              {status && <p className="text-sm text-emerald-300" role="status">{status}</p>}
            </div>
          </form>
        </Card>
      </div>
    </Section>
  );
}

function ContactDetail({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <div>
      <p className="mb-1 font-mono text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="break-words text-base font-semibold text-slate-200 transition hover:text-cyan-300"
      >
        {value}
      </a>
    </div>
  );
}
