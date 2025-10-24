import { notFound } from "next/navigation";

import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { SectionHeader } from "@/components/section-header";
import { createMetadata } from "@/lib/seo";
import { getAllServices, getServiceBySlug } from "@/lib/content";
import { Reveal } from "@/components/reveal";

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
    <div className="container mx-auto px-6 py-24 lg:px-8">
      <Reveal>
        <SectionHeader
          eyebrow="Services"
          title={service.title}
          description={service.summary}
        >
          <Button href="/contact">Book a discovery call</Button>
        </SectionHeader>
      </Reveal>
      <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
        <Reveal className="prose prose-slate max-w-none dark:prose-invert">
          <article dangerouslySetInnerHTML={{ __html: service.content }} />
          <section className="mt-12">
            <h3 className="text-2xl font-semibold text-primary dark:text-white">Engagement deliverables</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-300">
              {service.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </section>
        </Reveal>
        <aside className="space-y-6">
          <Reveal>
            <Card variant="outline" className="space-y-4">
              <h3 className="text-lg font-semibold text-primary dark:text-white">Frequently asked</h3>
              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                {service.faq.map((item) => (
                  <details key={item.question} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                    <summary className="cursor-pointer text-sm font-semibold text-primary dark:text-white">
                      {item.question}
                    </summary>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.answer}</p>
                  </details>
                ))}
              </div>
            </Card>
          </Reveal>
          <Reveal>
            <Card variant="default" className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-900">
              <h4 className="text-lg font-semibold text-primary dark:text-white">Need tailored scope?</h4>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                We can customize this engagement based on team structure, budgets, and priority markets.
              </p>
              <Button href="/contact" className="mt-6 w-full justify-center">
                Talk with strategy
              </Button>
            </Card>
          </Reveal>
        </aside>
      </div>
    </div>
  );
}
