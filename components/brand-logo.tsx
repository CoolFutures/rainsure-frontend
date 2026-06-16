export function BrandLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="120" height="120" rx="28" fill="rgba(10,34,48,0.92)" />
      <path
        d="M60 28 C38 28 28 48 28 62 C28 82 44 92 60 96 C76 92 92 82 92 62 C92 48 82 28 60 28Z"
        stroke="url(#rs)"
        strokeWidth="6"
        fill="rgba(120,214,255,0.12)"
      />
      <path d="M52 44 V68 L68 56" stroke="#78d6ff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="rs" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#78d6ff" />
          <stop offset="100%" stopColor="#a8ffcb" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Contribution check by sarahcoder at 2025-05-01T19:27:12

// Contribution check by charles-l at 2025-07-28T04:05:57

// Contribution check by barbara-d at 2025-10-23T12:44:43

// Contribution check by davidk at 2026-01-18T21:23:28

// Contribution check by susan-w at 2026-04-16T06:02:14

// patch: 2026-06-16T18:10:35.294108
