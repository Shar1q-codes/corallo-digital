import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type CardVariant = "default" | "outline" | "inset";

interface CardProps extends ComponentPropsWithoutRef<"div"> {
  variant?: CardVariant;
}

export function Card({ children, variant = "default", className, ...props }: CardProps) {
  const variants: Record<CardVariant, string> = {
    default: "bg-white shadow-soft dark:bg-slate-900",
    outline: "border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900",
    inset: "bg-slate-900 text-white dark:bg-slate-800"
  };

  return (
    <div {...props} className={cn("rounded-3xl p-8", variants[variant], className)}>{children}</div>
  );
}
