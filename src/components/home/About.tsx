"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 max-w-3xl text-muted-foreground leading-relaxed"
        >
          I build fast, delightful web apps with a focus on performance,
          accessibility, and motion. I love designing clean systems, crafting
          reusable components, and shipping production‑ready experiences.
        </motion.p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: Code2,
              title: "Full‑Stack",
              desc: "Next.js, Node, MongoDB",
            },
            { icon: Cpu, title: "Realtime UX", desc: "Socket.IO, Web Push" },
            {
              icon: Sparkles,
              title: "Motion & UX",
              desc: "Framer Motion, GSAP",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border bg-background/50 p-5 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5" />
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
