"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open, lenis]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (target) setTimeout(() => lenis?.scrollTo(target as HTMLElement, { offset: -90, duration: 1.2, force: true }), 60);
  };

  return (
    <>
      <div className="sticky top-0 z-[200] px-3 py-3 sm:px-6 sm:py-4">
        <nav
          className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-x-6 gap-y-3 rounded-[32px] border px-4 py-3 backdrop-blur-md transition-colors duration-300 sm:pl-6"
          style={{
            background: open ? "rgba(255,255,255,0)" : "rgba(255,255,255,.82)",
            borderColor: open ? "rgba(255,255,255,0)" : "rgba(255,255,255,.9)",
            boxShadow: open ? "none" : "0 12px 34px rgba(29,110,169,.12)",
          }}
        >
          <span
            className="font-orbitron text-[15px] font-bold tracking-[0.06em] transition-colors duration-300"
            style={
              open
                ? { color: "#eaf6ff" }
                : { background: "linear-gradient(135deg,#0d8ec9,#12b886)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }
            }
          >
            ROHAN JAIN
          </span>

          <div className="hidden items-center gap-x-7 md:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={go(l.href)}
                className="border-b-2 border-transparent py-1.5 text-sm font-medium text-[#3d6076] transition-colors hover:border-brand-soft hover:text-brand-deep"
              >
                {l.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-[220] grid h-11 w-11 place-content-center gap-[5px] rounded-full border transition-colors md:hidden"
            style={{
              background: open ? "rgba(255,255,255,.15)" : "#eef7fe",
              borderColor: open ? "rgba(255,255,255,.35)" : "#d3e9f8",
            }}
          >
            <motion.span
              className="block h-0.5 w-5 rounded"
              animate={{ y: open ? 7 : 0, rotate: open ? 45 : 0, backgroundColor: open ? "#eaf6ff" : "#1c5a78" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              className="block h-0.5 w-5 rounded"
              animate={{ opacity: open ? 0 : 1, backgroundColor: open ? "#eaf6ff" : "#1c5a78" }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 w-5 rounded"
              animate={{ y: open ? -7 : 0, rotate: open ? -45 : 0, backgroundColor: open ? "#eaf6ff" : "#1c5a78" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
          </button>
        </nav>
      </div>

      {/* Full-screen circular clip-path morph menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            className="fixed inset-0 z-[110] grid content-center overflow-y-auto px-7 pb-10 pt-24 md:hidden"
            style={{ background: "radial-gradient(120% 100% at 82% 6%, #1f7fae 0%, #0f4c6b 55%, #0a3349 100%)" }}
            initial={{ clipPath: "circle(0px at calc(100% - 40px) 46px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 46px)" }}
            exit={{ clipPath: "circle(0px at calc(100% - 40px) 46px)" }}
            transition={{ duration: 0.72, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.div
              className="grid justify-items-start gap-3.5"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.28, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
              exit={{ opacity: 0, y: 16, transition: { duration: 0.2 } }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6fc3e8]">Menu</span>
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={go(l.href)}
                  className="font-display text-[clamp(30px,9vw,44px)] font-semibold tracking-tight text-[#eaf6ff] transition-colors hover:text-brand-soft"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-4 flex flex-wrap gap-2.5">
                <a href="#contact" onClick={go("#contact")} className="inline-flex items-center gap-2 rounded-full bg-[#9fe0fb] px-5 py-2.5 text-[13px] font-semibold text-[#0b3d55]">
                  <Mail size={16} /> hello@danielokafor.dev
                </a>
                <a href="#contact" onClick={go("#contact")} className="inline-flex items-center gap-2 rounded-full border border-[#cdeeff]/40 px-5 py-2.5 text-[13px] font-semibold text-[#cdeeff]">
                  <FaGithub size={16} /> GitHub
                </a>
                <a href="#contact" onClick={go("#contact")} className="inline-flex items-center gap-2 rounded-full border border-[#cdeeff]/40 px-5 py-2.5 text-[13px] font-semibold text-[#cdeeff]">
                  <FaLinkedinIn size={16} /> LinkedIn
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
