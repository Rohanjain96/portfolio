import { Reveal } from "@/components/ui/reveal";

export default function SectionHeading({ lead, accent, sub, center = true }: { lead: string; accent: string; sub?: string; center?: boolean }) {
  return (
    <Reveal className={center ? "text-center" : undefined}>
      <h2 className="font-display text-[clamp(28px,5vw,40px)] font-semibold tracking-tight text-ink">
        {lead} <span className="border-b-[3px] border-brand-soft text-brand">{accent}</span>
      </h2>
      {sub ? <p className="mt-3 text-[15px] text-[#6b8ea3]">{sub}</p> : null}
    </Reveal>
  );
}
