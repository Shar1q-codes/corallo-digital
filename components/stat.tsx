import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

interface StatProps extends PropsWithChildren {
  label: string;
  className?: string;
}

export function Stat({ children, label, className }: StatProps) {
  return (
    <div className={cn("rounded-3xl border border-[var(--color-border)] bg-surface p-6 text-center shadow-soft", className)}>
      <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
        {label}
      </dt>
      <dd className="mt-3 text-3xl font-semibold text-primary">{children}</dd>
    </div>
  );
}
