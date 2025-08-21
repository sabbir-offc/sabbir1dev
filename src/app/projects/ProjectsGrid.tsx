"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectsGrid({ items }: { items: Project[] }) {
  return (
    <div className="mt-10 grid gap-8 md:grid-cols-2">
      {items.map((p, i) => (
        <motion.article
          key={p.slug}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.45 }}
          className="group rounded-2xl border bg-background overflow-hidden"
        >
          <div className="relative aspect-[16/9]">
            <Image
              src={p.cover}
              alt={p.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              priority={i < 2}
            />
          </div>

          <div className="p-6">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="uppercase tracking-wide">{p.category}</span>
              {p.period && <span>• {p.period}</span>}
              {p.role && <span>• {p.role}</span>}
            </div>

            <h2 className="mt-2 text-xl font-semibold">{p.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {p.brief}
            </p>

            <ul className="mt-4 list-disc pl-5 text-sm text-muted-foreground space-y-1">
              {p.points.slice(0, 3).map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>

            <div className="mt-5 flex items-center justify-between">
              <div className="hidden sm:flex flex-wrap gap-2">
                {p.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${p.slug}`}
                className="ml-auto inline-flex items-center gap-1 text-sm text-primary hover:opacity-80"
                aria-label={`Open project: ${p.title}`}
              >
                View details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
