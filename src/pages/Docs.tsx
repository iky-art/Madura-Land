import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import DocsShell, { SidebarGroup, DocSection } from "../components/DocsShell";
import CodeWindow from "../components/CodeWindow";

interface NavItem {
  id: string;
  label: string;
  keywords: string;
}

const START: NavItem[] = [
  { id: "pendahuluan", label: "Pendahuluan", keywords: "pengantar intro" },
  { id: "instalasi", label: "Instalasi", keywords: "install cli setup" },
  { id: "struktur", label: "Struktur program", keywords: "file entry point" },
];

const SYNTAX: NavItem[] = [
  { id: "variabel", label: "Variabel", keywords: "gawe assign" },
  { id: "output", label: "Output", keywords: "toles print cetak" },
  { id: "kondisi", label: "Kondisi", keywords: "jika lain samporna if else" },
  { id: "fungsi", label: "Fungsi", keywords: "fungsi balek function return" },
  { id: "komentar", label: "Komentar", keywords: "comment hash" },
];

const REFERENCE: NavItem[] = [
  { id: "cli", label: "CLI madura", keywords: "command line terminal" },
  { id: "status", label: "Status & roadmap", keywords: "beta roadmap rencana" },
];

const ALL_GROUPS = [
  { label: "Mulai", items: START },
  { label: "Sintaksis", items: SYNTAX },
  { label: "Referensi", items: REFERENCE },
];

