import { Card } from "@/components/card";
import { ContactForm } from "@/components/contact-form";
import { SectionHeader } from "@/components/section-header";
import { createMetadata } from "@/lib/seo";
import { Reveal } from "@/components/reveal";

export const metadata = createMetadata({
  title: "Contact - Corallo Digital",
  description: "Start the conversation with Corallo Digital. Share your growth goals and we''ll shape a tailored strategy."
});

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-24 lg:px-8">
      <Reveal>
        <SectionHeader
          eyebrow="Contact"
          title="Let''s map your next growth frontier"
          description="Tell us about your audience, key goals, and timelines. We''ll respond within one business day with next steps."
          align="center"
        />
      </Reveal>
      <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <Card variant="outline">
            <ContactForm />
          </Card>
        </Reveal>
        <Reveal>
          <Card variant="default" className="space-y-6 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-900">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-primary dark:text-white">What to expect</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                After you submit, our strategists review current momentum, gaps, and opportunities. We'll schedule a 45-minute working session to share hypotheses and potential quick wins.
              </p>
            </div>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <div>
                <h4 className="font-semibold text-primary dark:text-white">Email</h4>
                <p>hello@corallodigital.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary dark:text-white">Office</h4>
                <p>902 Market Street, San Francisco, CA</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary dark:text-white">Office hours</h4>
                <p>Mon - Fri, 9:00am - 7:00pm PT</p>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </div>
  );
}
