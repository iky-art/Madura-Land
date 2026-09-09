import { Link } from "react-router-dom";
import DocsShell, { SidebarGroup, DocSection } from "../components/DocsShell";
import CodeWindow from "../components/CodeWindow";

const code = (cls: string, text: string) => (
  <code className={`rounded border border-border bg-surface px-1.5 py-px font-mono ${cls}`}>
    {text}
  </code>
);

export default function Examples() {
  const sidebar = (
    <>
      <SidebarGroup label="Contoh">
        <a href="#halo-dunia" className="border-l-2 border-transparent py-1.5 pl-2.5 text-sm text-muted transition-colors duration-150 hover:border-border hover:text-text">
          Halo Dunia
        </a>
        <a href="#variabel-teks" className="border-l-2 border-transparent py-1.5 pl-2.5 text-sm text-muted transition-colors duration-150 hover:border-border hover:text-text">
          Variabel &amp; Penggabungan
        </a>
        <a href="#kondisi-umur" className="border-l-2 border-transparent py-1.5 pl-2.5 text-sm text-muted transition-colors duration-150 hover:border-border hover:text-text">
          Kondisi Umur
        </a>
        <a href="#fungsi-tambah" className="border-l-2 border-transparent py-1.5 pl-2.5 text-sm text-muted transition-colors duration-150 hover:border-border hover:text-text">
          Fungsi Penjumlahan
        </a>
        <a href="#sapaan-lengkap" className="border-l-2 border-transparent py-1.5 pl-2.5 text-sm text-muted transition-colors duration-150 hover:border-border hover:text-text">
          Sapaan Lengkap
        </a>
      </SidebarGroup>
      <SidebarGroup label="Lainnya">
        <Link to="/docs" className="border-l-2 border-transparent py-1.5 pl-2.5 text-sm text-muted transition-colors duration-150 hover:border-border hover:text-text">
          Dokumentasi
        </Link>
        <Link to="/changelog" className="border-l-2 border-transparent py-1.5 pl-2.5 text-sm text-muted transition-colors duration-150 hover:border-border hover:text-text">
          Changelog
        </Link>
        <Link to="/kontribusi" className="border-l-2 border-transparent py-1.5 pl-2.5 text-sm text-muted transition-colors duration-150 hover:border-border hover:text-text">
          Kontribusi
        </Link>
      </SidebarGroup>
    </>
  );

  return (
    <DocsShell sidebar={sidebar}>
      <DocSection id="halo-dunia">
        <p className="mb-2.5 font-mono text-[13px] text-muted">Contoh · 01</p>
        <h1 className="mb-4 text-[2rem] font-semibold leading-tight sm:text-[2.6rem]">
          Contoh program
        </h1>
        <p className="mb-8 max-w-[70ch] text-[15.5px] leading-relaxed">
          Kumpulan program {code("text-accent", ".madura.l")} singkat untuk membiasakan diri
          dengan sintaksis Madura Land. Contoh yang hanya memakai {code("text-accent", "gawe")} dan{" "}
          {code("text-accent", "toles")} bisa langsung dicoba di{" "}
          <Link to="/#playground" className="text-accent">
            Playground
          </Link>
          .
        </p>
        <h2 className="mb-3.5 text-[1.3rem] font-semibold">Halo Dunia</h2>
        <p className="mb-4 max-w-[70ch] text-[15.5px] leading-relaxed">
          Program paling sederhana — mencetak satu baris teks.
        </p>
        <CodeWindow filename="halo.madura.l">
          <span className="token-kw">toles</span> <span className="token-str">"Halo Dunia!"</span>
        </CodeWindow>
      </DocSection>

      <DocSection id="variabel-teks">
        <h2 className="mb-3.5 text-[1.3rem] font-semibold">Variabel &amp; Penggabungan Teks</h2>
        <p className="mb-4 max-w-[70ch] text-[15.5px] leading-relaxed">
          Mendeklarasikan variabel dengan {code("text-accent", "gawe")}, lalu menggabungkannya
          ke teks lain dengan {code("text-accent", "+")}.
        </p>
        <CodeWindow filename="variabel-teks.madura.l">
          <span className="token-kw">gawe</span> <span className="token-var">nama</span> ={" "}
          <span className="token-str">"Madura Land"</span>
          {"\n\n"}
          <span className="token-kw">toles</span> <span className="token-str">"Halo, "</span> +{" "}
          <span className="token-var">nama</span>
        </CodeWindow>
      </DocSection>

      <DocSection id="kondisi-umur">
        <h2 className="mb-3.5 text-[1.3rem] font-semibold">Kondisi Umur</h2>
        <p className="mb-4 max-w-[70ch] text-[15.5px] leading-relaxed">
          Blok {code("text-accent", "jika")} / {code("text-accent", "lain")} /{" "}
          {code("text-accent", "samporna")} untuk percabangan logika sederhana.
        </p>
        <CodeWindow filename="kondisi-umur.madura.l">
          <span className="token-kw">gawe</span> <span className="token-var">umur</span> ={" "}
          <span className="token-num">20</span>
          {"\n\n"}
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
        <p className="mt-4 max-w-[70ch] text-[14.5px] leading-relaxed text-muted">
          Catatan: playground di browser saat ini baru mengeksekusi{" "}
          {code("text-accent", "gawe")} dan {code("text-accent", "toles")} — contoh dengan{" "}
          {code("text-accent", "jika")}/{code("text-accent", "fungsi")} mencerminkan sintaksis
          basa, bukan hasil eksekusi di prototipe browser.
        </p>
      </DocSection>

      <DocSection id="fungsi-tambah">
        <h2 className="mb-3.5 text-[1.3rem] font-semibold">Fungsi Penjumlahan</h2>
        <p className="mb-4 max-w-[70ch] text-[15.5px] leading-relaxed">
          Fungsi dideklarasikan dengan {code("text-accent", "fungsi")} dan mengembalikan
          nilai dengan {code("text-accent", "balek")}.
        </p>
        <CodeWindow filename="fungsi-tambah.madura.l">
          <span className="token-kw">fungsi</span> <span className="token-var">tambah</span>(a, b)
          {"\n    "}
          <span className="token-kw">balek</span> a + b
          {"\n"}
          <span className="token-kw">samporna</span>
        </CodeWindow>
      </DocSection>

      <DocSection id="sapaan-lengkap" last>
        <h2 className="mb-3.5 text-[1.3rem] font-semibold">Sapaan Lengkap</h2>
        <p className="mb-4 max-w-[70ch] text-[15.5px] leading-relaxed">
          Menggabungkan lebih dari dua bagian teks dan variabel dalam satu
          baris {code("text-accent", "toles")}.
        </p>
        <CodeWindow filename="sapaan.madura.l">
          <span className="token-kw">gawe</span> <span className="token-var">nama</span> ={" "}
          <span className="token-str">"Bindara"</span>
          {"\n"}
          <span className="token-kw">gawe</span> <span className="token-var">kota</span> ={" "}
          <span className="token-str">"Sumenep"</span>
          {"\n\n"}
          <span className="token-kw">toles</span> <span className="token-str">"Halo, "</span> +{" "}
          <span className="token-var">nama</span> + <span className="token-str">" dari "</span> +{" "}
          <span className="token-var">kota</span>
        </CodeWindow>
      </DocSection>
    </DocsShell>
  );
}
