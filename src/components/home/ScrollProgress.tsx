
"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 h-0.5 origin-left bg-foreground/80 z-[60]"
      aria-hidden
    />
  );
}
