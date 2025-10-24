import Image from "next/image";

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

const team = [
  {
    name: "Avery Johnson",
    role: "Founder & Chief Strategist",
    bio: "Leads integrated growth strategy with 12+ years scaling SaaS and ecommerce brands.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Jordan Smith",
    role: "Director of Performance Media",
    bio: "Owns media mix modeling, experimentation, and budget governance across platforms.",
    image: "https://images.unsplash.com/photo-1551836022-b069fceaf158?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Elena Park",
    role: "Head of Lifecycle & CRM",
    bio: "Designs lifecycle journeys and revenue operations that retain and delight customers.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80"
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
            <h3 className="text-lg font-semibold text-primary dark:text-white">From specialist freelancers to integrated studio</h3>
            <p className="text-base text-slate-600 dark:text-slate-300">
              After years of leading in-house growth teams, we saw how fragmented vendor relationships slowed momentum. Corallo Digital launched in 2018 with a simple mission: give founders and marketing leaders a single accountable partner to orchestrate full-funnel growth. Today, our team spans strategists, media buyers, creatives, analysts, and marketing technologists who build resilient growth engines together.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-300">
              We believe high-performing marketing blends qualitative insight with quantitative rigor. That means structured experimentation, live dashboards, and tight feedback loops with product and revenue teams. We celebrate curiosity, candor, and creative bravery.
            </p>
          </Card>
        </Reveal>
        <Reveal>
          <Card variant="default" className="space-y-4 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-900">
            <h3 className="text-lg font-semibold text-primary dark:text-white">By the numbers</h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li><strong className="text-primary dark:text-white">25</strong> specialists spanning strategy, creative, and analytics</li>
              <li><strong className="text-primary dark:text-white">18</strong> global markets launched in the last 24 months</li>
              <li><strong className="text-primary dark:text-white">8</strong> average experiments shipped per month per client</li>
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

      <Reveal className="mt-16">
        <SectionHeader eyebrow="Team" title="Leadership" />
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {team.map((member) => (
            <Card key={member.name} variant="outline" className="space-y-4">
              <div className="relative h-56 overflow-hidden rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-semibold text-primary dark:text-white">{member.name}</h4>
                <p className="text-sm text-accent">{member.role}</p>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{member.bio}</p>
            </Card>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
