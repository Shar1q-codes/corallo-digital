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

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
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

          <Reveal>
            <Card
              tone="vibrant"
              elevated
              className="rounded-[3rem] bg-gradient-to-br from-white via-secondary/10 to-accent/10"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
                    The Corallo ecosystem
                  </p>
                  <span className="text-xs uppercase tracking-[0.25em] text-secondary">
                    System map
                  </span>
                </div>
                <div className="h-[240px] w-full">
                  <svg
                    viewBox="0 0 520 260"
                    className="h-full w-full"
                    role="img"
                    aria-label="System diagram with a core module and connected nodes"
                  >
                    <defs>
                      <radialGradient id="coreGlow" cx="50%" cy="50%" r="60%">
                        <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.35" />
                        <stop offset="70%" stopColor="var(--color-accent)" stopOpacity="0.08" />
                        <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
                      </radialGradient>
                      <linearGradient id="nodeFill" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--color-surface)" />
                        <stop offset="100%" stopColor="var(--color-surface-elevated)" />
                      </linearGradient>
                    </defs>

                    <rect
                      x="20"
                      y="20"
                      width="480"
                      height="220"
                      rx="24"
                      fill="transparent"
                      stroke="var(--color-border)"
                      strokeDasharray="6 8"
                      opacity="0.35"
                    />

                    <g opacity="0.25" stroke="var(--color-border)">
                      {[0, 1, 2, 3, 4].map((row) => (
                        <line
                          key={`row-${row}`}
                          x1="50"
                          y1={50 + row * 40}
                          x2="470"
                          y2={50 + row * 40}
                        />
                      ))}
                      {[0, 1, 2, 3, 4, 5, 6].map((col) => (
                        <line
                          key={`col-${col}`}
                          x1={70 + col * 60}
                          y1="40"
                          x2={70 + col * 60}
                          y2="220"
                        />
                      ))}
                    </g>

                    <circle cx="260" cy="130" r="60" fill="url(#coreGlow)" />
                    <rect
                      x="210"
                      y="95"
                      width="100"
                      height="70"
                      rx="18"
                      fill="url(#nodeFill)"
                      stroke="var(--color-border)"
                    />
                    <text
                      x="260"
                      y="138"
                      textAnchor="middle"
                      fontSize="12"
                      fill="var(--color-secondary)"
                      letterSpacing="0.2em"
                    >
                      CORE
                    </text>

                    {[
                      { x: 110, y: 60 },
                      { x: 390, y: 60 },
                      { x: 80, y: 170 },
                      { x: 390, y: 180 },
                      { x: 250, y: 200 }
                    ].map((node) => (
                      <g key={`${node.x}-${node.y}`}>
                        <rect
                          x={node.x}
                          y={node.y}
                          width="70"
                          height="40"
                          rx="12"
                          fill="url(#nodeFill)"
                          stroke="var(--color-border)"
                        />
                        <circle
                          cx={node.x + 12}
                          cy={node.y + 12}
                          r="4"
                          fill="var(--color-accent)"
                          opacity="0.7"
                        />
                      </g>
                    ))}

                    <g stroke="var(--color-border)" strokeWidth="1.2" opacity="0.6">
                      <line x1="210" y1="115" x2="180" y2="80" />
                      <line x1="310" y1="115" x2="390" y2="80" />
                      <line x1="210" y1="145" x2="150" y2="190" />
                      <line x1="310" y1="145" x2="390" y2="200" />
                      <line x1="260" y1="165" x2="285" y2="200" />
                    </g>
                  </svg>
                </div>
                <p className="text-sm text-secondary">
                  A modular system where each product can stand alone or connect
                  through shared data, identity, and workflow.
                </p>
              </div>
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
                What’s next
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
                Explore solutions
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
