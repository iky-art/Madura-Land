import DocsShell, { DocSection } from "../components/DocsShell";
import CodeWindow from "../components/CodeWindow";

export default function Kontribusi() {
  return (
    <DocsShell single sidebar={null}>
      <DocSection id="sebelum-mulai">
        <p className="mb-2.5 font-mono text-[13px] text-muted">Kontribusi</p>
        <h1 className="mb-4 text-[2rem] font-semibold leading-tight sm:text-[2.6rem]">
          Cara berkontribusi
        </h1>
        <p className="mb-3 max-w-[70ch] text-[15.5px] leading-relaxed">
          Madura Land baru saja masuk v1.0.0, dan masih banyak bagian yang
          terbuka untuk berubah. Kontribusi dalam bentuk apa pun — laporan
          bug, diskusi sintaksis, atau perbaikan dokumentasi — sangat
          membantu.
        </p>
        <p className="max-w-[70ch] text-[14.5px] leading-relaxed text-muted">
          Karena proyek ini masih berkembang, tidak ada jaminan setiap usulan
          akan diterima. Tapi setiap diskusi dibaca dan dipertimbangkan.
        </p>
      </DocSection>

      <DocSection id="laporkan-bug">
        <h2 className="mb-3.5 text-[1.3rem] font-semibold">Melaporkan bug</h2>
        <p className="mb-3 max-w-[70ch] text-[15.5px] leading-relaxed">
          Sebelum membuka issue baru, periksa dulu apakah masalah yang sama
          sudah pernah dilaporkan. Saat melaporkan, sertakan:
        </p>
        <ul className="list-disc pl-5">
          {[
            "Potongan kode .madura.l yang memicu masalah",
            "Perilaku yang diharapkan vs. yang benar-benar terjadi",
            "Versi CLI, browser, atau Node.js yang digunakan",
          ].map((item) => (
            <li key={item} className="mb-1.5 text-[15px] leading-relaxed text-muted">
              {item}
            </li>
          ))}
        </ul>
      </DocSection>

      <DocSection id="usulkan-sintaksis">
        <h2 className="mb-3.5 text-[1.3rem] font-semibold">
          Mengusulkan perubahan sintaksis
        </h2>
        <p className="max-w-[70ch] text-[15.5px] leading-relaxed">
          Karena sintaksis Madura Land masih terus dievaluasi, perubahan kata
          kunci atau tata bahasa perlu didiskusikan lebih dulu lewat issue
          sebelum diimplementasikan lewat Pull Request. Jelaskan alasan
          perubahan dan contoh kode sebelum/sesudahnya.
        </p>
      </DocSection>

      <DocSection id="alur-pr">
        <h2 className="mb-3.5 text-[1.3rem] font-semibold">Alur kerja Pull Request</h2>
        <CodeWindow filename="terminal">
          <span className="token-comment"># 1. Fork &amp; clone repository</span>
          {"\n"}
          <span className="token-prompt">$</span> git clone https://github.com/&lt;kamu&gt;/madura-land.git
          {"\n\n"}
          <span className="token-comment"># 2. Install dependencies</span>
          {"\n"}
          <span className="token-prompt">$</span> npm install
          {"\n\n"}
          <span className="token-comment"># 3. Jalankan dev server</span>
          {"\n"}
          <span className="token-prompt">$</span> npm run dev
          {"\n\n"}
          <span className="token-comment"># 4. Buat branch, commit &amp; push</span>
          {"\n"}
          <span className="token-prompt">$</span> git checkout -b perbaikan/nama-perubahan
          {"\n"}
          <span className="token-prompt">$</span> git commit -m "Jelaskan perubahan singkat"
          {"\n"}
          <span className="token-prompt">$</span> git push origin perbaikan/nama-perubahan
          {"\n\n"}
          <span className="token-comment"># 5. Buka Pull Request ke branch utama</span>
        </CodeWindow>
        <p className="mt-4 max-w-[70ch] text-[14.5px] leading-relaxed text-muted">
          Jelaskan dengan singkat apa yang berubah dan kenapa di deskripsi
          Pull Request.
        </p>
      </DocSection>

      <DocSection id="kode-etik" last>
        <h2 className="mb-3.5 text-[1.3rem] font-semibold">Kode etik singkat</h2>
        <p className="max-w-[70ch] text-[15.5px] leading-relaxed">
          Bersikap hormat, terbuka terhadap masukan, dan sabar — ini proyek
          yang dikerjakan bertahap, bukan produk yang sudah selesai. Diskusi
          yang membangun selalu lebih diutamakan daripada perdebatan panjang
          tanpa arah.
        </p>
      </DocSection>
    </DocsShell>
  );
}
