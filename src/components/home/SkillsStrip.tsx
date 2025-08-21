"use client";

import TechMarquee from "@/components/TechMarquee";

export default function SkillsStrip() {
  return (
    <section className="border-y border-border bg-card/40">
      <TechMarquee
        items={[
          "Next.js",
          "TypeScript",
          "React",
          "Tailwind",
          "Framer Motion",
          "Node.js",
          "Express",
          "MongoDB",
          "Mongoose",
          "Socket.IO",
          "Cloudinary",
          "Vercel",
          "Fly.io",
          "NextAuth",
          "JWT",
          "Jose",
          "GSAP",
          "Three.js",
          "Ably",
          "Stripe",
        ]}
      />
    </section>
  );
}
