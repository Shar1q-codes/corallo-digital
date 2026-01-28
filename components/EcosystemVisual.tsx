export function EcosystemVisual() {
  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-surface">
      {/* soft background glow */}
      <div className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full bg-secondary/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 -bottom-20 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

      {/* subtle dot field */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.55]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, var(--color-border) 1px, transparent 0)',
            backgroundSize: '18px 18px',
          }}
        />
      </div>

      {/* glass portal */}
      <div className="pointer-events-none absolute inset-6 rounded-2xl border border-[var(--color-border)] bg-white/45 backdrop-blur-[6px]" />

      {/* top-left status dots */}
      <div className="absolute left-8 top-8 flex gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
      </div>

      {/* orbit system */}
      <svg
        viewBox="0 0 520 260"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="eco-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-secondary)" />
            <stop offset="55%" stopColor="var(--color-primary)" />
            <stop offset="100%" stopColor="var(--color-accent)" />
          </linearGradient>

          <radialGradient id="eco-core" cx="50%" cy="50%" r="65%">
            <stop
              offset="0%"
              stopColor="var(--color-secondary)"
              stopOpacity="0.20"
            />
            <stop
              offset="60%"
              stopColor="var(--color-primary)"
              stopOpacity="0.10"
            />
            <stop
              offset="100%"
              stopColor="var(--color-accent)"
              stopOpacity="0.05"
            />
          </radialGradient>

          <filter id="eco-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* connection arcs */}
        <path
          d="M260 135 C 210 90, 160 85, 110 105"
          fill="none"
          stroke="url(#eco-line)"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.7"
          filter="url(#eco-soft)"
        />
        <path
          d="M260 135 C 320 90, 380 80, 430 110"
          fill="none"
          stroke="url(#eco-line)"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.6"
          filter="url(#eco-soft)"
        />
        <path
          d="M260 135 C 215 165, 170 190, 120 200"
          fill="none"
          stroke="url(#eco-line)"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.55"
          filter="url(#eco-soft)"
        />
        <path
          d="M260 135 C 315 170, 360 195, 410 200"
          fill="none"
          stroke="url(#eco-line)"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.5"
          filter="url(#eco-soft)"
        />

        {/* orbit rings */}
        <circle
          cx="260"
          cy="135"
          r="58"
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="1"
          opacity="0.7"
        />
        <circle
          cx="260"
          cy="135"
          r="92"
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="1"
          opacity="0.45"
        />
        <circle
          cx="260"
          cy="135"
          r="122"
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="1"
          opacity="0.25"
        />

        {/* core */}
        <circle cx="260" cy="135" r="36" fill="url(#eco-core)" />
        <circle cx="260" cy="135" r="18" fill="white" opacity="0.65" />
        <circle
          cx="260"
          cy="135"
          r="7"
          fill="var(--color-primary)"
          opacity="0.9"
        />

        {/* satellites */}
        <g filter="url(#eco-soft)">
          <circle cx="110" cy="105" r="10" fill="white" opacity="0.75" />
          <circle
            cx="110"
            cy="105"
            r="5"
            fill="var(--color-secondary)"
            opacity="0.95"
          />

          <circle cx="430" cy="110" r="10" fill="white" opacity="0.75" />
          <circle
            cx="430"
            cy="110"
            r="5"
            fill="var(--color-accent)"
            opacity="0.95"
          />

          <circle cx="120" cy="200" r="10" fill="white" opacity="0.75" />
          <circle
            cx="120"
            cy="200"
            r="5"
            fill="var(--color-primary)"
            opacity="0.95"
          />

          <circle cx="410" cy="200" r="10" fill="white" opacity="0.75" />
          <circle
            cx="410"
            cy="200"
            r="5"
            fill="var(--color-secondary)"
            opacity="0.95"
          />
        </g>
      </svg>

      {/* subtle bottom fade to sit with card */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
    </div>
  );
}
