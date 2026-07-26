import Image from "next/image";
import { TECH, devicon } from "@/lib/data";

export default function TechMarquee() {
  const row = [...TECH, ...TECH];
  return (
    <div className="relative overflow-hidden pb-14 pt-2 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div className="flex w-max animate-marquee gap-3.5">
        {row.map((t, i) => (
          <span
            key={t.name + i}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-[#3a6379] shadow-[0_6px_16px_rgba(29,110,169,.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8fd3f2] hover:shadow-[0_14px_26px_rgba(29,110,169,.2)]"
          >
            <Image src={devicon(t.icon)} alt="" width={22} height={22} unoptimized />
            {t.name}
          </span>
        ))}
      </div>
    </div>
  );
}
