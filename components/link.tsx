import NextLink, { type LinkProps } from "next/link";
import { AnchorHTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib/utils";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps & {
    underline?: "always" | "hover" | "none";
  };

export const Link = forwardRef<HTMLAnchorElement, Props>(
  ({ className, underline = "hover", children, ...props }, ref) => {
    const underlineClasses =
      underline === "always"
        ? "underline decoration-2 underline-offset-4"
        : underline === "none"
          ? "no-underline"
          : "underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-current";

    return (
      <NextLink
        {...props}
        className={cn(
          "inline-flex items-center gap-1 text-secondary transition-colors duration-150 hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
          underlineClasses,
          className
        )}
        ref={ref}
      >
        {children}
      </NextLink>
    );
  }
);

Link.displayName = "Link";
