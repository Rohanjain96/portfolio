"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, PhoneCall, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Reveal } from "@/components/ui/reveal";
import { CONTACT, ENGAGEMENTS } from "@/lib/data";

const SOCIALS = [
  { label: "GitHub", Icon: FaGithub, href: CONTACT.github },
  { label: "LinkedIn", Icon: FaLinkedinIn, href: CONTACT.linkedin },
];

const field =
  "w-full rounded-xl border border-[#dfeef9] bg-[#f7fbfe] px-4 py-3 text-[15px] text-[#123c53] outline-none transition focus:border-[#5cc0ea] focus:bg-white focus:ring-4 focus:ring-[#5cc0ea]/20";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [engagement, setEngagement] = useState(ENGAGEMENTS[0]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // Wire this to your route handler / Resend / Formspree endpoint.
    console.log({ ...data, engagement });
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="relative mx-auto max-w-[1180px] px-5 py-20 sm:px-8">
      <Reveal className="text-center">
        <h2 className="font-display text-[clamp(30px,5.4vw,44px)] font-semibold tracking-tight text-ink">
          Let&apos;s build something <span className="border-b-[3px] border-brand-soft text-brand">together</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[540px] text-base leading-relaxed text-ink-soft">
          Open to full-stack engineering roles and freelance work. Tell me what you&apos;re building and I&apos;ll reply within a day.
        </p>
      </Reveal>

      <div className="mt-11 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-6">
        <Reveal className="grid gap-4">
          {[
            { Icon: Mail, label: "Email", value: CONTACT.email, href: "mailto:" + CONTACT.email },
            { Icon: PhoneCall, label: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref },
            { Icon: MapPin, label: "Based in", value: CONTACT.location },
          ].map(({ Icon, label, value, href }) => (
            <div key={label} className="flex items-center gap-4 rounded-[18px] border border-line bg-white/92 p-5 shadow-[0_14px_30px_rgba(29,110,169,.09)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(29,110,169,.18)]">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-[14px] border border-[#d3e9f8] bg-[#e8f6fe] text-[#1c5a78]">
                <Icon size={21} />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.08em] text-[#8aa9bb]">{label}</div>
                {href ? (
                  <a href={href} className="break-words text-[15px] font-semibold text-[#123c53]">{value}</a>
                ) : (
                  <div className="text-[15px] font-semibold text-[#123c53]">{value}</div>
                )}
              </div>
            </div>
          ))}

          <div className="rounded-[18px] border border-line bg-white/92 p-5 shadow-[0_14px_30px_rgba(29,110,169,.09)]">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#8aa9bb]">Elsewhere</div>
            <div className="flex flex-wrap gap-2.5">
              {SOCIALS.map(({ label, Icon, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3 }}
                  className="inline-flex items-center gap-2 rounded-full border border-[#d6ecfa] bg-[#eef8fe] px-4 py-2.5 text-[13px] font-semibold text-[#2b7fa5] hover:bg-white"
                >
                  <Icon size={15} /> {label.replace(/^https?:\/\//, "")}
                </motion.a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={onSubmit} className="grid gap-4 rounded-[22px] border border-line bg-white p-6 shadow-[0_20px_46px_rgba(29,110,169,.12)] sm:p-8">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
              <label className="grid gap-1.5 text-[13px] font-semibold text-[#3d6076]">
                Your name
                <input name="name" required placeholder="Jane Cooper" className={field} />
              </label>
              <label className="grid gap-1.5 text-[13px] font-semibold text-[#3d6076]">
                Email
                <input name="email" type="email" required placeholder="jane@company.com" className={field} />
              </label>
            </div>

            <label className="grid gap-1.5 text-[13px] font-semibold text-[#3d6076]">
              Project type
              <select name="topic" className={field + " appearance-none"}>
                <option>Full-stack product build</option>
                <option>Frontend / React &amp; Next.js work</option>
                <option>API &amp; Node.js backend</option>
                <option>Performance audit</option>
                <option>Something else</option>
              </select>
            </label>

            <div className="grid gap-1.5 text-[13px] font-semibold text-[#3d6076]">
              Engagement
              <div className="flex flex-wrap gap-2.5">
                {ENGAGEMENTS.map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setEngagement(b)}
                    className={
                      "rounded-full border px-4 py-2.5 text-[13px] font-semibold transition " +
                      (engagement === b
                        ? "border-brand bg-brand text-white"
                        : "border-[#d6ecfa] bg-[#eef8fe] text-[#2b7fa5] hover:-translate-y-0.5 hover:border-[#8fd3f2] hover:bg-white")
                    }
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <label className="grid gap-1.5 text-[13px] font-semibold text-[#3d6076]">
              Message
              <textarea name="message" rows={5} required placeholder="A few lines about the project, timeline and what success looks like." className={field + " resize-y"} />
            </label>

            <div className="mt-1 flex flex-wrap items-center justify-between gap-3.5">
              <span className="text-[13px] text-ink-muted">
                {sent ? "Thanks — message sent. I'll reply within a day." : "Usually replies within 24 hours."}
              </span>
              <motion.button
                type="submit"
                whileHover={{ y: -3 }}
                whileTap={{ y: -1, scale: 0.98 }}
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-br from-[#2aa7e0] to-brand-deep px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_26px_rgba(13,142,201,.32)]"
              >
                <Send size={17} /> Send message
              </motion.button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
