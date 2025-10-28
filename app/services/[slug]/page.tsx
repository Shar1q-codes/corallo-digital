import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { SectionHeader } from "@/components/section-header";
import { ServicePanels } from "@/components/service-panels";
import { Reveal } from "@/components/reveal";
import { createMetadata } from "@/lib/seo";
import { getAllServices, getServiceBySlug } from "@/lib/content";

interface ServicePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const services = await getAllServices();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const service = await getServiceBySlug(params.slug);
  if (!service) {
    return createMetadata({
      title: "Service not found",
      description: "The requested service could not be located."
    });
  }

  return createMetadata({
    title: `${service.title} - Corallo Digital`,
    description: service.summary,
    url: `https://corallo-digital.example.com/services/${service.slug}`
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const service = await getServiceBySlug(params.slug);

  if (!service) return notFound();

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-rose-50 via-white to-sky-50 text-[color:var(--text-primary)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/15 blur-3xl" />
        <div className="absolute bottom-[-25%] right-[-15%] h-[460px] w-[460px] rounded-full bg-gradient-to-br from-amber-200/40 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-32 pt-28 sm:px-10 lg:px-12 lg:pb-40 lg:pt-36">
        <Reveal className="space-y-10">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title }
            ]}
          />
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-8">
              <SectionHeader
                eyebrow="Services"
                title={service.title}
                description={service.summary}
              />
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="marketing" className="shadow-glow">
                  Book a discovery call
                </Button>
                <Button href="/services" variant="outline">
                  View all services
                </Button>
              </div>
            </div>
            <Card
              tone="vibrant"
              elevated
              className="space-y-4 rounded-[2rem] bg-gradient-to-br from-white via-rose-50 to-amber-100/70 p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
                Engagement snapshot
              </p>
              <h3 className="text-2xl font-semibold text-primary">
                What you can expect in the first 90 days
              </h3>
              <ul className="space-y-3 text-sm text-secondary">
                {service.bullets.slice(0, 3).map((bullet) => (
                  <li key={bullet}>- {bullet}</li>
                ))}
              </ul>
              <Button href="/contact" variant="marketing" className="w-full justify-center shadow-glow">
                Request scope outline
              </Button>
            </Card>
          </div>
        </Reveal>

        <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="grid gap-16 lg:grid-cols-[1.45fr_0.55fr] lg:items-start">
          <Reveal className="space-y-12">
            <article className="prose prose-lg max-w-none text-[color:var(--text-primary)] prose-headings:text-primary prose-p:text-secondary prose-li:text-secondary">
              <div dangerouslySetInnerHTML={{ __html: service.content }} />
            </article>

            <section className="rounded-[2.5rem] border border-[var(--color-border)] bg-white/90 px-10 py-12 shadow-strong">
              <h3 className="text-3xl font-semibold text-primary">Engagement deliverables</h3>
              <p className="mt-3 text-base text-secondary">
                A modular blueprint designed to flex with your in-house capabilities. We co-own channel velocity, creative intelligence, and measurement.
              </p>
              <ul className="mt-8 grid gap-4 text-base text-secondary md:grid-cols-2">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-gradient-to-br from-primary/60 via-secondary/50 to-accent/50 shadow-glow" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="relative overflow-hidden rounded-[2.5rem] border border-[var(--color-border)] bg-gradient-to-br from-white via-sky-50 to-rose-50/70 px-10 py-12 shadow-strong">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10 opacity-70" />
              <div className="relative space-y-6">
                <h3 className="text-2xl font-semibold text-primary">Program timeline</h3>
                <div className="space-y-6">
                  {[
                    {
                      phase: "Weeks 1-3",
                      focus: "Discovery audit, working session series, and analytics instrumentation alignment."
                    },
                    {
                      phase: "Weeks 4-8",
                      focus: "Launch experimentation pods, activate creative cycles, and stand up channel plays."
                    },
                    {
                      phase: "Weeks 9-12",
                      focus: "Scale winning motions, forecast impact, and codify dashboards and rituals."
                    }
                  ].map((item) => (
                    <div
                      key={item.phase}
                      className="rounded-2xl border border-white/70 bg-white/80 p-5 text-sm text-secondary shadow-soft backdrop-blur"
                    >
                      <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/70">
                        {item.phase}
                      </h4>
                      <p className="mt-2">{item.focus}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>

          <div className="space-y-8">
            <ServicePanels faq={service.faq} />
            <Card tone="muted" className="rounded-[2.25rem] border border-[var(--color-border)] bg-surface/90 p-8 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
                Need a preview?
              </p>
              <h4 className="mt-3 text-lg font-semibold text-primary">
                Request our methodology primer and case study bundle.
              </h4>
              <p className="mt-3 text-sm text-secondary">
                We will share relevant work samples, KPI snapshots, and how we structure weekly working sessions.
              </p>
              <Button href="/work" variant="outline" className="mt-6 w-full justify-center">
                Download program primer
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

