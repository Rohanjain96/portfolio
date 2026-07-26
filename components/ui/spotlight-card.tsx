"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Aceternity-style spotlight card: a soft radial highlight follows the cursor.
 * Written from scratch — drop-in replaceable with the Aceternity UI original.
 */
export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(120, 205, 245, 0.35)",
}: {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className={cn(
        "group relative overflow-hidden rounded-[20px] border border-line bg-white/90 transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)]",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity: visible ? 1 : 0,
          background: "radial-gradient(320px circle at " + pos.x + "px " + pos.y + "px, " + spotlightColor + ", transparent 65%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
