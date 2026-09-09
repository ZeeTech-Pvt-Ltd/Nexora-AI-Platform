// Minimal inline icon set (stroke style, 24px viewBox) - no external icon lib.
const PATHS = {
  cpu: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="10" y="10" width="4" height="4" />
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
    </>
  ),
  engine: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
    </>
  ),
  invest: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V10M10 21V5M15 21v-8M20 21V7" />
    </>
  ),
  'shield-check': (
    <>
      <path d="M12 2l8 3.5V11c0 5-3.4 9.2-8 11-4.6-1.8-8-6-8-11V5.5L12 2z" />
      <path d="M8.5 11.5l2.5 2.5 4.5-4.5" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 018 0v3" />
      <circle cx="12" cy="15.5" r="1.4" />
    </>
  ),
  zap: <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  sliders: (
    <>
      <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3" />
      <path d="M1.5 14h5M9.5 8h5M17.5 16h5" />
    </>
  ),
  bolt: <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
  shield: (
    <path d="M12 2l8 3.5V11c0 5-3.4 9.2-8 11-4.6-1.8-8-6-8-11V5.5L12 2z" />
  ),
  brain: (
    <>
      <path d="M9.5 4.5A2.5 2.5 0 007 7a2.5 2.5 0 00-2.5 2.5A2.5 2.5 0 002 12a2.5 2.5 0 002.5 2.5A2.5 2.5 0 007 17a2.5 2.5 0 002.5 2.5" />
      <path d="M14.5 4.5A2.5 2.5 0 0117 7a2.5 2.5 0 012.5 2.5A2.5 2.5 0 0122 12a2.5 2.5 0 01-2.5 2.5A2.5 2.5 0 0117 17a2.5 2.5 0 01-2.5 2.5" />
    </>
  ),
  speed: (
    <>
      <path d="M12 4a8 8 0 018 8" />
      <path d="M12 4v4l4.6 2.6" />
      <path d="M4 12a8 8 0 018-8" />
      <path d="M20 15H4" />
      <path d="M6.5 20h11" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15l3.5-4.5 3 2.5L18 8" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
    </>
  ),
  card: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20M6 15h4" />
    </>
  ),
  devices: (
    <>
      <rect x="2" y="4" width="14" height="10" rx="1.5" />
      <path d="M6 18h6M9 14v4" />
      <rect x="16" y="9" width="6" height="12" rx="1.5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.7 2.6 4 5.7 4 9s-1.3 6.4-4 9c-2.7-2.6-4-5.7-4-9s1.3-6.4 4-9z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  headset: (
    <>
      <path d="M4 13a8 8 0 0116 0" />
      <path d="M4 13v3a2 2 0 002 2h1v-5H4zM20 13v3a2 2 0 01-2 2h-1v-5h3z" />
      <path d="M20 18v1a3 3 0 01-3 3h-5" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7L22 7" />
    </>
  ),
  phone: (
    <path d="M5 3h4l2 5-2.5 1.5a12 12 0 005 5L15 12l5 2v4a2 2 0 01-2 2A16 16 0 013 5a2 2 0 012-2z" />
  ),
  'arrow-right': <path d="M4 12h16M14 6l6 6-6 6" />,
  check: <path d="M4.5 12.5l5 5 10-11" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  star: (
    <path
      d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9L12 2.5z"
      fill="currentColor"
      stroke="none"
    />
  ),
  verified: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5.5" />
    </>
  ),
};

export default function Icon({ name, size = 22, className = '', style }) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name] || null}
    </svg>
  );
}
