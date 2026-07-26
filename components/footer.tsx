import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { CONTACT } from "@/lib/data";

const LINKS = [
  { label: "GitHub", Icon: FaGithub, href: CONTACT.github },
  { label: "LinkedIn", Icon: FaLinkedinIn, href: CONTACT.linkedin },
  { label: "Email", Icon: Mail, href: "mailto:" + CONTACT.email },
];

export default function Footer() {
  return (
    <footer className="relative mx-auto flex max-w-[1180px] flex-wrap justify-between gap-x-5 gap-y-3 border-t border-[#dbecf8] px-5 py-7 text-[13px] text-ink-muted sm:px-8">
      <span>© {new Date().getFullYear()} Rohan Jain · New Delhi, India</span>
      <span className="flex items-center gap-4">
        {LINKS.map(({ label, Icon, href }) => (
          <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer" className="inline-flex items-center gap-1.5 transition hover:-translate-y-0.5 hover:text-[#2b7fa5]">
            <Icon size={16} /> {label}
          </a>
        ))}
      </span>
    </footer>
  );
}
