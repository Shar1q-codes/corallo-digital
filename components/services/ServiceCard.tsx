"use client";

import { ServiceCatalogItem } from "@/data/services";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: ServiceCatalogItem;
  onOpen: (service: ServiceCatalogItem) => void;
}

const statusStyles: Record<ServiceCatalogItem["status"], string> = {
  Live: "border-emerald-200/60 text-emerald-700 bg-emerald-50/80",
  Private: "border-slate-200/70 text-slate-600 bg-slate-50/80",
  Research: "border-amber-200/70 text-amber-700 bg-amber-50/80",
  Alpha: "border-violet-200/70 text-violet-700 bg-violet-50/80"
};

export function ServiceCard({ service, onOpen }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-[2.5rem] border border-[var(--color-border)] bg-surface/95 p-8 text-left shadow-soft transition hover:shadow-strong",
        "focus-within:ring-2 focus-within:ring-secondary focus-within:ring-offset-2 focus-within:ring-offset-[var(--color-bg)]",
        "motion-reduce:transition-none"
      )}
      id={service.slug}
      tabIndex={0}
      role="button"
      onClick={() => onOpen(service)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(service);
        }
      }}
      aria-label={`Open ${service.name} details`}
      aria-haspopup="dialog"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-surface-elevated text-primary shadow-soft">
            <Icon className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
              {service.category}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-primary">
              {service.name}
            </h3>
          </div>
        </div>
        <span
          className={cn(
            "rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em]",
            statusStyles[service.status]
          )}
        >
          {service.status}
        </span>
      </div>

      <p className="mt-4 text-sm text-secondary">{service.oneLiner}</p>

      <div className="mt-6 overflow-hidden transition-[max-height,opacity] duration-300 motion-reduce:transition-none max-h-0 opacity-0 group-hover:max-h-64 group-hover:opacity-100 group-focus-within:max-h-64 group-focus-within:opacity-100">
        <ul className="space-y-2 text-sm text-secondary">
          {service.highlights.slice(0, 4).map((highlight) => (
            <li key={highlight} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/80" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-3">
          <Button
            href={service.websiteUrl}
            variant="outline"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
          >
            Open site
          </Button>
          <button
            type="button"
            className="inline-flex items-center rounded-full border border-transparent px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition hover:text-secondary"
            onClick={(event) => {
              event.stopPropagation();
              onOpen(service);
            }}
          >
            Read more
          </button>
        </div>
      </div>
    </article>
  );
}
