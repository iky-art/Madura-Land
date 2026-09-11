import { Link } from "react-router-dom";
import DocsShell, { DocSection } from "../components/DocsShell";

export default function Legal() {
  return (
    <DocsShell single sidebar={null}>
      <DocSection id="legal-top">
        <p className="mb-2.5 font-mono text-[13px] text-muted">Legal</p>
        <h1 className="mb-4 text-[2rem] font-semibold leading-tight sm:text-[2.6rem]">
          Legal
        </h1>
        <p className="max-w-[70ch] text-[14.5px] leading-relaxed text-muted">
          Ringkasan lisensi, privasi, dan ketentuan penggunaan untuk proyek
          Madura Land — baik CLI/bahasa pemrogramannya maupun website resmi
          ini.
        </p>
      </DocSection>

      <DocSection id="lisensi">
        <h2 className="mb-3.5 text-[1.3rem] font-semibold">Lisensi</h2>
        <p className="mb-3 max-w-[70ch] text-[15.5px] leading-relaxed">
          Madura Land (bahasa pemrograman, CLI, dan source code website ini)
          dirilis di bawah{" "}
          <span className="rounded border border-border bg-surface px-1.5 py-px font-mono text-accent">
            Lisensi MIT
          </span>
          .
        </p>
        <p className="max-w-[70ch] text-[14.5px] leading-relaxed text-muted">
          Ringkasnya: bebas dipakai, disalin, dimodifikasi, digabung,
          dipublikasikan, dan didistribusikan ulang — termasuk untuk keperluan
          komersial — selama pemberitahuan hak cipta dan lisensi ini tetap
          disertakan. Tidak ada jaminan apa pun atas perangkat lunak ini; lihat
          teks lengkap lisensi di repository GitHub untuk detail hukum
          selengkapnya.
        </p>
      </DocSection>

      <DocSection id="privasi">
        <h2 className="mb-3.5 text-[1.3rem] font-semibold">Kebijakan Privasi</h2>

        <h3 className="mb-2 mt-5 text-[1rem] font-semibold text-text">Website ini</h3>
        <p className="mb-3 max-w-[70ch] text-[15.5px] leading-relaxed">
          Website Madura Land adalah situs statis. Kami tidak memasang
          cookie pelacak, tidak menjalankan analytics pihak ketiga, dan tidak
          mengumpulkan data pribadi apa pun dari pengunjung. Playground di
          halaman utama berjalan sepenuhnya di browser kamu — kode yang kamu
          tulis di sana tidak pernah dikirim ke server mana pun.
        </p>

        <h3 className="mb-2 mt-5 text-[1rem] font-semibold text-text">CLI &amp; interpreter</h3>
        <p className="mb-3 max-w-[70ch] text-[15.5px] leading-relaxed">
          CLI <code className="rounded border border-border bg-surface px-1.5 py-px font-mono text-accent">madura</code>{" "}
          berjalan sepenuhnya lokal di komputer/perangkat kamu. Tidak ada
          telemetry, tidak ada data penggunaan yang dikirim ke mana pun.
        </p>

        <h3 className="mb-2 mt-5 text-[1rem] font-semibold text-text">Layanan pihak ketiga</h3>
        <p className="max-w-[70ch] text-[14.5px] leading-relaxed text-muted">
          Link di website ini mengarah ke layanan pihak ketiga (npm, GitHub,
          Discord, YouTube, TikTok, Instagram) yang masing-masing punya
          kebijakan privasi sendiri di luar kendali kami. Aktivitas kamu di
          platform tersebut mengikuti kebijakan privasi platform yang
          bersangkutan.
        </p>
      </DocSection>

      <DocSection id="ketentuan" last>
        <h2 className="mb-3.5 text-[1.3rem] font-semibold">Ketentuan Penggunaan</h2>
        <ul className="list-disc pl-5">
          {[
            "Madura Land adalah proyek eksperimental. Sintaksis, perilaku, dan fitur bisa berubah kapan saja tanpa pemberitahuan panjang.",
            "Perangkat lunak ini disediakan apa adanya (\"as is\"), tanpa jaminan dalam bentuk apa pun, sesuai ketentuan Lisensi MIT.",
            "Kami tidak bertanggung jawab atas kerugian yang timbul dari penggunaan Madura Land, baik langsung maupun tidak langsung.",
            "Konten yang dibagikan di server Discord atau kanal media sosial resmi tunduk pada aturan komunitas masing-masing platform.",
          ].map((item) => (
            <li key={item} className="mb-1.5 text-[15px] leading-relaxed text-muted">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-5 max-w-[70ch] text-[14.5px] leading-relaxed text-muted">
          Ada pertanyaan soal lisensi atau ketentuan ini? Diskusi paling cepat
          lewat{" "}
          <a
            href="https://discord.gg/SVUrAuZZ2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent"
          >
            Discord
          </a>
          , atau buka issue di{" "}
          <Link to="/kontribusi" className="text-accent">
            halaman Kontribusi
          </Link>
          .
        </p>
      </DocSection>
    </DocsShell>
  );
}
