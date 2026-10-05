// "MS" monogram — the same artwork is src/app/icon.svg (favicon). Keep the two in sync.
export default function Logo({ size = 34 }: { size?: number }) {
  return (
    <svg className="logo" viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
      <defs>
        <linearGradient id="ms-logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3dd6c3" />
          <stop offset="1" stopColor="#9b8cff" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="30" height="30" rx="8.5" fill="#101215" stroke="url(#ms-logo-g)" strokeWidth="1.4" />
      <path d="M6.4 21.6V10.4l4.6 6.2 4.6-6.2v11.2" fill="none" stroke="#f2f2f2" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25.4 12.2c-.5-1.2-1.7-1.9-3.3-1.9-2 0-3.3 1-3.3 2.6 0 3.7 6.8 2.1 6.8 6 0 1.7-1.5 2.8-3.5 2.8-1.7 0-3-.7-3.6-2" fill="none" stroke="url(#ms-logo-g)" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
