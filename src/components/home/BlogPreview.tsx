"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

const posts: Post[] = [
  {
    slug: "realtime-ux-playbook",
    title: "Realtime UX Playbook",
    excerpt: "Patterns for snappy, resilient realtime apps.",
    date: "2025-07-30",
  },
  {
    slug: "nextjs-performance-budget",
    title: "Next.js Performance Budget",
    excerpt: "Setting budgets and guarding your TTFB/LCP.",
    date: "2025-07-12",
  },
  {
    slug: "designing-admin-systems",
    title: "Designing Admin Systems",
    excerpt: "Tables, filters, and flows that scale.",
    date: "2025-06-18",
  },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold">Latest Writing</h2>
          <Link href="/blog" className="text-sm underline underline-offset-4">
            View all
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border p-6 bg-background"
            >
              <time className="text-xs text-muted-foreground">
                {new Date(p.date).toLocaleDateString()}
              </time>
              <h3 className="mt-2 font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              <Link
                href={`/blog/${p.slug}`}
                className="mt-4 inline-block text-sm underline underline-offset-4"
              >
                Read →
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
