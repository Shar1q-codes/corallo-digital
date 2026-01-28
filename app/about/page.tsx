import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About - Corallo Digital",
  description:
    "Corallo Digital builds coherent digital systems across domains, focused on structure, integration, and durable execution.",
});

const principles = [
  {
    title: "Structure before noise",
    description:
      "We prioritize shared language, clear interfaces, and traceable decisions so teams can build with confidence."
  },
  {
    title: "Systems over fragments",
    description:
      "Architecture, data, and workflows come first. Surfaces follow the system, not the other way around."
  },
  {
    title: "Durable execution",
    description:
      "We ship in calm, consistent steps and keep the system legible as it grows and adapts."
  }
];

const capabilities = [
  {
    title: "Foundational platforms",
    description:
      "Shared cores for identity, data, and governance that keep multiple products aligned."
  },
  {
    title: "Operational tools",
    description:
      "Analytics, review, and workflow tooling that make complex systems easier to run."
  },
  {
    title: "Domain products",
    description:
      "Focused solutions across domains such as talent, finance, and reporting, designed to connect."
  }
];

export default function AboutPage() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-rose-50 via-white to-sky-50">
      <div className="pointer-events-none absolute inset-x-0 top-[-35%] h-[420px] bg-gradient-primary/25 blur-3xl" />
      <section className="container relative mx-auto px-6 py-14 lg:px-8 lg:py-20">
        <Reveal>
          <SectionHeader
            eyebrow="Our story"
            title="We build digital solutions as coherent systems, not isolated products."
            description="Corallo Digital exists because modern software is often assembled as fragments. We build systems that hold together across data, design, and execution, so products can grow without losing clarity."
          />
        </Reveal>

        <div className="mt-16">
          <Reveal className="space-y-10">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
                Why we exist
              </p>
              <p className="text-lg text-secondary">
                We work across domains, not a single industry, because the need
                is consistent: teams need digital systems that are integrated,
                legible, and built to endure.
              </p>
              <p className="text-base text-secondary">
                Our approach centers on structure, integration, and calm
                delivery. We design ecosystems that stay coherent as new tools,
                products, and capabilities are added.
              </p>
            </div>

            <Card tone="muted" elevated className="space-y-6 rounded-[2.5rem]">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
                  How we build
                </p>
                <h3 className="text-2xl font-semibold text-primary">
                  A system-first practice with clear operating principles.
                </h3>
              </div>
              <ul className="space-y-4 text-base text-secondary">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent/70" />
                  Start with shared infrastructure and data models.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent/70" />
                  Make every decision traceable to the system.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent/70" />
                  Keep execution calm, iterative, and legible.
                </li>
              </ul>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 py-14 lg:px-8">
        <Reveal className="space-y-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
                How we build
              </p>
              <h2 className="text-3xl font-semibold text-primary">
                Operating principles that keep the system coherent.
              </h2>
            </div>
            <p className="max-w-xl text-base text-secondary">
              We work in a way that keeps teams aligned, decisions visible, and
              systems resilient.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((item) => (
              <Card key={item.title} tone="muted" elevated className="rounded-[2.5rem]">
                <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm text-secondary">{item.description}</p>
              </Card>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-14 space-y-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
                What we build
              </p>
              <h2 className="text-3xl font-semibold text-primary">
                Capability categories across the Corallo portfolio.
              </h2>
            </div>
            <p className="max-w-xl text-base text-secondary">
              Each capability can be delivered independently or connected into a
              broader ecosystem.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {capabilities.map((item) => (
              <Card key={item.title} tone="vibrant" elevated className="rounded-[2.5rem]">
                <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm text-secondary">{item.description}</p>
              </Card>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="container mx-auto px-6 pb-20 pt-8 lg:px-8 lg:pb-28">
        <Reveal>
          <Card
            tone="vibrant"
            elevated
            className="flex flex-col gap-8 rounded-[3rem] bg-gradient-to-br from-white via-secondary/10 to-accent/10 lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
                What's next
              </p>
              <h2 className="text-3xl font-semibold text-primary">
                We are expanding the ecosystem with new domain products and
                shared infrastructure.
              </h2>
              <p className="max-w-2xl text-base text-secondary">
                Our roadmap focuses on deeper integration, clearer operational
                tooling, and a steady cadence of releases that keep every part
                of the system aligned.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/services" variant="secondary" size="lg">
                Explore ecosystem
              </Button>
              <Button href="/contact" variant="primary" size="lg">
                Contact Corallo
              </Button>
            </div>
          </Card>
        </Reveal>
      </section>
    </div>
  );
}
