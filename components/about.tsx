"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Handshake } from "lucide-react";
import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { STATS } from "@/lib/data";

/** Speedometer-style count-up: accelerates, slightly overshoots the target, then settles. */
function StatValue({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState("0" + suffix);
  const decimals = String(value).split(".")[1]?.length ?? 0;

  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const t0 = performance.now();
    const dur = 1700;
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / dur);
      const settle = 1 - Math.pow(1 - k, 3);
      const overshoot = Math.sin(k * Math.PI) * 0.06 * (1 - k);
      const eased = Math.max(0, settle + overshoot);
      setDisplay((value * eased).toFixed(decimals) + suffix);
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, suffix, decimals]);

  return (
    <div ref={ref} className="font-display text-[34px] font-semibold text-brand">
      {display}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-10 px-5 pb-16 pt-10 sm:px-8 lg:gap-16">
      <Reveal className="relative grid min-h-[min(420px,110vw)] place-items-center">
        <div className="animate-floaty relative grid place-items-center">
          <div className="absolute h-[min(410px,92vw)] w-[min(330px,74vw)] rounded-[200px] border-2 border-dashed border-[#a9dcf5]" />
          <div className="h-[min(370px,84vw)] w-[min(290px,66vw)] rounded-[170px] bg-[linear-gradient(160deg,#9adcf7,#fff_50%,#4fbde9)] p-2 shadow-[0_24px_54px_rgba(23,116,168,.22)]">
            <div className="relative h-full w-full overflow-hidden rounded-[165px] bg-[linear-gradient(180deg,#f4fbff,#dbeefa)]">
              <div className="absolute inset-x-0 top-[5%] h-[92%]">
                <Image
                  src="/standing-full.png"
                  alt="Rohan Jain standing"
                  fill
                  sizes="290px"
                  className="object-contain object-bottom drop-shadow-[0_16px_24px_rgba(23,116,168,.18)]"
                />
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <RevealGroup className="grid gap-4">
        <RevealItem>
          <h2 className="font-display text-[clamp(28px,5vw,40px)] font-semibold tracking-tight text-ink">
            About <span className="border-b-[3px] border-brand-soft text-brand">Me</span>
          </h2>
        </RevealItem>
        <RevealItem>
          <p className="max-w-[560px] text-base leading-[1.8] text-ink-soft text-pretty">
            I&apos;m a full-stack engineer with 3+ years building performance-sensitive web applications across fintech, trading and SaaS products — specialising in the React / Next.js / TypeScript / Node.js stack.
          </p>
        </RevealItem>
        <RevealItem>
          <p className="max-w-[560px] text-base leading-[1.8] text-ink-soft text-pretty">
            Most of my work sits where frontend architecture meets API design: cutting page-load times, standardising API contracts, and turning engineering-heavy workflows into self-serve tools non-technical teams can actually use.
          </p>
        </RevealItem>
        <RevealItem>
          <div className="mt-2 flex flex-wrap gap-x-11 gap-y-5">
            {STATS.map((s) => (
              <div key={s.label}>
                <StatValue value={s.value} suffix={s.suffix} />
                <div className="text-[13px] font-medium text-[#6b8ea3]">{s.label}</div>
              </div>
            ))}
          </div>
        </RevealItem>
        <RevealItem>
          <motion.a
            href="#contact"
            whileHover={{ y: -3 }}
            whileTap={{ y: -1, scale: 0.98 }}
            className="mt-2 inline-flex items-center gap-2.5 rounded-full border border-[#bfe3f7] bg-white/95 px-6 py-3 text-[15px] font-semibold text-[#15607f] shadow-[0_10px_22px_rgba(29,110,169,.1)]"
          >
            <Handshake size={18} /> Hire Me
          </motion.a>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
