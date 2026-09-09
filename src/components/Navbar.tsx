import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

interface NavLink {
  label: string;
  to: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Docs", to: "/docs" },
  { label: "Playground", to: "/#playground" },
  { label: "Download", to: "/#release" },
];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  function isActive(to: string) {
    if (to === "/") return location.pathname === "/" && !location.hash;
    if (to.startsWith("/#")) return location.pathname === "/" && location.hash === to.slice(1);
    return location.pathname === to;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-[64px] max-w-shell items-center justify-between gap-6 px-6">
        <Link to="/" aria-label="Beranda Madura Land">
          <Logo />
        </Link>

        <nav aria-label="Navigasi utama" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={`border-b-2 pb-1 pt-1 text-sm transition-colors duration-150 ${
                    isActive(link.to)
                      ? "border-accent text-text"
                      : "border-transparent text-muted hover:text-text"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-2 border-transparent pb-1 pt-1 text-sm text-muted transition-colors duration-150 hover:text-text"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex items-center p-1.5 text-text md:hidden"
          aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 h-[1.6px] w-full bg-current transition-all duration-200 ${
                open ? "top-[7px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[1.6px] w-full bg-current transition-opacity duration-150 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-[1.6px] w-full bg-current transition-all duration-200 ${
                open ? "top-[7px] -rotate-45" : "top-[14px]"
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Navigasi mobile"
          className="border-t border-border px-6 pb-5 pt-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="border-b border-border">
                <Link to={link.to} className="block py-2.5 text-[15px] text-text">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2.5 text-[15px] text-text"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
