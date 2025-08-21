// app/contact/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import ContactFormUltra from "./ContactFormUltra";
import {
  ShieldCheck,
  Clock,
  Mail,
  Phone,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Let’s build something exceptional",
  description:
    "Start a project, request a quote, or ask a question. I reply within 24 hours. Production‑grade Next.js, realtime systems, and elegant UX.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden px-5">
      {/* Decorative gradient + noise */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(var(--primary)/0.18),transparent_65%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      {/* Hero */}
      <header className="container mx-auto px-5 pt-16 md:pt-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Tell me about your idea.
            <br />
            Let’s make it{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              real
            </span>
            .
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Production‑ready apps, realtime systems, and design‑driven UX. I
            reply to serious inquiries within 24 hours.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5">
              <ShieldCheck className="h-4 w-4" /> Clear scope & milestones
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5">
              <Clock className="h-4 w-4" /> 24h response on business days
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5">
              <CheckCircle2 className="h-4 w-4" /> Performance budgets & a11y
            </span>
          </div>
        </div>
      </header>

      {/* Grid: form + sidebar */}
      <div className="container mx-auto px-5 py-14 md:py-20 grid gap-10 lg:grid-cols-[1fr_380px]">
        {/* Form card with subtle glow */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-primary/20 to-transparent"
          />
          <div className="relative rounded-3xl border bg-background/70 p-6 md:p-8 backdrop-blur">
            <ContactFormUltra />
          </div>
        </div>

        {/* Sidebar: quick contact + office + FAQ link */}
        <aside className="space-y-6">
          <section className="rounded-2xl border bg-background p-6">
            <h2 className="text-lg font-semibold">Quick contact</h2>
            <div className="mt-3 space-y-3 text-sm">
              <a
                href="mailto:itmanager@nexbitltd.com"
                className="flex items-center gap-3 rounded-lg border px-3 py-2 hover:bg-muted"
              >
                <Mail className="h-4 w-4" /> itmanager@nexbitltd.com
              </a>
              <a
                href="tel:+880"
                className="flex items-center gap-3 rounded-lg border px-3 py-2 hover:bg-muted"
              >
                <Phone className="h-4 w-4" /> +880 — 17 1465 1218
              </a>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Prefer chat?{" "}
              <Link className="underline underline-offset-4" href="/projects">
                See recent work
              </Link>{" "}
              first.
            </p>
          </section>

          <section className="rounded-2xl border bg-background p-6">
            <h2 className="text-lg font-semibold">FAQs</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Typical timeline: 2–8 weeks depending on scope</li>
              <li>• Code ownership: 100% yours</li>
              <li>• Payments: milestone‑based</li>
            </ul>
            <Link
              href="/about"
              className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:opacity-80"
            >
              Learn more <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        </aside>
      </div>
    </section>
  );
}
