interface OutputPanelProps {
  lines: string[];
  className?: string;
}

export default function OutputPanel({ lines, className = "" }: OutputPanelProps) {
  return (
    <div
      className={`overflow-hidden rounded-md border border-border bg-surface ${className}`}
    >
      <div className="border-b border-border px-3.5 py-2.5 font-mono text-[12.5px] text-muted">
        Output
      </div>
      <div className="px-4 py-3.5 font-mono text-[13px] leading-[1.7] text-text">
        {lines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
    </div>
  );
}
