import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

interface StatProps extends PropsWithChildren {
  label: string;
  className?: string;
}

export function Stat({ children, label, className }: StatProps) {
  return (
    <div className={cn("rounded-3xl border border-slate-800 bg-slate-900 p-6 text-center shadow-sm", className)}>
      <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
        {label}
      </dt>
      <dd className="mt-3 text-3xl font-semibold text-white">{children}</dd>
    </div>
  );
}
