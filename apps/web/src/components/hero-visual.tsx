export function HeroVisual() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_80%_20%,rgba(14,124,119,0.18),transparent_55%),linear-gradient(165deg,#071221_0%,#0b1f3a_55%,#132c4e_100%)]" />
      <svg
        className="hero-visual absolute right-[-8%] bottom-[-12%] h-[120%] w-[70%] text-white/12"
        viewBox="0 0 640 480"
        fill="none"
      >
        <path
          d="M80 280 L220 160 L360 280 V420 H80 Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M80 280 H360" stroke="currentColor" strokeWidth="1.5" />
        <path d="M80 350 H360" stroke="currentColor" strokeWidth="1.5" />
        <rect x="140" y="300" width="48" height="40" stroke="currentColor" strokeWidth="1.5" />
        <rect x="240" y="300" width="48" height="40" stroke="currentColor" strokeWidth="1.5" />
        <rect x="190" y="368" width="40" height="52" stroke="currentColor" strokeWidth="1.5" />
        <path d="M360 250 L520 140 L620 250 V420 H360 Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M360 250 H620" stroke="currentColor" strokeWidth="1.5" />
        <rect x="420" y="280" width="44" height="36" stroke="currentColor" strokeWidth="1.5" />
        <rect x="510" y="280" width="44" height="36" stroke="currentColor" strokeWidth="1.5" />
        <path d="M80 420 H620" stroke="currentColor" strokeWidth="1.5" />
        <path d="M40 440 H200" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}
