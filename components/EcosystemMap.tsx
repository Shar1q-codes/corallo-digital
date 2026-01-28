'use client';

import React from 'react';

type NodeId = 'analytics' | 'ats' | 'cpa' | 'other';

type Node = {
  id: NodeId;
  label: string;
  blurb: string;
  // positions as percentage of the container
  x: number; // 0..100
  y: number; // 0..100
};

const NODES: Node[] = [
  {
    id: 'analytics',
    label: 'Analytics Platform',
    blurb: 'Custom analytics, reporting, and decision intelligence.',
    x: 18,
    y: 28,
  },
  {
    id: 'ats',
    label: 'ATS / Job Platform',
    blurb: 'Hiring workflow, ATS, and job marketplace tooling.',
    x: 82,
    y: 28,
  },
  {
    id: 'cpa',
    label: 'CPA Tax Tool',
    blurb: 'Tax preparation workflows and CPA productivity systems.',
    x: 78,
    y: 70,
  },
  {
    id: 'other',
    label: 'Other Domain Products',
    blurb: 'New domain products integrated into the same core standards.',
    x: 22,
    y: 70,
  },
];

export function EcosystemMap() {
  const [active, setActive] = React.useState<NodeId | 'core'>('core');

  const activeNode = React.useMemo(() => {
    if (active === 'core') return null;
    return NODES.find((n) => n.id === active) ?? null;
  }, [active]);

  // Core position
  const core = { x: 50, y: 50 };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-surface">
      {/* Title row (optional; keep minimal) */}
      <div className="px-6 pt-6">
        <div className="text-xs font-semibold tracking-[0.24em] text-[var(--text-muted)]">
          ECOSYSTEM LAYER
        </div>
        <div className="mt-2 text-xl font-semibold text-[var(--text-primary)]">
          Integrated product systems
        </div>
        <div className="mt-2 text-sm text-[var(--text-secondary)]">
          {activeNode
            ? activeNode.blurb
            : 'Hover a node to see how it connects to Corallo Core.'}
        </div>
      </div>

      {/* Map area */}
      <div className="relative mt-6 h-[280px] w-full">
        {/* Connection lines */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--color-secondary)" />
              <stop offset="100%" stopColor="var(--color-accent)" />
            </linearGradient>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {NODES.map((n) => {
            const isActive = active === n.id;
            return (
              <g key={n.id}>
                <line
                  x1={core.x}
                  y1={core.y}
                  x2={n.x}
                  y2={n.y}
                  stroke={isActive ? 'url(#lineGrad)' : 'var(--color-border)'}
                  strokeWidth={isActive ? 0.9 : 0.6}
                  opacity={isActive ? 1 : 0.55}
                  filter={isActive ? 'url(#softGlow)' : undefined}
                />
                {/* small endpoint dot */}
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={isActive ? 1.3 : 0.9}
                  fill={
                    isActive ? 'var(--color-accent)' : 'var(--color-border)'
                  }
                  opacity={isActive ? 1 : 0.8}
                />
              </g>
            );
          })}
        </svg>

        {/* Core node */}
        <button
          type="button"
          onMouseEnter={() => setActive('core')}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full px-6 py-6 text-center shadow-md"
          style={{
            background: 'var(--gradient-primary)',
            color: 'var(--text-inverse)',
          }}
          aria-label="Corallo Core"
        >
          <div className="text-lg font-semibold leading-tight">
            Corallo
            <br />
            Core
          </div>
        </button>

        {/* Nodes */}
        {NODES.map((n) => {
          const isActive = active === n.id;

          return (
            <button
              key={n.id}
              type="button"
              onMouseEnter={() => setActive(n.id)}
              onFocus={() => setActive(n.id)}
              className={[
                'absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl border px-4 py-3 text-left shadow-soft transition',
                'bg-surface',
                isActive
                  ? 'border-[var(--color-accent)] ring-2 ring-[var(--ring)]'
                  : 'border-[var(--color-border)] hover:border-[var(--color-secondary)]',
              ].join(' ')}
              style={{
                left: `${n.x}%`,
                top: `${n.y}%`,
              }}
              aria-label={n.label}
            >
              <div className="text-sm font-semibold text-[var(--text-primary)]">
                {n.label}
              </div>
              <div className="mt-1 text-xs text-[var(--text-muted)]">
                {isActive ? 'Connected via Corallo Core' : 'Hover to highlight'}
              </div>
            </button>
          );
        })}
      </div>

      {/* Bottom padding */}
      <div className="px-6 pb-6" />
    </div>
  );
}
