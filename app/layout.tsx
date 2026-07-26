import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Orbitron } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import Navbar from "@/components/navbar";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron", display: "swap" });

const SITE_URL = "https://rohanjain.dev"; // TODO: replace with your real domain
const TITLE = "Rohan Jain — Full Stack Software Engineer";
const DESCRIPTION =
  "Full-stack engineer building performance-sensitive web apps across fintech, trading and SaaS with React, Next.js, TypeScript and Node.js.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s — Rohan Jain" },
  description: DESCRIPTION,
  keywords: ["Rohan Jain", "Full Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "Software Engineer"],
  authors: [{ name: "Rohan Jain" }],
  creator: "Rohan Jain",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Rohan Jain — Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rohan Jain",
  jobTitle: "Software Engineer — Full Stack",
  url: SITE_URL,
  sameAs: ["https://github.com/Rohanjain96", "https://linkedin.com/in/rohanjain2002"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.variable + " " + jakarta.variable + " " + orbitron.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans antialiased">
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
