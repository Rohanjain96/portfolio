"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FileText, MessageCircle } from "lucide-react";
import { devicon } from "@/lib/data";

const BADGES = [
  { slug: "typescript/typescript-original", label: "TypeScript", pos: "left-2 top-8", dur: 5.5, size: 58 },
  { slug: "nodejs/nodejs-original", label: "Node.js", pos: "bottom-14 left-0", dur: 6.5, size: 54 },
  { slug: "nextjs/nextjs-original", label: "Next.js", pos: "right-1.5 top-16", dur: 8, size: 54 },
  { slug: "tailwindcss/tailwindcss-original", label: "Tailwind", pos: "bottom-6 right-8", dur: 6, size: 58 },
];

export default function Hero() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".hero-copy > *", { y: 26, opacity: 0, duration: 0.8, stagger: 0.09, ease: "power3.out" });
      // Portrait and its dashed ring float together so they never drift apart.
      gsap.to(".hero-portrait", { y: -14, duration: 3.5, ease: "sine.inOut", yoyo: true, repeat: -1 });
      gsap.to(".hero-ring", { rotate: 360, duration: 40, ease: "none", repeat: -1 });
      gsap.utils.toArray<HTMLElement>(".hero-badge").forEach((el, i) => {
        gsap.to(el, { y: -10, duration: 2.6 + i * 0.4, ease: "sine.inOut", yoyo: true, repeat: -1, delay: i * 0.2 });
      });
    },
    { scope }
  );

  return (
    <section ref={scope} id="home" className="relative mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-8 px-5 pb-10 pt-8 sm:px-8 lg:gap-12 lg:pt-14">
      <div className="hero-copy">
        <p className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-[#d6ecfa] bg-white/75 px-3.5 py-1.5 text-[13px] font-semibold text-[#2b7fa5]">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Open to new opportunities
        </p>
        <h1 className="font-display text-[clamp(34px,6vw,58px)] font-semibold leading-[1.06] tracking-tight text-ink text-balance">
          Hi, I&apos;m <span className="border-b-[3px] border-brand-soft pb-0.5 text-brand">Rohan Jain</span>
        </h1>
        <p className="mt-5 font-display text-[clamp(18px,2.6vw,24px)] text-[#2c5a75]">Software Engineer — Full Stack</p>
        <p className="mt-4 max-w-[520px] text-base leading-relaxed text-ink-soft text-pretty">
          I build performance-sensitive web apps across fintech, trading and SaaS with React, Next.js, TypeScript and Node — cutting page-load times and turning engineering-heavy workflows into self-serve tools.
        </p>
        <div className="mt-7 flex flex-wrap gap-3.5">
          <motion.a
            href="/Rohan_Jain_Resume.pdf"
            download="Rohan-Jain-Resume.pdf"
            whileHover={{ y: -3 }}
            whileTap={{ y: -1, scale: 0.98 }}
            className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-br from-[#2aa7e0] to-brand-deep px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_26px_rgba(13,142,201,.32)]"
          >
            <FileText size={17} /> Resume
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ y: -3 }}
            whileTap={{ y: -1, scale: 0.98 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-[#bfe3f7] bg-white/90 px-6 py-3.5 text-[15px] font-semibold text-[#15607f]"
          >
            <MessageCircle size={17} /> Contact Me
          </motion.a>
        </div>
      </div>

      <div className="hero-portrait relative grid min-h-[min(420px,88vw)] place-items-center">
        <div className="hero-ring absolute h-[min(392px,84vw)] w-[min(392px,84vw)] rounded-full border-2 border-dashed border-[#a9dcf5]" />
        <div className="relative h-[min(330px,70vw)] w-[min(330px,70vw)] rounded-full bg-[linear-gradient(140deg,#8fd8f6,#ffffff_45%,#4fbde9)] p-2.5 shadow-[0_26px_60px_rgba(23,116,168,.25)]">
          <div className="relative h-full w-full overflow-hidden rounded-full bg-[linear-gradient(180deg,#f2fafe,#dceffb)]">
            <div className="absolute inset-x-0 top-[4%] h-[96%]">
              <Image
                src="/hero-laptop.png"
                alt="Rohan Jain holding a laptop"
                fill
                priority
                sizes="330px"
                className="object-contain object-bottom drop-shadow-[0_18px_26px_rgba(23,116,168,.18)]"
              />
            </div>
          </div>
        </div>
        {BADGES.map((b) => (
          <div
            key={b.label}
            className={"hero-badge absolute grid place-items-center rounded-2xl bg-white shadow-[0_10px_24px_rgba(23,116,168,.18)] " + b.pos}
            style={{ width: b.size, height: b.size }}
          >
            <Image src={devicon(b.slug)} alt={b.label} width={Math.round(b.size * 0.52)} height={Math.round(b.size * 0.52)} unoptimized />
          </div>
        ))}
      </div>
    </section>
  );
}
