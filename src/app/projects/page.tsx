import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectsGrid from "./ProjectsGrid"; // client component

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects across realtime systems and e‑commerce.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <section className="container mx-auto px-5 py-16 md:py-24 ">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Projects
          </h1>
          <p className="mt-2 text-muted-foreground max-w-prose">
            Brief case studies with highlights, tech stack, and links.
          </p>
        </div>

       
      </div>

      <ProjectsGrid items={projects} />
    </section>
  );
}
