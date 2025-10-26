import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type CardVariant = "default" | "outline" | "inset";

interface CardProps extends ComponentPropsWithoutRef<"div"> {
  variant?: CardVariant;
}

export function Card({ children, variant = "default", className, ...props }: CardProps) {
  const variants: Record<CardVariant, string> = {
    default: "bg-slate-900 shadow-soft",
    outline: "border border-slate-800 bg-slate-900",
    inset: "bg-slate-800 text-white"
  };

  return (
    <div {...props} className={cn("rounded-3xl p-8", variants[variant], className)}>{children}</div>
  );
}
