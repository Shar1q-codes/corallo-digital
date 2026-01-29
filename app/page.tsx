import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { Hero } from '@/components/hero';
import { Reveal } from '@/components/reveal';
import { SectionHeader } from '@/components/section-header';
import { EcosystemCard } from '@/components/EcosystemCard';

import { createMetadata } from '@/lib/seo';
import { servicesCatalog } from '@/data/services';

export const metadata = createMetadata({
  title: 'Corallo Digital - Digital systems ecosystem',
  description:
    'Owned digital systems across analytics, operations, and compliance.',
});

export default async function HomePage() {
  const differentiators = [
    {
      eyebrow: 'EXECUTION FRAMEWORK',
      title: 'Product-centric execution',
      copy: 'Each system is built and operated as a first-class product, using a shared execution framework that aligns engineering, data, and operations without hand-offs.',
    },
    {
      eyebrow: 'Measurement',
      title: 'Built-in observability',
      copy: 'Every system includes native measurement, defined signals, and continuous visibility so performance and reliability stay traceable.',
    },
    {
      eyebrow: 'EXPERIENCE DESIGN',
      title: 'Domain-driven experiences',
      copy: 'Interfaces and workflows are designed around domain constraints, ensuring each system feels purpose-built, usable, and scalable.',
    },
  ];

  return (
    <>
      <Hero />

      <section className="container mx-auto px-6 py-14 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal className="space-y-6">
            <SectionHeader
              eyebrow="HOW WE BUILD & OPERATE"
              title="Unified digital systems, operating in one rhythm"
              description="Corallo Digital builds and operates domain-specific digital systems through a shared execution framework. Product, engineering, and analytics align at the system layer so each product evolves with clarity and accountability."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {differentiators.map((item) => (
                <Card
                  key={item.title}
                  tone="muted"
                  elevated
                  className="relative overflow-hidden p-6"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
                    {item.eyebrow}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-secondary">{item.copy}</p>
                </Card>
              ))}
              <EcosystemCard />
            </div>
          </Reveal>
          <Reveal className="relative rounded-[3rem] border border-[var(--color-border)] bg-gradient-to-br from-white via-surface to-rose-50/70 p-10 shadow-strong">
            <div className="space-y-6 text-secondary">
              <h3 className="font-heading text-2xl text-primary">
                Every system starts with shared structure and clear boundaries.
              </h3>
              <p>
                We define domain scope, shared infrastructure, and integration
                rules before new systems are built. This keeps each product
                coherent within the broader ecosystem.
              </p>
              <ul className="space-y-3 text-sm">
                <li>• Domain and system boundary definition</li>
                <li>• Shared data and interface standards</li>
                <li>• Release rhythm and operating clarity</li>
              </ul>
              <Button href="/services" variant="secondary" className="mt-4">
                Explore the ecosystem
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
      <hr />
      <section className="relative bg-gradient-to-b from-bg via-surface to-bg py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <SectionHeader
              eyebrow="Ecosystem"
              title="A small portfolio of owned systems."
              description="Each product can stand alone, or connect through shared data and operational standards."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesCatalog.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  tone="muted"
                  elevated
                  className="space-y-4 rounded-[2.5rem] p-8"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-surface-elevated text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
                        {service.category}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-primary">
                        {service.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-secondary">{service.oneLiner}</p>
                  <Button href="/services" variant="ghost" size="sm">
                    View details
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

