"use client";

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, ShieldCheck } from "lucide-react";
import ShinyButton from "@/components/ShinyButton";

function Aura({ y }: { y: MotionValue<number> }) {
  return (
    <motion.div
      aria-hidden
      style={{ y }}
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div
        className="absolute -top-24 -left-24 h-[42rem] w-[42rem] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, hsl(var(--color-primary)/0.45), transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-24 -right-24 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(closest-side, hsl(var(--color-secondary-foreground)/0.25), transparent 70%)",
        }}
      />
    </motion.div>
  );
}

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 60]);

  return (
    <section className="relative overflow-hidden">
      <Aura y={y} />

      <div className="container mx-auto px-5 pt-24 md:pt-32 pb-10 md:pb-20">
        <Reveal delay={0.05}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <ShieldCheck size={14} /> Assistant IT Manager @ NeXbit Ltd.
          </span>
        </Reveal>

        <Reveal delay={0.12}>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Full‑Stack Developer building{" "}
            <span className="text-primary">production‑grade</span> web
            experiences.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-5 max-w-2xl text-lg md:text-xl text-muted-foreground">
            I’m <span className="font-semibold text-foreground">Sabbir</span>. I
            design and ship modern platforms with Next.js, Node.js, and
            MongoDB—focused on performance, security, and clean UX. Comfortable
            with real‑time data transfer and event‑driven features.
          </p>
        </Reveal>

        <Reveal delay={0.28} className="mt-8 flex flex-wrap items-center gap-3">
          <ShinyButton>
            <Link href="/projects" className="inline-flex items-center gap-2">
              View Projects <ArrowRight size={16} />
            </Link>
          </ShinyButton>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-2xl border border-border px-5 py-3 text-sm font-medium hover:bg-muted focus:outline-none"
          >
            Contact Me <Mail size={16} />
          </Link>

          <div className="ml-auto flex items-center gap-2">
            <a
              aria-label="GitHub"
              href="https://github.com/your-handle"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border hover:bg-muted"
            >
              <Github size={18} />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://linkedin.com/in/your-handle"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border hover:bg-muted"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
