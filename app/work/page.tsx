import { Card } from "@/components/card";
import { SectionHeader } from "@/components/section-header";
import { createMetadata } from "@/lib/seo";
import { Reveal } from "@/components/reveal";

export const metadata = createMetadata({
  title: "Updates - Corallo Digital",
  description: "Ecosystem updates and product notes will appear here." 
});

export default function WorkPage() {
  return (
    <div className="container mx-auto px-6 py-24 lg:px-8">
      <Reveal>
        <SectionHeader
          eyebrow="Updates"
          title="Ecosystem updates coming soon"
          description="This space will highlight product notes and system releases as the portfolio grows."
        />
      </Reveal>
      <Reveal className="mt-16">
        <Card tone="muted" elevated className="space-y-6">
          <p className="text-base text-secondary">
            We are documenting releases and internal milestones now. Public
            updates will appear here as each system moves forward.
          </p>
        </Card>
      </Reveal>
    </div>
  );
}
