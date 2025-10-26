import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

interface BadgeProps extends PropsWithChildren {
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span className={cn("inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-200", className)}>
      {children}
    </span>
  );
}
