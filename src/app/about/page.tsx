"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  BookOpen,
  GraduationCap,
  Code2,
  Wrench,
  Rocket,
  Target,
  Briefcase,
  Calendar,
  ArrowRight,
} from "lucide-react";

export default function AboutMe() {
  return (
    <div className="space-y-16 container mx-auto py-10 px-5">
      {/* HERO */}
      <header className="grid items-center gap-8 md:grid-cols-[1.1fr_.9fr]">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            I’m{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Sabbir Howlader
            </span>
            .
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl"
          >
            Full‑stack developer who learned by doing—breaking things, fixing
            them, and shipping real products. I care about clean UX,
            performance, and dependable systems.
          </motion.p>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              {
                icon: <Sparkles className="h-4 w-4" />,
                label: "Programming Hero alum (Jul 2023→Feb 2024)",
              },
              {
                icon: <Wrench className="h-4 w-4" />,
                label: "Builder mindset: iterate fast",
              },
              {
                icon: <Rocket className="h-4 w-4" />,
                label: "Production-first, not demo-only",
              },
            ].map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1.5 text-sm backdrop-blur"
              >
                {b.icon}
                {b.label}
              </span>
            ))}
          </div>

          <div className="mt-8 flex gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-background hover:opacity-90"
            >
              Work with me <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 hover:bg-muted"
            >
              See my projects
            </Link>
          </div>
        </div>

        {/* Portrait / graphic (swap src to your photo) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border bg-background/70 shadow-xl"
        >
          <Image
            src="/me.jpg" // put your photo at public/me.jpg
            alt="Sabbir Howlader"
            fill
            sizes="(min-width: 768px) 40vw, 80vw"
            className="object-cover"
            priority
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"
          />
        </motion.div>
      </header>

      {/* MY STORY */}
      <section className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border bg-background/70 p-6 md:p-8 backdrop-blur"
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <BookOpen className="h-5 w-5" /> My story
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I didn’t start with perfect resources or a perfect plan. I started
            with curiosity and a lot of errors. In <strong>July 2023</strong> I
            joined <strong>Programming Hero Institute</strong> and spent months
            doing the unglamorous work—watching lessons, taking notes, and
            building projects that broke a hundred times before they finally
            worked. By <strong>February 2024</strong>, I had enough confidence
            to push beyond tutorials and build for real people.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            That “break‑it, fix‑it, learn‑it” loop is still my superpower. I
            like to ship, measure, and iterate—turning ideas into dependable
            products.
          </p>
        </motion.div>

        {/* QUICK FACTS */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border bg-background/70 p-6 md:p-8 backdrop-blur"
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Target className="h-5 w-5" /> What I care about
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Fast, accessible UI that feels natural.</li>
            <li>• Clean data models and maintainable code.</li>
            <li>• Real‑time features that actually scale.</li>
            <li>• Honest communication and clear milestones.</li>
          </ul>
        </motion.div>
      </section>

      {/* TIMELINE */}
      <section>
        <h2 className="text-2xl font-semibold">Timeline</h2>
        <ol className="mt-6 space-y-6">
          {[
            {
              icon: <GraduationCap className="h-5 w-5" />,
              title: "Higher Secondary Certificate (Humanities)",
              org: "Uttara Government College",
              time: "2023 — 2024",
              points: [
                "Focused on History, Civics, Sociology; strengthened critical thinking and writing.",
              ],
            },
            {
              icon: <GraduationCap className="h-5 w-5" />,
              title: "Secondary School Certificate (SSC)",
              org: "Hogla Betka Secondary School",
              time: "2021 — 2022",
              points: [
                "Core focus on Mathematics, Science, and English; built logical problem‑solving habits.",
              ],
            },
            {
              icon: <Code2 className="h-5 w-5" />,
              title: "Programming Hero Institute",
              org: "Full‑stack foundations",
              time: "Jul 2023 — Feb 2024",
              points: [
                "Learned modern JS/TS, React/Next.js, Node, and MongoDB.",
                "Built many broken → working projects; learned by debugging.",
              ],
            },
            {
              icon: <Briefcase className="h-5 w-5" />,
              title: "Admin",
              org: "GlobalTec IT",
              time: "Oct 2024 — Jul 2025",
              points: [
                "Maintained the entire company system and daily operations.",
                "Managed workflows, lead distribution, and reporting; improved efficiency and security.",
              ],
            },
            {
              icon: <Briefcase className="h-5 w-5" />,
              title: "Assistant Manager — IT (also Developer)",
              org: "NeXbit Ltd.",
              time: "Aug 2025 — Present",
              points: [
                "Overseeing and maintaining full IT systems & infrastructure.",
                "Actively developing core apps and internal tools with a performance focus.",
                "Ensuring uptime, security, and scalable processes.",
              ],
            },
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.03 }}
              className="relative rounded-2xl border bg-background/70 p-5 md:p-6"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5">{item.icon}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <span className="text-muted-foreground">— {item.org}</span>
                    <span className="ml-auto inline-flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-4 w-4" /> {item.time}
                    </span>
                  </div>
                  <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    {item.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* SKILLS */}
      <section>
        <h2 className="text-2xl font-semibold">Skills & Tools</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Next.js",
            "TypeScript",
            "React",
            "Node.js",
            "MongoDB",
            "Tailwind CSS",
            "Framer Motion",
            "Express.js",
            "Socket.IO",
            "Cloudinary",
            "Vercel",
            "Fly.io",
            "NextAuth.js",
            "JWT",
            "Jose",
            "GSAP",
            "Three.js",
            "Ably",
            "Stripe",
            "Git",
            "GitHub",
            "Figma",
            "Postman",
          ].map((t) => (
            <span
              key={t}
              className="rounded-full border bg-background/70 px-3 py-1.5 text-sm text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* STATS */}
      {/* <section className="grid gap-6 sm:grid-cols-3">
        {[
          { stat: "50+", label: "Projects & experiments" },
          { stat: "99%", label: "Uptime focus in production" },
          { stat: "24h", label: "Typical response time" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl border bg-background/70 p-6 text-center"
          >
            <p className="text-3xl font-bold text-primary">{s.stat}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </section> */}

      {/* CTA */}
      <section className="rounded-3xl border bg-background/70 p-8 text-center">
        <h2 className="text-2xl font-semibold">Let’s build something useful</h2>
        <p className="mt-3 text-muted-foreground">
          Share your idea, get a clear plan and timeline. I reply within 24
          hours.
        </p>
        <div className="mt-5 flex justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-background hover:opacity-90"
          >
            Contact me <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 hover:bg-muted"
          >
            Browse projects
          </Link>
        </div>
      </section>
    </div>
  );
}
