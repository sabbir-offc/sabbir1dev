"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function ProjectTeaser({
  title,
  tag,
  description,
  href,
  image,
  badges = [],
}: {
  title: string;
  tag: string;
  description: string;
  href: string;
  image: string;
  badges?: string[];
}) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card"
    >
      <Link href={href} className="block">
        <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
          <Image
            src={image}
            alt={title}
            width={1200}
            height={750}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            priority={false}
          />
        </div>

        <div className="p-5">
          <div className="text-xs text-muted-foreground">{tag}</div>
          <h3 className="mt-1 text-lg font-semibold tracking-tight">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>

          <ul className="mt-3 flex flex-wrap gap-2">
            {badges.map((b) => (
              <li
                key={b}
                className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* soft highlight on hover */}
        <div
          className={clsx(
            "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300",
            "group-hover:opacity-100"
          )}
          style={{
            background:
              "radial-gradient(600px 160px at 50% 0%, hsl(var(--color-primary)/0.12), transparent 60%)",
          }}
        />
      </Link>
    </motion.article>
  );
}
