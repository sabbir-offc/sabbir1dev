"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ShinyButton from "@/components/ShinyButton";
import { ArrowRight } from "lucide-react";

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

export default function CTASection() {
  return (
    <section className="container mx-auto px-5 py-16 md:py-24">
      <div className="rounded-3xl border border-border bg-card px-6 py-10 md:px-10 md:py-16">
        <Reveal delay={0.05}>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            Need a reliable full‑stack developer for your next project?
          </h3>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            I help teams turn ideas into dependable products—fast. Let’s discuss
            your requirements.
          </p>
        </Reveal>
        <Reveal delay={0.18} className="mt-6 flex flex-wrap items-center gap-3">
          <ShinyButton>
            <Link href="/contact" className="inline-flex items-center gap-2">
              Get in touch <ArrowRight size={16} />
            </Link>
          </ShinyButton>
          {/* <a
            href="/Sabbir-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-2xl border border-border px-5 py-3 text-sm font-medium hover:bg-muted"
          >
            Download Resume
          </a> */}
        </Reveal>
      </div>
    </section>
  );
}
