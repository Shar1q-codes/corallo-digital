import { Metadata } from "next";

import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { createMetadata } from "@/lib/seo";
import { getAllServices } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Services - Corallo Digital",
  description: "Explore Corallo Digital's full spectrum of digital marketing services spanning SEO, paid media, lifecycle, and analytics."
});

export default async function ServicesPage() {
  const services = await getAllServices();

  const firstRow = services.slice(0, 3);
  const rest = services.slice(3);

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-rose-50 via-white to-sky-50">
      <div className="pointer-events-none absolute inset-x-0 top-[-30%] h-[420px] bg-gradient-primary/30 blur-3xl" />
      <div className="container relative mx-auto px-6 pb-28 pt-32 lg:px-8 lg:pb-36 lg:pt-40">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionHeader
            eyebrow="Services"
            title="Full-funnel marketing programs, modular by design"
            description="Choose a single discipline, craft a cross-functional pod, or combine advisory with embedded operators. Every service plugs into a common growth operating system."
            align="center"
          />
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          {firstRow.map((service, index) => (
            <div
              key={service.slug}
              className={cn(
                "col-span-full overflow-hidden rounded-[2.5rem] border border-[var(--color-border)] bg-white/90 p-12 shadow-strong transition-transform duration-500 ease-out hover:-translate-y-3 hover:shadow-strong",
                index === 0 ? "lg:col-span-4" : "lg:col-span-4"
              )}
            >
              <ServiceCard
                service={service}
                layout="minimal"
                accent={index === 0 ? "warm" : index === 1 ? "violet" : "mint"}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {rest.map((service, index) => (
            <Reveal key={service.slug}>
              <div className="rounded-3xl border border-[var(--color-border)] bg-surface/95 p-10 shadow-soft transition-transform duration-500 ease-out hover:-translate-y-2 hover:shadow-strong">
                <ServiceCard
                  service={service}
                  layout="minimal"
                  accent={index % 3 === 0 ? "warm" : index % 3 === 1 ? "violet" : "mint"}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

