import { cva, type VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

const badgeStyles = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-widest",
  {
    variants: {
      variant: {
        subtle: "bg-primary-50 text-primary-700",
        solid: "bg-secondary text-inverse shadow-soft",
        outline:
          "border border-[var(--color-accent)] text-accent bg-transparent"
      }
    },
    defaultVariants: {
      variant: "subtle"
    }
  }
);

interface BadgeProps
  extends PropsWithChildren,
    VariantProps<typeof badgeStyles> {
  className?: string;
}

export function Badge({ children, className, variant }: BadgeProps) {
  return (
    <span className={cn(badgeStyles({ variant }), className)}>
      {children}
    </span>
  );
}
