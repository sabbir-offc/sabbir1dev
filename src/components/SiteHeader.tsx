"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import {
  Moon,
  Sun,
  Home,
  User2,
  FolderGit2,
  Mail,
  Menu,
  X,
} from "lucide-react";
import clsx from "clsx";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/about", label: "About", Icon: User2 },
  { href: "/projects", label: "Projects", Icon: FolderGit2 },
  { href: "/contact", label: "Contact", Icon: Mail },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const { scrollYProgress, scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 8));

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed left-0 right-0 top-0 h-0.5 origin-left bg-foreground/80 z-[60]"
        style={{ scaleX: scrollYProgress }}
        aria-hidden
      />

      <header
        className={clsx(
          "sticky top-0 z-50",
          "backdrop-blur supports-[backdrop-filter]:bg-background/60",
          "transition-shadow",
          scrolled
            ? "shadow-sm border-b border-border"
            : "border-b border-transparent"
        )}
      >
        <div className="container mx-auto flex h-16 items-center justify-between">
          <Link
            href="/"
            className="relative font-bold tracking-tight group px-1"
          >
            Sabbir <span className="text-primary">Howlader</span>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all group-hover:w-full"></span>
            <motion.span
              layoutId="dot"
              className="h-2 w-2 rounded-full bg-primary"
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 relative">
            {NAV.map(({ href, label, Icon }) => {
              const active =
                pathname === href ||
                (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={clsx(
                    "relative px-3 py-2 rounded-xl text-sm transition-colors focus:outline-none  ",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon size={16} />
                    {label}
                  </span>
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 -z-10 rounded-xl bg-muted"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {/* CTA */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-foreground px-3 py-2 text-background text-sm hover:opacity-90 focus:outline-none  "
            >
              Hire me
            </Link>

            {/* Theme toggle */}
            <ThemeToggle
              onIcons={{ light: <Sun size={18} />, dark: <Moon size={18} /> }}
            />

            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border hover:bg-muted focus:outline-none  "
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              aria-label="Close menu overlay"
              className="fixed inset-0 z-[60] bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              className="fixed right-0 top-0 z-[70] h-dvh w-[82%] max-w-sm border-l bg-background shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
            >
              <div className="flex items-center justify-between h-16 px-5 border-b">
                <Link
                  href="/"
                  className="font-semibold tracking-tight"
                  onClick={() => setOpen(false)}
                >
                  Sabbir<span className="text-primary">.</span>
                </Link>
                <button
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border hover:bg-muted focus:outline-none  "
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="p-3">
                {NAV.map(({ href, label, Icon }) => {
                  const active =
                    pathname === href ||
                    (href !== "/" && pathname.startsWith(href));
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={clsx(
                        "flex items-center gap-3 rounded-xl px-3 py-3 text-sm",
                        active
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted"
                      )}
                    >
                      <Icon size={18} />
                      <span>{label}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-auto p-3">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-3 py-2 text-background text-sm hover:opacity-90"
                >
                  Hire me
                </Link>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  © {new Date().getFullYear()} Sabbir Howlader
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
