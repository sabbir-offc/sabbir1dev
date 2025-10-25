export type Project = {
  slug: string;
  title: string;
  tagline: string;
  brief: string; //
  category: "Realtime" | "E‑Commerce" | "Portfolio" | "Admin";
  points: string[];
  tech: string[];
  cover: string;
  gallery?: string[];
  links?: { label: string; href: string }[];
  period?: string;
  role?: string;
};

export const projects: Project[] = [
  {
    slug: "chat",
    title: "Real‑Time Chat Platform",
    tagline: "Direct & group chat with realtime presence and uploads.",
    brief:
      "A production‑ready chat system supporting one‑to‑one and group conversations, typing indicators, file uploads, and read receipts. Built for reliability and low latency with a separate Socket.IO server.",
    category: "Realtime",
    points: [
      "Direct + Group chat with clean MongoDB schema.",
      "Typing indicators, read receipts, 'Today/Yesterday' separators.",
      "Cloudinary file/image uploads with multi‑attachment preview.",
      "Redux for client state; SSR for SEO in public areas.",
      "Scalable Socket.IO server deployed independently.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Socket.IO",
      "MongoDB",
      "Tailwind",
      "Redux",
      "Cloudinary",
    ],
    cover: "/preview/chat-cover.png",
    gallery: ["/preview/chat-1.png", "/preview/chat-2.png"],
    links: [
      //   { label: "Live", href: "no link" },
      //   { label: "GitHub", href: "no link" },
    ],
    period: "2025",
    role: "Full‑Stack Developer",
  },
  //   {
  //     slug: "bachelor-shop-bd",
  //     title: "Bachelor Shop BD",
  //     tagline: "SEO‑ready e‑commerce with admin CMS and SSLCommerz.",
  //     brief:
  //       "Full e‑commerce stack with admin product management, rich product pages, filtering, cart drawer, and secure checkout via SSLCommerz. Designed for speed and scalable catalog growth.",
  //     category: "E‑Commerce",
  //     points: [
  //       "Admin: Create/Edit products, image reorder, markdown descriptions.",
  //       "Public: Infinite scroll listing, advanced filters, wishlist/cart.",
  //       "Product page: gallery zoom, color/size variants, related items.",
  //       "Redux cart with local persistence and checkout helpers.",
  //       "Optimized LCP/CLS with Next Image and route‑level caching.",
  //     ],
  //     tech: [
  //       "Next.js",
  //       "TypeScript",
  //       "MongoDB",
  //       "Tailwind",
  //       "Redux",
  //       "SSLCommerz",
  //     ],
  //     cover: "/preview/shop-cover.png",
  //     gallery: ["/preview/shop-1.png", "/preview/shop-2.png"],
  //     links: [],
  //     period: "2025",
  //     role: "Full‑Stack Developer",
  //   },
  {
    slug: "leatherstore-bd",
    title: "LeatherStore BD",
    tagline: "Niche store with variant logic and fast discovery.",
    brief:
      "A vertical e‑commerce focused on leather products with variant handling and a streamlined checkout experience. Built with a focus on UX clarity and performance.",
    category: "E‑Commerce",
    points: [
      "Variant selection with live price/stock validation.",
      "Search + filters with URL‑synced params.",
      "Server actions for secure mutations where applicable.",
    ],
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind", "Redux"],
    cover: "/preview/leather-cover.png",
    links: [{ label: "Live", href: "https://leatherstorebd.com" }],
    period: "2024",
    role: "Full‑Stack Developer",
  },
  {
    slug: "nur-portfolio",
    title: "Nur’s Portfolio",
    tagline: "Minimal, motion‑driven personal website.",
    brief:
      "A designer‑friendly portfolio with tasteful animations, focus on readability, and a scalable component system for new sections.",
    category: "Portfolio",
    points: [
      "Framer Motion section reveals and scroll progress.",
      "Clean information architecture: About → Skills → Work → Contact.",
      "Accessible by design, great Lighthouse scores.",
    ],
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    cover: "/preview/portfolio-cover.png",
    links: [{ label: "Live", href: "https://www.ocantec.com/" }],
    period: "2025",
    role: "Developer & Designer",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
