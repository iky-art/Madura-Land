import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const duration = reducedMotion ? 500 : 1400;

    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setHidden(true);
      document.body.style.overflow = "";
    }, duration);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  function dismiss() {
    setHidden(true);
    document.body.style.overflow = "";
  }

  return (
    <div
      role="presentation"
      onClick={dismiss}
      aria-hidden={hidden}
      className={`fixed inset-0 z-[300] flex items-center justify-center bg-background transition-opacity duration-500 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center">
        <img
          src="/assets/logo-icon.png"
          alt=""
          width={64}
          height={64}
          className="mx-auto mb-5 w-16 motion-safe:animate-pulse"
        />
        <p className="mb-1 text-[1.6rem] font-semibold tracking-tight">
          Sugeng Rawuh
        </p>
        <p className="mb-4 font-mono text-[0.95rem] text-accent">
          e Madura Land
        </p>
        <p className="text-[0.85rem] text-muted">Basa program berjiwa Madura</p>
      </div>
    </div>
  );
}
