"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Lenis smooth scroll, driven by GSAP's ticker so ScrollTrigger and Lenis
 * stay on the exact same frame (no jitter on pinned/scrubbed animations).
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    const onScroll = () => ScrollTrigger.update();
    lenisRef.current?.lenis?.on("scroll", onScroll);
    return () => {
      gsap.ticker.remove(update);
      lenisRef.current?.lenis?.off("scroll", onScroll);
    };
  }, []);

  return (
    <ReactLenis root ref={lenisRef} options={{ autoRaf: false, duration: 1.15, lerp: 0.09, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
