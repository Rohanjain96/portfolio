import Image from "next/image";
import * as Lucide from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { devicon, SKILL_GROUPS } from "@/lib/data";

type LucideName = keyof typeof Lucide;

function GroupIcon({ name, color }: { name: string; color: string }) {
  const Cmp = Lucide[(name
    .split("-")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join("") as LucideName)] as Lucide.LucideIcon | undefined;
  return Cmp ? <Cmp size={19} color={color} /> : null;
}

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-[1180px] px-5 pb-20 pt-5 sm:px-8">
      <SectionHeading lead="Tech" accent="Skills" sub="The stack I reach for, end to end." />
      <div className="mt-11 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5.5">
        {SKILL_GROUPS.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.06}>
            <div className="h-full rounded-[20px] border border-line bg-white p-6 shadow-[0_16px_36px_rgba(29,110,169,.1)] transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1.5 hover:shadow-[0_26px_52px_rgba(29,110,169,.18)]">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border" style={{ background: g.tint.bg, borderColor: g.tint.border }}>
                  <GroupIcon name={g.icon} color={g.tint.fg} />
                </span>
                <div className="font-display text-[17px] font-semibold text-[#123c53]">{g.title}</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-[#f5fbff] px-3.5 py-1.5 text-[13px] font-semibold text-[#3a6379] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#8fd3f2]"
                  >
                    {"icon" in s && s.icon ? (
                      <Image src={devicon(s.icon)} alt="" width={17} height={17} unoptimized />
                    ) : "lucide" in s && s.lucide ? (
                      <GroupIcon name={s.lucide} color="#3a6379" />
                    ) : null}
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
