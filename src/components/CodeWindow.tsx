import { ReactNode, useState } from "react";

interface CodeWindowProps {
  filename: string;
  children: ReactNode;
  copyText?: string;
  className?: string;
}

export default function CodeWindow({
  filename,
  children,
  copyText,
  className = "",
}: CodeWindowProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    if (!copyText) return;
    try {
      await navigator.clipboard.writeText(copyText);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = copyText;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        /* no-op */
      }
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div
      className={`overflow-hidden rounded-md border border-border bg-surface ${className}`}
    >
      <div className="flex items-center gap-2.5 border-b border-border px-3.5 py-2.5">
        <span className="inline-flex gap-1.5" aria-hidden="true">
          <i className="block h-[9px] w-[9px] rounded-full bg-border" />
          <i className="block h-[9px] w-[9px] rounded-full bg-border" />
          <i className="block h-[9px] w-[9px] rounded-full bg-border" />
        </span>
        <span className="font-mono text-[12.5px] text-muted">{filename}</span>
        {copyText && (
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Salin kode"
            className={`ml-auto rounded-[3px] border px-2.5 py-1 font-mono text-xs transition-colors duration-150 ${
              copied
                ? "border-accent-dark text-accent"
                : "border-border text-muted hover:border-muted hover:text-text"
            }`}
          >
            {copied ? "Copied" : "Copy"}
          </button>
        )}
      </div>
      <pre className="overflow-x-auto px-[18px] py-4 text-[13.5px] leading-[1.7]">
        <code>{children}</code>
      </pre>
    </div>
  );
}
