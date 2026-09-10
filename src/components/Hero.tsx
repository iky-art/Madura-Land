import Button from "./Button";
import CodeWindow from "./CodeWindow";
import OutputPanel from "./OutputPanel";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      {/* subtle warm glow, evoking the sunset-over-Suramadu mood from the brand banner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 h-[480px] w-[480px] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(230,51,43,0.9) 0%, rgba(230,51,43,0) 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-shell gap-12 px-6 py-16 md:grid-cols-[1fr_460px] md:items-center md:py-20">
        <div>
          <Logo iconSize={64} showWordmark={false} className="mb-5" />
          <h1 className="mb-1 font-mono text-[1.9rem] font-bold leading-tight tracking-tight sm:text-[2.6rem]">
            <span className="text-text">MADURA</span>{" "}
            <span className="text-accent">LAND</span>
          </h1>
          <p className="mb-6 text-lg text-muted">Programming with Madurese soul.</p>

          <p className="mb-8 max-w-[46ch] text-[17px] leading-relaxed text-text/90">
            Bahasa pemrograman dengan identitas Madura. Sederhana, ekspresif, dan
            penuh makna.
          </p>

          <div className="mb-10 flex flex-wrap gap-3">
            <Button to="/#playground" variant="primary">
              Mulai Belajar →
            </Button>
            <Button to="/docs" variant="secondary">
              <svg
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 3.2c1.4-.6 3-.7 4.3 0v9.6c-1.3-.7-2.9-.6-4.3 0V3.2Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.5 3.2c-1.4-.6-3-.7-4.3 0v9.6c1.3-.7 2.9-.6 4.3 0V3.2Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              </svg>
              Dokumentasi
            </Button>
            <Button href="https://discord.gg/SVUrAuZZ2" variant="ghost" external>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M13.5 3.8c-1-.5-2.1-.8-3.2-1l-.16.3c1 .25 1.95.63 2.83 1.14a10.9 10.9 0 0 0-9.9 0 8.3 8.3 0 0 1 2.86-1.15l-.16-.3c-1.12.18-2.2.5-3.2 1C1 6.9.5 10 .7 13c1.16.86 2.44 1.5 3.8 1.9l.5-.68a7.9 7.9 0 0 1-1.24-.6l.27-.2a9.6 9.6 0 0 0 7.9 0l.28.2c-.4.24-.82.44-1.25.6l.5.68c1.37-.4 2.65-1.04 3.8-1.9.28-3.44-.6-6.5-2.27-9.2ZM5.78 11.1c-.68 0-1.23-.63-1.23-1.4 0-.78.54-1.4 1.23-1.4.68 0 1.24.63 1.23 1.4 0 .77-.55 1.4-1.23 1.4Zm4.44 0c-.68 0-1.23-.63-1.23-1.4 0-.78.54-1.4 1.23-1.4.68 0 1.23.63 1.23 1.4 0 .77-.55 1.4-1.23 1.4Z" />
              </svg>
              Discord
            </Button>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-muted">
            <span className="h-px w-6 bg-border" />
            <span>v1.2.0</span>
            <span className="h-px w-6 bg-border" />
            <span className="text-[11px] uppercase tracking-wide">
              Open source / made with Madura
            </span>
          </div>
        </div>

        <div className="grid gap-4">
          <CodeWindow filename="hello.madura.l">
            <span className="token-kw">gawe</span> <span className="token-var">nama</span> ={" "}
            <span className="token-str">"Madura Land"</span>
            {"\n"}
            <span className="token-kw">toles</span>{" "}
            <span className="token-str">"Halo, "</span> + <span className="token-var">nama</span>
            {"\n"}
            <span className="token-kw">toles</span>{" "}
            <span className="token-str">"Selamat datang!"</span>
          </CodeWindow>

          <OutputPanel lines={["Halo, Madura Land", "Selamat datang!"]} />
        </div>
      </div>
    </section>
  );
}
