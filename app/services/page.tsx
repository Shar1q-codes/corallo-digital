import { Metadata } from "next";

import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { createMetadata } from "@/lib/seo";
import { getAllServices } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = createMetadata({
  title: "Services - Corallo Digital",
  description: "Explore Corallo Digital''s full spectrum of digital marketing services spanning SEO, paid media, lifecycle, and analytics."
});

export default async function ServicesPage() {
  const services = await getAllServices();

  return (
    <div className="container mx-auto px-6 py-24 lg:px-8">
      <Reveal>
        <SectionHeader
          eyebrow="Services"
          title="Full-funnel digital marketing coverage"
          description="From demand creation to retention, every program we run is anchored in data, experimentation, and creative excellence."
          align="center"
        />
      </Reveal>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Reveal key={service.slug}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
