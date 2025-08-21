"use client";

import { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type Props = HTMLAttributes<HTMLButtonElement> & { asChild?: boolean };

export default function ShinyButton({ className, children, ...rest }: Props) {
  return (
    <motion.div
      initial={{ scale: 0.98 }}
      whileHover={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      <button
        className={clsx(
          "relative inline-flex select-none items-center justify-center overflow-hidden rounded-2xl px-5 py-3 text-sm font-medium",
          "bg-primary text-primary-foreground focus:outline-none",
          className
        )}
        {...rest}
      >
        {/* glossy sweep */}
        <span className="absolute inset-0 -translate-x-full animate-[shine_2.4s_ease-in-out_infinite] bg-[linear-gradient(110deg,transparent,hsla(0,0%,100%,.22),transparent)]" />
        <style jsx>{`
          @keyframes shine {
            0% { transform: translateX(-120%); }
            60%,100% { transform: translateX(120%); }
          }
        `}</style>
        <span className="relative z-10">{children}</span>
      </button>
    </motion.div>
  );
}
