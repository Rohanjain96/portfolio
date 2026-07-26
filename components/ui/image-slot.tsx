import { cn } from "@/lib/utils";

/** Striped placeholder for artwork that hasn't been supplied yet. */
export function ImageSlot({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={cn(
        "grid place-items-center bg-[repeating-linear-gradient(135deg,#e2f1fb_0_10px,#d3e9f7_10px_20px)] text-center",
        className
      )}
    >
      <span className="max-w-[70%] font-mono text-[11px] leading-relaxed tracking-[0.06em] text-[#5c8299]">
        {label}
      </span>
    </div>
  );
}
