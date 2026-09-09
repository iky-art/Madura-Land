import { KeyboardEvent, useState } from "react";
import CodeWindow from "./CodeWindow";

type TabKey = "variables" | "output" | "conditions" | "functions";

const TABS: { key: TabKey; label: string; file: string }[] = [
  { key: "variables", label: "Variabel", file: "variabel.madura.l" },
  { key: "output", label: "Output", file: "output.madura.l" },
  { key: "conditions", label: "Kondisi", file: "kondisi.madura.l" },
  { key: "functions", label: "Fungsi", file: "fungsi.madura.l" },
];

export default function SyntaxShowcase() {
  const [active, setActive] = useState<TabKey>("variables");
  const activeIndex = TABS.findIndex((t) => t.key === active);

  function handleKeyDown(e: KeyboardEvent, index: number) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActive(TABS[(index + 1) % TABS.length].key);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActive(TABS[(index - 1 + TABS.length) % TABS.length].key);
    }
  }

  const activeFile = TABS[activeIndex].file;

  return (
    <section id="sintaksis" className="border-b border-border py-16 sm:py-20">
      <div className="mx-auto max-w-shell px-6">
        <p className="mb-3 font-mono text-[13px] text-muted">02 — Sintaksis</p>
        <h2 className="mb-8 text-[1.6rem] font-semibold leading-tight sm:text-[2.2rem]">
          Sintaksis, tanpa kebisingan.
        </h2>

        <div
          role="tablist"
          aria-label="Contoh sintaksis"
          className="mb-6 flex gap-6 overflow-x-auto border-b border-border"
        >
          {TABS.map((tab, index) => (
            <button
              key={tab.key}
              role="tab"
              id={`tab-${tab.key}`}
              aria-selected={active === tab.key}
              aria-controls={`panel-${tab.key}`}
              tabIndex={active === tab.key ? 0 : -1}
              onClick={() => setActive(tab.key)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`whitespace-nowrap border-b-2 pb-2.5 text-[14.5px] transition-colors duration-150 ${
                active === tab.key
                  ? "border-accent text-text"
                  : "border-transparent text-muted hover:text-text"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div role="tabpanel" id={`panel-${active}`} aria-labelledby={`tab-${active}`}>
          <CodeWindow filename={activeFile} className="min-h-[140px]">
            {active === "variables" && (
              <>
                <span className="token-kw">gawe</span> <span className="token-var">nama</span> ={" "}
                <span className="token-str">"Madura"</span>
                {"\n"}
                <span className="token-kw">gawe</span> <span className="token-var">umur</span> ={" "}
                <span className="token-num">16</span>
              </>
            )}
            {active === "output" && (
              <>
                <span className="token-kw">toles</span> <span className="token-str">"Halo Dunia!"</span>
              </>
            )}
            {active === "conditions" && (
              <>
                <span className="token-kw">jika</span> <span className="token-var">umur</span> {">="}{" "}
                <span className="token-num">17</span>
                {"\n    "}
                <span className="token-kw">toles</span> <span className="token-str">"Dewasa"</span>
                {"\n"}
                <span className="token-kw">lain</span>
                {"\n    "}
                <span className="token-kw">toles</span> <span className="token-str">"Belum dewasa"</span>
                {"\n"}
                <span className="token-kw">samporna</span>
              </>
            )}
            {active === "functions" && (
              <>
                <span className="token-kw">fungsi</span> <span className="token-var">tambah</span>(a, b)
                {"\n    "}
                <span className="token-kw">balek</span> a + b
                {"\n"}
                <span className="token-kw">samporna</span>
              </>
            )}
          </CodeWindow>
        </div>

        <p className="mt-4 font-mono text-[12.5px] text-muted">
          Sintaksis prototipe — tata bahasa bisa berubah selama beta.
        </p>
      </div>
    </section>
  );
}
