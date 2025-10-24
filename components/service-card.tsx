import Link from "next/link";

import { Card } from "@/components/card";
import { resolveIcon } from "@/components/icons";
import type { ServiceSummary } from "@/lib/content";

interface ServiceCardProps {
  service: ServiceSummary;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = resolveIcon(service.icon ?? service.title);

  return (
    <Card variant="outline" className="flex h-full flex-col gap-6">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-primary dark:text-white">{service.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">{service.summary}</p>
      </div>
      <div className="mt-auto">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center text-sm font-semibold text-accent hover:underline"
        >
          Explore service
          <span aria-hidden="true" className="ml-2">
            &rarr;
          </span>
        </Link>
      </div>
    </Card>
  );
}
