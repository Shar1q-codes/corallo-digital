import Link from "next/link";

import { Card } from "@/components/card";
import { resolveIcon } from "@/components/icons";
import type { ServiceSummary } from "@/lib/content";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: ServiceSummary;
  layout?: "card" | "minimal";
  className?: string;
  accent?: "warm" | "violet" | "mint";
}

export function ServiceCard({
  service,
  layout = "card",
  className,
  accent = "warm"
}: ServiceCardProps) {
  const Icon = resolveIcon(service.icon ?? service.title);

  const content = (
    <div className={cn("flex h-full flex-col gap-6", className)}>
      <div
        className={cn(
          "inline-flex h-12 w-12 items-center justify-center rounded-2xl text-primary",
          accent === "warm" && "bg-gradient-to-br from-primary/20 via-primary/15 to-secondary/15 text-primary",
          accent === "violet" && "bg-gradient-to-br from-secondary/25 via-primary/15 to-accent/15 text-secondary",
          accent === "mint" && "bg-gradient-to-br from-accent/25 via-secondary/15 to-primary/15 text-accent"
        )}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
        <p className="text-sm text-secondary">{service.summary}</p>
      </div>
      <div className="mt-auto">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center text-sm font-semibold text-primary transition hover:text-secondary hover:underline"
        >
          Explore service
          <span aria-hidden className="ml-2">
            -&gt;
          </span>
        </Link>
      </div>
    </div>
  );

  if (layout === "minimal") {
    return content;
  }

  return (
    <Card tone="muted" elevated className="h-full">
      {content}
    </Card>
  );
}

