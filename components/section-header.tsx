import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

interface SectionHeaderProps extends PropsWithChildren {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  children
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "space-y-4",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          {eyebrow}
        </p>
      ) : null}
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base text-slate-300 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </header>
  );
}
