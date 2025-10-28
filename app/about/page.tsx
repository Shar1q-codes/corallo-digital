import { AnimatedCounter } from "@/components/animated-counter";
import { Card } from "@/components/card";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About - Corallo Digital",
  description: "Learn about Corallo Digital's mission, team, and approach to building modern marketing engines."
});

const timeline = [
  {
    year: "2019",
    title: "Seed of the studio",
    copy:
      "Our founders led growth at venture-backed SaaS companies, experimenting with blended acquisition models and lifecycle systems.",
    highlight: "Testing grounds"
  },
  {
    year: "2021",
    title: "Embedded operator network",
    copy:
      "We built a collective of strategists, data scientists, media buyers, and creatives to operate as unified pods inside scale-ups.",
    highlight: "Collective assembled"
  },
  {
    year: "2023",
    title: "Corallo Digital launches",
    copy:
      "After shipping more than twenty programs, we launched Corallo to replace fragmented agency relationships with a single growth partner.",
    highlight: "Studio debut"
  },
  {
    year: "Today",
    title: "Full-funnel marketing engines",
    copy:
      "We plug into go-to-market teams to design demand narratives, accelerate experimentation, and operationalize measurement across the funnel.",
    highlight: "Continuous momentum"
  }
];

const testimonials = [
  {
    quote:
      "Corallo brought the creative rigor and analytical depth we had been missing. In 90 days we unlocked a clear pipeline engine and a confident creative strategy.",
    name: "Priya Sharma",
    role: "VP Growth, Northwind"
  },
  {
    quote:
      "Their embedded model meant our marketing, product, and analytics teams stood up a shared roadmap. We moved from sporadic experiments to a disciplined testing culture.",
    name: "Leo Carter",
    role: "Head of Marketing, HarborTech"
  },
  {
    quote:
      "The Corallo team helped our lifecycle squad reimagine onboarding and retention. Performance metrics improved, and our decision-making rhythm became far clearer.",
    name: "Maya Ortiz",
    role: "Lifecycle Lead, Pulse Apparel"
  }
];

export default function AboutPage() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-rose-50 via-white to-sky-50">
      <div className="pointer-events-none absolute inset-x-0 top-[-35%] h-[420px] bg-gradient-primary/25 blur-3xl" />
      <div className="container relative mx-auto px-6 pb-28 pt-32 lg:px-8 lg:pb-36 lg:pt-40">
        <Reveal>
          <SectionHeader
            eyebrow="Our story"
            title="We build growth marketing engines that plug directly into your operating system"
            description="Corallo Digital was founded by operators who believe brand, performance, and analytics should move in one rhythm. We integrate with your rituals, your data stack, and your creative voice."
          />
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <Reveal className="space-y-6">
            <Card tone="muted" elevated className="space-y-6 p-10">
              <h3 className="text-2xl font-semibold text-primary">
                Embedded collaboration, not agency hand-offs
              </h3>
              <p className="text-base text-secondary">
                We operate as an extension of your team, adapting to the rituals you already run. Weekly working sessions, transparent dashboards, and shared accountability keep experiments, creative thinking, and strategy shifts aligned.
              </p>
              <p className="text-base text-secondary">
                You gain a collective of channel strategists, paid and lifecycle operators, analytics engineers, and creative storytellers who work as one squad. Together, we transform marketing roadmaps into momentum machines.
              </p>
            </Card>
          </Reveal>
          <Reveal>
            <Card
              tone="vibrant"
              elevated
              className="space-y-6 rounded-[2.5rem] bg-gradient-to-br from-white via-secondary/10 to-accent/10 p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">Impact snapshot</p>
              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  { value: 24, suffix: "+", label: "growth programs launched" },
                  { value: 18, suffix: "%", label: "average lift in qualified pipeline" },
                  { value: 12, suffix: "wk", label: "average time to experiment velocity" }
                ].map((item) => (
                  <div key={item.label} className="space-y-2">
                    <AnimatedCounter value={item.value} suffix={item.suffix} className="block text-3xl font-semibold text-primary" />
                    <p className="text-xs uppercase tracking-[0.25em] text-secondary">{item.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-secondary">
                Our focus: collaborative measurement frameworks, creative intelligence loops, and channel orchestration that drives compounding learnings.
              </p>
            </Card>
          </Reveal>
        </div>

        <div className="mt-20 overflow-hidden rounded-[3rem] border border-[var(--color-border)] bg-white/90 p-10 shadow-strong">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">Timeline</p>
            <span className="text-sm text-secondary">From operator collective to full-service growth studio</span>
          </div>
          <div className="mt-10 overflow-x-auto pb-4">
            <div className="flex min-w-[800px] gap-10">
              {timeline.map((item) => (
                <Reveal
                  key={item.year}
                  className="relative flex min-w-[260px] flex-col gap-4 rounded-3xl border border-[var(--color-border)] bg-surface/95 p-6 shadow-soft"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">{item.year}</span>
                  <h4 className="text-lg font-semibold text-primary">{item.title}</h4>
                  <p className="text-sm text-secondary">{item.copy}</p>
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">{item.highlight}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal className="mt-20 space-y-10">
          <SectionHeader eyebrow="Testimonials" title="Partners on the journey" />
          <TestimonialsCarousel testimonials={testimonials} />
        </Reveal>
      </div>
    </div>
  );
}

