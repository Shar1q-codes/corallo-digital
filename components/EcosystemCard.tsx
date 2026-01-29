"use client";

import { useState } from "react";
import clsx from "clsx";

import { Card } from "@/components/card";

export function EcosystemCard() {
  const [isRevealed, setIsRevealed] = useState(false);

  const revealClasses = clsx(
    "mt-4 space-y-2 text-sm text-secondary",
    "transition-[opacity,transform] duration-200 ease-out",
    "motion-reduce:translate-y-0 motion-reduce:transition-none",
    "group-hover:opacity-100 group-hover:translate-y-0",
    "group-focus-visible:opacity-100 group-focus-visible:translate-y-0",
    isRevealed
      ? "opacity-100 translate-y-0"
      : "pointer-events-none opacity-0 translate-y-1"
  );

  const overlayClasses = clsx(
    "absolute inset-0 rounded-[inherit] pointer-events-none",
    "bg-[repeating-linear-gradient(0deg,rgba(15,23,42,0.18)_0px,rgba(15,23,42,0.18)_1px,transparent_1px,transparent_28px),repeating-linear-gradient(90deg,rgba(15,23,42,0.18)_0px,rgba(15,23,42,0.18)_1px,transparent_1px,transparent_28px)]",
    "opacity-[0.06] transition-[opacity,transform] duration-200 ease-out",
    "motion-reduce:translate-y-0 motion-reduce:transition-none",
    "group-hover:opacity-[0.1] group-hover:translate-x-[2px] group-hover:translate-y-[2px]",
    "group-focus-visible:opacity-[0.1] group-focus-visible:translate-x-[2px] group-focus-visible:translate-y-[2px]",
    isRevealed ? "opacity-[0.1] translate-x-[2px] translate-y-[2px]" : "translate-x-0 translate-y-0"
  );

  return (
    <Card
      tone="muted"
      elevated
      className="relative overflow-hidden p-6 focus-within:ring-2 focus-within:ring-[var(--ring)] focus-within:ring-offset-2 focus-within:ring-offset-[var(--color-bg)]"
    >
      <span aria-hidden="true" className={overlayClasses} />
      <button
        type="button"
        aria-label="Reveal ecosystem layer message"
        aria-pressed={isRevealed}
        onClick={() => setIsRevealed((value) => !value)}
        className="group relative z-10 flex h-full w-full flex-col items-start text-left focus-visible:shadow-none"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
          ECOSYSTEM LAYER
        </span>
        <div className={revealClasses}>
          <p>You don’t see it.</p>
          <p>You feel it when products don’t break.</p>
        </div>
      </button>
    </Card>
  );
}
