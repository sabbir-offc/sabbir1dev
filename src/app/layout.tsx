// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import SiteHeader from "@/components/SiteHeader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";
const OG_IMAGE = "/og.png"; // put your OG image at public/og.png (1200x630)

// ----- SEO: Metadata -----
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sabbir — Portfolio",
    template: "%s — Sabbir",
  },
  description:
    "Portfolio of Sabbir — full‑stack developer crafting high‑performance web experiences.",
  keywords: [
    "Sabbir",
    "Portfolio",
    "Full‑stack developer",
    "Next.js",
    "React",
    "TypeScript",
    "MongoDB",
    "Tailwind CSS",
  ],
  authors: [{ name: "Sabbir" }],
  creator: "Sabbir",
  publisher: "Sabbir",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sabbir — Portfolio",
    description:
      "Full‑stack developer crafting high‑performance web experiences.",
    url: SITE_URL,
    siteName: "Sabbir",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Sabbir — Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabbir — Portfolio",
    description:
      "Full‑stack developer crafting high‑performance web experiences.",
    images: [OG_IMAGE],
    creator: "@yourhandle", // optional: update if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png" }], // optional, add if present
  },
  category: "technology",
  applicationName: "Sabbir — Portfolio",
};

// ----- SEO: Viewport / Theme -----
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();

  // JSON-LD (Person + WebSite)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sabbir",
    url: SITE_URL,
    jobTitle: "Full‑stack Developer",
    sameAs: [
      // add your profiles if you have them
      // "https://github.com/yourname",
      // "https://www.linkedin.com/in/yourname/",
    ],
  };

  const webSiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sabbir — Portfolio",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={query}`,
      "query-input": "required name=query",
    },
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full scroll-smooth antialiased"
    >
      <head>
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteLd) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans bg-aura text-foreground min-h-screen`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to content
        </a>

        <Providers>
          <div className="min-h-dvh flex flex-col">
            <SiteHeader />
            <main id="main" className="flex-1">
              {children}
            </main>
            <footer className="border-t border-border">
              <div className="container mx-auto py-6 text-sm text-muted-foreground px-5">
                © {year} Sabbir. All rights reserved.
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
