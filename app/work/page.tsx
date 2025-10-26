import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { SectionHeader } from "@/components/section-header";
import { createMetadata } from "@/lib/seo";
import { Reveal } from "@/components/reveal";

export const metadata = createMetadata({
  title: "Case Studies - Corallo Digital",
  description: "We're getting ready to share new collaborations soon."
});

export default function WorkPage() {
  return (
    <div className="container mx-auto px-6 py-24 lg:px-8">
      <Reveal>
        <SectionHeader
          eyebrow="Portfolio"
          title="Case studies coming soon"
          description="We're a new studio focused on building our first slate of engagements. Check back soon for fresh work."
        />
      </Reveal>
      <Reveal className="mt-16">
        <Card variant="outline" className="space-y-6">
          <p className="text-base text-slate-300">
            We're heads down building launch programs right now, so we don't have public case studies just yet. If you'd
            like to see how we can support your next chapter, let's start with a working session.
          </p>
          <Button href="/contact" className="w-full justify-center sm:w-auto">
            Plan a working session
          </Button>
        </Card>
      </Reveal>
    </div>
  );
}
