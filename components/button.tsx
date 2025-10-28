import { cva, type VariantProps } from "class-variance-authority";
import Link, { type LinkProps } from "next/link";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

const buttonStyles = cva(
  [
    "relative inline-flex items-center justify-center gap-2 font-semibold tracking-wide",
    "rounded-full transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
    "disabled:pointer-events-none disabled:opacity-60"
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-primary-400 text-inverse shadow-soft hover:bg-primary-500 active:bg-primary-600 hover:shadow-strong",
        secondary:
          "bg-secondary text-inverse shadow-soft hover:brightness-105 active:brightness-95 hover:shadow-strong",
        accent:
          "bg-accent text-dark shadow-soft hover:brightness-105 active:brightness-95 hover:shadow-strong",
        outline:
          "border border-[var(--color-border)] bg-transparent text-primary-700 hover:bg-primary-50 active:bg-primary-100",
        ghost:
          "bg-transparent text-secondary hover:bg-primary-50 active:bg-primary-100",
        marketing:
          "bg-gradient-primary text-inverse shadow-glow hover:shadow-strong hover:translate-y-[-1px] active:translate-y-[1px]"
      },
      size: {
        sm: "px-3.5 py-2 text-xs",
        md: "px-5 py-2.5 text-sm",
        lg: "px-6 py-3 text-base",
        xl: "px-8 py-3.5 text-base"
      }
    },
    compoundVariants: [
      {
        variant: "marketing",
        className:
          "uppercase tracking-[0.18em] text-sm md:text-base marketing-shadow"
      },
      {
        variant: ["outline", "ghost"],
        className: "text-primary-700"
      },
      {
        variant: "accent",
        className: "text-[var(--color-dark)]"
      }
    ],
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

interface BaseButtonProps
  extends VariantProps<typeof buttonStyles>,
    PropsWithChildren {
  className?: string;
  pressed?: boolean;
  disabled?: boolean;
}

type AnchorButtonProps = BaseButtonProps &
  Omit<LinkProps, "href"> & {
    href: string;
  };

type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const { variant, size, className, children, pressed, disabled, ...rest } =
    props as BaseButtonProps & {
      [key: string]: unknown;
    };

  const classes = cn(buttonStyles({ variant, size }), className);

  if ("href" in props && typeof props.href === "string") {
    const {
      "aria-pressed": ariaPressedProp,
      "aria-disabled": ariaDisabledProp,
      ...linkRest
    } = rest as Record<string, unknown>;
    const computedAriaPressed =
      pressed ?? (ariaPressedProp as boolean | undefined);
    const computedAriaDisabled =
      disabled ?? (ariaDisabledProp as boolean | undefined);

    return (
      <Link
        {...(linkRest as LinkProps)}
        aria-pressed={computedAriaPressed}
        aria-disabled={computedAriaDisabled}
        className={cn(
          classes,
          computedAriaDisabled ? "pointer-events-none opacity-50" : undefined
        )}
        href={props.href}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  const type = buttonProps.type ?? "button";

  return (
    <button
      {...buttonProps}
      aria-pressed={pressed}
      aria-disabled={disabled ?? buttonProps.disabled}
      className={classes}
      disabled={disabled ?? buttonProps.disabled}
      type={type}
    >
      {children}
    </button>
  );
}
