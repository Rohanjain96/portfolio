"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ImageSlot } from "@/components/ui/image-slot";
import { Reveal } from "@/components/ui/reveal";
import { PROJECTS, devicon } from "@/lib/data";

export default function Work() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  // Number of reachable snap positions (fewer than PROJECTS when several cards fit at once).
  const [pageCount, setPageCount] = useState(PROJECTS.length);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // A card is a reachable snap-start only if the track can scroll far enough to align it.
    const measure = () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      const reachable = Array.from(track.children).filter(
        (c) => (c as HTMLElement).offsetLeft <= maxScroll + 1
      ).length;
      setPageCount(Math.max(1, reachable));
    };

    let t: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(t);
      t = setTimeout(() => {
        const rect = track.getBoundingClientRect();
        let closest = 0, min = Infinity;
        Array.from(track.children).forEach((c, i) => {
          const d = Math.abs((c as HTMLElement).getBoundingClientRect().left - rect.left);
          if (d < min) { min = d; closest = i; }
        });
        setIndex(closest);
      }, 80);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      ro.disconnect();
      track.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const target = Math.max(0, Math.min(i, pageCount - 1));
    const card = track.children[target] as HTMLElement | undefined;
    if (!card) return;
    // Scroll the track itself (not the page) to the card's snap-start.
    track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  };

  const scrollBy = (dir: number) => {
    scrollTo(Math.min(index, pageCount - 1) + dir);
  };

  return (
    <section id="work" className="relative mx-auto max-w-[1180px] px-5 pb-20 pt-5 sm:px-8">
      <SectionHeading lead="My" accent="Recent Work" sub="Products and side projects I built end to end." />

      <div className="relative mt-11 px-4 pb-1 pt-1.5 sm:px-[clamp(16px,4vw,52px)]">
        <button
          type="button"
          aria-label="Previous project"
          onClick={() => scrollBy(-1)}
          className="absolute left-2 top-1/2 z-10 -mt-[23px] hidden h-11 w-11 place-items-center rounded-full border border-[#d6ecfa] bg-white shadow-[0_6px_16px_rgba(23,116,168,.14)] transition-colors hover:border-[#8fd3f2] hover:bg-[#f5fbff] sm:grid"
        >
          <ChevronLeft size={20} color="#0d8ec9" />
        </button>
        <button
          type="button"
          aria-label="Next project"
          onClick={() => scrollBy(1)}
          className="absolute right-2 top-1/2 z-10 -mt-[23px] hidden h-11 w-11 place-items-center rounded-full border border-[#d6ecfa] bg-white shadow-[0_6px_16px_rgba(23,116,168,.14)] transition-colors hover:border-[#8fd3f2] hover:bg-[#f5fbff] sm:grid"
        >
          <ChevronRight size={20} color="#0d8ec9" />
        </button>

        <div
          ref={trackRef}
          className="flex gap-5.5 overflow-x-auto px-1 pb-3.5 pt-2.5 [-ms-overflow-style:none] [scrollbar-width:none] [scroll-snap-type:x_mandatory] [&::-webkit-scrollbar]:hidden"
        >
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="shrink-0 basis-[clamp(270px,80vw,340px)] [scroll-snap-align:start]">
              <SpotlightCard className="h-full hover:!border-[#a7dcf5]">
                {p.screenshot ? (
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image src={p.screenshot} alt={p.title + " screenshot"} fill sizes="360px" className="object-cover" />
                  </div>
                ) : (
                  <ImageSlot className="aspect-[16/10] w-full" label={p.slot} />
                )}
                <div className="px-5 pb-6 pt-5">
                  <h3 className="font-display text-[19px] font-semibold text-[#123c53]">{p.title}</h3>
                  <p className="mb-3.5 mt-2 text-sm leading-relaxed text-[#6b8ea3]">{p.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t.label} className="inline-flex items-center gap-1.5 rounded-full border border-[#d6ecfa] bg-[#eef8fe] px-3 py-1 text-xs font-semibold text-[#2b7fa5]">
                        {"icon" in t && t.icon ? (
                          <Image src={devicon(t.icon)} alt="" width={14} height={14} unoptimized />
                        ) : "simpleIcon" in t && t.simpleIcon ? (
                          <Image src={"https://cdn.simpleicons.org/" + t.simpleIcon + "/2b7fa5"} alt="" width={14} height={14} unoptimized />
                        ) : null}
                        {t.label}
                      </span>
                    ))}
                  </div>
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3.5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0d8ec9] hover:text-[#0a6f9e]"
                    >
                      Live demo <ArrowUpRight size={14} />
                    </a>
                  ) : null}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-1.5 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => scrollBy(-1)}
            className="grid h-9 w-9 place-items-center rounded-full border border-[#d6ecfa] bg-white shadow-[0_6px_16px_rgba(23,116,168,.14)] transition-colors hover:border-[#8fd3f2] hover:bg-[#f5fbff] sm:hidden"
          >
            <ChevronLeft size={18} color="#0d8ec9" />
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => {
              const active = Math.min(index, pageCount - 1) === i;
              return (
                <button
                  key={i}
                  aria-label={"Go to project " + (i + 1)}
                  onClick={() => scrollTo(i)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{ width: active ? 22 : 8, background: active ? "#0ea5e9" : "#cfe8f7" }}
                />
              );
            })}
          </div>
          <button
            type="button"
            aria-label="Next project"
            onClick={() => scrollBy(1)}
            className="grid h-9 w-9 place-items-center rounded-full border border-[#d6ecfa] bg-white shadow-[0_6px_16px_rgba(23,116,168,.14)] transition-colors hover:border-[#8fd3f2] hover:bg-[#f5fbff] sm:hidden"
          >
            <ChevronRight size={18} color="#0d8ec9" />
          </button>
        </div>
      </div>
    </section>
  );
}
