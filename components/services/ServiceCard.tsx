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
        "group relative scroll-mt-40 rounded-[2.5rem] border border-[var(--color-border)] bg-surface/95 text-left shadow-soft transition hover:shadow-strong lg:scroll-mt-48",
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
      style={{ perspective: "1200px" }}
    >
      <div className="relative min-h-[280px] w-full">
        <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)] motion-reduce:transition-none">
          <div className="absolute inset-0 flex h-full flex-col gap-4 p-8 [backface-visibility:hidden] group-hover:pointer-events-none group-focus-within:pointer-events-none">
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

            <p className="text-sm text-secondary">{service.oneLiner}</p>

            <ul className="mt-1 space-y-2 text-sm text-secondary">
              {service.highlights.slice(0, 2).map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/80" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute inset-0 flex h-full flex-col p-8 [backface-visibility:hidden] [transform:rotateY(180deg)] pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
              Highlights
            </div>
            <ul className="mt-4 space-y-2 text-sm text-secondary">
              {service.highlights.slice(0, 4).map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/80" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-3">
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
        </div>
      </div>
    </article>
  );
}
