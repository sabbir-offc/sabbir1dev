// components/home/Experience.tsx
"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const items = [
  {
    icon: Briefcase,
    title: "Assistant Manager — IT",
    org: "NeXbit Ltd.",
    time: "Aug 2025 — Present",
    points: [
      "Maintaining and overseeing the company’s full IT system and infrastructure.",
      "Actively developing core applications and internal tools for daily operations.",
      "Ensuring smooth performance, security, and scalability across all platforms.",
    ],
  },
  {
    icon: Briefcase,
    title: "System Admin",
    org: "GlobalTec IT",
    time: "Oct 2024 — Jul 2025",
    points: [
      "Oversaw and maintained the entire company system and operations.",
      "Managed employee workflows, and daily reporting.",
      "Implemented system improvements to ensure efficiency and data security.",
    ],
  },
  {
    icon: GraduationCap,
    title: "Higher Secondary Certificate (HSC)",
    org: "Uttara Government College",
    time: "2023 — 2024",
    points: [
      "Specialized in Humanities with emphasis on History, Civics, and Sociology.",
      "Developed strong analytical, writing, and critical-thinking skills.",
      "Engaged in cultural and group activities that strengthened communication and leadership.",
    ],
  },
  {
    icon: GraduationCap,
    title: "Secondary School Certificate (SSC)",
    org: "Hogla Betka Secondary School",
    time: "2021 — 2022",
    points: [
      "Focused on core subjects including Mathematics, Science, and English.",
      "Built strong foundations in logical thinking and problem-solving.",
      "Actively participated in co-curricular and group learning activities.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto container px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        <div className="mt-10 relative">
          <div className="absolute left-4 md:left-5 top-0 bottom-0 w-px bg-border" />
          <ul className="space-y-8">
            {items.map(({ icon: Icon, title, org, time, points }) => (
              <li key={title} className="relative pl-12">
                <span className="absolute left-0 top-1.5 inline-flex h-8 w-8 items-center justify-center rounded-full border bg-background">
                  <Icon className="h-4 w-4" />
                </span>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl border bg-background p-5"
                >
                  <div className="flex flex-wrap items-center gap-x-3">
                    <h3 className="font-semibold">{title}</h3>
                    <span className="text-muted-foreground">— {org}</span>
                    <span className="ml-auto text-sm text-muted-foreground">
                      {time}
                    </span>
                  </div>
                  <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    {points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
