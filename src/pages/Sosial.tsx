import { ReactNode } from "react";
import DocsShell, { DocSection } from "../components/DocsShell";

interface SocialLinkProps {
  href: string;
  label: string;
  handle: string;
  icon: ReactNode;
}

function SocialLink({ href, label, handle, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 border border-border rounded-md px-5 py-4 transition-colors duration-150 hover:border-muted hover:bg-surface-hover"
    >
      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-border text-text">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[15px] font-medium text-text">{label}</span>
        <span className="block truncate text-[13.5px] text-muted">{handle}</span>
      </span>
      <span className="ml-auto flex-shrink-0 text-muted" aria-hidden="true">
        →
      </span>
    </a>
  );
}

const ICON_PROPS = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": true as const,
};

const icons = {
  youtube: (
    <svg {...ICON_PROPS}>
      <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 9.2v5.6l5-2.8-5-2.8Z" fill="currentColor" />
    </svg>
  ),
  tiktok: (
    <svg {...ICON_PROPS}>
      <path
        d="M14 3v10.8a2.6 2.6 0 1 1-2.2-2.57M14 3c.3 2.1 1.8 3.7 4 4v2.3c-1.5 0-2.9-.45-4-1.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  instagram: (
    <svg {...ICON_PROPS}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  ),
  discord: (
    <svg {...ICON_PROPS} viewBox="0 0 16 16" fill="currentColor">
      <path d="M13.5 3.8c-1-.5-2.1-.8-3.2-1l-.16.3c1 .25 1.95.63 2.83 1.14a10.9 10.9 0 0 0-9.9 0 8.3 8.3 0 0 1 2.86-1.15l-.16-.3c-1.12.18-2.2.5-3.2 1C1 6.9.5 10 .7 13c1.16.86 2.44 1.5 3.8 1.9l.5-.68a7.9 7.9 0 0 1-1.24-.6l.27-.2a9.6 9.6 0 0 0 7.9 0l.28.2c-.4.24-.82.44-1.25.6l.5.68c1.37-.4 2.65-1.04 3.8-1.9.28-3.44-.6-6.5-2.27-9.2ZM5.78 11.1c-.68 0-1.23-.63-1.23-1.4 0-.78.54-1.4 1.23-1.4.68 0 1.24.63 1.23 1.4 0 .77-.55 1.4-1.23 1.4Zm4.44 0c-.68 0-1.23-.63-1.23-1.4 0-.78.54-1.4 1.23-1.4.68 0 1.23.63 1.23 1.4 0 .77-.55 1.4-1.23 1.4Z" />
    </svg>
  ),
};

export default function Sosial() {
  return (
    <DocsShell single sidebar={null}>
      <DocSection id="sosial-madura-land">
        <p className="mb-2.5 font-mono text-[13px] text-muted">Komunitas</p>
        <h1 className="mb-4 text-[2rem] font-semibold leading-tight sm:text-[2.6rem]">
          Ikuti Madura Land
        </h1>
        <p className="mb-8 max-w-[70ch] text-[15.5px] leading-relaxed text-muted">
          Pantau perkembangan Madura Land, ikut diskusi, atau sekadar mampir
          nyapa lewat kanal-kanal resmi di bawah ini.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <SocialLink
            href="https://discord.gg/SVUrAuZZ2"
            label="Discord"
            handle="discord.gg/SVUrAuZZ2"
            icon={icons.discord}
          />
          <SocialLink
            href="https://www.youtube.com/@madura-land"
            label="YouTube"
            handle="@madura-land"
            icon={icons.youtube}
          />
          <SocialLink
            href="https://tiktok.com/@maduralandofficial"
            label="TikTok"
            handle="@maduralandofficial"
            icon={icons.tiktok}
          />
          <SocialLink
            href="https://www.instagram.com/maduralandofficial"
            label="Instagram"
            handle="@maduralandofficial"
            icon={icons.instagram}
          />
        </div>
      </DocSection>

      <DocSection id="sosial-owner" last>
        <h2 className="mb-3.5 text-[1.3rem] font-semibold">
          Ikuti Iky, pembuat Madura Land
        </h2>
        <p className="mb-6 max-w-[70ch] text-[15.5px] leading-relaxed text-muted">
          Akun pribadi di balik proyek ini.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <SocialLink
            href="https://tiktok.com/@iky.dev3"
            label="TikTok"
            handle="@iky.dev3"
            icon={icons.tiktok}
          />
          <SocialLink
            href="https://www.instagram.com/mzris_ky"
            label="Instagram"
            handle="@mzris_ky"
            icon={icons.instagram}
          />
        </div>
      </DocSection>
    </DocsShell>
  );
}
