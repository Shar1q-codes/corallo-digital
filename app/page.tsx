import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { Hero } from '@/components/hero';
import { Reveal } from '@/components/reveal';
import { SectionHeader } from '@/components/section-header';
import { ServiceCard } from '@/components/service-card';
import { EcosystemVisual } from '@/components/EcosystemVisual';

import { createMetadata } from '@/lib/seo';
import { getAllServices } from '@/lib/content';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const metadata = createMetadata({
  title: 'Corallo Digital - Growth marketing that compounds',
  description:
    'Full-funnel digital marketing for ambitious brands. Explore our services across SEO, paid media, lifecycle, and analytics.',
});

export default async function HomePage() {
  const services = await getAllServices();

  const differentiators = [
    {
      eyebrow: 'EXECUTION FRAMEWORK',
      title: 'Product-centric execution',
      copy: 'Each product is built and operated as a first-class system, using a shared execution framework that aligns engineering, data, and operations without hand-offs.',
    },
    {
      eyebrow: 'Measurement',
      title: 'Built-in observability',
      copy: 'Every product includes native measurement, defined success metrics, and continuous visibility—so performance, reliability, and impact are always traceable.',
    },
    {
      eyebrow: 'EXPERIENCE DESIGN',
      title: 'Domain-driven experiences',
      copy: 'Interfaces and workflows are designed around real domain constraints, ensuring each product feels purpose-built, usable, and scalable—not generic.',
    },
  ];

  const featured = services.slice(0, 2);
  const remaining = services.slice(2);

  return (
    <>
      <Hero />

      <section className="container mx-auto px-6 py-14 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal className="space-y-6">
            <SectionHeader
              eyebrow="HOW WE BUILD & OPERATE"
              title="Unified digital systems, operating in one rhythm"
              description="Corallo Digital eliminates fragmentation by building and operating domain-specific digital products through a shared execution framework. Strategy, engineering, and analytics are integrated at the system level—ensuring every product evolves with clarity, accountability, and measurable impact."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {' '}
              {differentiators.map((item) => (
                <Card
                  key={item.title}
                  tone="muted"
                  elevated
                  className="relative overflow-hidden p-6"
                >
                  {' '}
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
                    {' '}
                    {item.eyebrow}{' '}
                  </span>{' '}
                  <h3 className="mt-3 text-lg font-semibold text-primary">
                    {' '}
                    {item.title}{' '}
                  </h3>{' '}
                  <p className="mt-3 text-sm text-secondary">
                    {item.copy}
                  </p>{' '}
                </Card>
              ))}
              <Card
                tone="muted"
                elevated
                className="relative overflow-hidden p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
                  ECOSYSTEM LAYER
                </span>

                <div className="mt-4">
                  <EcosystemVisual />
                </div>
              </Card>{' '}
            </div>
          </Reveal>
          <Reveal className="relative rounded-[3rem] border border-[var(--color-border)] bg-gradient-to-br from-white via-surface to-rose-50/70 p-10 shadow-strong">
            <div className="space-y-6 text-secondary">
              <h3 className="font-heading text-2xl text-primary">
                Every engagement begins with structured service alignment.
              </h3>
              <p>
                We align domain requirements, system boundaries, and success
                metrics before execution begins. This ensures each service
                integrates cleanly into the broader Corallo ecosystem and
                evolves with clarity, accountability, and measurable impact.
              </p>
              <ul className="space-y-3 text-sm">
                <li>• Domain and system boundary definition</li>
                <li>• Scope and execution roadmap</li>
                <li>• Measurement and integration standards</li>
              </ul>
              <Button
                href="/contact"
                variant="marketing"
                className="mt-4 shadow-glow"
              >
                Align on execution
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
      <hr />
      <section
        id="services"
        className="relative bg-gradient-to-b from-bg via-surface to-bg py-24"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <SectionHeader
              eyebrow="Services"
              title="Modular services that flex with your funnel"
              description="From channel ownership to advisory pods, our services are built to scale with your in-house capabilities. Every service can stand alone—or slot into an operator-led program."
            />
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-12">
            {featured.map((service, index) => (
              <div
                key={service.slug}
                className={cn(
                  'col-span-full overflow-hidden rounded-[2.5rem] p-[1px] transition-transform duration-500 ease-out hover:-translate-y-3 hover:shadow-strong',
                  index === 0 ? 'lg:col-span-7' : 'lg:col-span-5',
                  index === 0
                    ? 'bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/30'
                    : 'bg-gradient-to-br from-secondary/30 via-accent/30 to-primary/35'
                )}
              >
                <div className="h-full rounded-[2.47rem] bg-white/90 p-10 shadow-strong">
                  <ServiceCard
                    service={service}
                    layout="minimal"
                    accent={index === 0 ? 'warm' : 'violet'}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {remaining.map((service, index) => (
              <div
                key={service.slug}
                className="group relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-surface/90 p-8 shadow-soft transition-transform duration-500 ease-out hover:-translate-y-2 hover:rotate-[0.35deg] hover:shadow-strong"
              >
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div
                    className={cn(
                      'absolute inset-0 bg-gradient-to-br opacity-[0.65]',
                      index % 3 === 0
                        ? 'from-primary/20 via-secondary/15 to-accent/20'
                        : index % 3 === 1
                          ? 'from-secondary/20 via-primary/15 to-accent/15'
                          : 'from-accent/20 via-secondary/15 to-primary/20'
                    )}
                  />
                </div>
                <div className="relative">
                  <ServiceCard
                    service={service}
                    layout="minimal"
                    accent={
                      index % 3 === 0
                        ? 'warm'
                        : index % 3 === 1
                          ? 'violet'
                          : 'mint'
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="container mx-auto px-6 py-28 lg:px-8">
        <Reveal className="rounded-[3rem] border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-surface)] via-[var(--color-surface-elevated)] to-[var(--color-bg)] px-10 py-16 shadow-strong lg:px-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
                EXECUTION BLUEPRINT
              </p>
              <h3 className="text-3xl font-semibold text-primary">
                Clarity, execution, and system maturity—by design.
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: 'Discover & align',
                    copy: 'Rapid audit, growth mapping, and co-authored roadmaps anchored to north-star KPIs.',
                  },
                  {
                    title: 'Launch & iterate',
                    copy: 'Operate agile pods focused on high-leverage experiments with weekly insight loops.',
                  },
                  {
                    title: 'Scale & forecast',
                    copy: 'Build integrated measurement and prediction models to inform creative and media investments.',
                  },
                  {
                    title: 'Enable & transition',
                    copy: 'Upskill your internal team with playbooks, dashboards, and repeatable testing cadence.',
                  },
                ].map((item) => (
                  <Card key={item.title} tone="muted" className="h-full p-6">
                    <h4 className="font-semibold text-primary">{item.title}</h4>
                    <p className="mt-3 text-sm text-secondary">{item.copy}</p>
                  </Card>
                ))}
              </div>
            </div>
            <Card tone="muted" elevated className="space-y-6 p-10">
              <h4 className="text-lg font-semibold text-primary">
                Session agenda
              </h4>
              <ul className="space-y-3 text-sm text-secondary">
                <li>1. Funnel & KPI audit</li>
                <li>2. Channel mix recommendations</li>
                <li>3. Experiment backlog prioritization</li>
                <li>4. Measurement plan alignment</li>
              </ul>
              <Button
                href="/contact"
                variant="marketing"
                className="shadow-glow"
              >
                Reserve a working session
              </Button>
            </Card>
          </div>
        </Reveal>
      </section> */}
    </>
  );
}
