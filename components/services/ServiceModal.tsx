"use client";

import { useEffect, useMemo, useRef } from "react";

import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { ServiceCatalogItem } from "@/data/services";
import { cn } from "@/lib/utils";

interface ServiceModalProps {
  service: ServiceCatalogItem | null;
  open: boolean;
  onClose: () => void;
}

const focusableSelectors =
  'a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])';

export function ServiceModal({ service, open, onClose }: ServiceModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const titleId = useMemo(
    () => (service ? `service-modal-${service.slug}` : undefined),
    [service]
  );

  useEffect(() => {
    if (!open) return;

    const previous = document.activeElement as HTMLElement | null;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;
      const container = dialogRef.current;
      if (!container) return;

      const focusable = Array.from(
        container.querySelectorAll<HTMLElement>(focusableSelectors)
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    requestAnimationFrame(() => {
      closeRef.current?.focus();
    });

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previous?.focus();
    };
  }, [open, onClose]);

  if (!open || !service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-6 py-10 backdrop-blur-sm"
      onClick={onClose}
      aria-hidden={!open}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          "w-full max-w-2xl",
          "motion-reduce:transition-none"
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <Card
          tone="vibrant"
          elevated
          className="rounded-[2.75rem] bg-gradient-to-br from-white via-secondary/10 to-accent/10 p-10 shadow-strong"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
                {service.category}
              </p>
              <h2
                id={titleId}
                className="mt-3 text-3xl font-semibold text-primary"
              >
                {service.name}
              </h2>
              <p className="mt-3 text-base text-secondary">
                {service.oneLiner}
              </p>
            </div>
            <button
              ref={closeRef}
              type="button"
              className="rounded-full border border-[var(--color-border)] bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-secondary transition hover:text-primary"
              onClick={onClose}
            >
              Close
            </button>
          </div>

          <p className="mt-6 text-base text-secondary">{service.description}</p>

          <div className="mt-6 rounded-3xl border border-[var(--color-border)] bg-white/80 p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
              What it is
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-secondary">
              {service.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/80" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href={service.websiteUrl}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open site
            </Button>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
