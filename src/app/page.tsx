import Hero from "@/components/home/Hero";
import Highlights from "@/components/home/Highlights";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import SkillsStrip from "@/components/home/SkillsStrip";
import CTASection from "@/components/home/CTASection";
import Experience from "@/components/home/Experience";
import ScrollProgress from "@/components/home/ScrollProgress";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
        <Hero />
        <Highlights />
        <ProjectsPreview />
      <SkillsStrip />
        <Experience />

        <CTASection />
    </>
  );
}
