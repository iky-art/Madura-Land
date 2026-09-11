import { Link } from "react-router-dom";
import SplashScreen from "../components/SplashScreen";
import Hero from "../components/Hero";
import SyntaxShowcase from "../components/SyntaxShowcase";
import PlaygroundSection from "../components/PlaygroundSection";
import CodeWindow from "../components/CodeWindow";
import Button from "../components/Button";

const QUICKSTART_COPY = `$ mkdir hello
$ cd hello
$ nano hello.madura.l

# hello.madura.l
gawe nama = "Madura Land"
toles "Halo, " + nama

$ madura hello.madura.l

Halo, Madura Land`;

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Hero />

      {/* INTRO */}
      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-shell px-6">
          <p className="mb-3 font-mono text-[13px] text-muted">01 — Tentang proyek</p>
          <h2 className="mb-4 text-[1.6rem] font-semibold leading-tight sm:text-[2.2rem]">
            Dibangun dari sintaksis yang berbeda.
          </h2>
          <p className="mb-3 max-w-[62ch] text-[19px] leading-relaxed">
            Madura Land mengeksplorasi rasanya memprogram ketika sintaksisnya
            membawa karakter basa daerah.
          </p>
          <p className="max-w-[58ch] text-[15.5px] leading-relaxed text-muted">
            Ini adalah proyek eksperimental, dan tata bahasanya masih terus
            berkembang. Tidak ada yang disajikan sebagai basa yang sudah jadi
            di sini — dibangun satu kata kunci demi satu kata kunci.
          </p>
        </div>
      </section>

      <SyntaxShowcase />

      {/* WHY */}
      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-shell px-6">
          <h2 className="mb-10 text-[1.6rem] font-semibold leading-tight sm:text-[2.2rem]">
            Kenapa Madura Land?
          </h2>
          <div className="grid gap-7 sm:grid-cols-3">
            {[
              {
                title: "Akrab",
                body: "Sintaksis dirancang untuk mudah dibaca, sehingga logika di baliknya tetap mudah diikuti.",
              },
              {
                title: "Khas",
                body: "Basa pemrograman yang membawa identitas basa daerah, bukan sekadar terjemahan.",
              },
              {
                title: "Eksperimental",
                body: "Dibangun untuk bereksperimen dengan hubungan antara basa manusia dan basa pemrograman.",
              },
            ].map((item, i) => (
              <article
                key={item.title}
                className={`px-0 sm:px-7 ${i !== 0 ? "sm:border-l sm:border-border" : ""}`}
              >
                <h3 className="mb-2.5 text-[17px] font-semibold">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK START */}
      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-shell px-6">
          <p className="mb-3 font-mono text-[13px] text-muted">03 — Mulai cepat</p>
          <h2 className="mb-8 text-[1.6rem] font-semibold leading-tight sm:text-[2.2rem]">
            Mulai dari satu file .madura.l.
          </h2>
          <CodeWindow filename="terminal" copyText={QUICKSTART_COPY}>
            <span className="token-prompt">$</span> mkdir hello{"\n"}
            <span className="token-prompt">$</span> cd hello{"\n"}
            <span className="token-prompt">$</span> nano hello.madura.l{"\n\n"}
            <span className="token-comment"># hello.madura.l</span>
            {"\n"}
            <span className="token-kw">gawe</span> <span className="token-var">nama</span> ={" "}
            <span className="token-str">"Madura Land"</span>
            {"\n"}
            <span className="token-kw">toles</span> <span className="token-str">"Halo, "</span> +{" "}
            <span className="token-var">nama</span>
            {"\n\n"}
            <span className="token-prompt">$</span> madura hello.madura.l{"\n\n"}
            Halo, Madura Land
          </CodeWindow>
        </div>
      </section>

      <PlaygroundSection />

      {/* DOC CTA */}
      <section className="border-b border-border py-16 sm:py-[76px]">
        <div className="mx-auto max-w-shell px-6">
          <h2 className="mb-3.5 text-[1.6rem] font-semibold leading-tight sm:text-[2.2rem]">
            Pelajari basanya.
          </h2>
          <p className="mb-5 max-w-[50ch] text-base text-muted">
            Mulai dari dasar, jelajahi sintaksisnya, dan lihat ke mana Madura
            Land akan melangkah.
          </p>
          <Link
            to="/docs"
            className="border-b border-transparent text-[15px] font-medium text-accent transition-colors duration-150 hover:border-accent"
          >
            Baca dokumentasi →
          </Link>
        </div>
      </section>

      {/* RELEASE */}
      <section id="release" className="py-16 sm:py-20">
        <div className="mx-auto max-w-shell px-6">
          <p className="mb-3 font-mono text-[13px] text-muted">05 — Rilis</p>
          <h2 className="mb-3.5 text-[1.6rem] font-semibold leading-tight sm:text-[2.2rem]">
            v1.2.1
          </h2>
          <p className="mb-9 text-base text-muted">
            Madura Land sudah published resmi di npm — siapa pun bisa install.
          </p>

          <CodeWindow filename="terminal" className="mb-8">
            <span className="token-prompt">$</span> npm install -g madura-land
            {"\n"}
            <span className="token-prompt">$</span> madura hello.madura.l
          </CodeWindow>

          <dl className="mb-8 grid gap-5 border-t border-border pt-7 sm:grid-cols-3">
            {[
              { label: "Status", value: "Stabil" },
              { label: "Ekstensi file", value: ".madura.l" },
              { label: "Runtime", value: "CLI resmi (npm) + REPL" },
            ].map((item) => (
              <div key={item.label}>
                <dt className="mb-2 font-mono text-[11.5px] uppercase tracking-wide text-muted">
                  {item.label}
                </dt>
                <dd className="text-[15.5px] font-medium">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap gap-3">
            <Button href="https://www.npmjs.com/package/madura-land" variant="primary" external>
              Lihat di npm
            </Button>
            <Button href="https://github.com/iky-art/madura-land-lang" variant="secondary" external>
              Lihat di GitHub
            </Button>
            <Button href="https://discord.gg/SVUrAuZZ2" variant="ghost" external>
              Join Discord
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
