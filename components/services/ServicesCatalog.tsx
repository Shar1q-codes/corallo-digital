"use client";

import { useMemo, useState } from "react";

import { Input } from "@/components/input";
import { ServiceModal } from "@/components/services/ServiceModal";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ServiceCatalogItem, servicesCatalog } from "@/data/services";

export function ServicesCatalog() {
  const [query, setQuery] = useState("");
  const [activeService, setActiveService] = useState<ServiceCatalogItem | null>(
    null
  );

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return servicesCatalog;
    return servicesCatalog.filter((service) => {
      const haystack = [
        service.name,
        service.oneLiner,
        service.category ?? ""
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(term);
    });
  }, [query]);

  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
          Ecosystem
        </p>
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold text-primary">Ecosystem</h1>
          <p className="text-base text-secondary">
            Owned digital systems, built, operated, and evolved under one
            operating rhythm.
          </p>
        </div>
      </header>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="w-full max-w-lg">
          <Input
            label="Search"
            placeholder="Search by name, category, or focus"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </div>

      <ServicesGrid services={filtered} onOpen={setActiveService} />

      <ServiceModal
        service={activeService}
        open={Boolean(activeService)}
        onClose={() => setActiveService(null)}
      />
    </div>
  );
}
