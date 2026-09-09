import { ReactNode } from "react";

interface DocsShellProps {
  sidebar: ReactNode;
  children: ReactNode;
  single?: boolean;
}

export default function DocsShell({ sidebar, children, single = false }: DocsShellProps) {
  if (single) {
    return (
      <div className="mx-auto max-w-[760px] px-6 py-11 pb-28">
        <div className="min-w-0">{children}</div>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-shell gap-14 px-6 py-11 pb-28 md:grid-cols-[220px_1fr] md:items-start">
      <nav
        aria-label="Navigasi dokumentasi"
        className="flex flex-col gap-7 border-b border-border pb-6 md:sticky md:top-[84px] md:border-b-0 md:pb-0"
      >
        {sidebar}
      </nav>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

export function SidebarGroup({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-row flex-wrap gap-x-4 gap-y-1 md:flex-col md:gap-0.5">
      <p className="mb-0 w-full font-mono text-[11px] uppercase tracking-wide text-muted md:mb-2">
        {label}
      </p>
      {children}
    </div>
  );
}

export function DocSection({
  id,
  children,
  last = false,
}: {
  id: string;
  children: ReactNode;
  last?: boolean;
}) {
  return (
    <article
      id={id}
      className={`scroll-mt-[84px] ${
        last ? "" : "mb-[52px] border-b border-border pb-[52px]"
      }`}
    >
      {children}
    </article>
  );
}
