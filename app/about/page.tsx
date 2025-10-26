import { Card } from "@/components/card";
import { SectionHeader } from "@/components/section-header";
import { createMetadata } from "@/lib/seo";
import { Reveal } from "@/components/reveal";

export const metadata = createMetadata({
  title: "About - Corallo Digital",
  description: "Learn about Corallo Digital's mission, team, and approach to building modern marketing engines."
});

const values = [
  {
    title: "Strategy first",
    description: "Every tactic ladders up to clear KPIs. We build systems, not one-off campaigns."
  },
  {
    title: "Creative excellence",
    description: "Creative and content are validated with data without losing storytelling craft."
  },
  {
    title: "Transparent collaboration",
    description: "Embedded standups, shared dashboards, and rapid iteration keep us in lockstep."
  }
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-24 lg:px-8">
      <Reveal>
        <SectionHeader
          eyebrow="Our story"
          title="An extension of your growth, product, and revenue teams"
          description="Corallo Digital was founded to give ambitious teams a single partner for strategy, creative, and analytics. We operate like an embedded squad that plugs into your roadmap."
        />
      </Reveal>
      <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <Card variant="outline" className="space-y-6">
            <h3 className="text-lg font-semibold text-primary dark:text-white">From launch plan to embedded partner</h3>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Corallo Digital is a newly launched studio created to give founders and marketing leaders an integrated partner
              across strategy, creative, and analytics. We are assembling a core collective of strategists, media operators,
              and technologists who co-build growth engines alongside your team from day one.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-300">
              We believe high-performing marketing blends qualitative insight with quantitative rigor. That means structured
              experimentation, live dashboards, and tight feedback loops with product and revenue teams. We celebrate curiosity,
              candor, and creative bravery.
            </p>
          </Card>
        </Reveal>
        <Reveal>
          <Card variant="default" className="space-y-4 bg-gradient-to-b from-slate-900 to-slate-900">
            <h3 className="text-lg font-semibold text-white">How we partner</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>Embedded operating rhythm that mirrors your internal standups, retros, and planning cadences.</li>
              <li>Cross-functional pod covering strategy, creative, media, and data without bolting on extra vendors.</li>
              <li>Regular reviews focused on learnings, resourcing, and the next most impactful experiments.</li>
            </ul>
          </Card>
        </Reveal>
      </div>

      <Reveal className="mt-16">
        <SectionHeader eyebrow="Values" title="How we show up" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title} variant="outline" className="space-y-3">
              <h4 className="text-lg font-semibold text-primary dark:text-white">{value.title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">{value.description}</p>
            </Card>
          ))}
        </div>
      </Reveal>

    </div>
  );
}
