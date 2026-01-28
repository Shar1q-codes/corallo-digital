import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type CardTone = "default" | "vibrant" | "muted";
type LegacyVariant = "default" | "outline" | "inset";

interface CardProps extends ComponentPropsWithoutRef<"div"> {
  tone?: CardTone;
  elevated?: boolean;
  inset?: boolean;
  variant?: LegacyVariant;
}

const toneStyles: Record<CardTone, string> = {
  default: "card",
  vibrant:
    "card border-border/80 bg-gradient-to-br from-surface-elevated via-surface to-surface",
  muted:
    "card border-[var(--color-border)] bg-surface text-secondary"
};

export function Card({
  children,
  className,
  tone = "default",
  elevated = false,
  inset = false,
  variant,
  ...props
}: CardProps) {
  let resolvedTone = tone;
  const legacyClasses: string[] = [];

  if (variant) {
    switch (variant) {
      case "outline":
        resolvedTone = tone === "default" ? "muted" : tone;
        legacyClasses.push("border border-[var(--color-border)]");
        break;
      case "inset":
        resolvedTone = "vibrant";
        legacyClasses.push("bg-surface-elevated/70");
        break;
      default:
        resolvedTone = tone;
    }
  }

  return (
    <div
      {...props}
      className={cn(
        toneStyles[resolvedTone],
        "relative overflow-hidden",
        inset ? "p-6 md:p-8" : "p-8",
        elevated ? "shadow-strong" : undefined,
        legacyClasses,
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={cn(
        "mb-6 flex flex-col gap-2 text-left",
        "text-primary",
        className
      )}
    />
  );
}

export function CardTitle({
  className,
  ...props
}: ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      {...props}
      className={cn(
        "text-lg font-semibold text-primary",
        className
      )}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      {...props}
      className={cn("text-sm text-secondary", className)}
    />
  );
}

export function CardBody({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={cn("flex flex-col gap-4 text-base text-secondary", className)}
    />
  );
}

export function CardFooter({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={cn(
        "mt-6 flex flex-col gap-2 border-t border-[var(--color-border)] pt-6",
        className
      )}
    />
  );
}