export default function Docs() {
  const [query, setQuery] = useState("");

  const filteredGroups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL_GROUPS;
    return ALL_GROUPS.map((group) => ({
      ...group,
      items: group.items.filter(
        (item) =>
          item.label.toLowerCase().includes(q) || item.keywords.includes(q)
      ),
    })).filter((group) => group.items.length > 0);
  }, [query]);

  const sidebar = (
    <>
      <div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari dokumentasi…"
          aria-label="Cari dokumentasi"
          className="w-full rounded border border-border bg-surface px-2.5 py-2 text-[13.5px] text-text placeholder:text-muted focus-visible:border-accent focus-visible:outline-none"
        />
      </div>
      {filteredGroups.map((group) => (
        <SidebarGroup key={group.label} label={group.label}>
          {group.items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="border-l-2 border-transparent py-1.5 pl-2.5 text-sm text-muted transition-colors duration-150 hover:border-border hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </SidebarGroup>
      ))}
      <SidebarGroup label="Lainnya">
        <Link
          to="/examples"
          className="border-l-2 border-transparent py-1.5 pl-2.5 text-sm text-muted transition-colors duration-150 hover:border-border hover:text-text"
        >
          Contoh program
        </Link>
        <Link
          to="/changelog"
          className="border-l-2 border-transparent py-1.5 pl-2.5 text-sm text-muted transition-colors duration-150 hover:border-border hover:text-text"
        >
          Changelog
        </Link>
        <Link
          to="/kontribusi"
          className="border-l-2 border-transparent py-1.5 pl-2.5 text-sm text-muted transition-colors duration-150 hover:border-border hover:text-text"
        >
          Kontribusi
        </Link>
        <Link
          to="/sosial"
          className="border-l-2 border-transparent py-1.5 pl-2.5 text-sm text-muted transition-colors duration-150 hover:border-border hover:text-text"
        >
          Sosial Media
        </Link>
      </SidebarGroup>
    </>
  );

  return (
    <DocsShell sidebar={sidebar}>
      <DocSection id="pendahuluan">
        <p className="mb-2.5 font-mono text-[13px] text-muted">Dokumentasi · v1.2.0</p>
        <h1 className="mb-4 text-[2rem] font-semibold leading-tight sm:text-[2.6rem]">
          Pendahuluan
        </h1>
        <p className="mb-4 max-w-[70ch] text-[15.5px] leading-relaxed">
          Madura Land adalah basa pemrograman eksperimental yang sintaksisnya
          terinspirasi dari Basa Madura. Dokumen ini menjelaskan dasar-dasar
          penulisan program <code className="rounded border border-border bg-surface px-1.5 py-px font-mono text-accent">.madura.l</code>, dari variabel sampai fungsi.
        </p>
        <p className="max-w-[70ch] text-[14.5px] leading-relaxed text-muted">
          Sintaksis inti sudah stabil sejak v1.0.0, dan sekarang berada di{" "}
          v1.2.0 dengan tambahan perulangan, larik, dan fungsi bawaan. Runtime dan tooling di
          sekitarnya masih terus dikembangkan. Dokumentasi ini akan mengikuti
          setiap perubahan tersebut.
        </p>
      </DocSection>

      <DocSection id="instalasi">
        <h2 className="mb-3.5 text-[1.4rem] font-semibold">Instalasi</h2>
        <p className="mb-4 max-w-[70ch] text-[15.5px] leading-relaxed">
          Madura Land tersedia resmi di npm. Install CLI <code className="rounded border border-border bg-surface px-1.5 py-px font-mono text-accent">madura</code> secara global untuk menjalankan file <code className="rounded border border-border bg-surface px-1.5 py-px font-mono text-accent">.madura.l</code> langsung dari terminal.
        </p>
        <CodeWindow filename="terminal">
          <span className="token-comment"># Install global</span>
          {"\n"}
          <span className="token-prompt">$</span> npm install -g madura-land{"\n\n"}
          <span className="token-comment"># Verifikasi versi CLI</span>
          {"\n"}
          <span className="token-prompt">$</span> madura --version{"\n\n"}
          madura 1.2.0
        </CodeWindow>
      </DocSection>

      <DocSection id="struktur">
        <h2 className="mb-3.5 text-[1.4rem] font-semibold">Struktur program</h2>
        <p className="mb-4 max-w-[70ch] text-[15.5px] leading-relaxed">
          Satu file <code className="rounded border border-border bg-surface px-1.5 py-px font-mono text-accent">.madura.l</code> berisi baris pernyataan yang dijalankan
          berurutan dari atas ke bawah. Tidak ada blok wajib seperti{" "}
          <code className="rounded border border-border bg-surface px-1.5 py-px font-mono text-accent">main()</code> — setiap file adalah titik masuknya sendiri.
        </p>
        <CodeWindow filename="hello.madura.l">
          <span className="token-kw">gawe</span> <span className="token-var">nama</span> ={" "}
          <span className="token-str">"Madura Land"</span>
          {"\n\n"}
          <span className="token-kw">toles</span> <span className="token-str">"Halo, "</span> +{" "}
          <span className="token-var">nama</span>
        </CodeWindow>
      </DocSection>

      <DocSection id="variabel">
        <h2 className="mb-3.5 text-[1.4rem] font-semibold">Variabel</h2>
        <p className="mb-4 max-w-[70ch] text-[15.5px] leading-relaxed">
          Kata kunci <code className="rounded border border-border bg-surface px-1.5 py-px font-mono text-accent">gawe</code> mendeklarasikan sebuah variabel. Nilainya bisa
          berupa teks (dalam tanda kutip) atau angka.
        </p>
        <CodeWindow filename="variabel.madura.l">
          <span className="token-kw">gawe</span> <span className="token-var">nama</span> ={" "}
          <span className="token-str">"Madura"</span>
          {"\n"}
          <span className="token-kw">gawe</span> <span className="token-var">umur</span> ={" "}
          <span className="token-num">16</span>
        </CodeWindow>
        <p className="mt-4 max-w-[70ch] text-[14.5px] leading-relaxed text-muted">
          Interpreter prototipe saat ini belum mendukung tipe data eksplisit —
          tipe disimpulkan dari nilai yang ditulis.
        </p>
      </DocSection>

      <DocSection id="output">
        <h2 className="mb-3.5 text-[1.4rem] font-semibold">Output</h2>
        <p className="mb-4 max-w-[70ch] text-[15.5px] leading-relaxed">
          Kata kunci <code className="rounded border border-border bg-surface px-1.5 py-px font-mono text-accent">toles</code> mencetak nilai ke keluaran standar. Gunakan{" "}
          <code className="rounded border border-border bg-surface px-1.5 py-px font-mono text-accent">+</code> untuk menggabungkan teks dan variabel.
        </p>
        <CodeWindow filename="output.madura.l">
          <span className="token-kw">toles</span> <span className="token-str">"Halo Dunia!"</span>
        </CodeWindow>
      </DocSection>

      <DocSection id="kondisi">
        <h2 className="mb-3.5 text-[1.4rem] font-semibold">Kondisi</h2>
        <p className="mb-4 max-w-[70ch] text-[15.5px] leading-relaxed">
          Blok kondisi dimulai dengan <code className="rounded border border-border bg-surface px-1.5 py-px font-mono text-accent">jika</code>, opsional diikuti{" "}
          <code className="rounded border border-border bg-surface px-1.5 py-px font-mono text-accent">lain</code>, dan selalu ditutup dengan{" "}
          <code className="rounded border border-border bg-surface px-1.5 py-px font-mono text-accent">samporna</code>.
        </p>
        <CodeWindow filename="kondisi.madura.l">
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
        </CodeWindow>
      </DocSection>

      <DocSection id="fungsi">
        <h2 className="mb-3.5 text-[1.4rem] font-semibold">Fungsi</h2>
        <p className="mb-4 max-w-[70ch] text-[15.5px] leading-relaxed">
          Fungsi dideklarasikan dengan <code className="rounded border border-border bg-surface px-1.5 py-px font-mono text-accent">fungsi</code>, mengembalikan nilai
          dengan <code className="rounded border border-border bg-surface px-1.5 py-px font-mono text-accent">balek</code>, dan ditutup dengan{" "}
          <code className="rounded border border-border bg-surface px-1.5 py-px font-mono text-accent">samporna</code>.
        </p>
        <CodeWindow filename="fungsi.madura.l">
          <span className="token-kw">fungsi</span> <span className="token-var">tambah</span>(a, b)
          {"\n    "}
          <span className="token-kw">balek</span> a + b
          {"\n"}
          <span className="token-kw">samporna</span>
        </CodeWindow>
      </DocSection>

      <DocSection id="komentar">
        <h2 className="mb-3.5 text-[1.4rem] font-semibold">Komentar</h2>
        <p className="mb-4 max-w-[70ch] text-[15.5px] leading-relaxed">
          Baris yang diawali dengan <code className="rounded border border-border bg-surface px-1.5 py-px font-mono text-accent">#</code> diabaikan oleh interpreter.
        </p>
        <CodeWindow filename="komentar.madura.l">
          <span className="token-comment"># Ini adalah komentar</span>
          {"\n"}
          <span className="token-kw">toles</span> <span className="token-str">"Baris ini yang dijalankan"</span>
        </CodeWindow>
      </DocSection>

      <DocSection id="cli">
        <h2 className="mb-3.5 text-[1.4rem] font-semibold">CLI madura</h2>
        <p className="mb-4 max-w-[70ch] text-[15.5px] leading-relaxed">
          Perintah dasar yang tersedia di CLI prototipe.
        </p>
        <CodeWindow filename="terminal">
          <span className="token-comment"># Menjalankan sebuah file .madura.l</span>
          {"\n"}
          <span className="token-prompt">$</span> madura hello.madura.l{"\n\n"}
          <span className="token-comment"># Menampilkan versi CLI</span>
          {"\n"}
          <span className="token-prompt">$</span> madura --version{"\n\n"}
          <span className="token-comment"># Menampilkan bantuan</span>
          {"\n"}
          <span className="token-prompt">$</span> madura --help
        </CodeWindow>
      </DocSection>

      <DocSection id="status" last>
        <h2 className="mb-3.5 text-[1.4rem] font-semibold">Status &amp; roadmap</h2>
        <p className="mb-5 max-w-[70ch] text-[15.5px] leading-relaxed">
          Madura Land sudah memasuki rilis v1.2.0, published resmi di npm. Berikut ringkasan status
          saat ini.
        </p>
        <dl className="grid gap-5 sm:grid-cols-3">
          {[
            { label: "Sintaksis inti", value: "Stabil" },
            { label: "CLI resmi", value: "Tersedia di npm" },
            { label: "Standard library", value: "Dasar (7 fungsi bawaan)" },
          ].map((item) => (
            <div key={item.label}>
              <dt className="mb-2 font-mono text-[11.5px] uppercase tracking-wide text-muted">
                {item.label}
              </dt>
              <dd className="text-[15.5px] font-medium">{item.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 max-w-[70ch] text-[14.5px] leading-relaxed text-muted">
          Ikuti perkembangan proyek melalui GitHub — perubahan sintaksis akan
          selalu dicatat sebelum dirilis.
        </p>
      </DocSection>
    </DocsShell>
  );
}
