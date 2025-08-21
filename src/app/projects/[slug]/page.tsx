// app/projects/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  LinkIcon,
  ListChecks,
  Wrench,
} from "lucide-react";

type Params = { slug: string };

// Prebuild static paths (unchanged)
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
// NOTE: params is a Promise in Next 15
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: "Project not found" };
  return {
    title: p.title,
    description: p.tagline || p.brief,
    openGraph: {
      title: p.title,
      description: p.tagline || p.brief,
      images: [{ url: p.cover, width: 1200, height: 630, alt: p.title }],
    },
    alternates: { canonical: `/projects/${p.slug}` },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return notFound();

  return (
    <section className="container mx-auto px-5 py-12 md:py-20">
      {/* Breadcrumb / back */}
      <div className="mb-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </Link>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {p.title}
          </h1>
          <p className="mt-2 text-muted-foreground max-w-prose">{p.brief}</p>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="uppercase tracking-wide">{p.category}</span>
            {p.period && <span>• {p.period}</span>}
            {p.role && <span>• {p.role}</span>}
          </div>
        </div>

        {/* Links */}
        {p.links && p.links.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            {p.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-muted"
              >
                {l.label === "GitHub" ? (
                  <Github className="h-4 w-4" />
                ) : (
                  <LinkIcon className="h-4 w-4" />
                )}
                {l.label}
                <ExternalLink className="h-3.5 w-3.5 opacity-70" />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Cover */}
      <div className="mt-8 overflow-hidden rounded-2xl border bg-background">
        <div className="relative aspect-[16/9]">
          <Image
            src={p.cover}
            alt={p.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Layout: sticky sidebar + content */}
      <div className="mt-10 grid gap-8 md:grid-cols-[1fr_320px]">
        {/* Main content */}
        <div className="space-y-10">
          {/* Highlights */}
          <section>
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <ListChecks className="h-5 w-5" /> Highlights
            </h2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-muted-foreground">
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </section>

          {/* Gallery */}
          {p.gallery && p.gallery.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold">Gallery</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {p.gallery.map((src) => (
                  <div
                    key={src}
                    className="overflow-hidden rounded-xl border bg-background"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={src}
                        alt={`${p.title} preview`}
                        fill
                        className="object-cover"
                        sizes="50vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Learnings / Notes (optional pattern) */}
          {/* You can add sections like “Performance wins”, “Architecture”, etc. */}
        </div>

        {/* Sticky sidebar */}
        <aside className="md:sticky md:top-24 h-max space-y-6">
          <section className="rounded-2xl border bg-background p-5">
            <h3 className="font-semibold flex items-center gap-2">
              <Wrench className="h-5 w-5" /> Tech Stack
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* Quick facts */}
          <section className="rounded-2xl border bg-background p-5 text-sm text-muted-foreground">
            <dl className="grid grid-cols-3 gap-x-3 gap-y-2">
              <dt className="col-span-1">Category</dt>
              <dd className="col-span-2 text-foreground">{p.category}</dd>
              {p.period && (
                <>
                  <dt className="col-span-1">Period</dt>
                  <dd className="col-span-2 text-foreground">{p.period}</dd>
                </>
              )}
              {p.role && (
                <>
                  <dt className="col-span-1">Role</dt>
                  <dd className="col-span-2 text-foreground">{p.role}</dd>
                </>
              )}
            </dl>
          </section>
        </aside>
      </div>
    </section>
  );
}
