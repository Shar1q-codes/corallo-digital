import { Card } from "@/components/card";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { AnimatedHalo } from "@/components/animated-halo";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact - Corallo Digital",
  description: "Start the conversation with Corallo Digital. Share your growth goals and we'll shape a tailored strategy."
});

const info = [
  { label: "Email", value: "hello@corallodigital.com" },
  { label: "Office", value: "Hyderabad, operating globally" },
  { label: "Working hours", value: "Mon - Fri, 9:00am - 7:00pm IST" }
];

export default function ContactPage() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-rose-50 via-white to-sky-50">
      <div className="pointer-events-none absolute inset-x-0 top-[-30%] h-[420px] bg-gradient-primary/25 blur-3xl" />
      <div className="container relative mx-auto px-6 pb-28 pt-32 lg:px-8 lg:pb-36 lg:pt-40">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionHeader
            eyebrow="Contact"
            title="Let's shape your next growth horizon"
            description="Tell us about your audience, velocity targets, and the biggest bottlenecks today. We'll respond within one business day with a working session agenda."
            align="center"
          />
        </Reveal>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal className="rounded-[2.75rem] border border-[var(--color-border)] bg-white/95 p-10 shadow-strong">
            <ContactForm />
          </Reveal>

          <div className="relative">
            <AnimatedHalo className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-secondary/20 via-accent/15 to-primary/20 blur-3xl" />
            <Card
              tone="vibrant"
              elevated
              className="relative space-y-6 rounded-[3rem] bg-gradient-to-br from-white via-rose-50 to-amber-100/80 p-12"
            >
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">What happens next</p>
                <h3 className="text-2xl font-semibold text-primary">
                  A 45-minute working session focused on clarity, prioritization, and next actions.
                </h3>
                <p className="text-sm text-secondary">
                  We'll bring an initial perspective on your funnel, highlight quick wins, and sketch a roadmap aligned to experimentation velocity and revenue KPIs.
                </p>
              </div>

              <div className="grid gap-6 rounded-3xl border border-white/80 bg-white/80 p-8 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
                  Conversation touchpoints
                </p>
                <ul className="space-y-4 text-sm text-secondary">
                  <li>- Growth audit review: traffic, conversion, retention, and creative performance.</li>
                  <li>- Experiment backlog prioritization: align quick wins versus horizon bets.</li>
                  <li>- Engagement models: embedded pods, modular retainers, or advisory support.</li>
                </ul>
              </div>

              <div className="grid gap-4 text-sm text-secondary">
                {info.map((item) => (
                  <div key={item.label} className="flex items-start justify-between gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
                      {item.label}
                    </span>
                    <span className="text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

