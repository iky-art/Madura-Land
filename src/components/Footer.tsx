import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-shell flex-col flex-wrap items-start justify-between gap-8 px-6 sm:flex-row">
        <div>
          <Link to="/">
            <Logo iconSize={26} />
          </Link>
          <p className="mt-2.5 max-w-[34ch] text-sm text-muted">
            Basa program berjiwa Madura.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2.5">
          <Link to="/docs" className="text-sm text-muted transition-colors hover:text-text">
            Dokumentasi
          </Link>
          <Link to="/examples" className="text-sm text-muted transition-colors hover:text-text">
            Contoh
          </Link>
          <Link to="/#playground" className="text-sm text-muted transition-colors hover:text-text">
            Playground
          </Link>
          <Link to="/#release" className="text-sm text-muted transition-colors hover:text-text">
            Unduh
          </Link>
          <Link to="/changelog" className="text-sm text-muted transition-colors hover:text-text">
            Changelog
          </Link>
          <Link to="/kontribusi" className="text-sm text-muted transition-colors hover:text-text">
            Kontribusi
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-text"
          >
            GitHub
          </a>
        </nav>

        <div className="flex flex-col items-start gap-3">
          <span className="rounded-[3px] border border-border px-2 py-1 font-mono text-xs text-muted">
            v1.0.0
          </span>
          <p className="text-[12.5px] text-muted">© 2026 Proyek Madura Land</p>
        </div>
      </div>
    </footer>
  );
}
