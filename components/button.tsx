import { cva, type VariantProps } from "class-variance-authority";
import Link, { type LinkProps } from "next/link";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-white shadow-soft hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-accent",
        secondary:
          "border border-slate-700 bg-slate-900 text-slate-100 hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:ring-accent",
        ghost:
          "bg-transparent text-slate-200 hover:bg-slate-800 focus-visible:ring-accent",
        subtle:
          "bg-slate-800 text-white hover:bg-slate-700 focus-visible:ring-accent"
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2 text-xs",
        lg: "px-8 py-4 text-base"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

interface BaseButtonProps extends VariantProps<typeof buttonStyles>, PropsWithChildren {
  className?: string;
}

type AnchorButtonProps = BaseButtonProps & LinkProps & { href: string };

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const { variant, size, className, children, ...rest } = props as BaseButtonProps & {
    [key: string]: unknown;
  };

  const classes = cn(buttonStyles({ variant, size }), className);

  if ("href" in props && typeof props.href === "string") {
    const linkProps = rest as LinkProps;
    return (
      <Link {...linkProps} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  const type = buttonProps.type ?? "button";

  return (
    <button {...buttonProps} type={type} className={classes}>
      {children}
    </button>
  );
}
