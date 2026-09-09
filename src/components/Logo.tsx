interface LogoProps {
  iconSize?: number;
  showWordmark?: boolean;
  className?: string;
}

export default function Logo({
  iconSize = 34,
  showWordmark = true,
  className = "",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/assets/logo-icon.png"
        alt="Madura Land"
        width={iconSize}
        height={iconSize}
        style={{ width: iconSize, height: "auto" }}
      />
      {showWordmark && (
        <span className="font-mono font-bold tracking-wide text-[15px] leading-none">
          <span className="text-text">MADURA</span>{" "}
          <span className="text-accent">LAND</span>
        </span>
      )}
    </span>
  );
}
