import { useRef, useState } from "react";
import { highlightMadura, runMadura, InterpretResult } from "../lib/interpreter";

const DEFAULT_CODE = 'gawe nama = "Madura Land"\ntoles nama';

export default function PlaygroundSection() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [result, setResult] = useState<InterpretResult | null>(() => runMadura(DEFAULT_CODE));
  const highlightRef = useRef<HTMLPreElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function handleScroll() {
    if (highlightRef.current && textareaRef.current) {
      highlightRef.current.scrollTop = textareaRef.current.scrollTop;
      highlightRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  }

  function handleRun() {
    setResult(runMadura(code));
  }

  function handleClear() {
    setCode("");
    setResult(null);
  }

  const outputText = (() => {
    if (!result) return "";
    if (result.error) {
      return `Prototipe interpreter: sintaksis tidak dikenali pada baris ${result.line}.\n> ${result.text.trim()}`;
    }
    return result.output.join("\n");
  })();

  const outputClass = result?.error
    ? "text-[#E0806B]"
    : result && result.output.length > 0
      ? "text-text"
      : "text-muted";

  return (
    <section id="playground" className="border-b border-border py-16 sm:py-20">
      <div className="mx-auto max-w-shell px-6">
        <p className="mb-3 font-mono text-[13px] text-muted">04 — Playground</p>
        <div className="mb-8 flex flex-wrap items-baseline gap-3.5">
          <h2 className="text-[1.6rem] font-semibold leading-tight sm:text-[2.2rem]">
            Coba langsung di browser.
          </h2>
          <span className="rounded-[3px] border border-accent-dark px-2 py-[3px] font-mono text-xs text-accent">
            Prototipe Browser
          </span>
        </div>

        <div className="overflow-hidden rounded-md border border-border bg-surface">
          <div className="border-b border-border px-4 py-2.5 font-mono text-[12.5px] text-muted">
            Madura Land Playground
          </div>

          <div className="grid sm:grid-cols-2">
            <div className="p-4 pb-5 sm:border-r sm:border-border">
              <div className="mb-2.5 font-mono text-[11px] uppercase tracking-wide text-muted">
                Kode
              </div>
              <div className="relative min-h-[140px]">
                <pre
                  ref={highlightRef}
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 overflow-auto whitespace-pre-wrap break-words font-mono text-[13.5px] leading-[1.7] text-text"
                  dangerouslySetInnerHTML={{ __html: highlightMadura(code) + "\n" }}
                />
                <textarea
                  ref={textareaRef}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  onScroll={handleScroll}
                  spellCheck={false}
                  aria-label="Editor kode Madura Land"
                  className="relative z-[1] min-h-[140px] w-full resize-y border-none bg-transparent p-0 font-mono text-[13.5px] leading-[1.7] text-transparent caret-text focus:outline-none"
                />
              </div>
            </div>

            <div className="p-4 pb-5">
              <div className="mb-2.5 font-mono text-[11px] uppercase tracking-wide text-muted">
                Keluaran
              </div>
              <pre
                aria-live="polite"
                className={`min-h-[140px] whitespace-pre-wrap break-words font-mono text-[13.5px] leading-[1.7] ${outputClass}`}
              >
                {outputText}
              </pre>
            </div>
          </div>

          <div className="flex justify-end gap-2.5 border-t border-border px-4 py-3.5">
            <button
              type="button"
              onClick={handleClear}
              className="rounded-[3px] border border-border px-5 py-2.5 text-[14.5px] font-medium text-muted transition-colors duration-150 hover:bg-surface-hover hover:text-text"
            >
              Bersihkan
            </button>
            <button
              type="button"
              onClick={handleRun}
              className="rounded-[3px] border border-accent bg-accent px-5 py-2.5 text-[14.5px] font-medium text-white transition-all duration-150 hover:bg-accent-hover hover:-translate-y-px"
            >
              Jalankan →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
