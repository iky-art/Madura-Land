import DocsShell, { DocSection } from "../components/DocsShell";

export default function Changelog() {
  return (
    <DocsShell single sidebar={null}>
      <DocSection id="changelog-top">
        <p className="mb-2.5 font-mono text-[13px] text-muted">Changelog</p>
        <h1 className="mb-4 text-[2rem] font-semibold leading-tight sm:text-[2.6rem]">
          Riwayat perubahan
        </h1>
        <p className="max-w-[70ch] text-[14.5px] leading-relaxed text-muted">
          Semua perubahan penting pada Madura Land dicatat di sini, dimulai
          dari rilis beta publik pertama.
        </p>
      </DocSection>

      <DocSection id="v1-0-0">
        <div className="mb-1.5 flex flex-wrap items-baseline gap-3.5">
          <h2 className="text-[1.3rem] font-semibold">v1.0.0</h2>
          <span className="font-mono text-[13px] text-muted">2026</span>
        </div>
        <p className="mb-4 text-[14.5px] text-muted">
          Rilis stabil pertama Madura Land — pindah dari prototipe HTML/CSS/JS
          statis ke Vite + React + TypeScript + Tailwind CSS.
        </p>

        <p className="mb-1.5">
          <span className="rounded border border-accent-dark px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-accent">
            Ditambahkan
          </span>
        </p>
        <ul className="mb-6 list-disc pl-5">
          {[
            "Identitas visual baru: logo, palet merah-hitam, dan tipografi mono untuk wordmark",
            "Website dibangun ulang dengan Vite + React + TypeScript + Tailwind CSS",
            "Navigasi berbasis React Router untuk Docs, Contoh, Changelog, dan Kontribusi",
          ].map((item) => (
            <li key={item} className="mb-1.5 text-[15px] leading-relaxed text-muted">
              {item}
            </li>
          ))}
        </ul>

        <p className="mb-1.5">
          <span className="rounded border border-border px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-muted">
            Diubah
          </span>
        </p>
        <ul className="list-disc pl-5">
          {[
            "Status rilis dari v0.1.0 Beta menjadi v1.0.0",
            "Playground di-porting ke TypeScript dengan overlay syntax highlighting yang sama",
          ].map((item) => (
            <li key={item} className="mb-1.5 text-[15px] leading-relaxed text-muted">
              {item}
            </li>
          ))}
        </ul>
      </DocSection>

      <DocSection id="v0-1-0-beta" last>
        <div className="mb-1.5 flex flex-wrap items-baseline gap-3.5">
          <h2 className="text-[1.3rem] font-semibold">v0.1.0 Beta</h2>
          <span className="font-mono text-[13px] text-muted">2026</span>
        </div>
        <p className="mb-4 text-[14.5px] text-muted">
          Rilis beta publik pertama Madura Land.
        </p>

        <p className="mb-1.5">
          <span className="rounded border border-accent-dark px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-accent">
            Ditambahkan
          </span>
        </p>
        <ul className="list-disc pl-5">
          {[
            "Sintaksis inti prototipe: gawe, toles, jika / lain / samporna, fungsi / balek",
            "Ekstensi file resmi .madura.l",
            "Playground interaktif di browser dengan interpreter prototipe",
            "Halaman dokumentasi, contoh program, dan panduan kontribusi",
          ].map((item) => (
            <li key={item} className="mb-1.5 text-[15px] leading-relaxed text-muted">
              {item}
            </li>
          ))}
        </ul>
      </DocSection>
    </DocsShell>
  );
}
