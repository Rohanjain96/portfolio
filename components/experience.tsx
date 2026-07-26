"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { TIMELINE } from "@/lib/data";

function TimelineItem({ item, index }: { item: (typeof TIMELINE)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15, margin: "0px 0px -6% 0px" });

  return (
    <div ref={ref} className="relative mb-7 last:mb-0">
      <motion.div
        className="absolute -left-[46px] top-[22px] grid h-8 w-8 place-items-center rounded-full border-2 bg-white"
        style={{ borderColor: item.color, boxShadow: `0 0 0 6px ${item.color}1f` }}
        initial={{ scale: 0.4, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.34, 1.4, 0.5, 1], delay: 0.12 }}
      >
        <span className="block h-2.5 w-2.5 rounded-full" style={{ background: item.color }} />
      </motion.div>

      <motion.div
        className="rounded-[20px] border border-line bg-white/94 p-6 shadow-[0_14px_30px_rgba(29,110,169,.09)] transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)] hover:translate-x-1.5 hover:border-[#a7dcf5] hover:shadow-[0_22px_44px_rgba(29,110,169,.18)]"
        initial={{ opacity: 0, x: -26 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
      >
        <div className="mb-2 flex flex-wrap items-center gap-2.5">
          <span
            className="rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em]"
            style={{ color: item.color, background: `${item.color}14`, borderColor: `${item.color}33` }}
          >
            {item.period}
          </span>
          <span className="text-xs font-semibold text-[#8aa9bb]">{item.place}</span>
        </div>
        <div className="font-display text-lg font-semibold text-[#123c53]">{item.title}</div>
        <div className="mt-1 mb-3 text-[13px] font-semibold" style={{ color: item.color }}>
          {item.org}
        </div>

        {item.projects ? (
          <div className="grid gap-3.5">
            {item.projects.map((p) => (
              <div key={p.name} className="border-l-[3px] border-[#bfe3f7] pl-3.5">
                <div className="mb-1.5 text-[13px] font-bold text-[#123c53]">{p.name}</div>
                <ul className="grid gap-1.5 pl-4 text-sm leading-relaxed text-[#6b8ea3]">
                  {p.bullets.map((b) => (
                    <li key={b} className="list-disc">{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : item.bullets ? (
          <ul className="grid gap-2 pl-4 text-sm leading-relaxed text-[#6b8ea3]">
            {item.bullets.map((b) => (
              <li key={b} className="list-disc">{b}</li>
            ))}
          </ul>
        ) : null}
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true, amount: 0.05 });

  return (
    <section id="experience" className="relative mx-auto max-w-[1180px] px-5 pb-16 pt-5 sm:px-8">
      <SectionHeading lead="My" accent="Experience" sub="Two and a half years of shipping — fintech, trading and SaaS." />
      <div className="mt-11 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-start gap-8 lg:gap-12">
        <div ref={lineRef} className="relative pl-[46px]">
          <div className="absolute bottom-2.5 left-[15px] top-2.5 w-0.5 overflow-hidden rounded bg-[#dcedf9]">
            <motion.span
              className="block h-full origin-top bg-[linear-gradient(180deg,#7fd3f4,#4fbde9_40%,#bfe3f7_100%)]"
              initial={{ scaleY: 0 }}
              animate={lineInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          {TIMELINE.map((item, i) => (
            <TimelineItem key={item.title + item.org} item={item} index={i} />
          ))}
        </div>

        <div className="sticky top-[110px] grid place-items-center gap-3.5">
          <div className="relative aspect-[3/4] w-full max-w-[300px] overflow-hidden rounded-[22px] border border-[#d9ebf8] bg-[linear-gradient(180deg,#f6fcff,#e0f0fa)]">
            <div className="absolute" style={{ top: "4%", left: "2%", width: "96%", height: "92%" }}>
              <Image
                src="/suit-openarms.png"
                alt="Rohan Jain in a suit"
                fill
                sizes="300px"
                className="object-contain drop-shadow-[0_16px_24px_rgba(23,116,168,.16)]"
              />
            </div>
          </div>
          <span className="rounded-full border border-[#d6ecfa] bg-white px-4 py-1.5 text-xs font-semibold text-[#2b7fa5]">2.5+ years · fintech &amp; SaaS</span>
        </div>
      </div>
    </section>
  );
}
