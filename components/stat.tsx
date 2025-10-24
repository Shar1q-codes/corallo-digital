import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

interface StatProps extends PropsWithChildren {
  label: string;
  className?: string;
}

export function Stat({ children, label, className }: StatProps) {
  return (
    <div className={cn("rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900", className)}>
      <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
        {label}
      </dt>
      <dd className="mt-3 text-3xl font-semibold text-primary dark:text-white">{children}</dd>
    </div>
  );
}
