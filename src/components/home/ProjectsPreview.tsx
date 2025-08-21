"use client";

import { useMemo, useState, useRef, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Filter, Tag } from "lucide-react";

type Project = {
  title: string;
  category: "Realtime" | "E‑Commerce" | "Portfolio" | "Admin";
  tag: string;
  description: string;
  href: string;
  image: string;
  badges: string[];
};

const ALL_PROJECTS: Project[] = [
  {
    title: "Real‑Time Chat Platform",
    category: "Realtime",
    tag: "Full‑Stack • Socket.IO",
    description:
      "Direct + group messaging, file uploads, read receipts, typing indicators, separate socket server.",
    href: "/projects/chat",
    image: "/preview/chat-cover.png",
    badges: ["Next.js", "MongoDB", "Socket.IO", "Tailwind", "Redux"],
  },
  //   {
  //     title: "Bachelor Shop BD",
  //     category: "E‑Commerce",
  //     tag: "E‑Commerce",
  //     description:
  //       "Admin product management, SEO‑ready pages, filters, cart drawer, SSLCommerz checkout.",
  //     href: "/projects/bachelor-shop-bd",
  //     image: "/preview/shop-cover.png",
  //     badges: ["Next.js", "MongoDB", "Redux", "Tailwind", "SSLCommerz"],
  //   },
  {
    title: "LeatherStore BD",
    category: "E‑Commerce",
    tag: "E‑Commerce",
    description:
      "Niche store with optimized discovery, variant handling, and fast checkout experience.",
    href: "/projects/leatherstore-bd",
    image: "/preview/leather-cover.png",
    badges: ["Next.js", "MongoDB", "Tailwind", "Redux"],
  },
  {
    title: "Nur’s Portfolio",
    category: "Portfolio",
    tag: "Portfolio",
    description:
      "Designer‑friendly portfolio with tasteful animations and a refined layout.",
    href: "/projects/nur-portfolio",
    image: "/preview/portfolio-cover.png",
    badges: ["Next.js", "Framer Motion", "Tailwind"],
  },
];

const FILTERS = [
  "All",
  "Realtime",
  "E‑Commerce",
  "Portfolio",
  "Admin",
] as const;
type Filter = (typeof FILTERS)[number];

export default function ProjectsPreview() {
  const [filter, setFilter] = useState<Filter>("All");

  const projects = useMemo(() => {
    if (filter === "All") return ALL_PROJECTS;
    return ALL_PROJECTS.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section className="container mx-auto px-5 py-16 md:py-24">
      {/* Header */}
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold tracking-tight"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-2 text-muted-foreground max-w-prose"
          >
            A mix of real‑time systems and e‑commerce platforms with modern UX.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="h-4 w-4" />
            Filter:
          </span>
          <div className="flex gap-2">
            {FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={[
                    "rounded-full border px-3 py-1.5 text-sm transition",
                    active
                      ? "border-primary/30 bg-primary/10 text-primary"
                      : "hover:bg-muted",
                  ].join(" ")}
                  aria-pressed={active}
                >
                  {f}
                </button>
              );
            })}
          </div>
          <Link
            href="/projects"
            className="ml-auto inline-flex items-center gap-1 text-sm text-primary hover:opacity-80"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Grid */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  // Hover tilt
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(my, [-0.5, 0.5], [6, -6]);
  const ry = useTransform(mx, [-0.5, 0.5], [-6, 6]);
  const springX = useSpring(rx, { stiffness: 180, damping: 20, mass: 0.3 });
  const springY = useSpring(ry, { stiffness: 180, damping: 20, mass: 0.3 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(x);
    my.set(y);
  }

  function resetTilt() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group relative"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
        }}
        className="rounded-2xl border bg-background p-4 shadow-sm"
      >
        {/* Cover */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            priority={index < 2}
          />
          {/* Subtle gradient overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          {/* Tag */}
          <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-background/80 px-2.5 py-1 text-xs backdrop-blur">
            <Tag className="h-3.5 w-3.5" />
            {project.tag}
          </div>
        </div>

        {/* Content */}
        <div
          className="mt-4 space-y-2"
          style={{ transform: "translateZ(30px)" }}
        >
          <h3 className="text-lg font-semibold leading-tight">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground">{project.description}</p>

          {/* Badges */}
          <div className="mt-3 flex flex-wrap gap-2">
            {project.badges.map((b) => (
              <span
                key={b}
                className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground"
              >
                {b}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-4 flex items-center justify-between">
            <Link
              href={project.href}
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-1"
              aria-label={`Open case study: ${project.title}`}
            >
              Case study <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Hover ring */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-primary/0 transition group-hover:ring-2 group-hover:ring-primary/20" />
      </motion.div>
    </motion.article>
  );
}
