import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { createMetadata } from "@/lib/seo";
import { getAllServices } from "@/lib/content";

export const metadata = createMetadata({
  title: "Corallo Digital - Growth marketing that compounds",
  description:
    "Full-funnel digital marketing for ambitious brands. Explore our services across SEO, paid media, lifecycle, and analytics."
});

export default async function HomePage() {
  const services = await getAllServices();

  const differentiators = [
    {
      title: "Strategy embedded in your team",
      description:
        "We align channel plans with your internal rituals so every launch, sprint, and retro ladders up to shared priorities."
    },
    {
      title: "Experimentation with accountability",
      description:
        "Test roadmaps include goals, owners, and instrumentation - no vanity projections, just clear learning agendas."
    },
    {
      title: "Creative and analytics in one loop",
      description:
        "Design, copy, and measurement collaborate from day one to keep messaging, data, and insights continuously in sync."
    },
    {
      title: "Transparent performance rhythms",
      description:
        "Weekly working sessions focus on what shipped, what we learned, and the next most leveraged moves for your funnel."
    }
  ];

  return (
    <>
      <Hero />

      <section className="container mx-auto px-6 py-24 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Capabilities"
            title="Integrated services built for modern marketing teams"
            description="Every engagement is tailored to your funnel architecture, cross-functional workflows, and growth milestones."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.slug}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container mx-auto px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Differentiators"
              title="What sets Corallo apart"
              description="Operational rigor, deep channel expertise, and a partner mindset keep every experiment aligned with your north-star metrics."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item) => (
              <Reveal key={item.title}>
                <Card variant="outline" className="h-full space-y-3">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-300">{item.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24 lg:px-8">
        <Reveal className="rounded-3xl border border-slate-200 bg-white px-8 py-16 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                Ready to accelerate?
              </p>
              <h3 className="text-3xl font-semibold text-primary dark:text-white">
                Book a growth working session with our strategists.
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Walk away with channel priorities, quick wins, and a roadmap aligned to revenue goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact">Get a Proposal</Button>
                <Button href="/services" variant="secondary">
                  View Services
                </Button>
              </div>
            </div>
            <Card variant="outline" className="bg-slate-50 p-8 dark:bg-slate-800">
              <h4 className="text-lg font-semibold text-primary dark:text-white">Session agenda</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <li>1. Funnel & KPI audit</li>
                <li>2. Channel mix recommendations</li>
                <li>3. Experiment backlog prioritization</li>
                <li>4. Measurement plan alignment</li>
              </ul>
            </Card>
          </div>
        </Reveal>
      </section>
    </>
  );
}
