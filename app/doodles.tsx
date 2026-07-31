type DoodleProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SparkleDoodle({ className }: DoodleProps) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
      <g {...stroke}>
        <path d="M60 14v92" />
        <path d="M14 60h92" />
        <path d="M28 28l64 64" />
        <path d="M92 28L28 92" />
      </g>
    </svg>
  );
}

export function DiscoDoodle({ className }: DoodleProps) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
      <g {...stroke}>
        <circle cx="60" cy="68" r="38" />
        <path d="M60 30V12" />
        <path d="M22 68h76" />
        <path d="M28 48h64" />
        <path d="M28 88h64" />
        <path d="M60 30c-14 10-14 66 0 76" />
        <path d="M60 30c14 10 14 66 0 76" />
      </g>
    </svg>
  );
}

export function BowDoodle({ className }: DoodleProps) {
  return (
    <svg className={className} viewBox="0 0 140 90" aria-hidden="true">
      <g {...stroke}>
        <path d="M70 45c-12-16-30-24-44-18-11 5-11 21 0 27 14 7 32 4 44-9Z" />
        <path d="M70 45c12-16 30-24 44-18 11 5 11 21 0 27-14 7-32 4-44-9Z" />
        <path d="M70 45c-4 12-10 22-18 30" />
        <path d="M70 45c4 12 10 22 18 30" />
        <circle cx="70" cy="45" r="5" />
      </g>
    </svg>
  );
}

export function EnvelopeDoodle({ className }: DoodleProps) {
  return (
    <svg className={className} viewBox="0 0 140 110" aria-hidden="true">
      <g {...stroke}>
        <rect x="14" y="24" width="112" height="72" rx="6" />
        <path d="M14 32l56 38 56-38" />
        <path d="M52 96l24-22M112 96L88 74" />
      </g>
    </svg>
  );
}

const WAVE = [
  8, 16, 30, 22, 44, 60, 38, 26, 52, 72, 48, 30, 18, 34, 58, 80, 62, 40, 24, 14,
  28, 46, 68, 54, 36, 20, 12, 26, 50, 74, 58, 34, 22, 42, 64, 46, 28, 16, 34,
  56, 78, 60, 38, 24, 12, 22, 44, 66, 50, 32, 18, 30, 52, 70, 44, 26, 14, 24,
  40, 62, 48, 30, 20, 36, 58, 42, 26, 16, 10, 20,
];

export function WaveformOverlay({ className }: DoodleProps) {
  const gap = 14;
  return (
    <svg
      className={className}
      viewBox={`0 0 ${WAVE.length * gap} 200`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <g fill="currentColor">
        {WAVE.map((h, i) => (
          <rect
            key={i}
            x={i * gap}
            y={100 - h}
            width={6}
            height={h * 2}
            rx={3}
            style={
              {
                "--bar-delay": `${(i % 14) * 95 + (i % 5) * 40}ms`,
                "--bar-dur": `${1500 + (i % 7) * 130}ms`,
              } as React.CSSProperties
            }
          />
        ))}
      </g>
    </svg>
  );
}
