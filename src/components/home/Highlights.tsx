"use client";

import { Gauge, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

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

export default function Highlights() {
  return (
    <section className="container mx-auto px-5">
      <Reveal delay={0.36}>
        <ul className="mt-10 grid grid-cols-1 gap-3 text-sm text-muted-foreground md:grid-cols-3">
          <li className="rounded-2xl border border-border bg-card p-4">
            <div className="flex items-center gap-2 text-foreground font-medium">
              <Gauge size={16} /> Performance‑first delivery
            </div>
            <p className="mt-1">
              Clean architecture, indexes & caching, Lighthouse‑friendly UI.
            </p>
          </li>
          <li className="rounded-2xl border border-border bg-card p-4">
            <div className="flex items-center gap-2 text-foreground font-medium">
              <Zap size={16} /> Real‑time features
            </div>
            <p className="mt-1">
              Socket.IO, typing indicators, file uploads, event‑driven flows.
            </p>
          </li>
          <li className="rounded-2xl border border-border bg-card p-4">
            <div className="flex items-center gap-2 text-foreground font-medium">
              <ShieldCheck size={16} /> Production reliability
            </div>
            <p className="mt-1">
              RBAC, validation, audit trails, secure environments.
            </p>
          </li>
        </ul>
      </Reveal>
    </section>
  );
}
