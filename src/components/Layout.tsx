import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="fixed left-3 top-3 z-[200] -translate-y-24 rounded bg-accent px-4 py-2.5 text-sm font-semibold text-white focus:translate-y-0"
      >
        Lompat ke konten
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
