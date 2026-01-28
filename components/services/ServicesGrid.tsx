"use client";

import { ServiceCatalogItem } from "@/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";

interface ServicesGridProps {
  services: ServiceCatalogItem[];
  onOpen: (service: ServiceCatalogItem) => void;
}

export function ServicesGrid({ services, onOpen }: ServicesGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} onOpen={onOpen} />
      ))}
    </div>
  );
}
