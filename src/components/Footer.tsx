import { Link } from "react-router-dom";
import Logo from "./Logo";

function FooterHeading({ children }: { children: string }) {
  return (
    <p className="mb-3 font-mono text-[11px] uppercase tracking-wide text-muted">
      {children}
    </p>
  );
}

const linkClass = "text-sm text-muted transition-colors hover:text-text";

export default function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto max-w-shell px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link to="/">
              <Logo iconSize={26} />
            </Link>
            <p className="mt-2.5 max-w-[30ch] text-sm text-muted">
              Basa program berjiwa Madura.
            </p>
          </div>

          <nav aria-label="Navigasi footer">
            <FooterHeading>Navigasi</FooterHeading>
            <ul className="flex flex-col gap-2.5">
              <li><Link to="/docs" className={linkClass}>Dokumentasi</Link></li>
              <li><Link to="/examples" className={linkClass}>Contoh</Link></li>
              <li><Link to="/#playground" className={linkClass}>Playground</Link></li>
              <li><Link to="/#release" className={linkClass}>Unduh</Link></li>
            </ul>
          </nav>

          <nav aria-label="Komunitas">
            <FooterHeading>Komunitas</FooterHeading>
            <ul className="flex flex-col gap-2.5">
              <li><Link to="/changelog" className={linkClass}>Changelog</Link></li>
              <li><Link to="/kontribusi" className={linkClass}>Kontribusi</Link></li>
              <li><Link to="/sosial" className={linkClass}>Sosial Media</Link></li>
              <li>
                <a href="https://discord.gg/SVUrAuZZ2" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Discord
                </a>
              </li>
              <li>
                <a href="https://github.com/iky-art/madura-land-lang" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  GitHub
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Legal">
            <FooterHeading>Legal</FooterHeading>
            <ul className="flex flex-col gap-2.5">
              <li><Link to="/legal#lisensi" className={linkClass}>Lisensi (MIT)</Link></li>
              <li><Link to="/legal#privasi" className={linkClass}>Kebijakan Privasi</Link></li>
              <li><Link to="/legal#ketentuan" className={linkClass}>Ketentuan Penggunaan</Link></li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] text-muted">© 2026 Proyek Madura Land</p>
          <span className="rounded-[3px] border border-border px-2 py-1 font-mono text-xs text-muted">
            v1.2.1
          </span>
        </div>
      </div>
    </footer>
  );
}
