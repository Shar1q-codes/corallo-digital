import {
  ComponentPropsWithoutRef,
  ReactNode,
  forwardRef,
  useId
} from "react";

import { cn } from "@/lib/utils";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  helperText?: string;
  error?: string;
  endAdornment?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, helperText, error, endAdornment, className, id, disabled, ...props },
    ref
  ) => {
    const fallbackId = useId();
    const inputId = id ?? fallbackId;
    const helpId = helperText ? `${inputId}-helper` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;

    const describedBy = [errorId, helpId].filter(Boolean).join(" ") || undefined;

    return (
      <div className="flex flex-col gap-1.5">
        {label ? (
          <label
            className="text-sm font-medium text-secondary"
            htmlFor={inputId}
          >
            {label}
          </label>
        ) : null}
        <div className="relative">
          <input
            {...props}
            aria-describedby={describedBy}
            aria-invalid={Boolean(error)}
            aria-disabled={disabled}
            className={cn(
              "w-full rounded-xl border border-[var(--color-border)] bg-surface/95 px-4 py-2.5 text-sm font-medium text-primary placeholder:text-muted transition",
              "focus-visible:border-secondary focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
              "disabled:cursor-not-allowed disabled:bg-muted/15 disabled:text-muted",
              endAdornment ? "pr-11" : null,
              error
                ? "border-danger text-primary focus-visible:border-danger focus-visible:ring-danger"
                : "hover:border-secondary/50",
              className
            )}
            disabled={disabled}
            id={inputId}
            ref={ref}
          />
          {endAdornment ? (
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <div className="pointer-events-auto">{endAdornment}</div>
            </div>
          ) : null}
        </div>
        {error ? (
          <p
            className="text-xs font-medium text-danger"
            id={errorId}
            role="alert"
          >
            {error}
          </p>
        ) : helperText ? (
          <p className="text-xs text-secondary" id={helpId}>
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";
